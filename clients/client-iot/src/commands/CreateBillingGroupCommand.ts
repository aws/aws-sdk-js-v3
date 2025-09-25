// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateBillingGroupRequest, CreateBillingGroupResponse } from "../models/models_0";
import { CreateBillingGroup } from "../schemas/schemas_27_Billing";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBillingGroupCommand}.
 */
export interface CreateBillingGroupCommandInput extends CreateBillingGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateBillingGroupCommand}.
 */
export interface CreateBillingGroupCommandOutput extends CreateBillingGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a billing group. If this call is made multiple times using
 * 			the same billing group name and configuration, the call will succeed. If this call is made with
 * 			the same billing group name but different configuration a <code>ResourceAlreadyExistsException</code> is thrown.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateBillingGroup</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateBillingGroupRequest
 *   billingGroupName: "STRING_VALUE", // required
 *   billingGroupProperties: { // BillingGroupProperties
 *     billingGroupDescription: "STRING_VALUE",
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateBillingGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateBillingGroupResponse
 * //   billingGroupName: "STRING_VALUE",
 * //   billingGroupArn: "STRING_VALUE",
 * //   billingGroupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBillingGroupCommandInput - {@link CreateBillingGroupCommandInput}
 * @returns {@link CreateBillingGroupCommandOutput}
 * @see {@link CreateBillingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class CreateBillingGroupCommand extends $Command
  .classBuilder<
    CreateBillingGroupCommandInput,
    CreateBillingGroupCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "CreateBillingGroup", {})
  .n("IoTClient", "CreateBillingGroupCommand")
  .sc(CreateBillingGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBillingGroupRequest;
      output: CreateBillingGroupResponse;
    };
    sdk: {
      input: CreateBillingGroupCommandInput;
      output: CreateBillingGroupCommandOutput;
    };
  };
}
