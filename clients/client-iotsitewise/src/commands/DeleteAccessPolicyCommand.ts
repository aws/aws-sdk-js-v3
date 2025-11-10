// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DeleteAccessPolicyRequest, DeleteAccessPolicyResponse } from "../models/models_0";
import { DeleteAccessPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccessPolicyCommand}.
 */
export interface DeleteAccessPolicyCommandInput extends DeleteAccessPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessPolicyCommand}.
 */
export interface DeleteAccessPolicyCommandOutput extends DeleteAccessPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes an access policy that grants the specified identity access to the specified
 *       IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor
 *       resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DeleteAccessPolicyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DeleteAccessPolicyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DeleteAccessPolicyRequest
 *   accessPolicyId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessPolicyCommandInput - {@link DeleteAccessPolicyCommandInput}
 * @returns {@link DeleteAccessPolicyCommandOutput}
 * @see {@link DeleteAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessPolicyCommandOutput} for command's `response` shape.
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
export class DeleteAccessPolicyCommand extends $Command
  .classBuilder<
    DeleteAccessPolicyCommandInput,
    DeleteAccessPolicyCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "DeleteAccessPolicy", {})
  .n("IoTSiteWiseClient", "DeleteAccessPolicyCommand")
  .sc(DeleteAccessPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessPolicyCommandInput;
      output: DeleteAccessPolicyCommandOutput;
    };
  };
}
