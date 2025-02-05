// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutResourcePolicyRequest, PutResourcePolicyResult } from "../models/models_0";
import { de_PutResourcePolicyCommand, se_PutResourcePolicyCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandInput extends PutResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandOutput extends PutResourcePolicyResult, __MetadataBearer {}

/**
 * <p>
 *             Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to
 *             access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account.
 *             Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be
 *             unique within that account. The maximum size of each resource policy is 5KB.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, PutResourcePolicyCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, PutResourcePolicyCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new XRayClient(config);
 * const input = { // PutResourcePolicyRequest
 *   PolicyName: "STRING_VALUE", // required
 *   PolicyDocument: "STRING_VALUE", // required
 *   PolicyRevisionId: "STRING_VALUE",
 *   BypassPolicyLockoutCheck: true || false,
 * };
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutResourcePolicyResult
 * //   ResourcePolicy: { // ResourcePolicy
 * //     PolicyName: "STRING_VALUE",
 * //     PolicyDocument: "STRING_VALUE",
 * //     PolicyRevisionId: "STRING_VALUE",
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param PutResourcePolicyCommandInput - {@link PutResourcePolicyCommandInput}
 * @returns {@link PutResourcePolicyCommandOutput}
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidPolicyRevisionIdException} (client fault)
 *  <p>A policy revision id was provided which does not match the latest policy revision. This exception is also
 *     if a policy revision id of 0 is provided via <code>PutResourcePolicy</code> and a policy with the same name already exists.</p>
 *
 * @throws {@link LockoutPreventionException} (client fault)
 *  <p>The provided resource policy would prevent the caller of this request from calling PutResourcePolicy in the future.</p>
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *  <p>Invalid policy document provided in request.</p>
 *
 * @throws {@link PolicyCountLimitExceededException} (client fault)
 *  <p>Exceeded the maximum number of resource policies for a target Amazon Web Services account.</p>
 *
 * @throws {@link PolicySizeLimitExceededException} (client fault)
 *  <p>Exceeded the maximum size for a resource policy.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 * @public
 */
export class PutResourcePolicyCommand extends $Command
  .classBuilder<
    PutResourcePolicyCommandInput,
    PutResourcePolicyCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSXRay", "PutResourcePolicy", {})
  .n("XRayClient", "PutResourcePolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutResourcePolicyCommand)
  .de(de_PutResourcePolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutResourcePolicyRequest;
      output: PutResourcePolicyResult;
    };
    sdk: {
      input: PutResourcePolicyCommandInput;
      output: PutResourcePolicyCommandOutput;
    };
  };
}
