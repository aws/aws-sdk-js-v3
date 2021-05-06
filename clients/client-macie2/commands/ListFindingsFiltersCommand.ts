import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { ListFindingsFiltersRequest, ListFindingsFiltersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListFindingsFiltersCommand,
  serializeAws_restJson1ListFindingsFiltersCommand,
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

export interface ListFindingsFiltersCommandInput extends ListFindingsFiltersRequest {}
export interface ListFindingsFiltersCommandOutput extends ListFindingsFiltersResponse, __MetadataBearer {}

/**
 * <p>Retrieves a subset of information about all the findings filters for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListFindingsFiltersCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListFindingsFiltersCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new ListFindingsFiltersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFindingsFiltersCommandInput} for command's `input` shape.
 * @see {@link ListFindingsFiltersCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListFindingsFiltersCommand extends $Command<
  ListFindingsFiltersCommandInput,
  ListFindingsFiltersCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFindingsFiltersCommandInput) {
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
  ): Handler<ListFindingsFiltersCommandInput, ListFindingsFiltersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "ListFindingsFiltersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFindingsFiltersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFindingsFiltersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFindingsFiltersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFindingsFiltersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFindingsFiltersCommandOutput> {
    return deserializeAws_restJson1ListFindingsFiltersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
