// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { CreatePolicyVersionRequest, CreatePolicyVersionResponse } from "../models/models_0";
import { CreatePolicyVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePolicyVersionCommand}.
 */
export interface CreatePolicyVersionCommandInput extends CreatePolicyVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreatePolicyVersionCommand}.
 */
export interface CreatePolicyVersionCommandOutput extends CreatePolicyVersionResponse, __MetadataBearer {}

/**
 * <p>Creates a new version of the specified IoT policy. To update a policy, create a
 *          new policy version. A managed policy can have up to five versions. If the policy has five
 *          versions, you must use <a>DeletePolicyVersion</a> to delete an existing version
 *          before you create a new one.</p>
 *          <p>Optionally, you can set the new version as the policy's default version. The default
 *          version is the operative version (that is, the version that is in effect for the
 *          certificates to which the policy is attached).</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicyVersion</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreatePolicyVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreatePolicyVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreatePolicyVersionRequest
 *   policyName: "STRING_VALUE", // required
 *   policyDocument: "STRING_VALUE", // required
 *   setAsDefault: true || false,
 * };
 * const command = new CreatePolicyVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreatePolicyVersionResponse
 * //   policyArn: "STRING_VALUE",
 * //   policyDocument: "STRING_VALUE",
 * //   policyVersionId: "STRING_VALUE",
 * //   isDefaultVersion: true || false,
 * // };
 *
 * ```
 *
 * @param CreatePolicyVersionCommandInput - {@link CreatePolicyVersionCommandInput}
 * @returns {@link CreatePolicyVersionCommandOutput}
 * @see {@link CreatePolicyVersionCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link MalformedPolicyException} (client fault)
 *  <p>The policy documentation is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link VersionsLimitExceededException} (client fault)
 *  <p>The number of policy versions exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class CreatePolicyVersionCommand extends $Command
  .classBuilder<
    CreatePolicyVersionCommandInput,
    CreatePolicyVersionCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "CreatePolicyVersion", {})
  .n("IoTClient", "CreatePolicyVersionCommand")
  .sc(CreatePolicyVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePolicyVersionRequest;
      output: CreatePolicyVersionResponse;
    };
    sdk: {
      input: CreatePolicyVersionCommandInput;
      output: CreatePolicyVersionCommandOutput;
    };
  };
}
