// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeHealthServiceStatusForOrganizationResponse } from "../models/models_0";
import {
  de_DescribeHealthServiceStatusForOrganizationCommand,
  se_DescribeHealthServiceStatusForOrganizationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHealthServiceStatusForOrganizationCommand}.
 */
export interface DescribeHealthServiceStatusForOrganizationCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeHealthServiceStatusForOrganizationCommand}.
 */
export interface DescribeHealthServiceStatusForOrganizationCommandOutput
  extends DescribeHealthServiceStatusForOrganizationResponse,
    __MetadataBearer {}

/**
 * <p>This operation provides status information on enabling or disabling Health to work
 *          with your organization. To call this operation, you must use the organization's
 *          management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeHealthServiceStatusForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeHealthServiceStatusForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = {};
 * const command = new DescribeHealthServiceStatusForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHealthServiceStatusForOrganizationResponse
 * //   healthServiceAccessStatusForOrganization: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeHealthServiceStatusForOrganizationCommandInput - {@link DescribeHealthServiceStatusForOrganizationCommandInput}
 * @returns {@link DescribeHealthServiceStatusForOrganizationCommandOutput}
 * @see {@link DescribeHealthServiceStatusForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeHealthServiceStatusForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class DescribeHealthServiceStatusForOrganizationCommand extends $Command
  .classBuilder<
    DescribeHealthServiceStatusForOrganizationCommandInput,
    DescribeHealthServiceStatusForOrganizationCommandOutput,
    HealthClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: HealthClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHealth_20160804", "DescribeHealthServiceStatusForOrganization", {})
  .n("HealthClient", "DescribeHealthServiceStatusForOrganizationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeHealthServiceStatusForOrganizationCommand)
  .de(de_DescribeHealthServiceStatusForOrganizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeHealthServiceStatusForOrganizationResponse;
    };
    sdk: {
      input: DescribeHealthServiceStatusForOrganizationCommandInput;
      output: DescribeHealthServiceStatusForOrganizationCommandOutput;
    };
  };
}
