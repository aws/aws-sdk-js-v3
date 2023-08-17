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
} from "@smithy/types";

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetImageRecipeRequest, GetImageRecipeResponse } from "../models/models_0";
import { de_GetImageRecipeCommand, se_GetImageRecipeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetImageRecipeCommand}.
 */
export interface GetImageRecipeCommandInput extends GetImageRecipeRequest {}
/**
 * @public
 *
 * The output of {@link GetImageRecipeCommand}.
 */
export interface GetImageRecipeCommandOutput extends GetImageRecipeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets an image recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImageRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImageRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // GetImageRecipeRequest
 *   imageRecipeArn: "STRING_VALUE", // required
 * };
 * const command = new GetImageRecipeCommand(input);
 * const response = await client.send(command);
 * // { // GetImageRecipeResponse
 * //   requestId: "STRING_VALUE",
 * //   imageRecipe: { // ImageRecipe
 * //     arn: "STRING_VALUE",
 * //     type: "AMI" || "DOCKER",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     platform: "Windows" || "Linux",
 * //     owner: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     components: [ // ComponentConfigurationList
 * //       { // ComponentConfiguration
 * //         componentArn: "STRING_VALUE", // required
 * //         parameters: [ // ComponentParameterList
 * //           { // ComponentParameter
 * //             name: "STRING_VALUE", // required
 * //             value: [ // ComponentParameterValueList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     parentImage: "STRING_VALUE",
 * //     blockDeviceMappings: [ // InstanceBlockDeviceMappings
 * //       { // InstanceBlockDeviceMapping
 * //         deviceName: "STRING_VALUE",
 * //         ebs: { // EbsInstanceBlockDeviceSpecification
 * //           encrypted: true || false,
 * //           deleteOnTermination: true || false,
 * //           iops: Number("int"),
 * //           kmsKeyId: "STRING_VALUE",
 * //           snapshotId: "STRING_VALUE",
 * //           volumeSize: Number("int"),
 * //           volumeType: "standard" || "io1" || "io2" || "gp2" || "gp3" || "sc1" || "st1",
 * //           throughput: Number("int"),
 * //         },
 * //         virtualName: "STRING_VALUE",
 * //         noDevice: "STRING_VALUE",
 * //       },
 * //     ],
 * //     dateCreated: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     workingDirectory: "STRING_VALUE",
 * //     additionalInstanceConfiguration: { // AdditionalInstanceConfiguration
 * //       systemsManagerAgent: { // SystemsManagerAgent
 * //         uninstallAfterBuild: true || false,
 * //       },
 * //       userDataOverride: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetImageRecipeCommandInput - {@link GetImageRecipeCommandInput}
 * @returns {@link GetImageRecipeCommandOutput}
 * @see {@link GetImageRecipeCommandInput} for command's `input` shape.
 * @see {@link GetImageRecipeCommandOutput} for command's `response` shape.
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
export class GetImageRecipeCommand extends $Command<
  GetImageRecipeCommandInput,
  GetImageRecipeCommandOutput,
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
  constructor(readonly input: GetImageRecipeCommandInput) {
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
  ): Handler<GetImageRecipeCommandInput, GetImageRecipeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetImageRecipeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "GetImageRecipeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: GetImageRecipeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetImageRecipeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetImageRecipeCommandOutput> {
    return de_GetImageRecipeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
