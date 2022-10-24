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
  StopDeliveryStreamEncryptionInput,
  StopDeliveryStreamEncryptionInputFilterSensitiveLog,
  StopDeliveryStreamEncryptionOutput,
  StopDeliveryStreamEncryptionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StopDeliveryStreamEncryptionCommand,
  serializeAws_json1_1StopDeliveryStreamEncryptionCommand,
} from "../protocols/Aws_json1_1";

export interface StopDeliveryStreamEncryptionCommandInput extends StopDeliveryStreamEncryptionInput {}
export interface StopDeliveryStreamEncryptionCommandOutput
  extends StopDeliveryStreamEncryptionOutput,
    __MetadataBearer {}

/**
 * <p>Disables server-side encryption (SSE) for the delivery stream. </p>
 *          <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data
 *          Firehose first sets the encryption status of the stream to <code>DISABLING</code>, and then
 *          to <code>DISABLED</code>. You can continue to read and write data to your stream while its
 *          status is <code>DISABLING</code>. It can take up to 5 seconds after the encryption status
 *          changes to <code>DISABLED</code> before all records written to the delivery stream are no
 *          longer subject to encryption. To find out whether a record or a batch of records was
 *          encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and
 *             <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p>
 *          <p>To check the encryption state of a delivery stream, use <a>DescribeDeliveryStream</a>. </p>
 *          <p>If SSE is enabled using a customer managed CMK and then you invoke
 *             <code>StopDeliveryStreamEncryption</code>, Kinesis Data Firehose schedules the related
 *          KMS grant for retirement and then retires it after it ensures that it is finished
 *          delivering records to the destination.</p>
 *          <p>The <code>StartDeliveryStreamEncryption</code> and
 *             <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls
 *          per delivery stream per 24 hours. For example, you reach the limit if you call
 *             <code>StartDeliveryStreamEncryption</code> 13 times and
 *             <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a
 *          24-hour period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, StopDeliveryStreamEncryptionCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, StopDeliveryStreamEncryptionCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const command = new StopDeliveryStreamEncryptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDeliveryStreamEncryptionCommandInput} for command's `input` shape.
 * @see {@link StopDeliveryStreamEncryptionCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 */
export class StopDeliveryStreamEncryptionCommand extends $Command<
  StopDeliveryStreamEncryptionCommandInput,
  StopDeliveryStreamEncryptionCommandOutput,
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

  constructor(readonly input: StopDeliveryStreamEncryptionCommandInput) {
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
  ): Handler<StopDeliveryStreamEncryptionCommandInput, StopDeliveryStreamEncryptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopDeliveryStreamEncryptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "StopDeliveryStreamEncryptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopDeliveryStreamEncryptionInputFilterSensitiveLog,
      outputFilterSensitiveLog: StopDeliveryStreamEncryptionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopDeliveryStreamEncryptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopDeliveryStreamEncryptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopDeliveryStreamEncryptionCommandOutput> {
    return deserializeAws_json1_1StopDeliveryStreamEncryptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
