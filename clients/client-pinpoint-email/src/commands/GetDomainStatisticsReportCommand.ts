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

import { GetDomainStatisticsReportRequest, GetDomainStatisticsReportResponse } from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { de_GetDomainStatisticsReportCommand, se_GetDomainStatisticsReportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDomainStatisticsReportCommand}.
 */
export interface GetDomainStatisticsReportCommandInput extends GetDomainStatisticsReportRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainStatisticsReportCommand}.
 */
export interface GetDomainStatisticsReportCommandOutput extends GetDomainStatisticsReportResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieve inbox placement and engagement rates for the domains that you use to send
 *             email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetDomainStatisticsReportCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetDomainStatisticsReportCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const input = { // GetDomainStatisticsReportRequest
 *   Domain: "STRING_VALUE", // required
 *   StartDate: new Date("TIMESTAMP"), // required
 *   EndDate: new Date("TIMESTAMP"), // required
 * };
 * const command = new GetDomainStatisticsReportCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainStatisticsReportResponse
 * //   OverallVolume: { // OverallVolume
 * //     VolumeStatistics: { // VolumeStatistics
 * //       InboxRawCount: Number("long"),
 * //       SpamRawCount: Number("long"),
 * //       ProjectedInbox: Number("long"),
 * //       ProjectedSpam: Number("long"),
 * //     },
 * //     ReadRatePercent: Number("double"),
 * //     DomainIspPlacements: [ // DomainIspPlacements
 * //       { // DomainIspPlacement
 * //         IspName: "STRING_VALUE",
 * //         InboxRawCount: Number("long"),
 * //         SpamRawCount: Number("long"),
 * //         InboxPercentage: Number("double"),
 * //         SpamPercentage: Number("double"),
 * //       },
 * //     ],
 * //   },
 * //   DailyVolumes: [ // DailyVolumes // required
 * //     { // DailyVolume
 * //       StartDate: new Date("TIMESTAMP"),
 * //       VolumeStatistics: {
 * //         InboxRawCount: Number("long"),
 * //         SpamRawCount: Number("long"),
 * //         ProjectedInbox: Number("long"),
 * //         ProjectedSpam: Number("long"),
 * //       },
 * //       DomainIspPlacements: [
 * //         {
 * //           IspName: "STRING_VALUE",
 * //           InboxRawCount: Number("long"),
 * //           SpamRawCount: Number("long"),
 * //           InboxPercentage: Number("double"),
 * //           SpamPercentage: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDomainStatisticsReportCommandInput - {@link GetDomainStatisticsReportCommandInput}
 * @returns {@link GetDomainStatisticsReportCommandOutput}
 * @see {@link GetDomainStatisticsReportCommandInput} for command's `input` shape.
 * @see {@link GetDomainStatisticsReportCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 */
export class GetDomainStatisticsReportCommand extends $Command<
  GetDomainStatisticsReportCommandInput,
  GetDomainStatisticsReportCommandOutput,
  PinpointEmailClientResolvedConfig
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
  constructor(readonly input: GetDomainStatisticsReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDomainStatisticsReportCommandInput, GetDomainStatisticsReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDomainStatisticsReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "GetDomainStatisticsReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPinpointEmailService",
        operation: "GetDomainStatisticsReport",
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
  private serialize(input: GetDomainStatisticsReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDomainStatisticsReportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDomainStatisticsReportCommandOutput> {
    return de_GetDomainStatisticsReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
