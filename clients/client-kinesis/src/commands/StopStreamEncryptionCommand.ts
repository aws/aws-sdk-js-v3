// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { StopStreamEncryptionInput } from "../models/models_0";
import { de_StopStreamEncryptionCommand, se_StopStreamEncryptionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopStreamEncryptionCommand}.
 */
export interface StopStreamEncryptionCommandInput extends StopStreamEncryptionInput {}
/**
 * @public
 *
 * The output of {@link StopStreamEncryptionCommand}.
 */
export interface StopStreamEncryptionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Disables server-side encryption for a specified stream. </p>
 *          <note>
 *             <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input
 *                 parameter rather than the <code>StreamName</code> input parameter.</p>
 *          </note>
 *          <p>Stopping encryption is an asynchronous operation. Upon receiving the request, Kinesis
 *             Data Streams returns immediately and sets the status of the stream to
 *                 <code>UPDATING</code>. After the update is complete, Kinesis Data Streams sets the
 *             status of the stream back to <code>ACTIVE</code>. Stopping encryption normally takes a
 *             few seconds to complete, but it can take minutes. You can continue to read and write
 *             data to your stream while its status is <code>UPDATING</code>. Once the status of the
 *             stream is <code>ACTIVE</code>, records written to the stream are no longer encrypted by
 *             Kinesis Data Streams. </p>
 *          <p>API Limits: You can successfully disable server-side encryption 25 times in a rolling
 *             24-hour period. </p>
 *          <p>Note: It can take up to 5 seconds after the stream is in an <code>ACTIVE</code> status
 *             before all records written to the stream are no longer subject to encryption. After you
 *             disabled encryption, you can verify that encryption is not applied by inspecting the API
 *             response from <code>PutRecord</code> or <code>PutRecords</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, StopStreamEncryptionCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, StopStreamEncryptionCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // StopStreamEncryptionInput
 *   StreamName: "STRING_VALUE",
 *   EncryptionType: "NONE" || "KMS", // required
 *   KeyId: "STRING_VALUE", // required
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new StopStreamEncryptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopStreamEncryptionCommandInput - {@link StopStreamEncryptionCommandInput}
 * @returns {@link StopStreamEncryptionCommandOutput}
 * @see {@link StopStreamEncryptionCommandInput} for command's `input` shape.
 * @see {@link StopStreamEncryptionCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is not available for this operation. For successful operation, the
 *             resource must be in the <code>ACTIVE</code> state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 */
export class StopStreamEncryptionCommand extends $Command<
  StopStreamEncryptionCommandInput,
  StopStreamEncryptionCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: StopStreamEncryptionCommandInput) {
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
  ): Handler<StopStreamEncryptionCommandInput, StopStreamEncryptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopStreamEncryptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "StopStreamEncryptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kinesis_20131202",
        operation: "StopStreamEncryption",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StopStreamEncryptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopStreamEncryptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopStreamEncryptionCommandOutput> {
    return de_StopStreamEncryptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
