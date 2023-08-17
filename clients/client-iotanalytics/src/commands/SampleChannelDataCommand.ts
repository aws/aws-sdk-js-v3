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
import { SampleChannelDataRequest, SampleChannelDataResponse } from "../models/models_0";
import { de_SampleChannelDataCommand, se_SampleChannelDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SampleChannelDataCommand}.
 */
export interface SampleChannelDataCommandInput extends SampleChannelDataRequest {}
/**
 * @public
 *
 * The output of {@link SampleChannelDataCommand}.
 */
export interface SampleChannelDataCommandOutput extends SampleChannelDataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a sample of messages from the specified channel ingested during the specified
 *       timeframe. Up to 10 messages can be retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, SampleChannelDataCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, SampleChannelDataCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const input = { // SampleChannelDataRequest
 *   channelName: "STRING_VALUE", // required
 *   maxMessages: Number("int"),
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 * };
 * const command = new SampleChannelDataCommand(input);
 * const response = await client.send(command);
 * // { // SampleChannelDataResponse
 * //   payloads: [ // MessagePayloads
 * //     "BLOB_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param SampleChannelDataCommandInput - {@link SampleChannelDataCommandInput}
 * @returns {@link SampleChannelDataCommandOutput}
 * @see {@link SampleChannelDataCommandInput} for command's `input` shape.
 * @see {@link SampleChannelDataCommandOutput} for command's `response` shape.
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
export class SampleChannelDataCommand extends $Command<
  SampleChannelDataCommandInput,
  SampleChannelDataCommandOutput,
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
  constructor(readonly input: SampleChannelDataCommandInput) {
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
  ): Handler<SampleChannelDataCommandInput, SampleChannelDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SampleChannelDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "SampleChannelDataCommand";
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
  private serialize(input: SampleChannelDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SampleChannelDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SampleChannelDataCommandOutput> {
    return de_SampleChannelDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
