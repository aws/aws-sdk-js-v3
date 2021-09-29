import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { ListDataCatalogsInput, ListDataCatalogsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListDataCatalogsCommand,
  serializeAws_json1_1ListDataCatalogsCommand,
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

export interface ListDataCatalogsCommandInput extends ListDataCatalogsInput {}
export interface ListDataCatalogsCommandOutput extends ListDataCatalogsOutput, __MetadataBearer {}

/**
 * <p>Lists the data catalogs in the current Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListDataCatalogsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListDataCatalogsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListDataCatalogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataCatalogsCommandInput} for command's `input` shape.
 * @see {@link ListDataCatalogsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDataCatalogsCommand extends $Command<
  ListDataCatalogsCommandInput,
  ListDataCatalogsCommandOutput,
  AthenaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDataCatalogsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataCatalogsCommandInput, ListDataCatalogsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ListDataCatalogsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDataCatalogsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListDataCatalogsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDataCatalogsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDataCatalogsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataCatalogsCommandOutput> {
    return deserializeAws_json1_1ListDataCatalogsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
