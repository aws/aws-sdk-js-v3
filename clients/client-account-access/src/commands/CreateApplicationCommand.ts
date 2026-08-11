// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateApplicationRequest, CreateApplicationResponse } from "../models/models_0";
import { CreateApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandInput extends CreateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandOutput extends CreateApplicationResponse, __MetadataBearer {}

/**
 * <p>Creates an account access manager instance and its Amazon Web Services account access application in the associated IAM Identity Center instance. This operation is idempotent; calling it multiple times with the same parameters returns the existing application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountAccessClient, CreateApplicationCommand } from "@aws-sdk/client-account-access"; // ES Modules import
 * // const { AccountAccessClient, CreateApplicationCommand } = require("@aws-sdk/client-account-access"); // CommonJS import
 * // import type { AccountAccessClientConfig } from "@aws-sdk/client-account-access";
 * const config = {}; // type is AccountAccessClientConfig
 * const client = new AccountAccessClient(config);
 * const input = { // CreateApplicationRequest
 *   identitySource: { // IdentitySource Union: only one key present
 *     identityCenter: { // IdentityCenter
 *       instanceArn: "STRING_VALUE", // required
 *     },
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationResponse
 * //   applicationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateApplicationCommandInput - {@link CreateApplicationCommandInput}
 * @returns {@link CreateApplicationCommandOutput}
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
 * @see {@link AccountAccessClientResolvedConfig | config} for AccountAccessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this operation.</p>
 *
 * @throws {@link AlreadyCreatedException} (client fault)
 *  <p>The resource you are trying to create already exists. To retrieve the existing resource, use the corresponding Get operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred. Try your request again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by the service. Check your request parameters and retry the request.</p>
 *
 * @throws {@link AccountAccessServiceException}
 * <p>Base exception class for all service exceptions from AccountAccess service.</p>
 *
 *
 * @public
 */
export class CreateApplicationCommand extends command<CreateApplicationCommandInput, CreateApplicationCommandOutput>(
  _ep0,
  _mw0,
  "CreateApplication",
  CreateApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationRequest;
      output: CreateApplicationResponse;
    };
    sdk: {
      input: CreateApplicationCommandInput;
      output: CreateApplicationCommandOutput;
    };
  };
}
