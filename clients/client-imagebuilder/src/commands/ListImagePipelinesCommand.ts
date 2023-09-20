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
import { ListImagePipelinesRequest, ListImagePipelinesResponse } from "../models/models_0";
import { de_ListImagePipelinesCommand, se_ListImagePipelinesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListImagePipelinesCommand}.
 */
export interface ListImagePipelinesCommandInput extends ListImagePipelinesRequest {}
/**
 * @public
 *
 * The output of {@link ListImagePipelinesCommand}.
 */
export interface ListImagePipelinesCommandOutput extends ListImagePipelinesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of image pipelines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImagePipelinesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImagePipelinesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // ListImagePipelinesRequest
 *   filters: [ // FilterList
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListImagePipelinesCommand(input);
 * const response = await client.send(command);
 * // { // ListImagePipelinesResponse
 * //   requestId: "STRING_VALUE",
 * //   imagePipelineList: [ // ImagePipelineList
 * //     { // ImagePipeline
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       platform: "Windows" || "Linux",
 * //       enhancedImageMetadataEnabled: true || false,
 * //       imageRecipeArn: "STRING_VALUE",
 * //       containerRecipeArn: "STRING_VALUE",
 * //       infrastructureConfigurationArn: "STRING_VALUE",
 * //       distributionConfigurationArn: "STRING_VALUE",
 * //       imageTestsConfiguration: { // ImageTestsConfiguration
 * //         imageTestsEnabled: true || false,
 * //         timeoutMinutes: Number("int"),
 * //       },
 * //       schedule: { // Schedule
 * //         scheduleExpression: "STRING_VALUE",
 * //         timezone: "STRING_VALUE",
 * //         pipelineExecutionStartCondition: "EXPRESSION_MATCH_ONLY" || "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
 * //       },
 * //       status: "DISABLED" || "ENABLED",
 * //       dateCreated: "STRING_VALUE",
 * //       dateUpdated: "STRING_VALUE",
 * //       dateLastRun: "STRING_VALUE",
 * //       dateNextRun: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       imageScanningConfiguration: { // ImageScanningConfiguration
 * //         imageScanningEnabled: true || false,
 * //         ecrConfiguration: { // EcrConfiguration
 * //           repositoryName: "STRING_VALUE",
 * //           containerTags: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImagePipelinesCommandInput - {@link ListImagePipelinesCommandInput}
 * @returns {@link ListImagePipelinesCommandOutput}
 * @see {@link ListImagePipelinesCommandInput} for command's `input` shape.
 * @see {@link ListImagePipelinesCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
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
export class ListImagePipelinesCommand extends $Command<
  ListImagePipelinesCommandInput,
  ListImagePipelinesCommandOutput,
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
  constructor(readonly input: ListImagePipelinesCommandInput) {
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
  ): Handler<ListImagePipelinesCommandInput, ListImagePipelinesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListImagePipelinesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ListImagePipelinesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "imagebuilder",
        operation: "ListImagePipelines",
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
  private serialize(input: ListImagePipelinesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListImagePipelinesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImagePipelinesCommandOutput> {
    return de_ListImagePipelinesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
