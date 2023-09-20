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
import { ListStreamConsumersInput, ListStreamConsumersOutput } from "../models/models_0";
import { de_ListStreamConsumersCommand, se_ListStreamConsumersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListStreamConsumersCommand}.
 */
export interface ListStreamConsumersCommandInput extends ListStreamConsumersInput {}
/**
 * @public
 *
 * The output of {@link ListStreamConsumersCommand}.
 */
export interface ListStreamConsumersCommandOutput extends ListStreamConsumersOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the consumers registered to receive data from a stream using enhanced fan-out,
 *             and provides information about each consumer.</p>
 *          <p>This operation has a limit of 5 transactions per second per stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, ListStreamConsumersCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, ListStreamConsumersCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // ListStreamConsumersInput
 *   StreamARN: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   StreamCreationTimestamp: new Date("TIMESTAMP"),
 * };
 * const command = new ListStreamConsumersCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamConsumersOutput
 * //   Consumers: [ // ConsumerList
 * //     { // Consumer
 * //       ConsumerName: "STRING_VALUE", // required
 * //       ConsumerARN: "STRING_VALUE", // required
 * //       ConsumerStatus: "CREATING" || "DELETING" || "ACTIVE", // required
 * //       ConsumerCreationTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStreamConsumersCommandInput - {@link ListStreamConsumersCommandInput}
 * @returns {@link ListStreamConsumersCommandOutput}
 * @see {@link ListStreamConsumersCommandInput} for command's `input` shape.
 * @see {@link ListStreamConsumersCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link ExpiredNextTokenException} (client fault)
 *  <p>The pagination token passed to the operation is expired.</p>
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
export class ListStreamConsumersCommand extends $Command<
  ListStreamConsumersCommandInput,
  ListStreamConsumersCommandOutput,
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
  constructor(readonly input: ListStreamConsumersCommandInput) {
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
  ): Handler<ListStreamConsumersCommandInput, ListStreamConsumersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStreamConsumersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "ListStreamConsumersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kinesis_20131202",
        operation: "ListStreamConsumers",
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
  private serialize(input: ListStreamConsumersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListStreamConsumersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStreamConsumersCommandOutput> {
    return de_ListStreamConsumersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
