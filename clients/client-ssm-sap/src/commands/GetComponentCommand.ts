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

import { GetComponentInput, GetComponentOutput } from "../models/models_0";
import { de_GetComponentCommand, se_GetComponentCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetComponentCommand}.
 */
export interface GetComponentCommandInput extends GetComponentInput {}
/**
 * @public
 *
 * The output of {@link GetComponentCommand}.
 */
export interface GetComponentCommandOutput extends GetComponentOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets the component of an application registered with AWS Systems Manager for
 *          SAP.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, GetComponentCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, GetComponentCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * const client = new SsmSapClient(config);
 * const input = { // GetComponentInput
 *   ApplicationId: "STRING_VALUE", // required
 *   ComponentId: "STRING_VALUE", // required
 * };
 * const command = new GetComponentCommand(input);
 * const response = await client.send(command);
 * // { // GetComponentOutput
 * //   Component: { // Component
 * //     ComponentId: "STRING_VALUE",
 * //     ParentComponent: "STRING_VALUE",
 * //     ChildComponents: [ // ComponentIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     ApplicationId: "STRING_VALUE",
 * //     ComponentType: "HANA" || "HANA_NODE",
 * //     Status: "ACTIVATED" || "STARTING" || "STOPPED" || "STOPPING" || "RUNNING" || "RUNNING_WITH_ERROR" || "UNDEFINED",
 * //     SapHostname: "STRING_VALUE",
 * //     SapKernelVersion: "STRING_VALUE",
 * //     HdbVersion: "STRING_VALUE",
 * //     Resilience: { // Resilience
 * //       HsrTier: "STRING_VALUE",
 * //       HsrReplicationMode: "PRIMARY" || "NONE" || "SYNC" || "SYNCMEM" || "ASYNC",
 * //       HsrOperationMode: "PRIMARY" || "LOGREPLAY" || "DELTA_DATASHIPPING" || "LOGREPLAY_READACCESS" || "NONE",
 * //       ClusterStatus: "ONLINE" || "STANDBY" || "MAINTENANCE" || "OFFLINE" || "NONE",
 * //     },
 * //     AssociatedHost: { // AssociatedHost
 * //       Hostname: "STRING_VALUE",
 * //       Ec2InstanceId: "STRING_VALUE",
 * //       OsVersion: "STRING_VALUE",
 * //     },
 * //     Databases: [ // DatabaseIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     Hosts: [ // HostList
 * //       { // Host
 * //         HostName: "STRING_VALUE",
 * //         HostIp: "STRING_VALUE",
 * //         EC2InstanceId: "STRING_VALUE",
 * //         InstanceId: "STRING_VALUE",
 * //         HostRole: "LEADER" || "WORKER" || "STANDBY" || "UNKNOWN",
 * //         OsVersion: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PrimaryHost: "STRING_VALUE",
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     Arn: "STRING_VALUE",
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetComponentCommandInput - {@link GetComponentCommandInput}
 * @returns {@link GetComponentCommandOutput}
 * @see {@link GetComponentCommandInput} for command's `input` shape.
 * @see {@link GetComponentCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 */
export class GetComponentCommand extends $Command<
  GetComponentCommandInput,
  GetComponentCommandOutput,
  SsmSapClientResolvedConfig
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
  constructor(readonly input: GetComponentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SsmSapClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetComponentCommandInput, GetComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetComponentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SsmSapClient";
    const commandName = "GetComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SsmSap",
        operation: "GetComponent",
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
  private serialize(input: GetComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetComponentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetComponentCommandOutput> {
    return de_GetComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
