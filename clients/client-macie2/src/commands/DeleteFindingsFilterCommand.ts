import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { DeleteFindingsFilterRequest, DeleteFindingsFilterResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteFindingsFilterCommand,
  serializeAws_restJson1DeleteFindingsFilterCommand,
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

export interface DeleteFindingsFilterCommandInput extends DeleteFindingsFilterRequest {}
export interface DeleteFindingsFilterCommandOutput extends DeleteFindingsFilterResponse, __MetadataBearer {}

/**
 * <p>Deletes a findings filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DeleteFindingsFilterCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DeleteFindingsFilterCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DeleteFindingsFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFindingsFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteFindingsFilterCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteFindingsFilterCommand extends $Command<
  DeleteFindingsFilterCommandInput,
  DeleteFindingsFilterCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFindingsFilterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFindingsFilterCommandInput, DeleteFindingsFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "DeleteFindingsFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFindingsFilterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFindingsFilterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFindingsFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteFindingsFilterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFindingsFilterCommandOutput> {
    return deserializeAws_restJson1DeleteFindingsFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
