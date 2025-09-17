// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRegionOptStatusRequest, GetRegionOptStatusResponse } from "../models/models_0";
import { de_GetRegionOptStatusCommand, se_GetRegionOptStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class GetRegionOptStatusCommand extends $Command
  .classBuilder<
    GetRegionOptStatusCommandInput,
    GetRegionOptStatusCommandOutput,
    AccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccountClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Account", "GetRegionOptStatus", {})
  .n("AccountClient", "GetRegionOptStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetRegionOptStatusCommand)
  .de(de_GetRegionOptStatusCommand)
  .build() {
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
