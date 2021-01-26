import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DescribeHandshakeRequest, DescribeHandshakeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeHandshakeCommand,
  serializeAws_json1_1DescribeHandshakeCommand,
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

export type DescribeHandshakeCommandInput = DescribeHandshakeRequest;
export type DescribeHandshakeCommandOutput = DescribeHandshakeResponse & __MetadataBearer;

/**
 * <p>Retrieves information about a previously requested handshake. The handshake ID comes
 *             from the response to the original <a>InviteAccountToOrganization</a>
 *             operation that generated the handshake.</p>
 *         <p>You can access handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or
 *                 <code>CANCELED</code> for only 30 days after they change to that state. They're then
 *             deleted and no longer accessible.</p>
 *         <p>This operation can be called from any account in the organization.</p>
 */
export class DescribeHandshakeCommand extends $Command<
  DescribeHandshakeCommandInput,
  DescribeHandshakeCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeHandshakeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeHandshakeCommandInput, DescribeHandshakeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DescribeHandshakeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeHandshakeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeHandshakeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeHandshakeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeHandshakeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeHandshakeCommandOutput> {
    return deserializeAws_json1_1DescribeHandshakeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
