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
} from "@smithy/types";

import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { RegisterStreamConsumerInput, RegisterStreamConsumerOutput } from "../models/models_0";
import { de_RegisterStreamConsumerCommand, se_RegisterStreamConsumerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterStreamConsumerCommand}.
 */
export interface RegisterStreamConsumerCommandInput extends RegisterStreamConsumerInput {}
/**
 * @public
 *
 * The output of {@link RegisterStreamConsumerCommand}.
 */
export interface RegisterStreamConsumerCommandOutput extends RegisterStreamConsumerOutput, __MetadataBearer {}

/**
 * @public
 * <p>Registers a consumer with a Kinesis data stream. When you use this operation, the
 *             consumer you register can then call <a>SubscribeToShard</a> to receive data
 *             from the stream using enhanced fan-out, at a rate of up to 2 MiB per second for every
 *             shard you subscribe to. This rate is unaffected by the total number of consumers that
 *             read from the same stream.</p>
 *          <p>You can register up to 20 consumers per stream. A given consumer can only be
 *             registered with one stream at a time.</p>
 *          <p>For an example of how to use this operations, see <a href="/streams/latest/dev/building-enhanced-consumers-api.html">Enhanced Fan-Out
 *                 Using the Kinesis Data Streams API</a>.</p>
 *          <p>The use of this operation has a limit of five transactions per second per account.
 *             Also, only 5 consumers can be created simultaneously. In other words, you cannot have
 *             more than 5 consumers in a <code>CREATING</code> status at the same time. Registering a
 *             6th consumer while there are 5 in a <code>CREATING</code> status results in a
 *                 <code>LimitExceededException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, RegisterStreamConsumerCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, RegisterStreamConsumerCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // RegisterStreamConsumerInput
 *   StreamARN: "STRING_VALUE", // required
 *   ConsumerName: "STRING_VALUE", // required
 * };
 * const command = new RegisterStreamConsumerCommand(input);
 * const response = await client.send(command);
 * // { // RegisterStreamConsumerOutput
 * //   Consumer: { // Consumer
 * //     ConsumerName: "STRING_VALUE", // required
 * //     ConsumerARN: "STRING_VALUE", // required
 * //     ConsumerStatus: "CREATING" || "DELETING" || "ACTIVE", // required
 * //     ConsumerCreationTimestamp: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param RegisterStreamConsumerCommandInput - {@link RegisterStreamConsumerCommandInput}
 * @returns {@link RegisterStreamConsumerCommandOutput}
 * @see {@link RegisterStreamConsumerCommandInput} for command's `input` shape.
 * @see {@link RegisterStreamConsumerCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
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
export class RegisterStreamConsumerCommand extends $Command<
  RegisterStreamConsumerCommandInput,
  RegisterStreamConsumerCommandOutput,
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
  constructor(readonly input: RegisterStreamConsumerCommandInput) {
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
  ): Handler<RegisterStreamConsumerCommandInput, RegisterStreamConsumerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterStreamConsumerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "RegisterStreamConsumerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: RegisterStreamConsumerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterStreamConsumerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterStreamConsumerCommandOutput> {
    return de_RegisterStreamConsumerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
