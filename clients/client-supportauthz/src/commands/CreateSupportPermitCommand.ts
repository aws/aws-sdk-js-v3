// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateSupportPermitInput, CreateSupportPermitOutput } from "../models/models_0";
import { CreateSupportPermit$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SupportAuthZClientResolvedConfig } from "../SupportAuthZClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSupportPermitCommand}.
 */
export interface CreateSupportPermitCommandInput extends CreateSupportPermitInput {}
/**
 * @public
 *
 * The output of {@link CreateSupportPermitCommand}.
 */
export interface CreateSupportPermitCommandOutput extends CreateSupportPermitOutput, __MetadataBearer {}

/**
 * <p>Creates a support permit that authorizes an AWS support operator to perform specified actions on specified resources. The permit is cryptographically signed using a customer-managed AWS KMS key (ECC_NIST_P384, SIGN_VERIFY) to ensure non-repudiation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAuthZClient, CreateSupportPermitCommand } from "@aws-sdk/client-supportauthz"; // ES Modules import
 * // const { SupportAuthZClient, CreateSupportPermitCommand } = require("@aws-sdk/client-supportauthz"); // CommonJS import
 * // import type { SupportAuthZClientConfig } from "@aws-sdk/client-supportauthz";
 * const config = {}; // type is SupportAuthZClientConfig
 * const client = new SupportAuthZClient(config);
 * const input = { // CreateSupportPermitInput
 *   permit: { // Permit
 *     actions: { // ActionSet Union: only one key present
 *       allActions: {},
 *       actions: [ // Actions
 *         "STRING_VALUE",
 *       ],
 *     },
 *     resources: { // ResourceSet Union: only one key present
 *       allResourcesInRegion: {},
 *       resources: [ // Resources
 *         "STRING_VALUE",
 *       ],
 *     },
 *     conditions: [ // Conditions
 *       { // Condition Union: only one key present
 *         allowAfter: new Date("TIMESTAMP"),
 *         allowBefore: new Date("TIMESTAMP"),
 *       },
 *     ],
 *   },
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   signingKeyInfo: { // SigningKeyInfo Union: only one key present
 *     kmsKey: "STRING_VALUE",
 *   },
 *   supportCaseDisplayId: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSupportPermitCommand(input);
 * const response = await client.send(command);
 * // { // CreateSupportPermitOutput
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   permit: { // Permit
 * //     actions: { // ActionSet Union: only one key present
 * //       allActions: {},
 * //       actions: [ // Actions
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     resources: { // ResourceSet Union: only one key present
 * //       allResourcesInRegion: {},
 * //       resources: [ // Resources
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     conditions: [ // Conditions
 * //       { // Condition Union: only one key present
 * //         allowAfter: new Date("TIMESTAMP"),
 * //         allowBefore: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //   },
 * //   status: "ACTIVE" || "INACTIVE" || "DELETING", // required
 * //   signingKeyInfo: { // SigningKeyInfo Union: only one key present
 * //     kmsKey: "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   supportCaseDisplayId: "STRING_VALUE",
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSupportPermitCommandInput - {@link CreateSupportPermitCommandInput}
 * @returns {@link CreateSupportPermitCommandOutput}
 * @see {@link CreateSupportPermitCommandInput} for command's `input` shape.
 * @see {@link CreateSupportPermitCommandOutput} for command's `response` shape.
 * @see {@link SupportAuthZClientResolvedConfig | config} for SupportAuthZClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred. Try again later.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota for your account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeded the allowed limit. Try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link SupportAuthZServiceException}
 * <p>Base exception class for all service exceptions from SupportAuthZ service.</p>
 *
 *
 * @public
 */
export class CreateSupportPermitCommand extends $Command
  .classBuilder<
    CreateSupportPermitCommandInput,
    CreateSupportPermitCommandOutput,
    SupportAuthZClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportAuthZClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SupportAuthZ", "CreateSupportPermit", {})
  .n("SupportAuthZClient", "CreateSupportPermitCommand")
  .sc(CreateSupportPermit$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSupportPermitInput;
      output: CreateSupportPermitOutput;
    };
    sdk: {
      input: CreateSupportPermitCommandInput;
      output: CreateSupportPermitCommandOutput;
    };
  };
}
