// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetComponentPolicyRequest, GetComponentPolicyResponse } from "../models/models_0";
import { GetComponentPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetComponentPolicyCommand}.
 */
export interface GetComponentPolicyCommandInput extends GetComponentPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetComponentPolicyCommand}.
 */
export interface GetComponentPolicyCommandOutput extends GetComponentPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves a component policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetComponentPolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetComponentPolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetComponentPolicyRequest
 *   componentArn: "STRING_VALUE", // required
 * };
 * const command = new GetComponentPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetComponentPolicyResponse
 * //   requestId: "STRING_VALUE",
 * //   policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetComponentPolicyCommandInput - {@link GetComponentPolicyCommandInput}
 * @returns {@link GetComponentPolicyCommandOutput}
 * @see {@link GetComponentPolicyCommandInput} for command's `input` shape.
 * @see {@link GetComponentPolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
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
 * @example Get the resource policy for a component
 * ```javascript
 * // The following example retrieves the resource policy that's applied to a component that the owner shared with another account.
 * const input = {
 *   componentArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-shared-component/1.0.0/1"
 * };
 * const command = new GetComponentPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   policy: `{"Version": "2012-10-17", "Statement": [{"Effect": "Allow", "Principal": {"AWS": "arn:aws:iam::444455556666:root"}, "Action": ["imagebuilder:GetComponent", "imagebuilder:ListComponents"], "Resource": ["arn:aws:imagebuilder:us-west-2:111122223333:component/my-shared-component/1.0.0/1"]}]}`,
 *   requestId: "cb458998-6e6f-442a-9325-78c730b80895"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetComponentPolicyCommand extends command<GetComponentPolicyCommandInput, GetComponentPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetComponentPolicy",
  GetComponentPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComponentPolicyRequest;
      output: GetComponentPolicyResponse;
    };
    sdk: {
      input: GetComponentPolicyCommandInput;
      output: GetComponentPolicyCommandOutput;
    };
  };
}
