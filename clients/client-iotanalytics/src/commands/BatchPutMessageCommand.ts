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

import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { BatchPutMessageRequest, BatchPutMessageResponse } from "../models/models_0";
import { de_BatchPutMessageCommand, se_BatchPutMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchPutMessageCommand}.
 */
export interface BatchPutMessageCommandInput extends BatchPutMessageRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutMessageCommand}.
 */
export interface BatchPutMessageCommandOutput extends BatchPutMessageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sends messages to a channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, BatchPutMessageCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, BatchPutMessageCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const input = { // BatchPutMessageRequest
 *   channelName: "STRING_VALUE", // required
 *   messages: [ // Messages // required
 *     { // Message
 *       messageId: "STRING_VALUE", // required
 *       payload: "BLOB_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchPutMessageCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutMessageResponse
 * //   batchPutMessageErrorEntries: [ // BatchPutMessageErrorEntries
 * //     { // BatchPutMessageErrorEntry
 * //       messageId: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutMessageCommandInput - {@link BatchPutMessageCommandInput}
 * @returns {@link BatchPutMessageCommandOutput}
 * @see {@link BatchPutMessageCommandInput} for command's `input` shape.
 * @see {@link BatchPutMessageCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource with the specified name could not be found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link IoTAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from IoTAnalytics service.</p>
 *
 */
export class BatchPutMessageCommand extends $Command<
  BatchPutMessageCommandInput,
  BatchPutMessageCommandOutput,
  IoTAnalyticsClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: BatchPutMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchPutMessageCommandInput, BatchPutMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchPutMessageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "BatchPutMessageCommand";
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
  private serialize(input: BatchPutMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchPutMessageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchPutMessageCommandOutput> {
    return de_BatchPutMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
