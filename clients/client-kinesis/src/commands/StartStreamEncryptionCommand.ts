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

import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { StartStreamEncryptionInput, StartStreamEncryptionInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1StartStreamEncryptionCommand,
  serializeAws_json1_1StartStreamEncryptionCommand,
} from "../protocols/Aws_json1_1";

export interface StartStreamEncryptionCommandInput extends StartStreamEncryptionInput {}
export interface StartStreamEncryptionCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables or updates server-side encryption using an Amazon Web Services KMS key for a
 *             specified stream. </p>
 *          <p>Starting encryption is an asynchronous operation. Upon receiving the request, Kinesis
 *             Data Streams returns immediately and sets the status of the stream to
 *                 <code>UPDATING</code>. After the update is complete, Kinesis Data Streams sets the
 *             status of the stream back to <code>ACTIVE</code>. Updating or applying encryption
 *             normally takes a few seconds to complete, but it can take minutes. You can continue to
 *             read and write data to your stream while its status is <code>UPDATING</code>. Once the
 *             status of the stream is <code>ACTIVE</code>, encryption begins for records written to
 *             the stream. </p>
 *          <p>API Limits: You can successfully apply a new Amazon Web Services KMS key for
 *             server-side encryption 25 times in a rolling 24-hour period.</p>
 *          <p>Note: It can take up to 5 seconds after the stream is in an <code>ACTIVE</code> status
 *             before all records written to the stream are encrypted. After you enable encryption, you
 *             can verify that encryption is applied by inspecting the API response from
 *                 <code>PutRecord</code> or <code>PutRecords</code>.</p>
 *          <note>
 *             <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input
 *                 parameter rather than the <code>StreamName</code> input parameter.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, StartStreamEncryptionCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, StartStreamEncryptionCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new StartStreamEncryptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartStreamEncryptionCommandInput} for command's `input` shape.
 * @see {@link StartStreamEncryptionCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 */
export class StartStreamEncryptionCommand extends $Command<
  StartStreamEncryptionCommandInput,
  StartStreamEncryptionCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      OperationType: { type: "staticContextParams", value: `control` },
      StreamARN: { type: "contextParams", name: "StreamARN" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: StartStreamEncryptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartStreamEncryptionCommandInput, StartStreamEncryptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartStreamEncryptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "StartStreamEncryptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartStreamEncryptionInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartStreamEncryptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartStreamEncryptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartStreamEncryptionCommandOutput> {
    return deserializeAws_json1_1StartStreamEncryptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
