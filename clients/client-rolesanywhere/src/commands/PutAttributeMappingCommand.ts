// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutAttributeMappingRequest, PutAttributeMappingResponse } from "../models/models_0";
import { de_PutAttributeMappingCommand, se_PutAttributeMappingCommand } from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

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
 * <p>Put an entry in the attribute mapping rules that will be enforced by a given profile.
 *       A mapping specifies a certificate field and one or more specifiers that have contextual meanings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, PutAttributeMappingCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, PutAttributeMappingCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RolesAnywhere", "PutAttributeMapping", {})
  .n("RolesAnywhereClient", "PutAttributeMappingCommand")
  .f(void 0, void 0)
  .ser(se_PutAttributeMappingCommand)
  .de(de_PutAttributeMappingCommand)
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
