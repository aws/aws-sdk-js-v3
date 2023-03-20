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
import { DecreaseStreamRetentionPeriodInput } from "../models/models_0";
import {
  deserializeAws_json1_1DecreaseStreamRetentionPeriodCommand,
  serializeAws_json1_1DecreaseStreamRetentionPeriodCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DecreaseStreamRetentionPeriodCommand}.
 */
export interface DecreaseStreamRetentionPeriodCommandInput extends DecreaseStreamRetentionPeriodInput {}
/**
 * @public
 *
 * The output of {@link DecreaseStreamRetentionPeriodCommand}.
 */
export interface DecreaseStreamRetentionPeriodCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Decreases the Kinesis data stream's retention period, which is the length of time data
 *             records are accessible after they are added to the stream. The minimum value of a
 *             stream's retention period is 24 hours.</p>
 *          <note>
 *             <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input
 *                 parameter rather than the <code>StreamName</code> input parameter.</p>
 *          </note>
 *          <p>This operation may result in lost data. For example, if the stream's retention period
 *             is 48 hours and is decreased to 24 hours, any data already in the stream that is older
 *             than 24 hours is inaccessible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DecreaseStreamRetentionPeriodCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DecreaseStreamRetentionPeriodCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new DecreaseStreamRetentionPeriodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DecreaseStreamRetentionPeriodCommandInput - {@link DecreaseStreamRetentionPeriodCommandInput}
 * @returns {@link DecreaseStreamRetentionPeriodCommandOutput}
 * @see {@link DecreaseStreamRetentionPeriodCommandInput} for command's `input` shape.
 * @see {@link DecreaseStreamRetentionPeriodCommandOutput} for command's `response` shape.
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
 *
 */
export class DecreaseStreamRetentionPeriodCommand extends $Command<
  DecreaseStreamRetentionPeriodCommandInput,
  DecreaseStreamRetentionPeriodCommandOutput,
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
  constructor(readonly input: DecreaseStreamRetentionPeriodCommandInput) {
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
  ): Handler<DecreaseStreamRetentionPeriodCommandInput, DecreaseStreamRetentionPeriodCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DecreaseStreamRetentionPeriodCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "DecreaseStreamRetentionPeriodCommand";
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
  private serialize(input: DecreaseStreamRetentionPeriodCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DecreaseStreamRetentionPeriodCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DecreaseStreamRetentionPeriodCommandOutput> {
    return deserializeAws_json1_1DecreaseStreamRetentionPeriodCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
