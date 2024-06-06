// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAttributeMappingRequest, DeleteAttributeMappingResponse } from "../models/models_0";
import { de_DeleteAttributeMappingCommand, se_DeleteAttributeMappingCommand } from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RolesAnywhereClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RolesAnywhere", "DeleteAttributeMapping", {})
  .n("RolesAnywhereClient", "DeleteAttributeMappingCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAttributeMappingCommand)
  .de(de_DeleteAttributeMappingCommand)
  .build() {}
