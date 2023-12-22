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

import { UpdateProbeInput, UpdateProbeOutput } from "../models/models_0";
import { NetworkMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkMonitorClient";
import { de_UpdateProbeCommand, se_UpdateProbeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateProbeCommand}.
 */
export interface UpdateProbeCommandInput extends UpdateProbeInput {}
/**
 * @public
 *
 * The output of {@link UpdateProbeCommand}.
 */
export interface UpdateProbeCommandOutput extends UpdateProbeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates a monitor probe. This action requires both the <code>monitorName</code> and <code>probeId</code> parameters. Run <code>ListMonitors</code> to get a list of monitor names. Run <code>GetMonitor</code> to get a list of probes and probe IDs. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkMonitorClient, UpdateProbeCommand } from "@aws-sdk/client-networkmonitor"; // ES Modules import
 * // const { NetworkMonitorClient, UpdateProbeCommand } = require("@aws-sdk/client-networkmonitor"); // CommonJS import
 * const client = new NetworkMonitorClient(config);
 * const input = { // UpdateProbeInput
 *   monitorName: "STRING_VALUE", // required
 *   probeId: "STRING_VALUE", // required
 *   state: "PENDING" || "ACTIVE" || "INACTIVE" || "ERROR" || "DELETING" || "DELETED",
 *   destination: "STRING_VALUE",
 *   destinationPort: Number("int"),
 *   protocol: "TCP" || "ICMP",
 *   packetSize: Number("int"),
 * };
 * const command = new UpdateProbeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProbeOutput
 * //   probeId: "STRING_VALUE",
 * //   probeArn: "STRING_VALUE",
 * //   sourceArn: "STRING_VALUE", // required
 * //   destination: "STRING_VALUE", // required
 * //   destinationPort: Number("int"),
 * //   protocol: "TCP" || "ICMP", // required
 * //   packetSize: Number("int"),
 * //   addressFamily: "IPV4" || "IPV6",
 * //   vpcId: "STRING_VALUE",
 * //   state: "PENDING" || "ACTIVE" || "INACTIVE" || "ERROR" || "DELETING" || "DELETED",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   modifiedAt: new Date("TIMESTAMP"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProbeCommandInput - {@link UpdateProbeCommandInput}
 * @returns {@link UpdateProbeCommandOutput}
 * @see {@link UpdateProbeCommandInput} for command's `input` shape.
 * @see {@link UpdateProbeCommandOutput} for command's `response` shape.
 * @see {@link NetworkMonitorClientResolvedConfig | config} for NetworkMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link NetworkMonitorServiceException}
 * <p>Base exception class for all service exceptions from NetworkMonitor service.</p>
 *
 */
export class UpdateProbeCommand extends $Command<
  UpdateProbeCommandInput,
  UpdateProbeCommandOutput,
  NetworkMonitorClientResolvedConfig
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
  constructor(readonly input: UpdateProbeCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkMonitorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateProbeCommandInput, UpdateProbeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateProbeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkMonitorClient";
    const commandName = "UpdateProbeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkMonitor",
        operation: "UpdateProbe",
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
  private serialize(input: UpdateProbeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateProbeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProbeCommandOutput> {
    return de_UpdateProbeCommand(output, context);
  }
}
