import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { ListByteMatchSetsRequest, ListByteMatchSetsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListByteMatchSetsCommand,
  serializeAws_json1_1ListByteMatchSetsCommand,
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

export type ListByteMatchSetsCommandInput = ListByteMatchSetsRequest;
export type ListByteMatchSetsCommandOutput = ListByteMatchSetsResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns an array of <a>ByteMatchSetSummary</a> objects.</p>
 */
export class ListByteMatchSetsCommand extends $Command<
  ListByteMatchSetsCommandInput,
  ListByteMatchSetsCommandOutput,
  WAFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListByteMatchSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListByteMatchSetsCommandInput, ListByteMatchSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "ListByteMatchSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListByteMatchSetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListByteMatchSetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListByteMatchSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListByteMatchSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListByteMatchSetsCommandOutput> {
    return deserializeAws_json1_1ListByteMatchSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
