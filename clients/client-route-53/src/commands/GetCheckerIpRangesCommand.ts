// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw2, command } from "../commandBuilder";
import type { GetCheckerIpRangesRequest, GetCheckerIpRangesResponse } from "../models/models_0";
import { GetCheckerIpRanges$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCheckerIpRangesCommand}.
 */
export interface GetCheckerIpRangesCommandInput extends GetCheckerIpRangesRequest {}
/**
 * @public
 *
 * The output of {@link GetCheckerIpRangesCommand}.
 */
export interface GetCheckerIpRangesCommandOutput extends GetCheckerIpRangesResponse, __MetadataBearer {}

/**
 * <p>Route 53 does not perform authorization for this API because it retrieves information
 * 			that is already available to the public.</p>
 *          <important>
 *             <p>
 *                <code>GetCheckerIpRanges</code> still works, but we recommend that you download
 * 				ip-ranges.json, which includes IP address ranges for all Amazon Web Services
 * 				services. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-ip-addresses.html">IP Address Ranges
 * 					of Amazon Route 53 Servers</a> in the <i>Amazon Route 53 Developer
 * 					Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetCheckerIpRangesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetCheckerIpRangesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = {};
 * const command = new GetCheckerIpRangesCommand(input);
 * const response = await client.send(command);
 * // { // GetCheckerIpRangesResponse
 * //   CheckerIpRanges: [ // CheckerIpRanges // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCheckerIpRangesCommandInput - {@link GetCheckerIpRangesCommandInput}
 * @returns {@link GetCheckerIpRangesCommandOutput}
 * @see {@link GetCheckerIpRangesCommandInput} for command's `input` shape.
 * @see {@link GetCheckerIpRangesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class GetCheckerIpRangesCommand extends command<GetCheckerIpRangesCommandInput, GetCheckerIpRangesCommandOutput>(
  _ep0,
  _mw2,
  "GetCheckerIpRanges",
  GetCheckerIpRanges$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetCheckerIpRangesResponse;
    };
    sdk: {
      input: GetCheckerIpRangesCommandInput;
      output: GetCheckerIpRangesCommandOutput;
    };
  };
}
