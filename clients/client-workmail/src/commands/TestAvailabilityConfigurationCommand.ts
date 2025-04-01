// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  TestAvailabilityConfigurationRequest,
  TestAvailabilityConfigurationRequestFilterSensitiveLog,
  TestAvailabilityConfigurationResponse,
} from "../models/models_0";
import {
  de_TestAvailabilityConfigurationCommand,
  se_TestAvailabilityConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestAvailabilityConfigurationCommand}.
 */
export interface TestAvailabilityConfigurationCommandInput extends TestAvailabilityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link TestAvailabilityConfigurationCommand}.
 */
export interface TestAvailabilityConfigurationCommandOutput
  extends TestAvailabilityConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access
 *          policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a <code>SourceArn</code> or <code>SourceAccount</code> header.</p>
 *          <note>
 *             <p>The request must contain either one provider definition (<code>EwsProvider</code> or
 *                <code>LambdaProvider</code>) or the <code>DomainName</code> parameter. If the
 *                <code>DomainName</code> parameter is provided, the configuration stored under the
 *                <code>DomainName</code> will be tested.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, TestAvailabilityConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, TestAvailabilityConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // TestAvailabilityConfigurationRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE",
 *   EwsProvider: { // EwsAvailabilityProvider
 *     EwsEndpoint: "STRING_VALUE", // required
 *     EwsUsername: "STRING_VALUE", // required
 *     EwsPassword: "STRING_VALUE", // required
 *   },
 *   LambdaProvider: { // LambdaAvailabilityProvider
 *     LambdaArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new TestAvailabilityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // TestAvailabilityConfigurationResponse
 * //   TestPassed: true || false,
 * //   FailureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TestAvailabilityConfigurationCommandInput - {@link TestAvailabilityConfigurationCommandInput}
 * @returns {@link TestAvailabilityConfigurationCommandOutput}
 * @see {@link TestAvailabilityConfigurationCommandInput} for command's `input` shape.
 * @see {@link TestAvailabilityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class TestAvailabilityConfigurationCommand extends $Command
  .classBuilder<
    TestAvailabilityConfigurationCommandInput,
    TestAvailabilityConfigurationCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "TestAvailabilityConfiguration", {})
  .n("WorkMailClient", "TestAvailabilityConfigurationCommand")
  .f(TestAvailabilityConfigurationRequestFilterSensitiveLog, void 0)
  .ser(se_TestAvailabilityConfigurationCommand)
  .de(de_TestAvailabilityConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestAvailabilityConfigurationRequest;
      output: TestAvailabilityConfigurationResponse;
    };
    sdk: {
      input: TestAvailabilityConfigurationCommandInput;
      output: TestAvailabilityConfigurationCommandOutput;
    };
  };
}
