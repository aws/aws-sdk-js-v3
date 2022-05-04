// smithy-typescript generated code
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

import { ListOutpostsInput, ListOutpostsOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import {
  deserializeAws_restJson1ListOutpostsCommand,
  serializeAws_restJson1ListOutpostsCommand,
} from "../protocols/Aws_restJson1";

export interface ListOutpostsCommandInput extends ListOutpostsInput {}
export interface ListOutpostsCommandOutput extends ListOutpostsOutput, __MetadataBearer {}

/**
 * <p>Lists the Outposts for your Amazon Web Services account. Add filters to your request to return
 *       a more specific list of results. Use filters to match an Outpost lifecycle status,
 *       Availability Zone (<code>us-east-1a</code>), and AZ ID (<code>use1-az1</code>). </p>
 *
 *          <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and the request returns only
 *       results that match all of the specified filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListOutpostsCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListOutpostsCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new ListOutpostsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOutpostsCommandInput} for command's `input` shape.
 * @see {@link ListOutpostsCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 */
export class ListOutpostsCommand extends $Command<
  ListOutpostsCommandInput,
  ListOutpostsCommandOutput,
  OutpostsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOutpostsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOutpostsCommandInput, ListOutpostsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "ListOutpostsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOutpostsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListOutpostsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOutpostsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListOutpostsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOutpostsCommandOutput> {
    return deserializeAws_restJson1ListOutpostsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
