// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetFlowLogsIntegrationTemplateRequest, GetFlowLogsIntegrationTemplateResult } from "../models/models_5";
import {
  de_GetFlowLogsIntegrationTemplateCommand,
  se_GetFlowLogsIntegrationTemplateCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFlowLogsIntegrationTemplateCommand}.
 */
export interface GetFlowLogsIntegrationTemplateCommandInput extends GetFlowLogsIntegrationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetFlowLogsIntegrationTemplateCommand}.
 */
export interface GetFlowLogsIntegrationTemplateCommandOutput
  extends GetFlowLogsIntegrationTemplateResult,
    __MetadataBearer {}

/**
 * <p>Generates a CloudFormation template that streamlines and automates the integration of VPC flow logs
 *             with Amazon Athena. This make it easier for you to query and gain insights from VPC flow logs data.
 *             Based on the information that you provide, we configure resources in the template to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Create a table in Athena that maps fields to a custom log format</p>
 *             </li>
 *             <li>
 *                <p>Create a Lambda function that updates the table with new partitions on a daily, weekly, or
 *                     monthly basis</p>
 *             </li>
 *             <li>
 *                <p>Create a table partitioned between two timestamps in the past</p>
 *             </li>
 *             <li>
 *                <p>Create a set of named queries in Athena that you can use to get started quickly</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>
 *                <code>GetFlowLogsIntegrationTemplate</code> does not support integration between
 *                     Amazon Web Services Transit Gateway Flow Logs and Amazon Athena.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetFlowLogsIntegrationTemplateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetFlowLogsIntegrationTemplateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetFlowLogsIntegrationTemplateRequest
 *   DryRun: true || false,
 *   FlowLogId: "STRING_VALUE", // required
 *   ConfigDeliveryS3DestinationArn: "STRING_VALUE", // required
 *   IntegrateServices: { // IntegrateServices
 *     AthenaIntegrations: [ // AthenaIntegrationsSet
 *       { // AthenaIntegration
 *         IntegrationResultS3DestinationArn: "STRING_VALUE", // required
 *         PartitionLoadFrequency: "none" || "daily" || "weekly" || "monthly", // required
 *         PartitionStartDate: new Date("TIMESTAMP"),
 *         PartitionEndDate: new Date("TIMESTAMP"),
 *       },
 *     ],
 *   },
 * };
 * const command = new GetFlowLogsIntegrationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetFlowLogsIntegrationTemplateResult
 * //   Result: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFlowLogsIntegrationTemplateCommandInput - {@link GetFlowLogsIntegrationTemplateCommandInput}
 * @returns {@link GetFlowLogsIntegrationTemplateCommandOutput}
 * @see {@link GetFlowLogsIntegrationTemplateCommandInput} for command's `input` shape.
 * @see {@link GetFlowLogsIntegrationTemplateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class GetFlowLogsIntegrationTemplateCommand extends $Command
  .classBuilder<
    GetFlowLogsIntegrationTemplateCommandInput,
    GetFlowLogsIntegrationTemplateCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "GetFlowLogsIntegrationTemplate", {})
  .n("EC2Client", "GetFlowLogsIntegrationTemplateCommand")
  .f(void 0, void 0)
  .ser(se_GetFlowLogsIntegrationTemplateCommand)
  .de(de_GetFlowLogsIntegrationTemplateCommand)
  .build() {}
