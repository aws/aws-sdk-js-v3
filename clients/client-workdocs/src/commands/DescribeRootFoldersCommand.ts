// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeRootFoldersRequest,
  DescribeRootFoldersRequestFilterSensitiveLog,
  DescribeRootFoldersResponse,
  DescribeRootFoldersResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeRootFoldersCommand, se_DescribeRootFoldersCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Describes the current user's special folders; the <code>RootFolder</code> and the
 *                 <code>RecycleBin</code>. <code>RootFolder</code> is the root of user's files and
 *             folders and <code>RecycleBin</code> is the root of recycled items. This is not a valid
 *             action for SigV4 (administrative API) clients.</p>
 *          <p>This action requires an authentication token. To get an authentication token,
 *             register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access
 *                 Control for User Applications</a> in the
 *             <i>Amazon
 *             WorkDocs Developer Guide</i>.</p>
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
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The pagination marker or limit fields are not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>The operation is not permitted.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 * @throws {@link WorkDocsServiceException}
 * <p>Base exception class for all service exceptions from WorkDocs service.</p>
 *
 *
 * @public
 */
export class DescribeRootFoldersCommand extends $Command
  .classBuilder<
    DescribeRootFoldersCommandInput,
    DescribeRootFoldersCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGorillaBoyService", "DescribeRootFolders", {})
  .n("WorkDocsClient", "DescribeRootFoldersCommand")
  .f(DescribeRootFoldersRequestFilterSensitiveLog, DescribeRootFoldersResponseFilterSensitiveLog)
  .ser(se_DescribeRootFoldersCommand)
  .de(de_DescribeRootFoldersCommand)
  .build() {
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
