// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import { EnableHealthServiceAccessForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableHealthServiceAccessForOrganizationCommand}.
 */
export interface EnableHealthServiceAccessForOrganizationCommandInput {}
/**
 * @public
 *
 * The output of {@link EnableHealthServiceAccessForOrganizationCommand}.
 */
export interface EnableHealthServiceAccessForOrganizationCommandOutput extends __MetadataBearer {}

/**
 * Enables Health to work with Organizations. You can use the organizational view feature to aggregate events from all Amazon Web Services accounts in your organization in a centralized location.
 *
 * This operation also creates a service-linked role for the management account in the organization.
 *
 * > **Note:**
 * >
 * > To call this operation, you must meet the following requirements:
 * >
 * > - You must have a Business, Enterprise On-Ramp, or Enterprise Support plan from [Amazon Web Services Support](http://aws.amazon.com/premiumsupport/) to use the Health API. If you call the Health API from an Amazon Web Services account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, you receive a `SubscriptionRequiredException` error.
 * > - You must have permission to call this operation from the organization's management account. For example IAM policies, see [Health identity-based policy examples](https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html).
 *
 * If you don't have the required support plan, you can instead use the Health console to enable the organizational view feature. For more information, see [Aggregating Health events](https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html) in the *Health User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, EnableHealthServiceAccessForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, EnableHealthServiceAccessForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = {};
 * const command = new EnableHealthServiceAccessForOrganizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableHealthServiceAccessForOrganizationCommandInput - {@link EnableHealthServiceAccessForOrganizationCommandInput}
 * @returns {@link EnableHealthServiceAccessForOrganizationCommandOutput}
 * @see {@link EnableHealthServiceAccessForOrganizationCommandInput} for command's `input` shape.
 * @see {@link EnableHealthServiceAccessForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * [EnableHealthServiceAccessForOrganization](https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html) is already in progress. Wait for the action to complete before trying again. To get the current status, use the [DescribeHealthServiceStatusForOrganization](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeHealthServiceStatusForOrganization.html) operation.
 *
 * @throws {@link HealthServiceException}
 *
 * Base exception class for all service exceptions from Health service.
 *
 * @public
 */
export class EnableHealthServiceAccessForOrganizationCommand extends command<EnableHealthServiceAccessForOrganizationCommandInput, EnableHealthServiceAccessForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "EnableHealthServiceAccessForOrganization",
  EnableHealthServiceAccessForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: EnableHealthServiceAccessForOrganizationCommandInput;
      output: EnableHealthServiceAccessForOrganizationCommandOutput;
    };
  };
}
