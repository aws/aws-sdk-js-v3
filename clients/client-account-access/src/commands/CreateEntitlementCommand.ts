// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEntitlementRequest, CreateEntitlementResponse } from "../models/models_0";
import { CreateEntitlement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEntitlementCommand}.
 */
export interface CreateEntitlementCommandInput extends CreateEntitlementRequest {}
/**
 * @public
 *
 * The output of {@link CreateEntitlementCommand}.
 */
export interface CreateEntitlementCommandOutput extends CreateEntitlementResponse, __MetadataBearer {}

/**
 * <p>Creates an entitlement (assignment) in account access manager. An entitlement (assignment) grants a principal (IAM Identity Center user or group) permission to assume a specified IAM role in an Amazon Web Services account. This operation is idempotent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountAccessClient, CreateEntitlementCommand } from "@aws-sdk/client-account-access"; // ES Modules import
 * // const { AccountAccessClient, CreateEntitlementCommand } = require("@aws-sdk/client-account-access"); // CommonJS import
 * // import type { AccountAccessClientConfig } from "@aws-sdk/client-account-access";
 * const config = {}; // type is AccountAccessClientConfig
 * const client = new AccountAccessClient(config);
 * const input = { // CreateEntitlementRequest
 *   applicationArn: "STRING_VALUE", // required
 *   entitlement: { // Entitlement Union: only one key present
 *     principalRole: { // PrincipalRoleEntitlement
 *       principal: { // Principal Union: only one key present
 *         identityCenter: { // IdentityCenterPrincipal Union: only one key present
 *           userId: "STRING_VALUE",
 *           groupId: "STRING_VALUE",
 *         },
 *       },
 *       roleArn: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateEntitlementCommand(input);
 * const response = await client.send(command);
 * // { // CreateEntitlementResponse
 * //   entitlementId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateEntitlementCommandInput - {@link CreateEntitlementCommandInput}
 * @returns {@link CreateEntitlementCommandOutput}
 * @see {@link CreateEntitlementCommandInput} for command's `input` shape.
 * @see {@link CreateEntitlementCommandOutput} for command's `response` shape.
 * @see {@link AccountAccessClientResolvedConfig | config} for AccountAccessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred. Try your request again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist. Verify that the resource identifier is correct and that the resource exists in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota for your account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Try your request again later.</p>
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
export class CreateEntitlementCommand extends command<CreateEntitlementCommandInput, CreateEntitlementCommandOutput>(
  _ep0,
  _mw0,
  "CreateEntitlement",
  CreateEntitlement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEntitlementRequest;
      output: CreateEntitlementResponse;
    };
    sdk: {
      input: CreateEntitlementCommandInput;
      output: CreateEntitlementCommandOutput;
    };
  };
}
