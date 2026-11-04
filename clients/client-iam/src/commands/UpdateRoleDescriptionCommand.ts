// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRoleDescriptionRequest, UpdateRoleDescriptionResponse } from "../models/models_1";
import { UpdateRoleDescription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRoleDescriptionCommand}.
 */
export interface UpdateRoleDescriptionCommandInput extends UpdateRoleDescriptionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoleDescriptionCommand}.
 */
export interface UpdateRoleDescriptionCommandOutput extends UpdateRoleDescriptionResponse, __MetadataBearer {}

/**
 * Use [UpdateRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRole.html) instead.
 *
 * Modifies only the description of a role. This operation performs the same function as the `Description` parameter in the `UpdateRole` operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateRoleDescriptionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateRoleDescriptionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UpdateRoleDescriptionRequest
 *   RoleName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 * };
 * const command = new UpdateRoleDescriptionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRoleDescriptionResponse
 * //   Role: { // Role
 * //     Path: "STRING_VALUE", // required
 * //     RoleName: "STRING_VALUE", // required
 * //     RoleId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //     AssumeRolePolicyDocument: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     MaxSessionDuration: Number("int"),
 * //     PermissionsBoundary: { // AttachedPermissionsBoundary
 * //       PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //       PermissionsBoundaryArn: "STRING_VALUE",
 * //     },
 * //     Tags: [ // tagListType
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     RoleLastUsed: { // RoleLastUsed
 * //       LastUsedDate: new Date("TIMESTAMP"),
 * //       Region: "STRING_VALUE",
 * //     },
 * //     SourceRoleTemplate: { // SourceRoleTemplate
 * //       TemplateArn: "STRING_VALUE", // required
 * //       TemplateMinorVersion: Number("int"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRoleDescriptionCommandInput - {@link UpdateRoleDescriptionCommandInput}
 * @returns {@link UpdateRoleDescriptionCommandOutput}
 * @see {@link UpdateRoleDescriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateRoleDescriptionCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link UnmodifiableEntityException} (client fault)
 *
 * The request was rejected because service-linked roles are protected Amazon Web Services resources. Only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class UpdateRoleDescriptionCommand extends command<UpdateRoleDescriptionCommandInput, UpdateRoleDescriptionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRoleDescription",
  UpdateRoleDescription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRoleDescriptionRequest;
      output: UpdateRoleDescriptionResponse;
    };
    sdk: {
      input: UpdateRoleDescriptionCommandInput;
      output: UpdateRoleDescriptionCommandOutput;
    };
  };
}
