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
import {
  CreateInterconnectRequest,
  CreateInterconnectRequestFilterSensitiveLog,
  Interconnect,
  InterconnectFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateInterconnectCommand,
  serializeAws_json1_1CreateInterconnectCommand,
} from "../protocols/Aws_json1_1";

export interface CreateInterconnectCommandInput extends CreateInterconnectRequest {}
export interface CreateInterconnectCommandOutput extends Interconnect, __MetadataBearer {}

/**
 * <p>Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location.</p>
 *          <p>An interconnect is a connection that is capable of hosting other connections. The
 *       Direct Connect Partner can use an interconnect to provide Direct Connect hosted
 *       connections to customers through their own network services. Like a standard connection, an
 *       interconnect links the partner's network to an Direct Connect location over a standard Ethernet
 *       fiber-optic cable. One end is connected to the partner's router, the other to an Direct Connect
 *       router.</p>
 *          <p>You can automatically add the new interconnect to a link aggregation group (LAG) by
 *       specifying a LAG ID in the request. This ensures that the new interconnect is allocated on
 *       the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the
 *       endpoint, the request fails and no interconnect is created.</p>
 *          <p>For each end customer, the Direct Connect Partner provisions a connection on their interconnect by calling <a>AllocateHostedConnection</a>.
 *       The end customer can then connect to Amazon Web Services resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Connect Partner.</p>
 *          <note>
 *             <p>Intended for use by Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateInterconnectCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateInterconnectCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreateInterconnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInterconnectCommandInput} for command's `input` shape.
 * @see {@link CreateInterconnectCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class CreateInterconnectCommand extends $Command<
  CreateInterconnectCommandInput,
  CreateInterconnectCommandOutput,
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

  constructor(readonly input: CreateInterconnectCommandInput) {
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
  ): Handler<CreateInterconnectCommandInput, CreateInterconnectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateInterconnectCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreateInterconnectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateInterconnectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: InterconnectFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateInterconnectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateInterconnectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInterconnectCommandOutput> {
    return deserializeAws_json1_1CreateInterconnectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
