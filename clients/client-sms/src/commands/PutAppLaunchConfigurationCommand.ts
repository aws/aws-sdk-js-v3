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

import { PutAppLaunchConfigurationRequest, PutAppLaunchConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutAppLaunchConfigurationCommand,
  serializeAws_json1_1PutAppLaunchConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 *
 * The input for {@link PutAppLaunchConfigurationCommand}.
 */
export interface PutAppLaunchConfigurationCommandInput extends PutAppLaunchConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutAppLaunchConfigurationCommand}.
 */
export interface PutAppLaunchConfigurationCommandOutput extends PutAppLaunchConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates the launch configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, PutAppLaunchConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, PutAppLaunchConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = {
 *   appId: "STRING_VALUE",
 *   roleName: "STRING_VALUE",
 *   autoLaunch: true || false,
 *   serverGroupLaunchConfigurations: [
 *     {
 *       serverGroupId: "STRING_VALUE",
 *       launchOrder: Number("int"),
 *       serverLaunchConfigurations: [
 *         {
 *           server: {
 *             serverId: "STRING_VALUE",
 *             serverType: "STRING_VALUE",
 *             vmServer: {
 *               vmServerAddress: {
 *                 vmManagerId: "STRING_VALUE",
 *                 vmId: "STRING_VALUE",
 *               },
 *               vmName: "STRING_VALUE",
 *               vmManagerName: "STRING_VALUE",
 *               vmManagerType: "STRING_VALUE",
 *               vmPath: "STRING_VALUE",
 *             },
 *             replicationJobId: "STRING_VALUE",
 *             replicationJobTerminated: true || false,
 *           },
 *           logicalId: "STRING_VALUE",
 *           vpc: "STRING_VALUE",
 *           subnet: "STRING_VALUE",
 *           securityGroup: "STRING_VALUE",
 *           ec2KeyName: "STRING_VALUE",
 *           userData: {
 *             s3Location: {
 *               bucket: "STRING_VALUE",
 *               key: "STRING_VALUE",
 *             },
 *           },
 *           instanceType: "STRING_VALUE",
 *           associatePublicIpAddress: true || false,
 *           iamInstanceProfileName: "STRING_VALUE",
 *           configureScript: {
 *             bucket: "STRING_VALUE",
 *             key: "STRING_VALUE",
 *           },
 *           configureScriptType: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutAppLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PutAppLaunchConfigurationCommandInput - {@link PutAppLaunchConfigurationCommandInput}
 * @returns {@link PutAppLaunchConfigurationCommandOutput}
 * @see {@link PutAppLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAppLaunchConfigurationCommandOutput} for command's `response` shape.
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
 *
 */
export class PutAppLaunchConfigurationCommand extends $Command<
  PutAppLaunchConfigurationCommandInput,
  PutAppLaunchConfigurationCommandOutput,
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
  constructor(readonly input: PutAppLaunchConfigurationCommandInput) {
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
  ): Handler<PutAppLaunchConfigurationCommandInput, PutAppLaunchConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAppLaunchConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "PutAppLaunchConfigurationCommand";
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
  private serialize(input: PutAppLaunchConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAppLaunchConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutAppLaunchConfigurationCommandOutput> {
    return deserializeAws_json1_1PutAppLaunchConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
