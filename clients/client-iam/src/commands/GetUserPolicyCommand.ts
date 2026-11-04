// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetUserPolicyRequest, GetUserPolicyResponse } from "../models/models_0";
import { GetUserPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetUserPolicyCommand}.
 */
export interface GetUserPolicyCommandInput extends GetUserPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetUserPolicyCommand}.
 */
export interface GetUserPolicyCommandOutput extends GetUserPolicyResponse, __MetadataBearer {}

/**
 * Retrieves the specified inline policy document that is embedded in the specified IAM user.
 *
 * > **Note:** Policies returned by this operation are URL-encoded compliant with [RFC 3986](https://tools.ietf.org/html/rfc3986). You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the `decode` method of the `java.net.URLDecoder` utility class in the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding automatically.
 *
 * An IAM user can also have managed policies attached to it. To retrieve a managed policy document that is attached to a user, use [GetPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html) to determine the policy's default version. Then use [GetPolicyVersion](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html) to retrieve the policy document.
 *
 * For more information about policies, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetUserPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetUserPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // GetUserPolicyRequest
 *   UserName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 * };
 * const command = new GetUserPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetUserPolicyResponse
 * //   UserName: "STRING_VALUE", // required
 * //   PolicyName: "STRING_VALUE", // required
 * //   PolicyDocument: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetUserPolicyCommandInput - {@link GetUserPolicyCommandInput}
 * @returns {@link GetUserPolicyCommandOutput}
 * @see {@link GetUserPolicyCommandInput} for command's `input` shape.
 * @see {@link GetUserPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class GetUserPolicyCommand extends command<GetUserPolicyCommandInput, GetUserPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetUserPolicy",
  GetUserPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserPolicyRequest;
      output: GetUserPolicyResponse;
    };
    sdk: {
      input: GetUserPolicyCommandInput;
      output: GetUserPolicyCommandOutput;
    };
  };
}
