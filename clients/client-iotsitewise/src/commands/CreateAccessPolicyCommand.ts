// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { CreateAccessPolicyRequest, CreateAccessPolicyResponse } from "../models/models_0";
import { de_CreateAccessPolicyCommand, se_CreateAccessPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessPolicyCommand}.
 */
export interface CreateAccessPolicyCommandInput extends CreateAccessPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessPolicyCommand}.
 */
export interface CreateAccessPolicyCommandOutput extends CreateAccessPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or
 *       IAM user) access to the specified IoT SiteWise Monitor portal or project resource.</p>
 *          <note>
 *             <p>Support for access policies that use an SSO Group as the identity is not supported at this time.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateAccessPolicyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateAccessPolicyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CreateAccessPolicyRequest
 *   accessPolicyIdentity: { // Identity
 *     user: { // UserIdentity
 *       id: "STRING_VALUE", // required
 *     },
 *     group: { // GroupIdentity
 *       id: "STRING_VALUE", // required
 *     },
 *     iamUser: { // IAMUserIdentity
 *       arn: "STRING_VALUE", // required
 *     },
 *     iamRole: { // IAMRoleIdentity
 *       arn: "STRING_VALUE", // required
 *     },
 *   },
 *   accessPolicyResource: { // Resource
 *     portal: { // PortalResource
 *       id: "STRING_VALUE", // required
 *     },
 *     project: { // ProjectResource
 *       id: "STRING_VALUE", // required
 *     },
 *   },
 *   accessPolicyPermission: "ADMINISTRATOR" || "VIEWER", // required
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessPolicyResponse
 * //   accessPolicyId: "STRING_VALUE", // required
 * //   accessPolicyArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAccessPolicyCommandInput - {@link CreateAccessPolicyCommandInput}
 * @returns {@link CreateAccessPolicyCommandOutput}
 * @see {@link CreateAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've reached the quota for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class CreateAccessPolicyCommand extends $Command
  .classBuilder<
    CreateAccessPolicyCommandInput,
    CreateAccessPolicyCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "CreateAccessPolicy", {})
  .n("IoTSiteWiseClient", "CreateAccessPolicyCommand")
  .f(void 0, void 0)
  .ser(se_CreateAccessPolicyCommand)
  .de(de_CreateAccessPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessPolicyRequest;
      output: CreateAccessPolicyResponse;
    };
    sdk: {
      input: CreateAccessPolicyCommandInput;
      output: CreateAccessPolicyCommandOutput;
    };
  };
}
