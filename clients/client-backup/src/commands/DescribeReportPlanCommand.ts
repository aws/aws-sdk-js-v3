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
import { DescribeReportPlanInput, DescribeReportPlanOutput } from "../models/models_0";
import { de_DescribeReportPlanCommand, se_DescribeReportPlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReportPlanCommand}.
 */
export interface DescribeReportPlanCommandInput extends DescribeReportPlanInput {}
/**
 * @public
 *
 * The output of {@link DescribeReportPlanCommand}.
 */
export interface DescribeReportPlanCommandOutput extends DescribeReportPlanOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all report plans for an Amazon Web Services account and Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeReportPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeReportPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // DescribeReportPlanInput
 *   ReportPlanName: "STRING_VALUE", // required
 * };
 * const command = new DescribeReportPlanCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReportPlanOutput
 * //   ReportPlan: { // ReportPlan
 * //     ReportPlanArn: "STRING_VALUE",
 * //     ReportPlanName: "STRING_VALUE",
 * //     ReportPlanDescription: "STRING_VALUE",
 * //     ReportSetting: { // ReportSetting
 * //       ReportTemplate: "STRING_VALUE", // required
 * //       FrameworkArns: [ // stringList
 * //         "STRING_VALUE",
 * //       ],
 * //       NumberOfFrameworks: Number("int"),
 * //       Accounts: [
 * //         "STRING_VALUE",
 * //       ],
 * //       OrganizationUnits: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Regions: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ReportDeliveryChannel: { // ReportDeliveryChannel
 * //       S3BucketName: "STRING_VALUE", // required
 * //       S3KeyPrefix: "STRING_VALUE",
 * //       Formats: [ // FormatList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     DeploymentStatus: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastAttemptedExecutionTime: new Date("TIMESTAMP"),
 * //     LastSuccessfulExecutionTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeReportPlanCommandInput - {@link DescribeReportPlanCommandInput}
 * @returns {@link DescribeReportPlanCommandOutput}
 * @see {@link DescribeReportPlanCommandInput} for command's `input` shape.
 * @see {@link DescribeReportPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class DescribeReportPlanCommand extends $Command<
  DescribeReportPlanCommandInput,
  DescribeReportPlanCommandOutput,
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
  constructor(readonly input: DescribeReportPlanCommandInput) {
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
  ): Handler<DescribeReportPlanCommandInput, DescribeReportPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReportPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DescribeReportPlanCommand";
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
  private serialize(input: DescribeReportPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeReportPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeReportPlanCommandOutput> {
    return de_DescribeReportPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
