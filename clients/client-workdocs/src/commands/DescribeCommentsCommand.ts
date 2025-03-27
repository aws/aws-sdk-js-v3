// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeCommentsRequest,
  DescribeCommentsRequestFilterSensitiveLog,
  DescribeCommentsResponse,
  DescribeCommentsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeCommentsCommand, se_DescribeCommentsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCommentsCommand}.
 */
export interface DescribeCommentsCommandInput extends DescribeCommentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCommentsCommand}.
 */
export interface DescribeCommentsCommandOutput extends DescribeCommentsResponse, __MetadataBearer {}

/**
 * <p>List all the comments for the specified document version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeCommentsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeCommentsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const input = { // DescribeCommentsRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   DocumentId: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeCommentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCommentsResponse
 * //   Comments: [ // CommentList
 * //     { // Comment
 * //       CommentId: "STRING_VALUE", // required
 * //       ParentId: "STRING_VALUE",
 * //       ThreadId: "STRING_VALUE",
 * //       Text: "STRING_VALUE",
 * //       Contributor: { // User
 * //         Id: "STRING_VALUE",
 * //         Username: "STRING_VALUE",
 * //         EmailAddress: "STRING_VALUE",
 * //         GivenName: "STRING_VALUE",
 * //         Surname: "STRING_VALUE",
 * //         OrganizationId: "STRING_VALUE",
 * //         RootFolderId: "STRING_VALUE",
 * //         RecycleBinFolderId: "STRING_VALUE",
 * //         Status: "ACTIVE" || "INACTIVE" || "PENDING",
 * //         Type: "USER" || "ADMIN" || "POWERUSER" || "MINIMALUSER" || "WORKSPACESUSER",
 * //         CreatedTimestamp: new Date("TIMESTAMP"),
 * //         ModifiedTimestamp: new Date("TIMESTAMP"),
 * //         TimeZoneId: "STRING_VALUE",
 * //         Locale: "en" || "fr" || "ko" || "de" || "es" || "ja" || "ru" || "zh_CN" || "zh_TW" || "pt_BR" || "default",
 * //         Storage: { // UserStorageMetadata
 * //           StorageUtilizedInBytes: Number("long"),
 * //           StorageRule: { // StorageRuleType
 * //             StorageAllocatedInBytes: Number("long"),
 * //             StorageType: "UNLIMITED" || "QUOTA",
 * //           },
 * //         },
 * //       },
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       Status: "DRAFT" || "PUBLISHED" || "DELETED",
 * //       Visibility: "PUBLIC" || "PRIVATE",
 * //       RecipientId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCommentsCommandInput - {@link DescribeCommentsCommandInput}
 * @returns {@link DescribeCommentsCommandOutput}
 * @see {@link DescribeCommentsCommandInput} for command's `input` shape.
 * @see {@link DescribeCommentsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *  <p>The specified document version is not in the INITIALIZED state.</p>
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
export class DescribeCommentsCommand extends $Command
  .classBuilder<
    DescribeCommentsCommandInput,
    DescribeCommentsCommandOutput,
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
  .s("AWSGorillaBoyService", "DescribeComments", {})
  .n("WorkDocsClient", "DescribeCommentsCommand")
  .f(DescribeCommentsRequestFilterSensitiveLog, DescribeCommentsResponseFilterSensitiveLog)
  .ser(se_DescribeCommentsCommand)
  .de(de_DescribeCommentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCommentsRequest;
      output: DescribeCommentsResponse;
    };
    sdk: {
      input: DescribeCommentsCommandInput;
      output: DescribeCommentsCommandOutput;
    };
  };
}
