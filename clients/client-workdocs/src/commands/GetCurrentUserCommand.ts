// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCurrentUserRequest, GetCurrentUserResponse } from "../models/models_0";
import { GetCurrentUser } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCurrentUserCommand}.
 */
export interface GetCurrentUserCommandInput extends GetCurrentUserRequest {}
/**
 * @public
 *
 * The output of {@link GetCurrentUserCommand}.
 */
export interface GetCurrentUserCommandOutput extends GetCurrentUserResponse, __MetadataBearer {}

/**
 * <p>Retrieves details of the current user for whom the authentication token was
 *             generated. This is not a valid action for SigV4 (administrative API) clients.</p>
 *          <p>This action requires an authentication token. To get an authentication token,
 *             register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access
 *                 Control for User Applications</a> in the
 *             <i>Amazon
 *                 WorkDocs Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetCurrentUserCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetCurrentUserCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // GetCurrentUserRequest
 *   AuthenticationToken: "STRING_VALUE", // required
 * };
 * const command = new GetCurrentUserCommand(input);
 * const response = await client.send(command);
 * // { // GetCurrentUserResponse
 * //   User: { // User
 * //     Id: "STRING_VALUE",
 * //     Username: "STRING_VALUE",
 * //     EmailAddress: "STRING_VALUE",
 * //     GivenName: "STRING_VALUE",
 * //     Surname: "STRING_VALUE",
 * //     OrganizationId: "STRING_VALUE",
 * //     RootFolderId: "STRING_VALUE",
 * //     RecycleBinFolderId: "STRING_VALUE",
 * //     Status: "ACTIVE" || "INACTIVE" || "PENDING",
 * //     Type: "USER" || "ADMIN" || "POWERUSER" || "MINIMALUSER" || "WORKSPACESUSER",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     ModifiedTimestamp: new Date("TIMESTAMP"),
 * //     TimeZoneId: "STRING_VALUE",
 * //     Locale: "en" || "fr" || "ko" || "de" || "es" || "ja" || "ru" || "zh_CN" || "zh_TW" || "pt_BR" || "default",
 * //     Storage: { // UserStorageMetadata
 * //       StorageUtilizedInBytes: Number("long"),
 * //       StorageRule: { // StorageRuleType
 * //         StorageAllocatedInBytes: Number("long"),
 * //         StorageType: "UNLIMITED" || "QUOTA",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCurrentUserCommandInput - {@link GetCurrentUserCommandInput}
 * @returns {@link GetCurrentUserCommandOutput}
 * @see {@link GetCurrentUserCommandInput} for command's `input` shape.
 * @see {@link GetCurrentUserCommandOutput} for command's `response` shape.
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
export class GetCurrentUserCommand extends $Command
  .classBuilder<
    GetCurrentUserCommandInput,
    GetCurrentUserCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGorillaBoyService", "GetCurrentUser", {})
  .n("WorkDocsClient", "GetCurrentUserCommand")
  .sc(GetCurrentUser)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCurrentUserRequest;
      output: GetCurrentUserResponse;
    };
    sdk: {
      input: GetCurrentUserCommandInput;
      output: GetCurrentUserCommandOutput;
    };
  };
}
