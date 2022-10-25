// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import {
  KinesisVideoArchivedMediaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoArchivedMediaClient";
import {
  ListFragmentsInput,
  ListFragmentsInputFilterSensitiveLog,
  ListFragmentsOutput,
  ListFragmentsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListFragmentsCommand,
  serializeAws_restJson1ListFragmentsCommand,
} from "../protocols/Aws_restJson1";

export interface ListFragmentsCommandInput extends ListFragmentsInput {}
export interface ListFragmentsCommandOutput extends ListFragmentsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of <a>Fragment</a> objects from the specified stream and
 *             timestamp range within the archived data.</p>
 *         <p>Listing fragments is eventually consistent. This means that even if the producer
 *             receives an acknowledgment that a fragment is persisted, the result might not be
 *             returned immediately from a request to <code>ListFragments</code>. However, results are
 *             typically available in less than one second.</p>
 *         <note>
 *             <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint.
 *                 Then send the <code>ListFragments</code> requests to this endpoint using the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url
 *                     parameter</a>. </p>
 *         </note>
 *
 *         <important>
 *             <p>If an error is thrown after invoking a Kinesis Video Streams archived media API,
 *                 in addition to the HTTP status code and the response body, it includes the following
 *                 pieces of information: </p>
 *             <ul>
 *                <li>
 *                     <p>
 *                         <code>x-amz-ErrorType</code> HTTP header – contains a more specific error
 *                         type in addition to what the HTTP status code provides. </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                         <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to
 *                         AWS, the support team can better diagnose the problem if given the Request
 *                         Id.</p>
 *                 </li>
 *             </ul>
 *             <p>Both the HTTP status code and the ErrorType header can be utilized to make
 *                 programmatic decisions about whether errors are retry-able and under what
 *                 conditions, as well as provide information on what actions the client programmer
 *                 might need to take in order to successfully try again.</p>
 *             <p>For more information, see the <b>Errors</b> section at
 *                 the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>.
 *             </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoArchivedMediaClient, ListFragmentsCommand } from "@aws-sdk/client-kinesis-video-archived-media"; // ES Modules import
 * // const { KinesisVideoArchivedMediaClient, ListFragmentsCommand } = require("@aws-sdk/client-kinesis-video-archived-media"); // CommonJS import
 * const client = new KinesisVideoArchivedMediaClient(config);
 * const command = new ListFragmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFragmentsCommandInput} for command's `input` shape.
 * @see {@link ListFragmentsCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoArchivedMediaClientResolvedConfig | config} for KinesisVideoArchivedMediaClient's `config` shape.
 *
 */
export class ListFragmentsCommand extends $Command<
  ListFragmentsCommandInput,
  ListFragmentsCommandOutput,
  KinesisVideoArchivedMediaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ListFragmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoArchivedMediaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFragmentsCommandInput, ListFragmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListFragmentsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoArchivedMediaClient";
    const commandName = "ListFragmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFragmentsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListFragmentsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFragmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFragmentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFragmentsCommandOutput> {
    return deserializeAws_restJson1ListFragmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
