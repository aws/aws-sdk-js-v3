// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPrimaryEmailUpdateStatusRequest, GetPrimaryEmailUpdateStatusResponse } from "../models/models_0";
import { GetPrimaryEmailUpdateStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPrimaryEmailUpdateStatusCommand}.
 */
export interface GetPrimaryEmailUpdateStatusCommandInput extends GetPrimaryEmailUpdateStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetPrimaryEmailUpdateStatusCommand}.
 */
export interface GetPrimaryEmailUpdateStatusCommandOutput extends GetPrimaryEmailUpdateStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the status of the most recent primary email update for the specified account. For complete details about how to update the primary email address, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-root-user-email.html">Update the primary email address for your AWS account</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, GetPrimaryEmailUpdateStatusCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, GetPrimaryEmailUpdateStatusCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * // import type { AccountClientConfig } from "@aws-sdk/client-account";
 * const config = {}; // type is AccountClientConfig
 * const client = new AccountClient(config);
 * const input = { // GetPrimaryEmailUpdateStatusRequest
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new GetPrimaryEmailUpdateStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetPrimaryEmailUpdateStatusResponse
 * //   Status: "STRING_VALUE", // required
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetPrimaryEmailUpdateStatusCommandInput - {@link GetPrimaryEmailUpdateStatusCommandInput}
 * @returns {@link GetPrimaryEmailUpdateStatusCommandOutput}
 * @see {@link GetPrimaryEmailUpdateStatusCommandInput} for command's `input` shape.
 * @see {@link GetPrimaryEmailUpdateStatusCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation failed because the calling identity doesn't have the minimum required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation failed because of an error internal to Amazon Web Services. Try your operation again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation failed because it specified a resource that can't be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The operation failed because it was called too frequently and exceeded a throttle limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed because one of the input parameters was invalid.</p>
 *
 * @throws {@link AccountServiceException}
 * <p>Base exception class for all service exceptions from Account service.</p>
 *
 *
 * @public
 */
export class GetPrimaryEmailUpdateStatusCommand extends command<GetPrimaryEmailUpdateStatusCommandInput, GetPrimaryEmailUpdateStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetPrimaryEmailUpdateStatus",
  GetPrimaryEmailUpdateStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPrimaryEmailUpdateStatusRequest;
      output: GetPrimaryEmailUpdateStatusResponse;
    };
    sdk: {
      input: GetPrimaryEmailUpdateStatusCommandInput;
      output: GetPrimaryEmailUpdateStatusCommandOutput;
    };
  };
}
