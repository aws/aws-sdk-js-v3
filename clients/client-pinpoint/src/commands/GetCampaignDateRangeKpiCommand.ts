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

import { GetCampaignDateRangeKpiRequest, GetCampaignDateRangeKpiResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetCampaignDateRangeKpiCommand, se_GetCampaignDateRangeKpiCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCampaignDateRangeKpiCommand}.
 */
export interface GetCampaignDateRangeKpiCommandInput extends GetCampaignDateRangeKpiRequest {}
/**
 * @public
 *
 * The output of {@link GetCampaignDateRangeKpiCommand}.
 */
export interface GetCampaignDateRangeKpiCommandOutput extends GetCampaignDateRangeKpiResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetCampaignDateRangeKpiCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetCampaignDateRangeKpiCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // GetCampaignDateRangeKpiRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   CampaignId: "STRING_VALUE", // required
 *   EndTime: new Date("TIMESTAMP"),
 *   KpiName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   PageSize: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 * };
 * const command = new GetCampaignDateRangeKpiCommand(input);
 * const response = await client.send(command);
 * // { // GetCampaignDateRangeKpiResponse
 * //   CampaignDateRangeKpiResponse: { // CampaignDateRangeKpiResponse
 * //     ApplicationId: "STRING_VALUE", // required
 * //     CampaignId: "STRING_VALUE", // required
 * //     EndTime: new Date("TIMESTAMP"), // required
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
 * @param GetCampaignDateRangeKpiCommandInput - {@link GetCampaignDateRangeKpiCommandInput}
 * @returns {@link GetCampaignDateRangeKpiCommandOutput}
 * @see {@link GetCampaignDateRangeKpiCommandInput} for command's `input` shape.
 * @see {@link GetCampaignDateRangeKpiCommandOutput} for command's `response` shape.
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
export class GetCampaignDateRangeKpiCommand extends $Command<
  GetCampaignDateRangeKpiCommandInput,
  GetCampaignDateRangeKpiCommandOutput,
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
  constructor(readonly input: GetCampaignDateRangeKpiCommandInput) {
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
  ): Handler<GetCampaignDateRangeKpiCommandInput, GetCampaignDateRangeKpiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCampaignDateRangeKpiCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetCampaignDateRangeKpiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "GetCampaignDateRangeKpi",
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
  private serialize(input: GetCampaignDateRangeKpiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCampaignDateRangeKpiCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCampaignDateRangeKpiCommandOutput> {
    return de_GetCampaignDateRangeKpiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
