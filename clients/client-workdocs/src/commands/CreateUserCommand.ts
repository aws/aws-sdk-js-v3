// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateUserRequest,
  CreateUserRequestFilterSensitiveLog,
  CreateUserResponse,
  CreateUserResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateUserCommand, se_CreateUserCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUserCommand}.
 */
export interface CreateUserCommandInput extends CreateUserRequest {}
/**
 * @public
 *
 * The output of {@link CreateUserCommand}.
 */
export interface CreateUserCommandOutput extends CreateUserResponse, __MetadataBearer {}

/**
 * <p>Creates a user in a Simple AD or Microsoft AD directory. The status of a newly
 *             created user is "ACTIVE". New users can access Amazon WorkDocs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateUserCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateUserCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // CreateUserRequest
 *   OrganizationId: "STRING_VALUE",
 *   Username: "STRING_VALUE", // required
 *   EmailAddress: "STRING_VALUE",
 *   GivenName: "STRING_VALUE", // required
 *   Surname: "STRING_VALUE", // required
 *   Password: "STRING_VALUE", // required
 *   TimeZoneId: "STRING_VALUE",
 *   StorageRule: { // StorageRuleType
 *     StorageAllocatedInBytes: Number("long"),
 *     StorageType: "UNLIMITED" || "QUOTA",
 *   },
 *   AuthenticationToken: "STRING_VALUE",
 * };
 * const command = new CreateUserCommand(input);
 * const response = await client.send(command);
 * // { // CreateUserResponse
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
 * @param CreateUserCommandInput - {@link CreateUserCommandInput}
 * @returns {@link CreateUserCommandOutput}
 * @see {@link CreateUserCommandInput} for command's `input` shape.
 * @see {@link CreateUserCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
export class CreateUserCommand extends $Command
  .classBuilder<
    CreateUserCommandInput,
    CreateUserCommandOutput,
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
  .s("AWSGorillaBoyService", "CreateUser", {})
  .n("WorkDocsClient", "CreateUserCommand")
  .f(CreateUserRequestFilterSensitiveLog, CreateUserResponseFilterSensitiveLog)
  .ser(se_CreateUserCommand)
  .de(de_CreateUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUserRequest;
      output: CreateUserResponse;
    };
    sdk: {
      input: CreateUserCommandInput;
      output: CreateUserCommandOutput;
    };
  };
}
