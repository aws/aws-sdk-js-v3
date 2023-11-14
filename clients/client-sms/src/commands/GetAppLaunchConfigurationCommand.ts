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

import { GetAppLaunchConfigurationRequest, GetAppLaunchConfigurationResponse } from "../models/models_0";
import { de_GetAppLaunchConfigurationCommand, se_GetAppLaunchConfigurationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAppLaunchConfigurationCommand}.
 */
export interface GetAppLaunchConfigurationCommandInput extends GetAppLaunchConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetAppLaunchConfigurationCommand}.
 */
export interface GetAppLaunchConfigurationCommandOutput extends GetAppLaunchConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the application launch configuration associated with the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppLaunchConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppLaunchConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // GetAppLaunchConfigurationRequest
 *   appId: "STRING_VALUE",
 * };
 * const command = new GetAppLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetAppLaunchConfigurationResponse
 * //   appId: "STRING_VALUE",
 * //   roleName: "STRING_VALUE",
 * //   autoLaunch: true || false,
 * //   serverGroupLaunchConfigurations: [ // ServerGroupLaunchConfigurations
 * //     { // ServerGroupLaunchConfiguration
 * //       serverGroupId: "STRING_VALUE",
 * //       launchOrder: Number("int"),
 * //       serverLaunchConfigurations: [ // ServerLaunchConfigurations
 * //         { // ServerLaunchConfiguration
 * //           server: { // Server
 * //             serverId: "STRING_VALUE",
 * //             serverType: "VIRTUAL_MACHINE",
 * //             vmServer: { // VmServer
 * //               vmServerAddress: { // VmServerAddress
 * //                 vmManagerId: "STRING_VALUE",
 * //                 vmId: "STRING_VALUE",
 * //               },
 * //               vmName: "STRING_VALUE",
 * //               vmManagerName: "STRING_VALUE",
 * //               vmManagerType: "VSPHERE" || "SCVMM" || "HYPERV-MANAGER",
 * //               vmPath: "STRING_VALUE",
 * //             },
 * //             replicationJobId: "STRING_VALUE",
 * //             replicationJobTerminated: true || false,
 * //           },
 * //           logicalId: "STRING_VALUE",
 * //           vpc: "STRING_VALUE",
 * //           subnet: "STRING_VALUE",
 * //           securityGroup: "STRING_VALUE",
 * //           ec2KeyName: "STRING_VALUE",
 * //           userData: { // UserData
 * //             s3Location: { // S3Location
 * //               bucket: "STRING_VALUE",
 * //               key: "STRING_VALUE",
 * //             },
 * //           },
 * //           instanceType: "STRING_VALUE",
 * //           associatePublicIpAddress: true || false,
 * //           iamInstanceProfileName: "STRING_VALUE",
 * //           configureScript: {
 * //             bucket: "STRING_VALUE",
 * //             key: "STRING_VALUE",
 * //           },
 * //           configureScriptType: "SHELL_SCRIPT" || "POWERSHELL_SCRIPT",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAppLaunchConfigurationCommandInput - {@link GetAppLaunchConfigurationCommandInput}
 * @returns {@link GetAppLaunchConfigurationCommandOutput}
 * @see {@link GetAppLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAppLaunchConfigurationCommandOutput} for command's `response` shape.
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
export class GetAppLaunchConfigurationCommand extends $Command<
  GetAppLaunchConfigurationCommandInput,
  GetAppLaunchConfigurationCommandOutput,
  SMSClientResolvedConfig
> {
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
  constructor(readonly input: GetAppLaunchConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAppLaunchConfigurationCommandInput, GetAppLaunchConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAppLaunchConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "GetAppLaunchConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSServerMigrationService_V2016_10_24",
        operation: "GetAppLaunchConfiguration",
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
  private serialize(input: GetAppLaunchConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAppLaunchConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAppLaunchConfigurationCommandOutput> {
    return de_GetAppLaunchConfigurationCommand(output, context);
  }
}
