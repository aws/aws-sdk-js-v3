// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import { DisableHealthServiceAccessForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableHealthServiceAccessForOrganizationCommand}.
 */
export interface DisableHealthServiceAccessForOrganizationCommandInput {}
/**
 * @public
 *
 * The output of {@link DisableHealthServiceAccessForOrganizationCommand}.
 */
export interface DisableHealthServiceAccessForOrganizationCommandOutput extends __MetadataBearer {}

/**
 * Disables Health from working with Organizations. To call this operation, you must sign in to the organization's management account. For more information, see [Aggregating Health events](https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html) in the *Health User Guide*.
 *
 * This operation doesn't remove the service-linked role from the management account in your organization. You must use the IAM console, API, or Command Line Interface (CLI) to remove the service-linked role. For more information, see [Deleting a Service-Linked Role](https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html#delete-service-linked-role) in the *IAM User Guide*.
 *
 * > **Note:** You can also disable the organizational feature by using the Organizations [DisableAWSServiceAccess](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html) API operation. After you call this operation, Health stops aggregating events for all other Amazon Web Services accounts in your organization. If you call the Health API operations for organizational view, Health returns an error. Health continues to aggregate health events for your Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DisableHealthServiceAccessForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DisableHealthServiceAccessForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = {};
 * const command = new DisableHealthServiceAccessForOrganizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableHealthServiceAccessForOrganizationCommandInput - {@link DisableHealthServiceAccessForOrganizationCommandInput}
 * @returns {@link DisableHealthServiceAccessForOrganizationCommandOutput}
 * @see {@link DisableHealthServiceAccessForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DisableHealthServiceAccessForOrganizationCommandOutput} for command's `response` shape.
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
export class DisableHealthServiceAccessForOrganizationCommand extends command<DisableHealthServiceAccessForOrganizationCommandInput, DisableHealthServiceAccessForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "DisableHealthServiceAccessForOrganization",
  DisableHealthServiceAccessForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DisableHealthServiceAccessForOrganizationCommandInput;
      output: DisableHealthServiceAccessForOrganizationCommandOutput;
    };
  };
}
