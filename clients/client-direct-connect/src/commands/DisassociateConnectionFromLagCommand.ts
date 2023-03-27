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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Connection, DisassociateConnectionFromLagRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateConnectionFromLagCommand,
  serializeAws_json1_1DisassociateConnectionFromLagCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DisassociateConnectionFromLagCommand}.
 */
export interface DisassociateConnectionFromLagCommandInput extends DisassociateConnectionFromLagRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateConnectionFromLagCommand}.
 */
export interface DisassociateConnectionFromLagCommandOutput extends Connection, __MetadataBearer {}

/**
 * @public
 * <p>Disassociates a connection from a link aggregation group (LAG). The connection is
 *       interrupted and re-established as a standalone connection (the connection is not
 *       deleted; to delete the connection, use the <a>DeleteConnection</a> request).
 *       If the LAG has associated virtual interfaces or hosted connections, they remain
 *       associated with the LAG. A disassociated connection owned by an Direct Connect Partner is
 *       automatically converted to an interconnect.</p>
 *          <p>If disassociating the connection would cause the LAG to fall below its setting for
 *       minimum number of operational connections, the request fails, except when it's the last
 *       member of the LAG. If all connections are disassociated, the LAG continues to exist as
 *       an empty LAG with no physical connections. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DisassociateConnectionFromLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DisassociateConnectionFromLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // DisassociateConnectionFromLagRequest
 *   connectionId: "STRING_VALUE", // required
 *   lagId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateConnectionFromLagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DisassociateConnectionFromLagCommandInput - {@link DisassociateConnectionFromLagCommandInput}
 * @returns {@link DisassociateConnectionFromLagCommandOutput}
 * @see {@link DisassociateConnectionFromLagCommandInput} for command's `input` shape.
 * @see {@link DisassociateConnectionFromLagCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 *
 */
export class DisassociateConnectionFromLagCommand extends $Command<
  DisassociateConnectionFromLagCommandInput,
  DisassociateConnectionFromLagCommandOutput,
  DirectConnectClientResolvedConfig
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
  constructor(readonly input: DisassociateConnectionFromLagCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateConnectionFromLagCommandInput, DisassociateConnectionFromLagCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateConnectionFromLagCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DisassociateConnectionFromLagCommand";
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
  private serialize(input: DisassociateConnectionFromLagCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateConnectionFromLagCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateConnectionFromLagCommandOutput> {
    return deserializeAws_json1_1DisassociateConnectionFromLagCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
