// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTagsOnboardingStatusForOrganizationResponse } from "../models/models_0";
import { DescribeTagsOnboardingStatusForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTagsOnboardingStatusForOrganizationCommand}.
 */
export interface DescribeTagsOnboardingStatusForOrganizationCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeTagsOnboardingStatusForOrganizationCommand}.
 */
export interface DescribeTagsOnboardingStatusForOrganizationCommandOutput extends DescribeTagsOnboardingStatusForOrganizationResponse, __MetadataBearer {}

/**
 * <p>Returns the current onboarding status of the Health tags feature for your organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeTagsOnboardingStatusForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeTagsOnboardingStatusForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = {};
 * const command = new DescribeTagsOnboardingStatusForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTagsOnboardingStatusForOrganizationResponse
 * //   status: "ENABLED" || "DISABLED",
 * // };
 *
 * ```
 *
 * @param DescribeTagsOnboardingStatusForOrganizationCommandInput - {@link DescribeTagsOnboardingStatusForOrganizationCommandInput}
 * @returns {@link DescribeTagsOnboardingStatusForOrganizationCommandOutput}
 * @see {@link DescribeTagsOnboardingStatusForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeTagsOnboardingStatusForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class DescribeTagsOnboardingStatusForOrganizationCommand extends command<DescribeTagsOnboardingStatusForOrganizationCommandInput, DescribeTagsOnboardingStatusForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTagsOnboardingStatusForOrganization",
  DescribeTagsOnboardingStatusForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeTagsOnboardingStatusForOrganizationResponse;
    };
    sdk: {
      input: DescribeTagsOnboardingStatusForOrganizationCommandInput;
      output: DescribeTagsOnboardingStatusForOrganizationCommandOutput;
    };
  };
}
