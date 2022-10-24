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
  DescribeDeliveryStreamInput,
  DescribeDeliveryStreamInputFilterSensitiveLog,
  DescribeDeliveryStreamOutput,
  DescribeDeliveryStreamOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDeliveryStreamCommand,
  serializeAws_json1_1DescribeDeliveryStreamCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeDeliveryStreamCommandInput extends DescribeDeliveryStreamInput {}
export interface DescribeDeliveryStreamCommandOutput extends DescribeDeliveryStreamOutput, __MetadataBearer {}

/**
 * <p>Describes the specified delivery stream and its status. For example, after your
 *          delivery stream is created, call <code>DescribeDeliveryStream</code> to see whether the
 *          delivery stream is <code>ACTIVE</code> and therefore ready for data to be sent to it. </p>
 *          <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status
 *          doesn't change, and you can't invoke <a>CreateDeliveryStream</a> again on it.
 *          However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.
 *          If the status is <code>DELETING_FAILED</code>, you can force deletion by invoking <a>DeleteDeliveryStream</a> again but with <a>DeleteDeliveryStreamInput$AllowForceDelete</a> set to true.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, DescribeDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, DescribeDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const command = new DescribeDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 */
export class DescribeDeliveryStreamCommand extends $Command<
  DescribeDeliveryStreamCommandInput,
  DescribeDeliveryStreamCommandOutput,
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

  constructor(readonly input: DescribeDeliveryStreamCommandInput) {
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
  ): Handler<DescribeDeliveryStreamCommandInput, DescribeDeliveryStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDeliveryStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "DescribeDeliveryStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDeliveryStreamInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeDeliveryStreamOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDeliveryStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDeliveryStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDeliveryStreamCommandOutput> {
    return deserializeAws_json1_1DescribeDeliveryStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
