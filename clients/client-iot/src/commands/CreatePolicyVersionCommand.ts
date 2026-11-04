// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePolicyVersionRequest, CreatePolicyVersionResponse } from "../models/models_0";
import { CreatePolicyVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new version of the specified IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use DeletePolicyVersion to delete an existing version before you create a new one.
 *
 * Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached).
 *
 * Requires permission to access the [CreatePolicyVersion](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link MalformedPolicyException} (client fault)
 *
 * The policy documentation is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link VersionsLimitExceededException} (client fault)
 *
 * The number of policy versions exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class CreatePolicyVersionCommand extends command<CreatePolicyVersionCommandInput, CreatePolicyVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreatePolicyVersion",
  CreatePolicyVersion$
) {
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
