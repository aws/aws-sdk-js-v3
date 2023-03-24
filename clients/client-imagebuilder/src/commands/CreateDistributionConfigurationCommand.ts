// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { CreateDistributionConfigurationRequest, CreateDistributionConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDistributionConfigurationCommand,
  serializeAws_restJson1CreateDistributionConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateDistributionConfigurationCommand}.
 */
export interface CreateDistributionConfigurationCommandInput extends CreateDistributionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateDistributionConfigurationCommand}.
 */
export interface CreateDistributionConfigurationCommandOutput
  extends CreateDistributionConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new distribution configuration. Distribution configurations define and configure
 * 			the outputs of your pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = {
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   distributions: [ // required
 *     {
 *       region: "STRING_VALUE", // required
 *       amiDistributionConfiguration: {
 *         name: "STRING_VALUE",
 *         description: "STRING_VALUE",
 *         targetAccountIds: [
 *           "STRING_VALUE",
 *         ],
 *         amiTags: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         kmsKeyId: "STRING_VALUE",
 *         launchPermission: {
 *           userIds: [
 *             "STRING_VALUE",
 *           ],
 *           userGroups: [
 *             "STRING_VALUE",
 *           ],
 *           organizationArns: [
 *             "STRING_VALUE",
 *           ],
 *           organizationalUnitArns: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       containerDistributionConfiguration: {
 *         description: "STRING_VALUE",
 *         containerTags: [
 *           "STRING_VALUE",
 *         ],
 *         targetRepository: {
 *           service: "ECR", // required
 *           repositoryName: "STRING_VALUE", // required
 *         },
 *       },
 *       licenseConfigurationArns: [
 *         "STRING_VALUE",
 *       ],
 *       launchTemplateConfigurations: [
 *         {
 *           launchTemplateId: "STRING_VALUE", // required
 *           accountId: "STRING_VALUE",
 *           setDefaultVersion: true || false,
 *         },
 *       ],
 *       s3ExportConfiguration: {
 *         roleName: "STRING_VALUE", // required
 *         diskImageFormat: "VMDK" || "RAW" || "VHD", // required
 *         s3Bucket: "STRING_VALUE", // required
 *         s3Prefix: "STRING_VALUE",
 *       },
 *       fastLaunchConfigurations: [
 *         {
 *           enabled: true || false, // required
 *           snapshotConfiguration: {
 *             targetResourceCount: Number("int"),
 *           },
 *           maxParallelLaunches: Number("int"),
 *           launchTemplate: {
 *             launchTemplateId: "STRING_VALUE",
 *             launchTemplateName: "STRING_VALUE",
 *             launchTemplateVersion: "STRING_VALUE",
 *           },
 *           accountId: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new CreateDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateDistributionConfigurationCommandInput - {@link CreateDistributionConfigurationCommandInput}
 * @returns {@link CreateDistributionConfigurationCommandOutput}
 * @see {@link CreateDistributionConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateDistributionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or resource on
 * 			behalf of a user that doesn't have permissions to use the action or resource, or specifying an
 * 			invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ from
 * 			a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>You have specified two or more mutually exclusive parameters. Review the error message for
 * 			details.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have made a request for an action that is not supported by the service.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource that you are trying to create already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the number of permitted resources or operations for this service. For service quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder">EC2 Image Builder endpoints and quotas</a>.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 *
 */
export class CreateDistributionConfigurationCommand extends $Command<
  CreateDistributionConfigurationCommandInput,
  CreateDistributionConfigurationCommandOutput,
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
  constructor(readonly input: CreateDistributionConfigurationCommandInput) {
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
  ): Handler<CreateDistributionConfigurationCommandInput, CreateDistributionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDistributionConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "CreateDistributionConfigurationCommand";
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
  private serialize(
    input: CreateDistributionConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDistributionConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDistributionConfigurationCommandOutput> {
    return deserializeAws_restJson1CreateDistributionConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
