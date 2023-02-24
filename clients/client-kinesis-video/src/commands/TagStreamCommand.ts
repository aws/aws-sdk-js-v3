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

import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import {
  TagStreamInput,
  TagStreamInputFilterSensitiveLog,
  TagStreamOutput,
  TagStreamOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1TagStreamCommand,
  serializeAws_restJson1TagStreamCommand,
} from "../protocols/Aws_restJson1";

export interface TagStreamCommandInput extends TagStreamInput {}
export interface TagStreamCommandOutput extends TagStreamOutput, __MetadataBearer {}

/**
 * <p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair
 *             (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify
 *             a tag that already exists, the tag value is replaced with the value that you specify in
 *             the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation
 *                 Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>. </p>
 *          <p>You must provide either the <code>StreamName</code> or the
 *             <code>StreamARN</code>.</p>
 *          <p>This operation requires permission for the <code>KinesisVideo:TagStream</code>
 *             action.</p>
 *          <p>A Kinesis video stream can support up to 50 tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, TagStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, TagStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new TagStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagStreamCommandInput} for command's `input` shape.
 * @see {@link TagStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 */
export class TagStreamCommand extends $Command<
  TagStreamCommandInput,
  TagStreamCommandOutput,
  KinesisVideoClientResolvedConfig
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

  constructor(readonly input: TagStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagStreamCommandInput, TagStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TagStreamCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "TagStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagStreamInputFilterSensitiveLog,
      outputFilterSensitiveLog: TagStreamOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TagStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagStreamCommandOutput> {
    return deserializeAws_restJson1TagStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
