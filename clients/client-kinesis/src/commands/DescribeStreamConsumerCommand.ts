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
import { DescribeStreamConsumerInput, DescribeStreamConsumerOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeStreamConsumerCommand,
  serializeAws_json1_1DescribeStreamConsumerCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeStreamConsumerCommand}.
 */
export interface DescribeStreamConsumerCommandInput extends DescribeStreamConsumerInput {}
/**
 * @public
 *
 * The output of {@link DescribeStreamConsumerCommand}.
 */
export interface DescribeStreamConsumerCommandOutput extends DescribeStreamConsumerOutput, __MetadataBearer {}

/**
 * @public
 * <p>To get the description of a registered consumer, provide the ARN of the consumer.
 *             Alternatively, you can provide the ARN of the data stream and the name you gave the
 *             consumer when you registered it. You may also provide all three parameters, as long as
 *             they don't conflict with each other. If you don't know the name or ARN of the consumer
 *             that you want to describe, you can use the <a>ListStreamConsumers</a>
 *             operation to get a list of the descriptions of all the consumers that are currently
 *             registered with a given data stream.</p>
 *          <p>This operation has a limit of 20 transactions per second per stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DescribeStreamConsumerCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DescribeStreamConsumerCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = {
 *   StreamARN: "STRING_VALUE",
 *   ConsumerName: "STRING_VALUE",
 *   ConsumerARN: "STRING_VALUE",
 * };
 * const command = new DescribeStreamConsumerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeStreamConsumerCommandInput - {@link DescribeStreamConsumerCommandInput}
 * @returns {@link DescribeStreamConsumerCommandOutput}
 * @see {@link DescribeStreamConsumerCommandInput} for command's `input` shape.
 * @see {@link DescribeStreamConsumerCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 *
 */
export class DescribeStreamConsumerCommand extends $Command<
  DescribeStreamConsumerCommandInput,
  DescribeStreamConsumerCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      OperationType: { type: "staticContextParams", value: `control` },
      ConsumerARN: { type: "contextParams", name: "ConsumerARN" },
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
  constructor(readonly input: DescribeStreamConsumerCommandInput) {
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
  ): Handler<DescribeStreamConsumerCommandInput, DescribeStreamConsumerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStreamConsumerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "DescribeStreamConsumerCommand";
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
  private serialize(input: DescribeStreamConsumerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeStreamConsumerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStreamConsumerCommandOutput> {
    return deserializeAws_json1_1DescribeStreamConsumerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
