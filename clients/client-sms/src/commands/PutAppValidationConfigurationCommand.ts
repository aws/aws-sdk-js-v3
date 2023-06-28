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

import { PutAppValidationConfigurationRequest, PutAppValidationConfigurationResponse } from "../models/models_0";
import {
  de_PutAppValidationConfigurationCommand,
  se_PutAppValidationConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutAppValidationConfigurationCommand}.
 */
export interface PutAppValidationConfigurationCommandInput extends PutAppValidationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutAppValidationConfigurationCommand}.
 */
export interface PutAppValidationConfigurationCommandOutput
  extends PutAppValidationConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates a validation configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, PutAppValidationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, PutAppValidationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // PutAppValidationConfigurationRequest
 *   appId: "STRING_VALUE", // required
 *   appValidationConfigurations: [ // AppValidationConfigurations
 *     { // AppValidationConfiguration
 *       validationId: "STRING_VALUE",
 *       name: "STRING_VALUE",
 *       appValidationStrategy: "SSM",
 *       ssmValidationParameters: { // SSMValidationParameters
 *         source: { // Source
 *           s3Location: { // S3Location
 *             bucket: "STRING_VALUE",
 *             key: "STRING_VALUE",
 *           },
 *         },
 *         instanceId: "STRING_VALUE",
 *         scriptType: "SHELL_SCRIPT" || "POWERSHELL_SCRIPT",
 *         command: "STRING_VALUE",
 *         executionTimeoutSeconds: Number("int"),
 *         outputS3BucketName: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   serverGroupValidationConfigurations: [ // ServerGroupValidationConfigurations
 *     { // ServerGroupValidationConfiguration
 *       serverGroupId: "STRING_VALUE",
 *       serverValidationConfigurations: [ // ServerValidationConfigurations
 *         { // ServerValidationConfiguration
 *           server: { // Server
 *             serverId: "STRING_VALUE",
 *             serverType: "VIRTUAL_MACHINE",
 *             vmServer: { // VmServer
 *               vmServerAddress: { // VmServerAddress
 *                 vmManagerId: "STRING_VALUE",
 *                 vmId: "STRING_VALUE",
 *               },
 *               vmName: "STRING_VALUE",
 *               vmManagerName: "STRING_VALUE",
 *               vmManagerType: "VSPHERE" || "SCVMM" || "HYPERV-MANAGER",
 *               vmPath: "STRING_VALUE",
 *             },
 *             replicationJobId: "STRING_VALUE",
 *             replicationJobTerminated: true || false,
 *           },
 *           validationId: "STRING_VALUE",
 *           name: "STRING_VALUE",
 *           serverValidationStrategy: "USERDATA",
 *           userDataValidationParameters: { // UserDataValidationParameters
 *             source: {
 *               s3Location: {
 *                 bucket: "STRING_VALUE",
 *                 key: "STRING_VALUE",
 *               },
 *             },
 *             scriptType: "SHELL_SCRIPT" || "POWERSHELL_SCRIPT",
 *           },
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutAppValidationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAppValidationConfigurationCommandInput - {@link PutAppValidationConfigurationCommandInput}
 * @returns {@link PutAppValidationConfigurationCommandOutput}
 * @see {@link PutAppValidationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAppValidationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InternalError} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 */
export class PutAppValidationConfigurationCommand extends $Command<
  PutAppValidationConfigurationCommandInput,
  PutAppValidationConfigurationCommandOutput,
  SMSClientResolvedConfig
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
  constructor(readonly input: PutAppValidationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAppValidationConfigurationCommandInput, PutAppValidationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAppValidationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "PutAppValidationConfigurationCommand";
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
  private serialize(input: PutAppValidationConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutAppValidationConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutAppValidationConfigurationCommandOutput> {
    return de_PutAppValidationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
