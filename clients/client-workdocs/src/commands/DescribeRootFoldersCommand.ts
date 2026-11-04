// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeRootFoldersRequest, DescribeRootFoldersResponse } from "../models/models_0";
import { DescribeRootFolders$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeRootFoldersCommand}.
 */
export interface DescribeRootFoldersCommandInput extends DescribeRootFoldersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRootFoldersCommand}.
 */
export interface DescribeRootFoldersCommandOutput extends DescribeRootFoldersResponse, __MetadataBearer {}

/**
 * Describes the current user's special folders; the `RootFolder` and the `RecycleBin`. `RootFolder` is the root of user's files and folders and `RecycleBin` is the root of recycled items. This is not a valid action for SigV4 (administrative API) clients.
 *
 * This action requires an authentication token. To get an authentication token, register an application with Amazon WorkDocs. For more information, see [Authentication and Access Control for User Applications](https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html) in the *Amazon WorkDocs Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeRootFoldersCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeRootFoldersCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // DescribeRootFoldersRequest
 *   AuthenticationToken: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeRootFoldersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRootFoldersResponse
 * //   Folders: [ // FolderMetadataList
 * //     { // FolderMetadata
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       CreatorId: "STRING_VALUE",
 * //       ParentFolderId: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       ModifiedTimestamp: new Date("TIMESTAMP"),
 * //       ResourceState: "ACTIVE" || "RESTORING" || "RECYCLING" || "RECYCLED",
 * //       Signature: "STRING_VALUE",
 * //       Labels: [ // SharedLabels
 * //         "STRING_VALUE",
 * //       ],
 * //       Size: Number("long"),
 * //       LatestVersionSize: Number("long"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRootFoldersCommandInput - {@link DescribeRootFoldersCommandInput}
 * @returns {@link DescribeRootFoldersCommandOutput}
 * @see {@link DescribeRootFoldersCommandInput} for command's `input` shape.
 * @see {@link DescribeRootFoldersCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *
 * The Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The pagination marker or limit fields are not valid.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * One or more of the dependencies is unavailable.
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *
 * The operation is not permitted.
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *
 * The caller does not have access to perform the action on the resource.
 *
 * @throws {@link WorkDocsServiceException}
 *
 * Base exception class for all service exceptions from WorkDocs service.
 *
 * @public
 */
export class DescribeRootFoldersCommand extends command<DescribeRootFoldersCommandInput, DescribeRootFoldersCommandOutput>(
  _ep0,
  _mw0,
  "DescribeRootFolders",
  DescribeRootFolders$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRootFoldersRequest;
      output: DescribeRootFoldersResponse;
    };
    sdk: {
      input: DescribeRootFoldersCommandInput;
      output: DescribeRootFoldersCommandOutput;
    };
  };
}
