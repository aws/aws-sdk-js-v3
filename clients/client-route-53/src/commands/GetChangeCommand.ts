// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetChangeRequest, GetChangeResponse } from "../models/models_0";
import { GetChange$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetChangeCommand}.
 */
export interface GetChangeCommandInput extends GetChangeRequest {}
/**
 * @public
 *
 * The output of {@link GetChangeCommand}.
 */
export interface GetChangeCommandOutput extends GetChangeResponse, __MetadataBearer {}

/**
 * Returns the current status of a change batch request. The status is one of the following values:
 *
 * - `PENDING` indicates that the changes in this request have not propagated to all Amazon Route 53 DNS servers managing the hosted zone. This is the initial status of all change batch requests.
 * - `INSYNC` indicates that the changes have propagated to all Route 53 DNS servers managing the hosted zone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetChangeCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetChangeCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // GetChangeRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetChangeCommand(input);
 * const response = await client.send(command);
 * // { // GetChangeResponse
 * //   ChangeInfo: { // ChangeInfo
 * //     Id: "STRING_VALUE", // required
 * //     Status: "PENDING" || "INSYNC", // required
 * //     SubmittedAt: new Date("TIMESTAMP"), // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetChangeCommandInput - {@link GetChangeCommandInput}
 * @returns {@link GetChangeCommandOutput}
 * @see {@link GetChangeCommandInput} for command's `input` shape.
 * @see {@link GetChangeCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link NoSuchChange} (client fault)
 *
 * A change with the specified change ID does not exist.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class GetChangeCommand extends command<GetChangeCommandInput, GetChangeCommandOutput>(
  _ep0,
  _mw0,
  "GetChange",
  GetChange$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChangeRequest;
      output: GetChangeResponse;
    };
    sdk: {
      input: GetChangeCommandInput;
      output: GetChangeCommandOutput;
    };
  };
}
