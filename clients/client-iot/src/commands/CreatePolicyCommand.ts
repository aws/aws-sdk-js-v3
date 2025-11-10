// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreatePolicyRequest, CreatePolicyResponse } from "../models/models_0";
import { CreatePolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePolicyCommand}.
 */
export interface CreatePolicyCommandInput extends CreatePolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreatePolicyCommand}.
 */
export interface CreatePolicyCommandOutput extends CreatePolicyResponse, __MetadataBearer {}

/**
 * <p>Creates an IoT policy.</p>
 *          <p>The created policy is the default version for the policy. This operation creates a
 *          policy version with a version identifier of <b>1</b> and sets
 *             <b>1</b> as the policy's default version.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicy</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreatePolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreatePolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreatePolicyRequest
 *   policyName: "STRING_VALUE", // required
 *   policyDocument: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreatePolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreatePolicyResponse
 * //   policyName: "STRING_VALUE",
 * //   policyArn: "STRING_VALUE",
 * //   policyDocument: "STRING_VALUE",
 * //   policyVersionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePolicyCommandInput - {@link CreatePolicyCommandInput}
 * @returns {@link CreatePolicyCommandOutput}
 * @see {@link CreatePolicyCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class CreatePolicyCommand extends $Command
  .classBuilder<
    CreatePolicyCommandInput,
    CreatePolicyCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "CreatePolicy", {})
  .n("IoTClient", "CreatePolicyCommand")
  .sc(CreatePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePolicyRequest;
      output: CreatePolicyResponse;
    };
    sdk: {
      input: CreatePolicyCommandInput;
      output: CreatePolicyCommandOutput;
    };
  };
}
