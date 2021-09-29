import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListRealtimeLogConfigsRequest, ListRealtimeLogConfigsResult } from "../models/models_1";
import {
  deserializeAws_restXmlListRealtimeLogConfigsCommand,
  serializeAws_restXmlListRealtimeLogConfigsCommand,
} from "../protocols/Aws_restXml";
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

export interface ListRealtimeLogConfigsCommandInput extends ListRealtimeLogConfigsRequest {}
export interface ListRealtimeLogConfigsCommandOutput extends ListRealtimeLogConfigsResult, __MetadataBearer {}

/**
 * <p>Gets a list of real-time log configurations.</p>
 * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListRealtimeLogConfigsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListRealtimeLogConfigsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListRealtimeLogConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRealtimeLogConfigsCommandInput} for command's `input` shape.
 * @see {@link ListRealtimeLogConfigsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListRealtimeLogConfigsCommand extends $Command<
  ListRealtimeLogConfigsCommandInput,
  ListRealtimeLogConfigsCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRealtimeLogConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRealtimeLogConfigsCommandInput, ListRealtimeLogConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListRealtimeLogConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRealtimeLogConfigsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRealtimeLogConfigsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRealtimeLogConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListRealtimeLogConfigsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRealtimeLogConfigsCommandOutput> {
    return deserializeAws_restXmlListRealtimeLogConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
