// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateHsmRequest, CreateHsmResponse } from "../models/models_0";
import { de_CreateHsmCommand, se_CreateHsmCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHsmCommand}.
 */
export interface CreateHsmCommandInput extends CreateHsmRequest {}
/**
 * @public
 *
 * The output of {@link CreateHsmCommand}.
 */
export interface CreateHsmCommandOutput extends CreateHsmResponse, __MetadataBearer {}

/**
 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 *          <p>Creates an uninitialized HSM instance.</p>
 *          <p>There is an upfront fee charged for each HSM instance that you create with the
 *         <code>CreateHsm</code> operation. If you accidentally provision an HSM and want to request a
 *       refund, delete the instance using the <a>DeleteHsm</a> operation, go to the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a>, create a new case, and select
 *         <b>Account and Billing Support</b>.</p>
 *          <important>
 *             <p>It can take up to 20 minutes to create and provision an HSM. You can monitor the
 *         status of the HSM with the <a>DescribeHsm</a> operation. The HSM is ready to be
 *         initialized when the status changes to <code>RUNNING</code>.</p>
 *          </important>
 *
 * @deprecated This API is deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, CreateHsmCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, CreateHsmCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudHSMClient(config);
 * const input = { // CreateHsmRequest
 *   SubnetId: "STRING_VALUE", // required
 *   SshKey: "STRING_VALUE", // required
 *   EniIp: "STRING_VALUE",
 *   IamRoleArn: "STRING_VALUE", // required
 *   ExternalId: "STRING_VALUE",
 *   SubscriptionType: "PRODUCTION", // required
 *   ClientToken: "STRING_VALUE",
 *   SyslogIp: "STRING_VALUE",
 * };
 * const command = new CreateHsmCommand(input);
 * const response = await client.send(command);
 * // { // CreateHsmResponse
 * //   HsmArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateHsmCommandInput - {@link CreateHsmCommandInput}
 * @returns {@link CreateHsmCommandOutput}
 * @see {@link CreateHsmCommandInput} for command's `input` shape.
 * @see {@link CreateHsmCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for CloudHSMClient's `config` shape.
 *
 * @throws {@link CloudHsmInternalException} (server fault)
 *  <p>Indicates that an internal error occurred.</p>
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *  <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that one or more of the request parameters are not valid.</p>
 *
 * @throws {@link CloudHSMServiceException}
 * <p>Base exception class for all service exceptions from CloudHSM service.</p>
 *
 * @public
 */
export class CreateHsmCommand extends $Command
  .classBuilder<
    CreateHsmCommandInput,
    CreateHsmCommandOutput,
    CloudHSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudHSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudHsmFrontendService", "CreateHsm", {})
  .n("CloudHSMClient", "CreateHsmCommand")
  .f(void 0, void 0)
  .ser(se_CreateHsmCommand)
  .de(de_CreateHsmCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHsmRequest;
      output: CreateHsmResponse;
    };
    sdk: {
      input: CreateHsmCommandInput;
      output: CreateHsmCommandOutput;
    };
  };
}
