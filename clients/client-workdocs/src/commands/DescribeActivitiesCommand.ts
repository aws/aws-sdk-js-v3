// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeActivitiesRequest,
  DescribeActivitiesRequestFilterSensitiveLog,
  DescribeActivitiesResponse,
  DescribeActivitiesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeActivitiesCommand, se_DescribeActivitiesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeActivitiesCommand}.
 */
export interface DescribeActivitiesCommandInput extends DescribeActivitiesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeActivitiesCommand}.
 */
export interface DescribeActivitiesCommandOutput extends DescribeActivitiesResponse, __MetadataBearer {}

/**
 * <p>Describes the user activities in a specified time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeActivitiesCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeActivitiesCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const input = { // DescribeActivitiesRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   OrganizationId: "STRING_VALUE",
 *   ActivityTypes: "STRING_VALUE",
 *   ResourceId: "STRING_VALUE",
 *   UserId: "STRING_VALUE",
 *   IncludeIndirectActivities: true || false,
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeActivitiesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeActivitiesResponse
 * //   UserActivities: [ // UserActivities
 * //     { // Activity
 * //       Type: "DOCUMENT_CHECKED_IN" || "DOCUMENT_CHECKED_OUT" || "DOCUMENT_RENAMED" || "DOCUMENT_VERSION_UPLOADED" || "DOCUMENT_VERSION_DELETED" || "DOCUMENT_VERSION_VIEWED" || "DOCUMENT_VERSION_DOWNLOADED" || "DOCUMENT_RECYCLED" || "DOCUMENT_RESTORED" || "DOCUMENT_REVERTED" || "DOCUMENT_SHARED" || "DOCUMENT_UNSHARED" || "DOCUMENT_SHARE_PERMISSION_CHANGED" || "DOCUMENT_SHAREABLE_LINK_CREATED" || "DOCUMENT_SHAREABLE_LINK_REMOVED" || "DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED" || "DOCUMENT_MOVED" || "DOCUMENT_COMMENT_ADDED" || "DOCUMENT_COMMENT_DELETED" || "DOCUMENT_ANNOTATION_ADDED" || "DOCUMENT_ANNOTATION_DELETED" || "FOLDER_CREATED" || "FOLDER_DELETED" || "FOLDER_RENAMED" || "FOLDER_RECYCLED" || "FOLDER_RESTORED" || "FOLDER_SHARED" || "FOLDER_UNSHARED" || "FOLDER_SHARE_PERMISSION_CHANGED" || "FOLDER_SHAREABLE_LINK_CREATED" || "FOLDER_SHAREABLE_LINK_REMOVED" || "FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED" || "FOLDER_MOVED",
 * //       TimeStamp: new Date("TIMESTAMP"),
 * //       IsIndirectActivity: true || false,
 * //       OrganizationId: "STRING_VALUE",
 * //       Initiator: { // UserMetadata
 * //         Id: "STRING_VALUE",
 * //         Username: "STRING_VALUE",
 * //         GivenName: "STRING_VALUE",
 * //         Surname: "STRING_VALUE",
 * //         EmailAddress: "STRING_VALUE",
 * //       },
 * //       Participants: { // Participants
 * //         Users: [ // UserMetadataList
 * //           {
 * //             Id: "STRING_VALUE",
 * //             Username: "STRING_VALUE",
 * //             GivenName: "STRING_VALUE",
 * //             Surname: "STRING_VALUE",
 * //             EmailAddress: "STRING_VALUE",
 * //           },
 * //         ],
 * //         Groups: [ // GroupMetadataList
 * //           { // GroupMetadata
 * //             Id: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       ResourceMetadata: { // ResourceMetadata
 * //         Type: "FOLDER" || "DOCUMENT",
 * //         Name: "STRING_VALUE",
 * //         OriginalName: "STRING_VALUE",
 * //         Id: "STRING_VALUE",
 * //         VersionId: "STRING_VALUE",
 * //         Owner: "<UserMetadata>",
 * //         ParentId: "STRING_VALUE",
 * //       },
 * //       OriginalParent: {
 * //         Type: "FOLDER" || "DOCUMENT",
 * //         Name: "STRING_VALUE",
 * //         OriginalName: "STRING_VALUE",
 * //         Id: "STRING_VALUE",
 * //         VersionId: "STRING_VALUE",
 * //         Owner: "<UserMetadata>",
 * //         ParentId: "STRING_VALUE",
 * //       },
 * //       CommentMetadata: { // CommentMetadata
 * //         CommentId: "STRING_VALUE",
 * //         Contributor: { // User
 * //           Id: "STRING_VALUE",
 * //           Username: "STRING_VALUE",
 * //           EmailAddress: "STRING_VALUE",
 * //           GivenName: "STRING_VALUE",
 * //           Surname: "STRING_VALUE",
 * //           OrganizationId: "STRING_VALUE",
 * //           RootFolderId: "STRING_VALUE",
 * //           RecycleBinFolderId: "STRING_VALUE",
 * //           Status: "ACTIVE" || "INACTIVE" || "PENDING",
 * //           Type: "USER" || "ADMIN" || "POWERUSER" || "MINIMALUSER" || "WORKSPACESUSER",
 * //           CreatedTimestamp: new Date("TIMESTAMP"),
 * //           ModifiedTimestamp: new Date("TIMESTAMP"),
 * //           TimeZoneId: "STRING_VALUE",
 * //           Locale: "en" || "fr" || "ko" || "de" || "es" || "ja" || "ru" || "zh_CN" || "zh_TW" || "pt_BR" || "default",
 * //           Storage: { // UserStorageMetadata
 * //             StorageUtilizedInBytes: Number("long"),
 * //             StorageRule: { // StorageRuleType
 * //               StorageAllocatedInBytes: Number("long"),
 * //               StorageType: "UNLIMITED" || "QUOTA",
 * //             },
 * //           },
 * //         },
 * //         CreatedTimestamp: new Date("TIMESTAMP"),
 * //         CommentStatus: "DRAFT" || "PUBLISHED" || "DELETED",
 * //         RecipientId: "STRING_VALUE",
 * //         ContributorId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeActivitiesCommandInput - {@link DescribeActivitiesCommandInput}
 * @returns {@link DescribeActivitiesCommandOutput}
 * @see {@link DescribeActivitiesCommandInput} for command's `input` shape.
 * @see {@link DescribeActivitiesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeActivitiesCommand extends $Command
  .classBuilder<
    DescribeActivitiesCommandInput,
    DescribeActivitiesCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGorillaBoyService", "DescribeActivities", {})
  .n("WorkDocsClient", "DescribeActivitiesCommand")
  .f(DescribeActivitiesRequestFilterSensitiveLog, DescribeActivitiesResponseFilterSensitiveLog)
  .ser(se_DescribeActivitiesCommand)
  .de(de_DescribeActivitiesCommand)
  .build() {}
