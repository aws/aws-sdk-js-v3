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

import {
  GetJourneyRunExecutionActivityMetricsRequest,
  GetJourneyRunExecutionActivityMetricsResponse,
} from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  de_GetJourneyRunExecutionActivityMetricsCommand,
  se_GetJourneyRunExecutionActivityMetricsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetJourneyRunExecutionActivityMetricsCommand}.
 */
export interface GetJourneyRunExecutionActivityMetricsCommandInput
  extends GetJourneyRunExecutionActivityMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetJourneyRunExecutionActivityMetricsCommand}.
 */
export interface GetJourneyRunExecutionActivityMetricsCommandOutput
  extends GetJourneyRunExecutionActivityMetricsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey activity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyRunExecutionActivityMetricsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyRunExecutionActivityMetricsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // GetJourneyRunExecutionActivityMetricsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   JourneyActivityId: "STRING_VALUE", // required
 *   JourneyId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   PageSize: "STRING_VALUE",
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new GetJourneyRunExecutionActivityMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetJourneyRunExecutionActivityMetricsResponse
 * //   JourneyRunExecutionActivityMetricsResponse: { // JourneyRunExecutionActivityMetricsResponse
 * //     ActivityType: "STRING_VALUE", // required
 * //     ApplicationId: "STRING_VALUE", // required
 * //     JourneyActivityId: "STRING_VALUE", // required
 * //     JourneyId: "STRING_VALUE", // required
 * //     LastEvaluatedTime: "STRING_VALUE", // required
 * //     Metrics: { // MapOf__string // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     RunId: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetJourneyRunExecutionActivityMetricsCommandInput - {@link GetJourneyRunExecutionActivityMetricsCommandInput}
 * @returns {@link GetJourneyRunExecutionActivityMetricsCommandOutput}
 * @see {@link GetJourneyRunExecutionActivityMetricsCommandInput} for command's `input` shape.
 * @see {@link GetJourneyRunExecutionActivityMetricsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 * @example To get the activity execution metrics for a journey run
 * ```javascript
 * // The following example gets activity execution metrics for a single run of a journey.
 * const input = {
 *   "ApplicationId": "11111111112222222222333333333344",
 *   "JourneyId": "aaaaaaaaaabbbbbbbbbbccccccccccdd",
 *   "RunId": "99999999998888888888777777777766",
 *   "JourneyActivityId": "AAAAAAAAAA"
 * };
 * const command = new GetJourneyRunExecutionActivityMetricsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "JourneyRunExecutionActivityMetricsResponse": {
 *     "ApplicationId": "11111111112222222222333333333344",
 *     "JourneyId": "aaaaaaaaaabbbbbbbbbbccccccccccdd",
 *     "RunId": "99999999998888888888777777777766",
 *     "JourneyActivityId": "AAAAAAAAAA",
 *     "ActivityType": "EMAIL",
 *     "LastEvaluatedTime": "2000-01-01T00:00:05.000Z",
 *     "Metrics": {
 *       "SUCCESS": "1"
 *     }
 *   }
 * }
 * *\/
 * // example id: to-get-the-activity-execution-metrics-for-a-journey-run
 * ```
 *
 */
export class GetJourneyRunExecutionActivityMetricsCommand extends $Command<
  GetJourneyRunExecutionActivityMetricsCommandInput,
  GetJourneyRunExecutionActivityMetricsCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: GetJourneyRunExecutionActivityMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetJourneyRunExecutionActivityMetricsCommandInput, GetJourneyRunExecutionActivityMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetJourneyRunExecutionActivityMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetJourneyRunExecutionActivityMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "GetJourneyRunExecutionActivityMetrics",
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
  private serialize(
    input: GetJourneyRunExecutionActivityMetricsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetJourneyRunExecutionActivityMetricsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetJourneyRunExecutionActivityMetricsCommandOutput> {
    return de_GetJourneyRunExecutionActivityMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
