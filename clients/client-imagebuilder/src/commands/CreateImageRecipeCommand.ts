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
import { CreateImageRecipeRequest, CreateImageRecipeResponse } from "../models/models_0";
import { de_CreateImageRecipeCommand, se_CreateImageRecipeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateImageRecipeCommand}.
 */
export interface CreateImageRecipeCommandInput extends CreateImageRecipeRequest {}
/**
 * @public
 *
 * The output of {@link CreateImageRecipeCommand}.
 */
export interface CreateImageRecipeCommandOutput extends CreateImageRecipeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new image recipe. Image recipes define how images are configured, tested,
 * 			and assessed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateImageRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateImageRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // CreateImageRecipeRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   semanticVersion: "STRING_VALUE", // required
 *   components: [ // ComponentConfigurationList // required
 *     { // ComponentConfiguration
 *       componentArn: "STRING_VALUE", // required
 *       parameters: [ // ComponentParameterList
 *         { // ComponentParameter
 *           name: "STRING_VALUE", // required
 *           value: [ // ComponentParameterValueList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *   ],
 *   parentImage: "STRING_VALUE", // required
 *   blockDeviceMappings: [ // InstanceBlockDeviceMappings
 *     { // InstanceBlockDeviceMapping
 *       deviceName: "STRING_VALUE",
 *       ebs: { // EbsInstanceBlockDeviceSpecification
 *         encrypted: true || false,
 *         deleteOnTermination: true || false,
 *         iops: Number("int"),
 *         kmsKeyId: "STRING_VALUE",
 *         snapshotId: "STRING_VALUE",
 *         volumeSize: Number("int"),
 *         volumeType: "standard" || "io1" || "io2" || "gp2" || "gp3" || "sc1" || "st1",
 *         throughput: Number("int"),
 *       },
 *       virtualName: "STRING_VALUE",
 *       noDevice: "STRING_VALUE",
 *     },
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   workingDirectory: "STRING_VALUE",
 *   additionalInstanceConfiguration: { // AdditionalInstanceConfiguration
 *     systemsManagerAgent: { // SystemsManagerAgent
 *       uninstallAfterBuild: true || false,
 *     },
 *     userDataOverride: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new CreateImageRecipeCommand(input);
 * const response = await client.send(command);
 * // { // CreateImageRecipeResponse
 * //   requestId: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * //   imageRecipeArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateImageRecipeCommandInput - {@link CreateImageRecipeCommandInput}
 * @returns {@link CreateImageRecipeCommandOutput}
 * @see {@link CreateImageRecipeCommandInput} for command's `input` shape.
 * @see {@link CreateImageRecipeCommandOutput} for command's `response` shape.
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
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link InvalidVersionNumberException} (client fault)
 *  <p>Your version number is out of bounds or does not follow the required syntax.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource that you are trying to create already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the number of permitted resources or operations for this service.
 * 			For service quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder">EC2 Image Builder endpoints and
 * 				quotas</a>.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 */
export class CreateImageRecipeCommand extends $Command<
  CreateImageRecipeCommandInput,
  CreateImageRecipeCommandOutput,
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
  constructor(readonly input: CreateImageRecipeCommandInput) {
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
  ): Handler<CreateImageRecipeCommandInput, CreateImageRecipeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateImageRecipeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "CreateImageRecipeCommand";
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
  private serialize(input: CreateImageRecipeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateImageRecipeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateImageRecipeCommandOutput> {
    return de_CreateImageRecipeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
