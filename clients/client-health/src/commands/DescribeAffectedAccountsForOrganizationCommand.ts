// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeAffectedAccountsForOrganizationRequest,
  DescribeAffectedAccountsForOrganizationResponse,
} from "../models/models_0";
import { DescribeAffectedAccountsForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of accounts in the organization from Organizations that are affected by the provided event. For more information about the different types of Health events, see [Event](https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html).
 *
 * Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the [EnableHealthServiceAccessForOrganization](https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html) operation from your organization's management account.
 *
 * > **Note:** This API operation uses pagination. Specify the `nextToken` parameter in the next request to return more results.
 *
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
 *
 * The specified pagination token (`nextToken`) is not valid.
 *
 * @throws {@link HealthServiceException}
 *
 * Base exception class for all service exceptions from Health service.
 *
 * @public
 */
export class DescribeAffectedAccountsForOrganizationCommand extends command<DescribeAffectedAccountsForOrganizationCommandInput, DescribeAffectedAccountsForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAffectedAccountsForOrganization",
  DescribeAffectedAccountsForOrganization$
) {
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
