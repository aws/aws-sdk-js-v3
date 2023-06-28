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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListReportPlansInput, ListReportPlansOutput } from "../models/models_0";
import { de_ListReportPlansCommand, se_ListReportPlansCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListReportPlansCommand}.
 */
export interface ListReportPlansCommandInput extends ListReportPlansInput {}
/**
 * @public
 *
 * The output of {@link ListReportPlansCommand}.
 */
export interface ListReportPlansCommandOutput extends ListReportPlansOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of your report plans. For detailed information about a single report
 *          plan, use <code>DescribeReportPlan</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListReportPlansCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListReportPlansCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListReportPlansInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListReportPlansCommand(input);
 * const response = await client.send(command);
 * // { // ListReportPlansOutput
 * //   ReportPlans: [ // ReportPlanList
 * //     { // ReportPlan
 * //       ReportPlanArn: "STRING_VALUE",
 * //       ReportPlanName: "STRING_VALUE",
 * //       ReportPlanDescription: "STRING_VALUE",
 * //       ReportSetting: { // ReportSetting
 * //         ReportTemplate: "STRING_VALUE", // required
 * //         FrameworkArns: [ // stringList
 * //           "STRING_VALUE",
 * //         ],
 * //         NumberOfFrameworks: Number("int"),
 * //         Accounts: [
 * //           "STRING_VALUE",
 * //         ],
 * //         OrganizationUnits: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Regions: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ReportDeliveryChannel: { // ReportDeliveryChannel
 * //         S3BucketName: "STRING_VALUE", // required
 * //         S3KeyPrefix: "STRING_VALUE",
 * //         Formats: [ // FormatList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       DeploymentStatus: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastAttemptedExecutionTime: new Date("TIMESTAMP"),
 * //       LastSuccessfulExecutionTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReportPlansCommandInput - {@link ListReportPlansCommandInput}
 * @returns {@link ListReportPlansCommandOutput}
 * @see {@link ListReportPlansCommandInput} for command's `input` shape.
 * @see {@link ListReportPlansCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class ListReportPlansCommand extends $Command<
  ListReportPlansCommandInput,
  ListReportPlansCommandOutput,
  BackupClientResolvedConfig
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
  constructor(readonly input: ListReportPlansCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReportPlansCommandInput, ListReportPlansCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReportPlansCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListReportPlansCommand";
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
  private serialize(input: ListReportPlansCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListReportPlansCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReportPlansCommandOutput> {
    return de_ListReportPlansCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
