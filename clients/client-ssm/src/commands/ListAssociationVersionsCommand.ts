// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAssociationVersionsRequest,
  ListAssociationVersionsResult,
  ListAssociationVersionsResultFilterSensitiveLog,
} from "../models/models_1";
import { de_ListAssociationVersionsCommand, se_ListAssociationVersionsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssociationVersionsCommand}.
 */
export interface ListAssociationVersionsCommandInput extends ListAssociationVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociationVersionsCommand}.
 */
export interface ListAssociationVersionsCommandOutput extends ListAssociationVersionsResult, __MetadataBearer {}

/**
 * <p>Retrieves all versions of an association for a specific association ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListAssociationVersionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListAssociationVersionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMClient(config);
 * const input = { // ListAssociationVersionsRequest
 *   AssociationId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAssociationVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociationVersionsResult
 * //   AssociationVersions: [ // AssociationVersionList
 * //     { // AssociationVersionInfo
 * //       AssociationId: "STRING_VALUE",
 * //       AssociationVersion: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE",
 * //       DocumentVersion: "STRING_VALUE",
 * //       Parameters: { // Parameters
 * //         "<keys>": [ // ParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Targets: [ // Targets
 * //         { // Target
 * //           Key: "STRING_VALUE",
 * //           Values: [ // TargetValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       ScheduleExpression: "STRING_VALUE",
 * //       OutputLocation: { // InstanceAssociationOutputLocation
 * //         S3Location: { // S3OutputLocation
 * //           OutputS3Region: "STRING_VALUE",
 * //           OutputS3BucketName: "STRING_VALUE",
 * //           OutputS3KeyPrefix: "STRING_VALUE",
 * //         },
 * //       },
 * //       AssociationName: "STRING_VALUE",
 * //       MaxErrors: "STRING_VALUE",
 * //       MaxConcurrency: "STRING_VALUE",
 * //       ComplianceSeverity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "UNSPECIFIED",
 * //       SyncCompliance: "AUTO" || "MANUAL",
 * //       ApplyOnlyAtCronInterval: true || false,
 * //       CalendarNames: [ // CalendarNameOrARNList
 * //         "STRING_VALUE",
 * //       ],
 * //       TargetLocations: [ // TargetLocations
 * //         { // TargetLocation
 * //           Accounts: [ // Accounts
 * //             "STRING_VALUE",
 * //           ],
 * //           Regions: [ // Regions
 * //             "STRING_VALUE",
 * //           ],
 * //           TargetLocationMaxConcurrency: "STRING_VALUE",
 * //           TargetLocationMaxErrors: "STRING_VALUE",
 * //           ExecutionRoleName: "STRING_VALUE",
 * //           TargetLocationAlarmConfiguration: { // AlarmConfiguration
 * //             IgnorePollAlarmFailure: true || false,
 * //             Alarms: [ // AlarmList // required
 * //               { // Alarm
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //           IncludeChildOrganizationUnits: true || false,
 * //           ExcludeAccounts: [ // ExcludeAccounts
 * //             "STRING_VALUE",
 * //           ],
 * //           Targets: [
 * //             {
 * //               Key: "STRING_VALUE",
 * //               Values: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           TargetsMaxConcurrency: "STRING_VALUE",
 * //           TargetsMaxErrors: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ScheduleOffset: Number("int"),
 * //       Duration: Number("int"),
 * //       TargetMaps: [ // TargetMaps
 * //         { // TargetMap
 * //           "<keys>": [ // TargetMapValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociationVersionsCommandInput - {@link ListAssociationVersionsCommandInput}
 * @returns {@link ListAssociationVersionsCommandOutput}
 * @see {@link ListAssociationVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAssociationVersionsCommandOutput} for command's `response` shape.
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
export class ListAssociationVersionsCommand extends $Command
  .classBuilder<
    ListAssociationVersionsCommandInput,
    ListAssociationVersionsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "ListAssociationVersions", {})
  .n("SSMClient", "ListAssociationVersionsCommand")
  .f(void 0, ListAssociationVersionsResultFilterSensitiveLog)
  .ser(se_ListAssociationVersionsCommand)
  .de(de_ListAssociationVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociationVersionsRequest;
      output: ListAssociationVersionsResult;
    };
    sdk: {
      input: ListAssociationVersionsCommandInput;
      output: ListAssociationVersionsCommandOutput;
    };
  };
}
