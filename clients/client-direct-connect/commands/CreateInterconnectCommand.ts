import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreateInterconnectRequest, Interconnect } from "../models/models_0";
import {
  deserializeAws_json1_1CreateInterconnectCommand,
  serializeAws_json1_1CreateInterconnectCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreateInterconnectCommandInput = CreateInterconnectRequest;
export type CreateInterconnectCommandOutput = Interconnect & __MetadataBearer;

/**
 * <p>Creates an interconnect between an AWS Direct Connect Partner's network and a specific AWS Direct Connect location.</p>
 *          <p>An interconnect is a connection that is capable of hosting other connections. The AWS
 *       Direct Connect partner can use an interconnect to provide AWS Direct Connect hosted
 *       connections to customers through their own network services. Like a standard connection, an
 *       interconnect links the partner's network to an AWS Direct Connect location over a standard Ethernet
 *       fiber-optic cable. One end is connected to the partner's router, the other to an AWS Direct Connect
 *       router.</p>
 *          <p>You can automatically add the new interconnect to a link aggregation group (LAG) by
 *       specifying a LAG ID in the request. This ensures that the new interconnect is allocated on
 *       the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the
 *       endpoint, the request fails and no interconnect is created.</p>
 *          <p>For each end customer, the AWS Direct Connect Partner provisions a connection on their interconnect by calling <a>AllocateHostedConnection</a>.
 *       The end customer can then connect to AWS resources by creating a virtual interface on their connection, using the VLAN assigned to them by the AWS Direct Connect Partner.</p>
 *          <note>
 *             <p>Intended for use by AWS Direct Connect Partners only.</p>
 *          </note>
 */
export class CreateInterconnectCommand extends $Command<
  CreateInterconnectCommandInput,
  CreateInterconnectCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreateInterconnectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateInterconnectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Interconnect.filterSensitiveLog,
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
