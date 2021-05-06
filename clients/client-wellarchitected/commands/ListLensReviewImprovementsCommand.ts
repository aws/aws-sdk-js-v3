import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { ListLensReviewImprovementsInput, ListLensReviewImprovementsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListLensReviewImprovementsCommand,
  serializeAws_restJson1ListLensReviewImprovementsCommand,
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

export interface ListLensReviewImprovementsCommandInput extends ListLensReviewImprovementsInput {}
export interface ListLensReviewImprovementsCommandOutput extends ListLensReviewImprovementsOutput, __MetadataBearer {}

/**
 * <p>List lens review improvements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListLensReviewImprovementsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListLensReviewImprovementsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListLensReviewImprovementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLensReviewImprovementsCommandInput} for command's `input` shape.
 * @see {@link ListLensReviewImprovementsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListLensReviewImprovementsCommand extends $Command<
  ListLensReviewImprovementsCommandInput,
  ListLensReviewImprovementsCommandOutput,
  WellArchitectedClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLensReviewImprovementsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLensReviewImprovementsCommandInput, ListLensReviewImprovementsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "ListLensReviewImprovementsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLensReviewImprovementsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListLensReviewImprovementsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLensReviewImprovementsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListLensReviewImprovementsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListLensReviewImprovementsCommandOutput> {
    return deserializeAws_restJson1ListLensReviewImprovementsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
