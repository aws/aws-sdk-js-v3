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

import { GetSendStatisticsResponse } from "../models/models_0";
import { de_GetSendStatisticsCommand, se_GetSendStatisticsCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSendStatisticsCommand}.
 */
export interface GetSendStatisticsCommandInput {}
/**
 * @public
 *
 * The output of {@link GetSendStatisticsCommand}.
 */
export interface GetSendStatisticsCommandOutput extends GetSendStatisticsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides sending statistics for the current AWS Region. The result is a list of data
 *             points, representing the last two weeks of sending activity. Each data point in the list
 *             contains statistics for a 15-minute period of time.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetSendStatisticsCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetSendStatisticsCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = {};
 * const command = new GetSendStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetSendStatisticsResponse
 * //   SendDataPoints: [ // SendDataPointList
 * //     { // SendDataPoint
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       DeliveryAttempts: Number("long"),
 * //       Bounces: Number("long"),
 * //       Complaints: Number("long"),
 * //       Rejects: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSendStatisticsCommandInput - {@link GetSendStatisticsCommandInput}
 * @returns {@link GetSendStatisticsCommandOutput}
 * @see {@link GetSendStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetSendStatisticsCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example GetSendStatistics
 * ```javascript
 * // The following example returns Amazon SES sending statistics:
 * const input = undefined;
 * const command = new GetSendStatisticsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SendDataPoints": [
 *     {
 *       "Bounces": 0,
 *       "Complaints": 0,
 *       "DeliveryAttempts": 5,
 *       "Rejects": 0,
 *       "Timestamp": "2016-07-13T22:43:00Z"
 *     },
 *     {
 *       "Bounces": 0,
 *       "Complaints": 0,
 *       "DeliveryAttempts": 3,
 *       "Rejects": 0,
 *       "Timestamp": "2016-07-13T23:13:00Z"
 *     },
 *     {
 *       "Bounces": 0,
 *       "Complaints": 0,
 *       "DeliveryAttempts": 1,
 *       "Rejects": 0,
 *       "Timestamp": "2016-07-13T21:13:00Z"
 *     }
 *   ]
 * }
 * *\/
 * // example id: getsendstatistics-1469047741329
 * ```
 *
 */
export class GetSendStatisticsCommand extends $Command<
  GetSendStatisticsCommandInput,
  GetSendStatisticsCommandOutput,
  SESClientResolvedConfig
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
  constructor(readonly input: GetSendStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSendStatisticsCommandInput, GetSendStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSendStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "GetSendStatisticsCommand";
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
  private serialize(input: GetSendStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSendStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSendStatisticsCommandOutput> {
    return de_GetSendStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
