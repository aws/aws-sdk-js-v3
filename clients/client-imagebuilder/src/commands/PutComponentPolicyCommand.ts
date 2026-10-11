// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutComponentPolicyRequest, PutComponentPolicyResponse } from "../models/models_0";
import { PutComponentPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutComponentPolicyCommand}.
 */
export interface PutComponentPolicyCommandInput extends PutComponentPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutComponentPolicyCommand}.
 */
export interface PutComponentPolicyCommandOutput extends PutComponentPolicyResponse, __MetadataBearer {}

/**
 * <p>Applies a policy to a component. The preferred way to share resources is with
 * 			the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a>. If you use the PutComponentPolicy operation instead, you
 * 			must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a>. Otherwise, the resource
 * 			isn't visible to the principals that it's shared with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, PutComponentPolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, PutComponentPolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // PutComponentPolicyRequest
 *   componentArn: "STRING_VALUE", // required
 *   policy: "STRING_VALUE", // required
 * };
 * const command = new PutComponentPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutComponentPolicyResponse
 * //   requestId: "STRING_VALUE",
 * //   componentArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutComponentPolicyCommandInput - {@link PutComponentPolicyCommandInput}
 * @returns {@link PutComponentPolicyCommandOutput}
 * @see {@link PutComponentPolicyCommandInput} for command's `input` shape.
 * @see {@link PutComponentPolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value that you provided for the specified parameter is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Share a component with another account
 * ```javascript
 * // The following example applies a resource policy that grants another account permission to get and list the component.
 * const input = {
 *   componentArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-shared-component/1.0.0/1",
 *   policy: `{"Version": "2012-10-17", "Statement": [{"Effect": "Allow", "Principal": {"AWS": "arn:aws:iam::444455556666:root"}, "Action": ["imagebuilder:GetComponent", "imagebuilder:ListComponents"], "Resource": ["arn:aws:imagebuilder:us-west-2:111122223333:component/my-shared-component/1.0.0/1"]}]}`
 * };
 * const command = new PutComponentPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   componentArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-shared-component/1.0.0/1",
 *   requestId: "ad5a3a66-95c0-4eb5-b34e-f28980256275"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutComponentPolicyCommand extends command<PutComponentPolicyCommandInput, PutComponentPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutComponentPolicy",
  PutComponentPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutComponentPolicyRequest;
      output: PutComponentPolicyResponse;
    };
    sdk: {
      input: PutComponentPolicyCommandInput;
      output: PutComponentPolicyCommandOutput;
    };
  };
}
