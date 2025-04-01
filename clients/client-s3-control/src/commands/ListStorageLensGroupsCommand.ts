// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListStorageLensGroupsRequest, ListStorageLensGroupsResult } from "../models/models_1";
import { de_ListStorageLensGroupsCommand, se_ListStorageLensGroupsCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStorageLensGroupsCommand}.
 */
export interface ListStorageLensGroupsCommandInput extends ListStorageLensGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListStorageLensGroupsCommand}.
 */
export interface ListStorageLensGroupsCommandOutput extends ListStorageLensGroupsResult, __MetadataBearer {}

/**
 * <p>
 * Lists all the Storage Lens groups in the specified home Region.
 * </p>
 *          <p>To use this operation, you must have the permission to perform the
 *       <code>s3:ListStorageLensGroups</code> action. For more information about the required Storage Lens
 *       Groups permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_iam_permissions.html#storage_lens_groups_permissions">Setting account permissions to use S3 Storage Lens groups</a>.</p>
 *          <p>For information about Storage Lens groups errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#S3LensErrorCodeList">List of Amazon S3 Storage
 *       Lens error codes</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListStorageLensGroupsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListStorageLensGroupsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // ListStorageLensGroupsRequest
 *   AccountId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListStorageLensGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListStorageLensGroupsResult
 * //   NextToken: "STRING_VALUE",
 * //   StorageLensGroupList: [ // StorageLensGroupList
 * //     { // ListStorageLensGroupEntry
 * //       Name: "STRING_VALUE", // required
 * //       StorageLensGroupArn: "STRING_VALUE", // required
 * //       HomeRegion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListStorageLensGroupsCommandInput - {@link ListStorageLensGroupsCommandInput}
 * @returns {@link ListStorageLensGroupsCommandOutput}
 * @see {@link ListStorageLensGroupsCommandInput} for command's `input` shape.
 * @see {@link ListStorageLensGroupsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class ListStorageLensGroupsCommand extends $Command
  .classBuilder<
    ListStorageLensGroupsCommandInput,
    ListStorageLensGroupsCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "ListStorageLensGroups", {})
  .n("S3ControlClient", "ListStorageLensGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListStorageLensGroupsCommand)
  .de(de_ListStorageLensGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStorageLensGroupsRequest;
      output: ListStorageLensGroupsResult;
    };
    sdk: {
      input: ListStorageLensGroupsCommandInput;
      output: ListStorageLensGroupsCommandOutput;
    };
  };
}
