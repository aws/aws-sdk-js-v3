// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TestAvailabilityConfigurationRequest, TestAvailabilityConfigurationResponse } from "../models/models_0";
import { TestAvailabilityConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface TestAvailabilityConfigurationCommandOutput extends TestAvailabilityConfigurationResponse, __MetadataBearer {}

/**
 * Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a `SourceArn` or `SourceAccount` header.
 *
 * > **Note:** The request must contain either one provider definition (`EwsProvider` or `LambdaProvider`) or the `DomainName` parameter. If the `DomainName` parameter is provided, the configuration stored under the `DomainName` will be tested.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, TestAvailabilityConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, TestAvailabilityConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
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
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class TestAvailabilityConfigurationCommand extends command<TestAvailabilityConfigurationCommandInput, TestAvailabilityConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "TestAvailabilityConfiguration",
  TestAvailabilityConfiguration$
) {
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
