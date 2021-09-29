import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { GetMailboxDetailsRequest, GetMailboxDetailsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetMailboxDetailsCommand,
  serializeAws_json1_1GetMailboxDetailsCommand,
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

export interface GetMailboxDetailsCommandInput extends GetMailboxDetailsRequest {}
export interface GetMailboxDetailsCommandOutput extends GetMailboxDetailsResponse, __MetadataBearer {}

/**
 * <p>Requests a user's mailbox details for a specified organization and user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetMailboxDetailsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetMailboxDetailsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new GetMailboxDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMailboxDetailsCommandInput} for command's `input` shape.
 * @see {@link GetMailboxDetailsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetMailboxDetailsCommand extends $Command<
  GetMailboxDetailsCommandInput,
  GetMailboxDetailsCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMailboxDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMailboxDetailsCommandInput, GetMailboxDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "GetMailboxDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMailboxDetailsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMailboxDetailsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMailboxDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMailboxDetailsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMailboxDetailsCommandOutput> {
    return deserializeAws_json1_1GetMailboxDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
