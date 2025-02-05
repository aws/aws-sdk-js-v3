// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeBillingGroupRequest, DescribeBillingGroupResponse } from "../models/models_1";
import { de_DescribeBillingGroupCommand, se_DescribeBillingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBillingGroupCommand}.
 */
export interface DescribeBillingGroupCommandInput extends DescribeBillingGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBillingGroupCommand}.
 */
export interface DescribeBillingGroupCommandOutput extends DescribeBillingGroupResponse, __MetadataBearer {}

/**
 * <p>Returns information about a billing group.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeBillingGroup</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // DescribeBillingGroupRequest
 *   billingGroupName: "STRING_VALUE", // required
 * };
 * const command = new DescribeBillingGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBillingGroupResponse
 * //   billingGroupName: "STRING_VALUE",
 * //   billingGroupId: "STRING_VALUE",
 * //   billingGroupArn: "STRING_VALUE",
 * //   version: Number("long"),
 * //   billingGroupProperties: { // BillingGroupProperties
 * //     billingGroupDescription: "STRING_VALUE",
 * //   },
 * //   billingGroupMetadata: { // BillingGroupMetadata
 * //     creationDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBillingGroupCommandInput - {@link DescribeBillingGroupCommandInput}
 * @returns {@link DescribeBillingGroupCommandOutput}
 * @see {@link DescribeBillingGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class DescribeBillingGroupCommand extends $Command
  .classBuilder<
    DescribeBillingGroupCommandInput,
    DescribeBillingGroupCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "DescribeBillingGroup", {})
  .n("IoTClient", "DescribeBillingGroupCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBillingGroupCommand)
  .de(de_DescribeBillingGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBillingGroupRequest;
      output: DescribeBillingGroupResponse;
    };
    sdk: {
      input: DescribeBillingGroupCommandInput;
      output: DescribeBillingGroupCommandOutput;
    };
  };
}
