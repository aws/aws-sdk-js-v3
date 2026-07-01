// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSupportPermitInput, GetSupportPermitOutput } from "../models/models_0";
import { GetSupportPermit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSupportPermitCommand}.
 */
export interface GetSupportPermitCommandInput extends GetSupportPermitInput {}
/**
 * @public
 *
 * The output of {@link GetSupportPermitCommand}.
 */
export interface GetSupportPermitCommandOutput extends GetSupportPermitOutput, __MetadataBearer {}

/**
 * <p>Retrieves the details of a support permit by its ARN or name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAuthZClient, GetSupportPermitCommand } from "@aws-sdk/client-supportauthz"; // ES Modules import
 * // const { SupportAuthZClient, GetSupportPermitCommand } = require("@aws-sdk/client-supportauthz"); // CommonJS import
 * // import type { SupportAuthZClientConfig } from "@aws-sdk/client-supportauthz";
 * const config = {}; // type is SupportAuthZClientConfig
 * const client = new SupportAuthZClient(config);
 * const input = { // GetSupportPermitInput
 *   supportPermitIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetSupportPermitCommand(input);
 * const response = await client.send(command);
 * // { // GetSupportPermitOutput
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
 * @param GetSupportPermitCommandInput - {@link GetSupportPermitCommandInput}
 * @returns {@link GetSupportPermitCommandOutput}
 * @see {@link GetSupportPermitCommandInput} for command's `input` shape.
 * @see {@link GetSupportPermitCommandOutput} for command's `response` shape.
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
export class GetSupportPermitCommand extends command<GetSupportPermitCommandInput, GetSupportPermitCommandOutput>(
  _ep0,
  _mw0,
  "GetSupportPermit",
  GetSupportPermit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSupportPermitInput;
      output: GetSupportPermitOutput;
    };
    sdk: {
      input: GetSupportPermitCommandInput;
      output: GetSupportPermitCommandOutput;
    };
  };
}
