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

import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import {
  TagDeliveryStreamInput,
  TagDeliveryStreamInputFilterSensitiveLog,
  TagDeliveryStreamOutput,
  TagDeliveryStreamOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1TagDeliveryStreamCommand,
  serializeAws_json1_1TagDeliveryStreamCommand,
} from "../protocols/Aws_json1_1";

export interface TagDeliveryStreamCommandInput extends TagDeliveryStreamInput {}
export interface TagDeliveryStreamCommandOutput extends TagDeliveryStreamOutput, __MetadataBearer {}

/**
 * <p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair
 *          that you can define and assign to Amazon Web Services resources. If you specify a tag that
 *          already exists, the tag value is replaced with the value that you specify in the request.
 *          Tags are metadata. For example, you can add friendly names and descriptions or other types
 *          of information that can help you distinguish the delivery stream. For more information
 *          about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation
 *             Tags</a> in the <i>Amazon Web Services Billing and Cost Management User
 *             Guide</i>. </p>
 *          <p>Each delivery stream can have up to 50 tags. </p>
 *          <p>This operation has a limit of five transactions per second per account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, TagDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, TagDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const command = new TagDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link TagDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 */
export class TagDeliveryStreamCommand extends $Command<
  TagDeliveryStreamCommandInput,
  TagDeliveryStreamCommandOutput,
  FirehoseClientResolvedConfig
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

  constructor(readonly input: TagDeliveryStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagDeliveryStreamCommandInput, TagDeliveryStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TagDeliveryStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "TagDeliveryStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagDeliveryStreamInputFilterSensitiveLog,
      outputFilterSensitiveLog: TagDeliveryStreamOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagDeliveryStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TagDeliveryStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagDeliveryStreamCommandOutput> {
    return deserializeAws_json1_1TagDeliveryStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
