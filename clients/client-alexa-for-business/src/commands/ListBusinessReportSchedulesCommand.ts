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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListBusinessReportSchedulesRequest, ListBusinessReportSchedulesResponse } from "../models/models_0";
import { de_ListBusinessReportSchedulesCommand, se_ListBusinessReportSchedulesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListBusinessReportSchedulesCommand}.
 */
export interface ListBusinessReportSchedulesCommandInput extends ListBusinessReportSchedulesRequest {}
/**
 * @public
 *
 * The output of {@link ListBusinessReportSchedulesCommand}.
 */
export interface ListBusinessReportSchedulesCommandOutput
  extends ListBusinessReportSchedulesResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Lists the details of the schedules that a user configured. A download URL of the report associated with each schedule is returned every time this action is called. A new download URL is returned each time, and is valid for 24 hours.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListBusinessReportSchedulesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListBusinessReportSchedulesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ListBusinessReportSchedulesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListBusinessReportSchedulesCommand(input);
 * const response = await client.send(command);
 * // { // ListBusinessReportSchedulesResponse
 * //   BusinessReportSchedules: [ // BusinessReportScheduleList
 * //     { // BusinessReportSchedule
 * //       ScheduleArn: "STRING_VALUE",
 * //       ScheduleName: "STRING_VALUE",
 * //       S3BucketName: "STRING_VALUE",
 * //       S3KeyPrefix: "STRING_VALUE",
 * //       Format: "CSV" || "CSV_ZIP",
 * //       ContentRange: { // BusinessReportContentRange
 * //         Interval: "ONE_DAY" || "ONE_WEEK" || "THIRTY_DAYS", // required
 * //       },
 * //       Recurrence: { // BusinessReportRecurrence
 * //         StartDate: "STRING_VALUE",
 * //       },
 * //       LastBusinessReport: { // BusinessReport
 * //         Status: "RUNNING" || "SUCCEEDED" || "FAILED",
 * //         FailureCode: "ACCESS_DENIED" || "NO_SUCH_BUCKET" || "INTERNAL_FAILURE",
 * //         S3Location: { // BusinessReportS3Location
 * //           Path: "STRING_VALUE",
 * //           BucketName: "STRING_VALUE",
 * //         },
 * //         DeliveryTime: new Date("TIMESTAMP"),
 * //         DownloadUrl: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBusinessReportSchedulesCommandInput - {@link ListBusinessReportSchedulesCommandInput}
 * @returns {@link ListBusinessReportSchedulesCommandOutput}
 * @see {@link ListBusinessReportSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListBusinessReportSchedulesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class ListBusinessReportSchedulesCommand extends $Command<
  ListBusinessReportSchedulesCommandInput,
  ListBusinessReportSchedulesCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: ListBusinessReportSchedulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBusinessReportSchedulesCommandInput, ListBusinessReportSchedulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBusinessReportSchedulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ListBusinessReportSchedulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "ListBusinessReportSchedules",
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
  private serialize(input: ListBusinessReportSchedulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListBusinessReportSchedulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListBusinessReportSchedulesCommandOutput> {
    return de_ListBusinessReportSchedulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
