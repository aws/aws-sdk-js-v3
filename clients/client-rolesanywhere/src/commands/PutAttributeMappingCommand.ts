// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutAttributeMappingRequest, PutAttributeMappingResponse } from "../models/models_0";
import type { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";
import { PutAttributeMapping } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAttributeMappingCommand}.
 */
export interface PutAttributeMappingCommandInput extends PutAttributeMappingRequest {}
/**
 * @public
 *
 * The output of {@link PutAttributeMappingCommand}.
 */
export interface PutAttributeMappingCommandOutput extends PutAttributeMappingResponse, __MetadataBearer {}

/**
 * <p>Put an entry in the attribute mapping rules that will be enforced by a given profile. A mapping specifies a certificate field and one or more specifiers that have contextual meanings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, PutAttributeMappingCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, PutAttributeMappingCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * // import type { RolesAnywhereClientConfig } from "@aws-sdk/client-rolesanywhere";
 * const config = {}; // type is RolesAnywhereClientConfig
 * const client = new RolesAnywhereClient(config);
 * const input = { // PutAttributeMappingRequest
 *   profileId: "STRING_VALUE", // required
 *   certificateField: "STRING_VALUE", // required
 *   mappingRules: [ // MappingRules // required
 *     { // MappingRule
 *       specifier: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutAttributeMappingCommand(input);
 * const response = await client.send(command);
 * // { // PutAttributeMappingResponse
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
 * @param PutAttributeMappingCommandInput - {@link PutAttributeMappingCommandInput}
 * @returns {@link PutAttributeMappingCommandOutput}
 * @see {@link PutAttributeMappingCommandInput} for command's `input` shape.
 * @see {@link PutAttributeMappingCommandOutput} for command's `response` shape.
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
 * @example PutAttributeMapping - Adds a custom attribute mapping rule
 * ```javascript
 * //
 * const input = {
 *   certificateField: "x509Subject",
 *   mappingRules: [
 *     {
 *       specifier: "CN"
 *     }
 *   ],
 *   profileId: "00000000-0000-0000-0000-000000000000"
 * };
 * const command = new PutAttributeMappingCommand(input);
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
export class PutAttributeMappingCommand extends $Command
  .classBuilder<
    PutAttributeMappingCommandInput,
    PutAttributeMappingCommandOutput,
    RolesAnywhereClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RolesAnywhereClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RolesAnywhere", "PutAttributeMapping", {})
  .n("RolesAnywhereClient", "PutAttributeMappingCommand")
  .sc(PutAttributeMapping)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAttributeMappingRequest;
      output: PutAttributeMappingResponse;
    };
    sdk: {
      input: PutAttributeMappingCommandInput;
      output: PutAttributeMappingCommandOutput;
    };
  };
}
