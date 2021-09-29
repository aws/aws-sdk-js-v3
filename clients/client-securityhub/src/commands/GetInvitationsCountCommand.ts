import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { GetInvitationsCountRequest, GetInvitationsCountResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetInvitationsCountCommand,
  serializeAws_restJson1GetInvitationsCountCommand,
} from "../protocols/Aws_restJson1";
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

export interface GetInvitationsCountCommandInput extends GetInvitationsCountRequest {}
export interface GetInvitationsCountCommandOutput extends GetInvitationsCountResponse, __MetadataBearer {}

/**
 * <p>Returns the count of all Security Hub membership invitations that were sent to the
 *          current member account, not including the currently accepted invitation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetInvitationsCountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetInvitationsCountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new GetInvitationsCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInvitationsCountCommandInput} for command's `input` shape.
 * @see {@link GetInvitationsCountCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetInvitationsCountCommand extends $Command<
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInvitationsCountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInvitationsCountCommandInput, GetInvitationsCountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "GetInvitationsCountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInvitationsCountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInvitationsCountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInvitationsCountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetInvitationsCountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInvitationsCountCommandOutput> {
    return deserializeAws_restJson1GetInvitationsCountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
