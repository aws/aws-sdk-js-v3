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

import { GetJourneyDateRangeKpiRequest, GetJourneyDateRangeKpiResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetJourneyDateRangeKpiCommand, se_GetJourneyDateRangeKpiCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetJourneyDateRangeKpiCommand}.
 */
export interface GetJourneyDateRangeKpiCommandInput extends GetJourneyDateRangeKpiRequest {}
/**
 * @public
 *
 * The output of {@link GetJourneyDateRangeKpiCommand}.
 */
export interface GetJourneyDateRangeKpiCommandOutput extends GetJourneyDateRangeKpiResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyDateRangeKpiCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyDateRangeKpiCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // GetJourneyDateRangeKpiRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EndTime: new Date("TIMESTAMP"),
 *   JourneyId: "STRING_VALUE", // required
 *   KpiName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   PageSize: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 * };
 * const command = new GetJourneyDateRangeKpiCommand(input);
 * const response = await client.send(command);
 * // { // GetJourneyDateRangeKpiResponse
 * //   JourneyDateRangeKpiResponse: { // JourneyDateRangeKpiResponse
 * //     ApplicationId: "STRING_VALUE", // required
 * //     EndTime: new Date("TIMESTAMP"), // required
 * //     JourneyId: "STRING_VALUE", // required
 * //     KpiName: "STRING_VALUE", // required
 * //     KpiResult: { // BaseKpiResult
 * //       Rows: [ // ListOfResultRow // required
 * //         { // ResultRow
 * //           GroupedBys: [ // ListOfResultRowValue // required
 * //             { // ResultRowValue
 * //               Key: "STRING_VALUE", // required
 * //               Type: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           Values: [ // required
 * //             {
 * //               Key: "STRING_VALUE", // required
 * //               Type: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     NextToken: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetJourneyDateRangeKpiCommandInput - {@link GetJourneyDateRangeKpiCommandInput}
 * @returns {@link GetJourneyDateRangeKpiCommandOutput}
 * @see {@link GetJourneyDateRangeKpiCommandInput} for command's `input` shape.
 * @see {@link GetJourneyDateRangeKpiCommandOutput} for command's `response` shape.
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
 */
export class GetJourneyDateRangeKpiCommand extends $Command<
  GetJourneyDateRangeKpiCommandInput,
  GetJourneyDateRangeKpiCommandOutput,
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
  constructor(readonly input: GetJourneyDateRangeKpiCommandInput) {
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
  ): Handler<GetJourneyDateRangeKpiCommandInput, GetJourneyDateRangeKpiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetJourneyDateRangeKpiCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetJourneyDateRangeKpiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "GetJourneyDateRangeKpi",
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
  private serialize(input: GetJourneyDateRangeKpiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetJourneyDateRangeKpiCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetJourneyDateRangeKpiCommandOutput> {
    return de_GetJourneyDateRangeKpiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
