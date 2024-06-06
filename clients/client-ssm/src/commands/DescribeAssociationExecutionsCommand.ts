// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAssociationExecutionsRequest, DescribeAssociationExecutionsResult } from "../models/models_0";
import {
  de_DescribeAssociationExecutionsCommand,
  se_DescribeAssociationExecutionsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssociationExecutionsCommand}.
 */
export interface DescribeAssociationExecutionsCommandInput extends DescribeAssociationExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssociationExecutionsCommand}.
 */
export interface DescribeAssociationExecutionsCommandOutput
  extends DescribeAssociationExecutionsResult,
    __MetadataBearer {}

/**
 * <p>Views all executions for a specific association ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAssociationExecutionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeAssociationExecutionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeAssociationExecutionsRequest
 *   AssociationId: "STRING_VALUE", // required
 *   Filters: [ // AssociationExecutionFilterList
 *     { // AssociationExecutionFilter
 *       Key: "ExecutionId" || "Status" || "CreatedTime", // required
 *       Value: "STRING_VALUE", // required
 *       Type: "EQUAL" || "LESS_THAN" || "GREATER_THAN", // required
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAssociationExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssociationExecutionsResult
 * //   AssociationExecutions: [ // AssociationExecutionsList
 * //     { // AssociationExecution
 * //       AssociationId: "STRING_VALUE",
 * //       AssociationVersion: "STRING_VALUE",
 * //       ExecutionId: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       DetailedStatus: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastExecutionDate: new Date("TIMESTAMP"),
 * //       ResourceCountByStatus: "STRING_VALUE",
 * //       AlarmConfiguration: { // AlarmConfiguration
 * //         IgnorePollAlarmFailure: true || false,
 * //         Alarms: [ // AlarmList // required
 * //           { // Alarm
 * //             Name: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       TriggeredAlarms: [ // AlarmStateInformationList
 * //         { // AlarmStateInformation
 * //           Name: "STRING_VALUE", // required
 * //           State: "UNKNOWN" || "ALARM", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAssociationExecutionsCommandInput - {@link DescribeAssociationExecutionsCommandInput}
 * @returns {@link DescribeAssociationExecutionsCommandOutput}
 * @see {@link DescribeAssociationExecutionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAssociationExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AssociationDoesNotExist} (client fault)
 *  <p>The specified association doesn't exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class DescribeAssociationExecutionsCommand extends $Command
  .classBuilder<
    DescribeAssociationExecutionsCommandInput,
    DescribeAssociationExecutionsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "DescribeAssociationExecutions", {})
  .n("SSMClient", "DescribeAssociationExecutionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAssociationExecutionsCommand)
  .de(de_DescribeAssociationExecutionsCommand)
  .build() {}
