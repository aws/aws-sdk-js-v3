import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Connections, DescribeHostedConnectionsRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeHostedConnectionsCommand,
  serializeAws_json1_1DescribeHostedConnectionsCommand,
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

export type DescribeHostedConnectionsCommandInput = DescribeHostedConnectionsRequest;
export type DescribeHostedConnectionsCommandOutput = Connections & __MetadataBearer;

/**
 * <p>Lists the hosted connections that have been provisioned on the specified
 *       interconnect or link aggregation group (LAG).</p>
 *          <note>
 *             <p>Intended for use by AWS Direct Connect Partners only.</p>
 *          </note>
 */
export class DescribeHostedConnectionsCommand extends $Command<
  DescribeHostedConnectionsCommandInput,
  DescribeHostedConnectionsCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeHostedConnectionsCommandInput) {
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
  ): Handler<DescribeHostedConnectionsCommandInput, DescribeHostedConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeHostedConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeHostedConnectionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Connections.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeHostedConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeHostedConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeHostedConnectionsCommandOutput> {
    return deserializeAws_json1_1DescribeHostedConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
