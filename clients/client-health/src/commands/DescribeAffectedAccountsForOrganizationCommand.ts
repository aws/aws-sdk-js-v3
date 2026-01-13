// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import type {
  DescribeAffectedAccountsForOrganizationRequest,
  DescribeAffectedAccountsForOrganizationResponse,
} from "../models/models_0";
import { DescribeAffectedAccountsForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAffectedAccountsForOrganizationCommand}.
 */
export interface DescribeAffectedAccountsForOrganizationCommandInput extends DescribeAffectedAccountsForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAffectedAccountsForOrganizationCommand}.
 */
export interface DescribeAffectedAccountsForOrganizationCommandOutput extends DescribeAffectedAccountsForOrganizationResponse, __MetadataBearer {}

/**
 * <p>Returns a list of accounts in the organization from Organizations that are affected by the
 *          provided event. For more information about the different types of Health events, see
 *             <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>. </p>
 *          <p>Before you can call this operation, you must first enable Health to work with
 *          Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
 *          management account.</p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeAffectedAccountsForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeAffectedAccountsForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = { // DescribeAffectedAccountsForOrganizationRequest
 *   eventArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeAffectedAccountsForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAffectedAccountsForOrganizationResponse
 * //   affectedAccounts: [ // affectedAccountsList
 * //     "STRING_VALUE",
 * //   ],
 * //   eventScopeCode: "PUBLIC" || "ACCOUNT_SPECIFIC" || "NONE",
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAffectedAccountsForOrganizationCommandInput - {@link DescribeAffectedAccountsForOrganizationCommandInput}
 * @returns {@link DescribeAffectedAccountsForOrganizationCommandOutput}
 * @see {@link DescribeAffectedAccountsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeAffectedAccountsForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *  <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class DescribeAffectedAccountsForOrganizationCommand extends $Command
  .classBuilder<
    DescribeAffectedAccountsForOrganizationCommandInput,
    DescribeAffectedAccountsForOrganizationCommandOutput,
    HealthClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: HealthClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHealth_20160804", "DescribeAffectedAccountsForOrganization", {})
  .n("HealthClient", "DescribeAffectedAccountsForOrganizationCommand")
  .sc(DescribeAffectedAccountsForOrganization$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAffectedAccountsForOrganizationRequest;
      output: DescribeAffectedAccountsForOrganizationResponse;
    };
    sdk: {
      input: DescribeAffectedAccountsForOrganizationCommandInput;
      output: DescribeAffectedAccountsForOrganizationCommandOutput;
    };
  };
}
