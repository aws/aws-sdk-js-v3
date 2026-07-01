// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRegionOptStatusRequest, GetRegionOptStatusResponse } from "../models/models_0";
import { GetRegionOptStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRegionOptStatusCommand}.
 */
export interface GetRegionOptStatusCommandInput extends GetRegionOptStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetRegionOptStatusCommand}.
 */
export interface GetRegionOptStatusCommandOutput extends GetRegionOptStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the opt-in status of a particular Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, GetRegionOptStatusCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, GetRegionOptStatusCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * // import type { AccountClientConfig } from "@aws-sdk/client-account";
 * const config = {}; // type is AccountClientConfig
 * const client = new AccountClient(config);
 * const input = { // GetRegionOptStatusRequest
 *   AccountId: "STRING_VALUE",
 *   RegionName: "STRING_VALUE", // required
 * };
 * const command = new GetRegionOptStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetRegionOptStatusResponse
 * //   RegionName: "STRING_VALUE",
 * //   RegionOptStatus: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRegionOptStatusCommandInput - {@link GetRegionOptStatusCommandInput}
 * @returns {@link GetRegionOptStatusCommandOutput}
 * @see {@link GetRegionOptStatusCommandInput} for command's `input` shape.
 * @see {@link GetRegionOptStatusCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation failed because the calling identity doesn't have the minimum required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation failed because of an error internal to Amazon Web Services. Try your operation again later.</p>
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
export class GetRegionOptStatusCommand extends command<GetRegionOptStatusCommandInput, GetRegionOptStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetRegionOptStatus",
  GetRegionOptStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRegionOptStatusRequest;
      output: GetRegionOptStatusResponse;
    };
    sdk: {
      input: GetRegionOptStatusCommandInput;
      output: GetRegionOptStatusCommandOutput;
    };
  };
}
