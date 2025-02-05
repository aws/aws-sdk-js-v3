// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartExecutionPreviewRequest, StartExecutionPreviewResponse } from "../models/models_2";
import { de_StartExecutionPreviewCommand, se_StartExecutionPreviewCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartExecutionPreviewCommand}.
 */
export interface StartExecutionPreviewCommandInput extends StartExecutionPreviewRequest {}
/**
 * @public
 *
 * The output of {@link StartExecutionPreviewCommand}.
 */
export interface StartExecutionPreviewCommandOutput extends StartExecutionPreviewResponse, __MetadataBearer {}

/**
 * <p>Initiates the process of creating a preview showing the effects that running a specified
 *    Automation runbook would have on the targeted resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartExecutionPreviewCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartExecutionPreviewCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMClient(config);
 * const input = { // StartExecutionPreviewRequest
 *   DocumentName: "STRING_VALUE", // required
 *   DocumentVersion: "STRING_VALUE",
 *   ExecutionInputs: { // ExecutionInputs Union: only one key present
 *     Automation: { // AutomationExecutionInputs
 *       Parameters: { // AutomationParameterMap
 *         "<keys>": [ // AutomationParameterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       TargetParameterName: "STRING_VALUE",
 *       Targets: [ // Targets
 *         { // Target
 *           Key: "STRING_VALUE",
 *           Values: [ // TargetValues
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       TargetMaps: [ // TargetMaps
 *         { // TargetMap
 *           "<keys>": [ // TargetMapValueList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       TargetLocations: [ // TargetLocations
 *         { // TargetLocation
 *           Accounts: [ // Accounts
 *             "STRING_VALUE",
 *           ],
 *           Regions: [ // Regions
 *             "STRING_VALUE",
 *           ],
 *           TargetLocationMaxConcurrency: "STRING_VALUE",
 *           TargetLocationMaxErrors: "STRING_VALUE",
 *           ExecutionRoleName: "STRING_VALUE",
 *           TargetLocationAlarmConfiguration: { // AlarmConfiguration
 *             IgnorePollAlarmFailure: true || false,
 *             Alarms: [ // AlarmList // required
 *               { // Alarm
 *                 Name: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *           IncludeChildOrganizationUnits: true || false,
 *           ExcludeAccounts: [ // ExcludeAccounts
 *             "STRING_VALUE",
 *           ],
 *           Targets: [
 *             {
 *               Key: "STRING_VALUE",
 *               Values: [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           ],
 *           TargetsMaxConcurrency: "STRING_VALUE",
 *           TargetsMaxErrors: "STRING_VALUE",
 *         },
 *       ],
 *       TargetLocationsURL: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new StartExecutionPreviewCommand(input);
 * const response = await client.send(command);
 * // { // StartExecutionPreviewResponse
 * //   ExecutionPreviewId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartExecutionPreviewCommandInput - {@link StartExecutionPreviewCommandInput}
 * @returns {@link StartExecutionPreviewCommandOutput}
 * @see {@link StartExecutionPreviewCommandInput} for command's `input` shape.
 * @see {@link StartExecutionPreviewCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Verify that you entered valid contents for the command and try
 *    again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 * @example StartExecutionPreview
 * ```javascript
 * // This example illustrates one usage of StartExecutionPreview
 * const input = {
 *   "DocumentName": "AWS-StartEC2Instance"
 * };
 * const command = new StartExecutionPreviewCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ExecutionPreviewId": "2f27d6e5-9676-4708-b8bd-aef0ab47bb26"
 * }
 * *\/
 * // example id: startexecutionpreview-7a6b962646a9
 * ```
 *
 */
export class StartExecutionPreviewCommand extends $Command
  .classBuilder<
    StartExecutionPreviewCommandInput,
    StartExecutionPreviewCommandOutput,
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
  .s("AmazonSSM", "StartExecutionPreview", {})
  .n("SSMClient", "StartExecutionPreviewCommand")
  .f(void 0, void 0)
  .ser(se_StartExecutionPreviewCommand)
  .de(de_StartExecutionPreviewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartExecutionPreviewRequest;
      output: StartExecutionPreviewResponse;
    };
    sdk: {
      input: StartExecutionPreviewCommandInput;
      output: StartExecutionPreviewCommandOutput;
    };
  };
}
