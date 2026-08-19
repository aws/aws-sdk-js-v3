// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteApplicationRequest, DeleteApplicationResponse } from "../models/models_0";
import { DeleteApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteApplicationCommand}.
 */
export interface DeleteApplicationCommandInput extends DeleteApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationCommand}.
 */
export interface DeleteApplicationCommandOutput extends DeleteApplicationResponse, __MetadataBearer {}

/**
 * <p>Deletes an account access manager application. This operation is idempotent; deleting an application that has already been deleted does not return an error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountAccessClient, DeleteApplicationCommand } from "@aws-sdk/client-account-access"; // ES Modules import
 * // const { AccountAccessClient, DeleteApplicationCommand } = require("@aws-sdk/client-account-access"); // CommonJS import
 * // import type { AccountAccessClientConfig } from "@aws-sdk/client-account-access";
 * const config = {}; // type is AccountAccessClientConfig
 * const client = new AccountAccessClient(config);
 * const input = { // DeleteApplicationRequest
 *   applicationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApplicationCommandInput - {@link DeleteApplicationCommandInput}
 * @returns {@link DeleteApplicationCommandOutput}
 * @see {@link DeleteApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationCommandOutput} for command's `response` shape.
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
export class DeleteApplicationCommand extends command<DeleteApplicationCommandInput, DeleteApplicationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApplication",
  DeleteApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationRequest;
      output: {};
    };
    sdk: {
      input: DeleteApplicationCommandInput;
      output: DeleteApplicationCommandOutput;
    };
  };
}
