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

import { GetDeliverabilityTestReportRequest, GetDeliverabilityTestReportResponse } from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  de_GetDeliverabilityTestReportCommand,
  se_GetDeliverabilityTestReportCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDeliverabilityTestReportCommand}.
 */
export interface GetDeliverabilityTestReportCommandInput extends GetDeliverabilityTestReportRequest {}
/**
 * @public
 *
 * The output of {@link GetDeliverabilityTestReportCommand}.
 */
export interface GetDeliverabilityTestReportCommandOutput
  extends GetDeliverabilityTestReportResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieve the results of a predictive inbox placement test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetDeliverabilityTestReportCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetDeliverabilityTestReportCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const input = { // GetDeliverabilityTestReportRequest
 *   ReportId: "STRING_VALUE", // required
 * };
 * const command = new GetDeliverabilityTestReportCommand(input);
 * const response = await client.send(command);
 * // { // GetDeliverabilityTestReportResponse
 * //   DeliverabilityTestReport: { // DeliverabilityTestReport
 * //     ReportId: "STRING_VALUE",
 * //     ReportName: "STRING_VALUE",
 * //     Subject: "STRING_VALUE",
 * //     FromEmailAddress: "STRING_VALUE",
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     DeliverabilityTestStatus: "IN_PROGRESS" || "COMPLETED",
 * //   },
 * //   OverallPlacement: { // PlacementStatistics
 * //     InboxPercentage: Number("double"),
 * //     SpamPercentage: Number("double"),
 * //     MissingPercentage: Number("double"),
 * //     SpfPercentage: Number("double"),
 * //     DkimPercentage: Number("double"),
 * //   },
 * //   IspPlacements: [ // IspPlacements // required
 * //     { // IspPlacement
 * //       IspName: "STRING_VALUE",
 * //       PlacementStatistics: {
 * //         InboxPercentage: Number("double"),
 * //         SpamPercentage: Number("double"),
 * //         MissingPercentage: Number("double"),
 * //         SpfPercentage: Number("double"),
 * //         DkimPercentage: Number("double"),
 * //       },
 * //     },
 * //   ],
 * //   Message: "STRING_VALUE",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDeliverabilityTestReportCommandInput - {@link GetDeliverabilityTestReportCommandInput}
 * @returns {@link GetDeliverabilityTestReportCommandOutput}
 * @see {@link GetDeliverabilityTestReportCommandInput} for command's `input` shape.
 * @see {@link GetDeliverabilityTestReportCommandOutput} for command's `response` shape.
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
export class GetDeliverabilityTestReportCommand extends $Command<
  GetDeliverabilityTestReportCommandInput,
  GetDeliverabilityTestReportCommandOutput,
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
  constructor(readonly input: GetDeliverabilityTestReportCommandInput) {
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
  ): Handler<GetDeliverabilityTestReportCommandInput, GetDeliverabilityTestReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDeliverabilityTestReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "GetDeliverabilityTestReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPinpointEmailService",
        operation: "GetDeliverabilityTestReport",
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
  private serialize(input: GetDeliverabilityTestReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDeliverabilityTestReportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDeliverabilityTestReportCommandOutput> {
    return de_GetDeliverabilityTestReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
