// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTagsOnboardingStatusResponse } from "../models/models_0";
import { DescribeTagsOnboardingStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTagsOnboardingStatusCommand}.
 */
export interface DescribeTagsOnboardingStatusCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeTagsOnboardingStatusCommand}.
 */
export interface DescribeTagsOnboardingStatusCommandOutput extends DescribeTagsOnboardingStatusResponse, __MetadataBearer {}

/**
 * <p>Returns the current onboarding status of the Health tags feature for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeTagsOnboardingStatusCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeTagsOnboardingStatusCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = {};
 * const command = new DescribeTagsOnboardingStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTagsOnboardingStatusResponse
 * //   status: "ENABLED" || "DISABLED",
 * // };
 *
 * ```
 *
 * @param DescribeTagsOnboardingStatusCommandInput - {@link DescribeTagsOnboardingStatusCommandInput}
 * @returns {@link DescribeTagsOnboardingStatusCommandOutput}
 * @see {@link DescribeTagsOnboardingStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeTagsOnboardingStatusCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class DescribeTagsOnboardingStatusCommand extends command<DescribeTagsOnboardingStatusCommandInput, DescribeTagsOnboardingStatusCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTagsOnboardingStatus",
  DescribeTagsOnboardingStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeTagsOnboardingStatusResponse;
    };
    sdk: {
      input: DescribeTagsOnboardingStatusCommandInput;
      output: DescribeTagsOnboardingStatusCommandOutput;
    };
  };
}
