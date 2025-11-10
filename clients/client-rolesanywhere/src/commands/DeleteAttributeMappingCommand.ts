// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAttributeMappingRequest, DeleteAttributeMappingResponse } from "../models/models_0";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";
import { DeleteAttributeMapping } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAttributeMappingCommand}.
 */
export interface DeleteAttributeMappingCommandInput extends DeleteAttributeMappingRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAttributeMappingCommand}.
 */
export interface DeleteAttributeMappingCommandOutput extends DeleteAttributeMappingResponse, __MetadataBearer {}

/**
 * <p>Delete an entry from the attribute mapping rules enforced by a given profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, DeleteAttributeMappingCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, DeleteAttributeMappingCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * // import type { RolesAnywhereClientConfig } from "@aws-sdk/client-rolesanywhere";
 * const config = {}; // type is RolesAnywhereClientConfig
 * const client = new RolesAnywhereClient(config);
 * const input = { // DeleteAttributeMappingRequest
 *   profileId: "STRING_VALUE", // required
 *   certificateField: "STRING_VALUE", // required
 *   specifiers: [ // SpecifierList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteAttributeMappingCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAttributeMappingResponse
 * //   profile: { // ProfileDetail
 * //     profileId: "STRING_VALUE",
 * //     profileArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     requireInstanceProperties: true || false,
 * //     enabled: true || false,
 * //     createdBy: "STRING_VALUE",
 * //     sessionPolicy: "STRING_VALUE",
 * //     roleArns: [ // RoleArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     managedPolicyArns: [ // ManagedPolicyList
 * //       "STRING_VALUE",
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     durationSeconds: Number("int"),
 * //     acceptRoleSessionName: true || false,
 * //     attributeMappings: [ // AttributeMappings
 * //       { // AttributeMapping
 * //         certificateField: "STRING_VALUE",
 * //         mappingRules: [ // MappingRules
 * //           { // MappingRule
 * //             specifier: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteAttributeMappingCommandInput - {@link DeleteAttributeMappingCommandInput}
 * @returns {@link DeleteAttributeMappingCommandOutput}
 * @see {@link DeleteAttributeMappingCommandInput} for command's `input` shape.
 * @see {@link DeleteAttributeMappingCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link RolesAnywhereServiceException}
 * <p>Base exception class for all service exceptions from RolesAnywhere service.</p>
 *
 *
 * @example DeleteAttributeMapping - Deletes a custom attribute mapping rule
 * ```javascript
 * //
 * const input = {
 *   certificateField: "x509Subject",
 *   profileId: "00000000-0000-0000-0000-000000000000",
 *   specifiers: [
 *     "OU"
 *   ]
 * };
 * const command = new DeleteAttributeMappingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   profile: {
 *     acceptRoleSessionName: false,
 *     attributeMappings: [
 *       {
 *         certificateField: "x509Subject",
 *         mappingRules: [
 *           {
 *             specifier: "CN"
 *           }
 *         ]
 *       }
 *     ],
 *     createdAt: "2021-07-19T15:55:25.986591Z",
 *     createdBy: "arn:aws:sts::123456789012:assumed-role/Admin/DummyRole",
 *     durationSeconds: 3600,
 *     enabled: true,
 *     managedPolicyArns:     [],
 *     name: "Dummy Profile",
 *     profileArn: "arn:aws:rolesanywhere:us-east-1:123456789012:profile/00000000-0000-0000-0000-000000000000",
 *     profileId: "00000000-0000-0000-0000-000000000000",
 *     requireInstanceProperties: false,
 *     roleArns: [
 *       "arn:aws:iam::123456789012:role/DummyRole"
 *     ],
 *     sessionPolicy: "",
 *     updatedAt: "2021-07-19T15:55:25.986591Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteAttributeMappingCommand extends $Command
  .classBuilder<
    DeleteAttributeMappingCommandInput,
    DeleteAttributeMappingCommandOutput,
    RolesAnywhereClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RolesAnywhereClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RolesAnywhere", "DeleteAttributeMapping", {})
  .n("RolesAnywhereClient", "DeleteAttributeMappingCommand")
  .sc(DeleteAttributeMapping)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAttributeMappingRequest;
      output: DeleteAttributeMappingResponse;
    };
    sdk: {
      input: DeleteAttributeMappingCommandInput;
      output: DeleteAttributeMappingCommandOutput;
    };
  };
}
