// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetGroupPolicyRequest, GetGroupPolicyResponse } from "../models/models_0";
import { GetGroupPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetGroupPolicyCommand}.
 */
export interface GetGroupPolicyCommandInput extends GetGroupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetGroupPolicyCommand}.
 */
export interface GetGroupPolicyCommandOutput extends GetGroupPolicyResponse, __MetadataBearer {}

/**
 * Retrieves the specified inline policy document that is embedded in the specified IAM group.
 *
 * > **Note:** Policies returned by this operation are URL-encoded compliant with [RFC 3986](https://tools.ietf.org/html/rfc3986). You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the `decode` method of the `java.net.URLDecoder` utility class in the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding automatically.
 *
 * An IAM group can also have managed policies attached to it. To retrieve a managed policy document that is attached to a group, use [GetPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html) to determine the policy's default version, then use [GetPolicyVersion](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html) to retrieve the policy document.
 *
 * For more information about policies, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetGroupPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetGroupPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // GetGroupPolicyRequest
 *   GroupName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 * };
 * const command = new GetGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupPolicyResponse
 * //   GroupName: "STRING_VALUE", // required
 * //   PolicyName: "STRING_VALUE", // required
 * //   PolicyDocument: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetGroupPolicyCommandInput - {@link GetGroupPolicyCommandInput}
 * @returns {@link GetGroupPolicyCommandOutput}
 * @see {@link GetGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link GetGroupPolicyCommandOutput} for command's `response` shape.
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
export class GetGroupPolicyCommand extends command<GetGroupPolicyCommandInput, GetGroupPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetGroupPolicy",
  GetGroupPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGroupPolicyRequest;
      output: GetGroupPolicyResponse;
    };
    sdk: {
      input: GetGroupPolicyCommandInput;
      output: GetGroupPolicyCommandOutput;
    };
  };
}
