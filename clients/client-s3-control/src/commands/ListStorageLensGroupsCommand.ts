// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { ListStorageLensGroupsRequest, ListStorageLensGroupsResult } from "../models/models_0";
import { ListStorageLensGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
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
export class ListStorageLensGroupsCommand extends command<ListStorageLensGroupsCommandInput, ListStorageLensGroupsCommandOutput>(
  _ep0,
  _mw1,
  "ListStorageLensGroups",
  ListStorageLensGroups$
) {
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
