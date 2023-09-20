// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetImagePipelineRequest, GetImagePipelineResponse } from "../models/models_0";
import { de_GetImagePipelineCommand, se_GetImagePipelineCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetImagePipelineCommand}.
 */
export interface GetImagePipelineCommandInput extends GetImagePipelineRequest {}
/**
 * @public
 *
 * The output of {@link GetImagePipelineCommand}.
 */
export interface GetImagePipelineCommandOutput extends GetImagePipelineResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets an image pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImagePipelineCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImagePipelineCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // GetImagePipelineRequest
 *   imagePipelineArn: "STRING_VALUE", // required
 * };
 * const command = new GetImagePipelineCommand(input);
 * const response = await client.send(command);
 * // { // GetImagePipelineResponse
 * //   requestId: "STRING_VALUE",
 * //   imagePipeline: { // ImagePipeline
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     platform: "Windows" || "Linux",
 * //     enhancedImageMetadataEnabled: true || false,
 * //     imageRecipeArn: "STRING_VALUE",
 * //     containerRecipeArn: "STRING_VALUE",
 * //     infrastructureConfigurationArn: "STRING_VALUE",
 * //     distributionConfigurationArn: "STRING_VALUE",
 * //     imageTestsConfiguration: { // ImageTestsConfiguration
 * //       imageTestsEnabled: true || false,
 * //       timeoutMinutes: Number("int"),
 * //     },
 * //     schedule: { // Schedule
 * //       scheduleExpression: "STRING_VALUE",
 * //       timezone: "STRING_VALUE",
 * //       pipelineExecutionStartCondition: "EXPRESSION_MATCH_ONLY" || "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
 * //     },
 * //     status: "DISABLED" || "ENABLED",
 * //     dateCreated: "STRING_VALUE",
 * //     dateUpdated: "STRING_VALUE",
 * //     dateLastRun: "STRING_VALUE",
 * //     dateNextRun: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     imageScanningConfiguration: { // ImageScanningConfiguration
 * //       imageScanningEnabled: true || false,
 * //       ecrConfiguration: { // EcrConfiguration
 * //         repositoryName: "STRING_VALUE",
 * //         containerTags: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetImagePipelineCommandInput - {@link GetImagePipelineCommandInput}
 * @returns {@link GetImagePipelineCommandOutput}
 * @see {@link GetImagePipelineCommandInput} for command's `input` shape.
 * @see {@link GetImagePipelineCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 */
export class GetImagePipelineCommand extends $Command<
  GetImagePipelineCommandInput,
  GetImagePipelineCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetImagePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetImagePipelineCommandInput, GetImagePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetImagePipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "GetImagePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "imagebuilder",
        operation: "GetImagePipeline",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetImagePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetImagePipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetImagePipelineCommandOutput> {
    return de_GetImagePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
