// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSeverityLevelsRequest, DescribeSeverityLevelsResponse } from "../models/models_0";
import { DescribeSeverityLevels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeSeverityLevelsCommand}.
 */
export interface DescribeSeverityLevelsCommandInput extends DescribeSeverityLevelsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSeverityLevelsCommand}.
 */
export interface DescribeSeverityLevelsCommandOutput extends DescribeSeverityLevelsResponse, __MetadataBearer {}

/**
 * <p>Returns the list of severity levels that you can assign to a support case. The
 *             severity level for a case is also a field in the <a>CaseDetails</a> data type
 *             that you include for a <a>CreateCase</a> request.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 *                         API. </p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have a
 *                         Business, Enterprise On-Ramp, or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeSeverityLevelsCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeSeverityLevelsCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // DescribeSeverityLevelsRequest
 *   language: "STRING_VALUE",
 * };
 * const command = new DescribeSeverityLevelsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSeverityLevelsResponse
 * //   severityLevels: [ // SeverityLevelsList
 * //     { // SeverityLevel
 * //       code: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSeverityLevelsCommandInput - {@link DescribeSeverityLevelsCommandInput}
 * @returns {@link DescribeSeverityLevelsCommandOutput}
 * @see {@link DescribeSeverityLevelsCommandInput} for command's `input` shape.
 * @see {@link DescribeSeverityLevelsCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link SupportServiceException}
 * <p>Base exception class for all service exceptions from Support service.</p>
 *
 *
 * @public
 */
export class DescribeSeverityLevelsCommand extends command<DescribeSeverityLevelsCommandInput, DescribeSeverityLevelsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSeverityLevels",
  DescribeSeverityLevels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSeverityLevelsRequest;
      output: DescribeSeverityLevelsResponse;
    };
    sdk: {
      input: DescribeSeverityLevelsCommandInput;
      output: DescribeSeverityLevelsCommandOutput;
    };
  };
}
