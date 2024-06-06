// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeUsersRequest,
  DescribeUsersRequestFilterSensitiveLog,
  DescribeUsersResponse,
  DescribeUsersResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeUsersCommand, se_DescribeUsersCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeUsersCommand}.
 */
export interface DescribeUsersCommandInput extends DescribeUsersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUsersCommand}.
 */
export interface DescribeUsersCommandOutput extends DescribeUsersResponse, __MetadataBearer {}

/**
 * <p>Describes the specified users. You can describe all users or filter the results
 *             (for example, by status or organization).</p>
 *          <p>By default, Amazon WorkDocs returns the first 24 active or pending users. If there
 *             are more results, the response includes a marker that you can use to request the next
 *             set of results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeUsersCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeUsersCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const input = { // DescribeUsersRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   OrganizationId: "STRING_VALUE",
 *   UserIds: "STRING_VALUE",
 *   Query: "STRING_VALUE",
 *   Include: "ALL" || "ACTIVE_PENDING",
 *   Order: "ASCENDING" || "DESCENDING",
 *   Sort: "USER_NAME" || "FULL_NAME" || "STORAGE_LIMIT" || "USER_STATUS" || "STORAGE_USED",
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 *   Fields: "STRING_VALUE",
 * };
 * const command = new DescribeUsersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUsersResponse
 * //   Users: [ // OrganizationUserList
 * //     { // User
 * //       Id: "STRING_VALUE",
 * //       Username: "STRING_VALUE",
 * //       EmailAddress: "STRING_VALUE",
 * //       GivenName: "STRING_VALUE",
 * //       Surname: "STRING_VALUE",
 * //       OrganizationId: "STRING_VALUE",
 * //       RootFolderId: "STRING_VALUE",
 * //       RecycleBinFolderId: "STRING_VALUE",
 * //       Status: "ACTIVE" || "INACTIVE" || "PENDING",
 * //       Type: "USER" || "ADMIN" || "POWERUSER" || "MINIMALUSER" || "WORKSPACESUSER",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       ModifiedTimestamp: new Date("TIMESTAMP"),
 * //       TimeZoneId: "STRING_VALUE",
 * //       Locale: "en" || "fr" || "ko" || "de" || "es" || "ja" || "ru" || "zh_CN" || "zh_TW" || "pt_BR" || "default",
 * //       Storage: { // UserStorageMetadata
 * //         StorageUtilizedInBytes: Number("long"),
 * //         StorageRule: { // StorageRuleType
 * //           StorageAllocatedInBytes: Number("long"),
 * //           StorageType: "UNLIMITED" || "QUOTA",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   TotalNumberOfUsers: Number("long"),
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeUsersCommandInput - {@link DescribeUsersCommandInput}
 * @returns {@link DescribeUsersCommandOutput}
 * @see {@link DescribeUsersCommandInput} for command's `input` shape.
 * @see {@link DescribeUsersCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The pagination marker or limit fields are not valid.</p>
 *
 * @throws {@link RequestedEntityTooLargeException} (client fault)
 *  <p>The response is too large to return. The request must include a filter to reduce the size of the response.</p>
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
export class DescribeUsersCommand extends $Command
  .classBuilder<
    DescribeUsersCommandInput,
    DescribeUsersCommandOutput,
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
  .s("AWSGorillaBoyService", "DescribeUsers", {})
  .n("WorkDocsClient", "DescribeUsersCommand")
  .f(DescribeUsersRequestFilterSensitiveLog, DescribeUsersResponseFilterSensitiveLog)
  .ser(se_DescribeUsersCommand)
  .de(de_DescribeUsersCommand)
  .build() {}
