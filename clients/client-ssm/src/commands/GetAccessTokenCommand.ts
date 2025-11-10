// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccessTokenRequest, GetAccessTokenResponse } from "../models/models_1";
import { GetAccessToken } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessTokenCommand}.
 */
export interface GetAccessTokenCommandInput extends GetAccessTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessTokenCommand}.
 */
export interface GetAccessTokenCommandOutput extends GetAccessTokenResponse, __MetadataBearer {}

/**
 * <p>Returns a credentials set to be used with just-in-time node access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetAccessTokenCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetAccessTokenCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // GetAccessTokenRequest
 *   AccessRequestId: "STRING_VALUE", // required
 * };
 * const command = new GetAccessTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessTokenResponse
 * //   Credentials: { // Credentials
 * //     AccessKeyId: "STRING_VALUE", // required
 * //     SecretAccessKey: "STRING_VALUE", // required
 * //     SessionToken: "STRING_VALUE", // required
 * //     ExpirationTime: new Date("TIMESTAMP"), // required
 * //   },
 * //   AccessRequestStatus: "Approved" || "Rejected" || "Revoked" || "Expired" || "Pending",
 * // };
 *
 * ```
 *
 * @param GetAccessTokenCommandInput - {@link GetAccessTokenCommandInput}
 * @returns {@link GetAccessTokenCommandOutput}
 * @see {@link GetAccessTokenCommandInput} for command's `input` shape.
 * @see {@link GetAccessTokenCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requester doesn't have permissions to perform the requested operation.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified parameter to be shared could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation couldn't be performed because the service is throttling
 *    requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Verify that you entered valid contents for the command and try
 *    again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class GetAccessTokenCommand extends $Command
  .classBuilder<
    GetAccessTokenCommandInput,
    GetAccessTokenCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "GetAccessToken", {})
  .n("SSMClient", "GetAccessTokenCommand")
  .sc(GetAccessToken)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessTokenRequest;
      output: GetAccessTokenResponse;
    };
    sdk: {
      input: GetAccessTokenCommandInput;
      output: GetAccessTokenCommandOutput;
    };
  };
}
