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
import { CreateLagRequest, CreateLagRequestFilterSensitiveLog, Lag, LagFilterSensitiveLog } from "../models/models_0";
import { deserializeAws_json1_1CreateLagCommand, serializeAws_json1_1CreateLagCommand } from "../protocols/Aws_json1_1";

export interface CreateLagCommandInput extends CreateLagRequest {}
export interface CreateLagCommandOutput extends Lag, __MetadataBearer {}

/**
 * <p>Creates a link aggregation group (LAG) with the specified number of bundled
 *       physical dedicated connections between the customer network and a specific Direct Connect location.
 *       A LAG is a logical interface that uses the Link Aggregation Control Protocol
 *       (LACP) to aggregate multiple interfaces, enabling you to treat them as a single
 *       interface.</p>
 *         <p>All connections in a LAG must use the same bandwidth (either 1Gbps or 10Gbps) and must terminate at the same Direct Connect endpoint.</p>
 *          <p>You can have up to 10 dedicated connections per LAG. Regardless of this limit, if you
 *       request more connections for the LAG than Direct Connect can allocate on a single endpoint, no LAG is
 *       created.</p>
 *          <p>You can specify an existing physical dedicated connection or interconnect to include in
 *       the LAG (which counts towards the total number of connections). Doing so interrupts the
 *       current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG
 *       will be created on the same Direct Connect endpoint to which the dedicated connection terminates. Any
 *       virtual interfaces associated with the dedicated connection are automatically disassociated
 *       and re-associated with the LAG. The connection ID does not change.</p>
 *          <p>If the Amazon Web Services account used to create a LAG is a registered Direct Connect Partner, the LAG is
 *       automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual
 *       interfaces cannot be directly configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreateLagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLagCommandInput} for command's `input` shape.
 * @see {@link CreateLagCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class CreateLagCommand extends $Command<
  CreateLagCommandInput,
  CreateLagCommandOutput,
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

  constructor(readonly input: CreateLagCommandInput) {
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
  ): Handler<CreateLagCommandInput, CreateLagCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateLagCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreateLagCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLagRequestFilterSensitiveLog,
      outputFilterSensitiveLog: LagFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLagCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLagCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLagCommandOutput> {
    return deserializeAws_json1_1CreateLagCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
