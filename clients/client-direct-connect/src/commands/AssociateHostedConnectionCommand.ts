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
import { AssociateHostedConnectionRequest, Connection } from "../models/models_0";
import { de_AssociateHostedConnectionCommand, se_AssociateHostedConnectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link AssociateHostedConnectionCommand}.
 */
export interface AssociateHostedConnectionCommandInput extends AssociateHostedConnectionRequest {}
/**
 * @public
 *
 * The output of {@link AssociateHostedConnectionCommand}.
 */
export interface AssociateHostedConnectionCommandOutput extends Connection, __MetadataBearer {}

/**
 * @public
 * <p>Associates a hosted connection and its virtual interfaces with a link aggregation
 *       group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted
 *       connection with a conflicting VLAN number or IP address, the operation fails. This
 *       action temporarily interrupts the hosted connection's connectivity to Amazon Web Services
 *       as it is being migrated.</p>
 *          <note>
 *             <p>Intended for use by Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AssociateHostedConnectionCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AssociateHostedConnectionCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // AssociateHostedConnectionRequest
 *   connectionId: "STRING_VALUE", // required
 *   parentConnectionId: "STRING_VALUE", // required
 * };
 * const command = new AssociateHostedConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AssociateHostedConnectionCommandInput - {@link AssociateHostedConnectionCommandInput}
 * @returns {@link AssociateHostedConnectionCommandOutput}
 * @see {@link AssociateHostedConnectionCommandInput} for command's `input` shape.
 * @see {@link AssociateHostedConnectionCommandOutput} for command's `response` shape.
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
export class AssociateHostedConnectionCommand extends $Command<
  AssociateHostedConnectionCommandInput,
  AssociateHostedConnectionCommandOutput,
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
  constructor(readonly input: AssociateHostedConnectionCommandInput) {
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
  ): Handler<AssociateHostedConnectionCommandInput, AssociateHostedConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateHostedConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "AssociateHostedConnectionCommand";
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
  private serialize(input: AssociateHostedConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateHostedConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateHostedConnectionCommandOutput> {
    return de_AssociateHostedConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
