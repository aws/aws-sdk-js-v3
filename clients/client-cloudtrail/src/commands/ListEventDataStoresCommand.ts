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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { ListEventDataStoresRequest, ListEventDataStoresResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListEventDataStoresCommand,
  serializeAws_json1_1ListEventDataStoresCommand,
} from "../protocols/Aws_json1_1";

export interface ListEventDataStoresCommandInput extends ListEventDataStoresRequest {}
export interface ListEventDataStoresCommandOutput extends ListEventDataStoresResponse, __MetadataBearer {}

/**
 * <p>Returns information about all event data stores in the account, in the current region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListEventDataStoresCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListEventDataStoresCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new ListEventDataStoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventDataStoresCommandInput} for command's `input` shape.
 * @see {@link ListEventDataStoresCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 */
export class ListEventDataStoresCommand extends $Command<
  ListEventDataStoresCommandInput,
  ListEventDataStoresCommandOutput,
  CloudTrailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEventDataStoresCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEventDataStoresCommandInput, ListEventDataStoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "ListEventDataStoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEventDataStoresRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEventDataStoresResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEventDataStoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListEventDataStoresCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEventDataStoresCommandOutput> {
    return deserializeAws_json1_1ListEventDataStoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
