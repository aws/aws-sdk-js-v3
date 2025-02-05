// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPartnerAppsRequest, ListPartnerAppsResponse } from "../models/models_4";
import { de_ListPartnerAppsCommand, se_ListPartnerAppsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPartnerAppsCommand}.
 */
export interface ListPartnerAppsCommandInput extends ListPartnerAppsRequest {}
/**
 * @public
 *
 * The output of {@link ListPartnerAppsCommand}.
 */
export interface ListPartnerAppsCommandOutput extends ListPartnerAppsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the SageMaker Partner AI Apps in an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListPartnerAppsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListPartnerAppsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerClient(config);
 * const input = { // ListPartnerAppsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPartnerAppsCommand(input);
 * const response = await client.send(command);
 * // { // ListPartnerAppsResponse
 * //   Summaries: [ // PartnerAppSummaries
 * //     { // PartnerAppSummary
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "lakera-guard" || "comet" || "deepchecks-llm-evaluation" || "fiddler",
 * //       Status: "Creating" || "Updating" || "Deleting" || "Available" || "Failed" || "UpdateFailed" || "Deleted",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPartnerAppsCommandInput - {@link ListPartnerAppsCommandInput}
 * @returns {@link ListPartnerAppsCommandOutput}
 * @see {@link ListPartnerAppsCommandInput} for command's `input` shape.
 * @see {@link ListPartnerAppsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListPartnerAppsCommand extends $Command
  .classBuilder<
    ListPartnerAppsCommandInput,
    ListPartnerAppsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "ListPartnerApps", {})
  .n("SageMakerClient", "ListPartnerAppsCommand")
  .f(void 0, void 0)
  .ser(se_ListPartnerAppsCommand)
  .de(de_ListPartnerAppsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPartnerAppsRequest;
      output: ListPartnerAppsResponse;
    };
    sdk: {
      input: ListPartnerAppsCommandInput;
      output: ListPartnerAppsCommandOutput;
    };
  };
}
