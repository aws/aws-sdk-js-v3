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
  DeleteDeliveryStreamInput,
  DeleteDeliveryStreamInputFilterSensitiveLog,
  DeleteDeliveryStreamOutput,
  DeleteDeliveryStreamOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDeliveryStreamCommand,
  serializeAws_json1_1DeleteDeliveryStreamCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteDeliveryStreamCommandInput extends DeleteDeliveryStreamInput {}
export interface DeleteDeliveryStreamCommandOutput extends DeleteDeliveryStreamOutput, __MetadataBearer {}

/**
 * <p>Deletes a delivery stream and its data.</p>
 *          <p>To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>. You can delete a delivery stream only if it is in one of the following states:
 *             <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or
 *             <code>DELETING_FAILED</code>. You can't delete a delivery stream that is in the
 *             <code>CREATING</code> state. While the deletion request is in process, the delivery
 *          stream is in the <code>DELETING</code> state.</p>
 *          <p>While the delivery stream is in the <code>DELETING</code> state, the service might
 *          continue to accept records, but it doesn't make any guarantees with respect to delivering
 *          the data. Therefore, as a best practice, first stop any applications that are sending
 *          records before you delete a delivery stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, DeleteDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, DeleteDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const command = new DeleteDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 */
export class DeleteDeliveryStreamCommand extends $Command<
  DeleteDeliveryStreamCommandInput,
  DeleteDeliveryStreamCommandOutput,
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

  constructor(readonly input: DeleteDeliveryStreamCommandInput) {
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
  ): Handler<DeleteDeliveryStreamCommandInput, DeleteDeliveryStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDeliveryStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "DeleteDeliveryStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDeliveryStreamInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteDeliveryStreamOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDeliveryStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDeliveryStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDeliveryStreamCommandOutput> {
    return deserializeAws_json1_1DeleteDeliveryStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
