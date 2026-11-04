// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEntitlementRequest, DeleteEntitlementResponse } from "../models/models_0";
import { DeleteEntitlement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEntitlementCommand}.
 */
export interface DeleteEntitlementCommandInput extends DeleteEntitlementRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEntitlementCommand}.
 */
export interface DeleteEntitlementCommandOutput extends DeleteEntitlementResponse, __MetadataBearer {}

/**
 * Deletes an entitlement from an account access manager application. This operation is idempotent; deleting an entitlement that has already been deleted does not return an error.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountAccessClient, DeleteEntitlementCommand } from "@aws-sdk/client-account-access"; // ES Modules import
 * // const { AccountAccessClient, DeleteEntitlementCommand } = require("@aws-sdk/client-account-access"); // CommonJS import
 * // import type { AccountAccessClientConfig } from "@aws-sdk/client-account-access";
 * const config = {}; // type is AccountAccessClientConfig
 * const client = new AccountAccessClient(config);
 * const input = { // DeleteEntitlementRequest
 *   applicationArn: "STRING_VALUE", // required
 *   entitlementId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEntitlementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEntitlementCommandInput - {@link DeleteEntitlementCommandInput}
 * @returns {@link DeleteEntitlementCommandOutput}
 * @see {@link DeleteEntitlementCommandInput} for command's `input` shape.
 * @see {@link DeleteEntitlementCommandOutput} for command's `response` shape.
 * @see {@link AccountAccessClientResolvedConfig | config} for AccountAccessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred. Try your request again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist. Verify that the resource identifier is correct and that the resource exists in the current Region.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Try your request again later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by the service. Check your request parameters and retry the request.
 *
 * @throws {@link AccountAccessServiceException}
 *
 * Base exception class for all service exceptions from AccountAccess service.
 *
 * @public
 */
export class DeleteEntitlementCommand extends command<DeleteEntitlementCommandInput, DeleteEntitlementCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEntitlement",
  DeleteEntitlement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEntitlementRequest;
      output: {};
    };
    sdk: {
      input: DeleteEntitlementCommandInput;
      output: DeleteEntitlementCommandOutput;
    };
  };
}
