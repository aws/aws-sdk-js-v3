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

import { PutAppReplicationConfigurationRequest, PutAppReplicationConfigurationResponse } from "../models/models_0";
import {
  de_PutAppReplicationConfigurationCommand,
  se_PutAppReplicationConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutAppReplicationConfigurationCommand}.
 */
export interface PutAppReplicationConfigurationCommandInput extends PutAppReplicationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutAppReplicationConfigurationCommand}.
 */
export interface PutAppReplicationConfigurationCommandOutput
  extends PutAppReplicationConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates the replication configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, PutAppReplicationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, PutAppReplicationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // PutAppReplicationConfigurationRequest
 *   appId: "STRING_VALUE",
 *   serverGroupReplicationConfigurations: [ // ServerGroupReplicationConfigurations
 *     { // ServerGroupReplicationConfiguration
 *       serverGroupId: "STRING_VALUE",
 *       serverReplicationConfigurations: [ // ServerReplicationConfigurations
 *         { // ServerReplicationConfiguration
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
 *           serverReplicationParameters: { // ServerReplicationParameters
 *             seedTime: new Date("TIMESTAMP"),
 *             frequency: Number("int"),
 *             runOnce: true || false,
 *             licenseType: "AWS" || "BYOL",
 *             numberOfRecentAmisToKeep: Number("int"),
 *             encrypted: true || false,
 *             kmsKeyId: "STRING_VALUE",
 *           },
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutAppReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAppReplicationConfigurationCommandInput - {@link PutAppReplicationConfigurationCommandInput}
 * @returns {@link PutAppReplicationConfigurationCommandOutput}
 * @see {@link PutAppReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAppReplicationConfigurationCommandOutput} for command's `response` shape.
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
export class PutAppReplicationConfigurationCommand extends $Command<
  PutAppReplicationConfigurationCommandInput,
  PutAppReplicationConfigurationCommandOutput,
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
  constructor(readonly input: PutAppReplicationConfigurationCommandInput) {
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
  ): Handler<PutAppReplicationConfigurationCommandInput, PutAppReplicationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAppReplicationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "PutAppReplicationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSServerMigrationService_V2016_10_24",
        operation: "PutAppReplicationConfiguration",
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
  private serialize(
    input: PutAppReplicationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutAppReplicationConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutAppReplicationConfigurationCommandOutput> {
    return de_PutAppReplicationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
