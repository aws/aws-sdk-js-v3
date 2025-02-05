// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetExecutionPreviewRequest, GetExecutionPreviewResponse } from "../models/models_1";
import { de_GetExecutionPreviewCommand, se_GetExecutionPreviewCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExecutionPreviewCommand}.
 */
export interface GetExecutionPreviewCommandInput extends GetExecutionPreviewRequest {}
/**
 * @public
 *
 * The output of {@link GetExecutionPreviewCommand}.
 */
export interface GetExecutionPreviewCommandOutput extends GetExecutionPreviewResponse, __MetadataBearer {}

/**
 * <p>Initiates the process of retrieving an existing preview that shows the effects that running
 *    a specified Automation runbook would have on the targeted resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetExecutionPreviewCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetExecutionPreviewCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMClient(config);
 * const input = { // GetExecutionPreviewRequest
 *   ExecutionPreviewId: "STRING_VALUE", // required
 * };
 * const command = new GetExecutionPreviewCommand(input);
 * const response = await client.send(command);
 * // { // GetExecutionPreviewResponse
 * //   ExecutionPreviewId: "STRING_VALUE",
 * //   EndedAt: new Date("TIMESTAMP"),
 * //   Status: "Pending" || "InProgress" || "Success" || "Failed",
 * //   StatusMessage: "STRING_VALUE",
 * //   ExecutionPreview: { // ExecutionPreview Union: only one key present
 * //     Automation: { // AutomationExecutionPreview
 * //       StepPreviews: { // StepPreviewMap
 * //         "<keys>": Number("int"),
 * //       },
 * //       Regions: [ // RegionList
 * //         "STRING_VALUE",
 * //       ],
 * //       TargetPreviews: [ // TargetPreviewList
 * //         { // TargetPreview
 * //           Count: Number("int"),
 * //           TargetType: "STRING_VALUE",
 * //         },
 * //       ],
 * //       TotalAccounts: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExecutionPreviewCommandInput - {@link GetExecutionPreviewCommandInput}
 * @returns {@link GetExecutionPreviewCommandOutput}
 * @see {@link GetExecutionPreviewCommandInput} for command's `input` shape.
 * @see {@link GetExecutionPreviewCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified parameter to be shared could not be found.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 * @example GetExecutionPreview
 * ```javascript
 * // This example illustrates one usage of GetExecutionPreview
 * const input = {
 *   "ExecutionPreviewId": "2f27d6e5-9676-4708-b8bd-aef0ab47bb26"
 * };
 * const command = new GetExecutionPreviewCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EndedAt": "2024-11-13T01:50:39.424000+00:00",
 *   "ExecutionPreview": {
 *     "Automation": {
 *       "Regions": [
 *         "us-east-2"
 *       ],
 *       "StepPreviews": {
 *         "Undetermined": 1
 *       },
 *       "TotalAccounts": 1
 *     }
 *   },
 *   "ExecutionPreviewId": "2f27d6e5-9676-4708-b8bd-aef0ab47bb26",
 *   "Status": "Success"
 * }
 * *\/
 * // example id: getexecutionpreview-f6ae6a7e734e
 * ```
 *
 */
export class GetExecutionPreviewCommand extends $Command
  .classBuilder<
    GetExecutionPreviewCommandInput,
    GetExecutionPreviewCommandOutput,
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
  .s("AmazonSSM", "GetExecutionPreview", {})
  .n("SSMClient", "GetExecutionPreviewCommand")
  .f(void 0, void 0)
  .ser(se_GetExecutionPreviewCommand)
  .de(de_GetExecutionPreviewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExecutionPreviewRequest;
      output: GetExecutionPreviewResponse;
    };
    sdk: {
      input: GetExecutionPreviewCommandInput;
      output: GetExecutionPreviewCommandOutput;
    };
  };
}
