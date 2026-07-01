// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetReusableDelegationSetRequest, GetReusableDelegationSetResponse } from "../models/models_0";
import { GetReusableDelegationSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetReusableDelegationSetCommand}.
 */
export interface GetReusableDelegationSetCommandInput extends GetReusableDelegationSetRequest {}
/**
 * @public
 *
 * The output of {@link GetReusableDelegationSetCommand}.
 */
export interface GetReusableDelegationSetCommandOutput extends GetReusableDelegationSetResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specified reusable delegation set, including the four
 * 			name servers that are assigned to the delegation set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetReusableDelegationSetCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetReusableDelegationSetCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // GetReusableDelegationSetRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetReusableDelegationSetCommand(input);
 * const response = await client.send(command);
 * // { // GetReusableDelegationSetResponse
 * //   DelegationSet: { // DelegationSet
 * //     Id: "STRING_VALUE",
 * //     CallerReference: "STRING_VALUE",
 * //     NameServers: [ // DelegationSetNameServers // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetReusableDelegationSetCommandInput - {@link GetReusableDelegationSetCommandInput}
 * @returns {@link GetReusableDelegationSetCommandOutput}
 * @see {@link GetReusableDelegationSetCommandInput} for command's `input` shape.
 * @see {@link GetReusableDelegationSetCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link DelegationSetNotReusable} (client fault)
 *  <p>A reusable delegation set with the specified ID does not exist.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchDelegationSet} (client fault)
 *  <p>A reusable delegation set with the specified ID does not exist.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class GetReusableDelegationSetCommand extends command<GetReusableDelegationSetCommandInput, GetReusableDelegationSetCommandOutput>(
  _ep0,
  _mw0,
  "GetReusableDelegationSet",
  GetReusableDelegationSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReusableDelegationSetRequest;
      output: GetReusableDelegationSetResponse;
    };
    sdk: {
      input: GetReusableDelegationSetCommandInput;
      output: GetReusableDelegationSetCommandOutput;
    };
  };
}
