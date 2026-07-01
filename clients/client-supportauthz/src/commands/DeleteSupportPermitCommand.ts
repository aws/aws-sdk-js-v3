// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSupportPermitInput, DeleteSupportPermitOutput } from "../models/models_0";
import { DeleteSupportPermit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSupportPermitCommand}.
 */
export interface DeleteSupportPermitCommandInput extends DeleteSupportPermitInput {}
/**
 * @public
 *
 * The output of {@link DeleteSupportPermitCommand}.
 */
export interface DeleteSupportPermitCommandOutput extends DeleteSupportPermitOutput, __MetadataBearer {}

/**
 * <p>Deletes a support permit, revoking the authorization previously granted to the AWS support operator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAuthZClient, DeleteSupportPermitCommand } from "@aws-sdk/client-supportauthz"; // ES Modules import
 * // const { SupportAuthZClient, DeleteSupportPermitCommand } = require("@aws-sdk/client-supportauthz"); // CommonJS import
 * // import type { SupportAuthZClientConfig } from "@aws-sdk/client-supportauthz";
 * const config = {}; // type is SupportAuthZClientConfig
 * const client = new SupportAuthZClient(config);
 * const input = { // DeleteSupportPermitInput
 *   supportPermitIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteSupportPermitCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSupportPermitOutput
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
 * // };
 *
 * ```
 *
 * @param DeleteSupportPermitCommandInput - {@link DeleteSupportPermitCommandInput}
 * @returns {@link DeleteSupportPermitCommandOutput}
 * @see {@link DeleteSupportPermitCommandInput} for command's `input` shape.
 * @see {@link DeleteSupportPermitCommandOutput} for command's `response` shape.
 * @see {@link SupportAuthZClientResolvedConfig | config} for SupportAuthZClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
export class DeleteSupportPermitCommand extends command<DeleteSupportPermitCommandInput, DeleteSupportPermitCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSupportPermit",
  DeleteSupportPermit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSupportPermitInput;
      output: DeleteSupportPermitOutput;
    };
    sdk: {
      input: DeleteSupportPermitCommandInput;
      output: DeleteSupportPermitCommandOutput;
    };
  };
}
