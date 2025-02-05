// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListUserProfilesRequest, ListUserProfilesResponse } from "../models/models_4";
import { de_ListUserProfilesCommand, se_ListUserProfilesCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUserProfilesCommand}.
 */
export interface ListUserProfilesCommandInput extends ListUserProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListUserProfilesCommand}.
 */
export interface ListUserProfilesCommandOutput extends ListUserProfilesResponse, __MetadataBearer {}

/**
 * <p>Lists user profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListUserProfilesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListUserProfilesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerClient(config);
 * const input = { // ListUserProfilesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SortOrder: "Ascending" || "Descending",
 *   SortBy: "CreationTime" || "LastModifiedTime",
 *   DomainIdEquals: "STRING_VALUE",
 *   UserProfileNameContains: "STRING_VALUE",
 * };
 * const command = new ListUserProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListUserProfilesResponse
 * //   UserProfiles: [ // UserProfileList
 * //     { // UserProfileDetails
 * //       DomainId: "STRING_VALUE",
 * //       UserProfileName: "STRING_VALUE",
 * //       Status: "Deleting" || "Failed" || "InService" || "Pending" || "Updating" || "Update_Failed" || "Delete_Failed",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserProfilesCommandInput - {@link ListUserProfilesCommandInput}
 * @returns {@link ListUserProfilesCommandOutput}
 * @see {@link ListUserProfilesCommandInput} for command's `input` shape.
 * @see {@link ListUserProfilesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListUserProfilesCommand extends $Command
  .classBuilder<
    ListUserProfilesCommandInput,
    ListUserProfilesCommandOutput,
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
  .s("SageMaker", "ListUserProfiles", {})
  .n("SageMakerClient", "ListUserProfilesCommand")
  .f(void 0, void 0)
  .ser(se_ListUserProfilesCommand)
  .de(de_ListUserProfilesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUserProfilesRequest;
      output: ListUserProfilesResponse;
    };
    sdk: {
      input: ListUserProfilesCommandInput;
      output: ListUserProfilesCommandOutput;
    };
  };
}
