// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type { UpdateAccessPolicyRequest, UpdateAccessPolicyResponse } from "../models/models_1";
import { UpdateAccessPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccessPolicyCommand}.
 */
export interface UpdateAccessPolicyCommandInput extends UpdateAccessPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccessPolicyCommand}.
 */
export interface UpdateAccessPolicyCommandOutput extends UpdateAccessPolicyResponse, __MetadataBearer {}

/**
 * <p>Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor
 *       portal or project resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateAccessPolicyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateAccessPolicyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // UpdateAccessPolicyRequest
 *   accessPolicyId: "STRING_VALUE", // required
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
 * };
 * const command = new UpdateAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAccessPolicyCommandInput - {@link UpdateAccessPolicyCommandInput}
 * @returns {@link UpdateAccessPolicyCommandOutput}
 * @see {@link UpdateAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
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
export class UpdateAccessPolicyCommand extends $Command
  .classBuilder<
    UpdateAccessPolicyCommandInput,
    UpdateAccessPolicyCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "UpdateAccessPolicy", {})
  .n("IoTSiteWiseClient", "UpdateAccessPolicyCommand")
  .sc(UpdateAccessPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccessPolicyRequest;
      output: {};
    };
    sdk: {
      input: UpdateAccessPolicyCommandInput;
      output: UpdateAccessPolicyCommandOutput;
    };
  };
}
