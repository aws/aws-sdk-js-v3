// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateBillingGroupRequest, UpdateBillingGroupResponse } from "../models/models_2";
import { UpdateBillingGroup } from "../schemas/schemas_27_Billing";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBillingGroupCommand}.
 */
export interface UpdateBillingGroupCommandInput extends UpdateBillingGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBillingGroupCommand}.
 */
export interface UpdateBillingGroupCommandOutput extends UpdateBillingGroupResponse, __MetadataBearer {}

/**
 * <p>Updates information about the billing group.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateBillingGroup</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateBillingGroupRequest
 *   billingGroupName: "STRING_VALUE", // required
 *   billingGroupProperties: { // BillingGroupProperties
 *     billingGroupDescription: "STRING_VALUE",
 *   },
 *   expectedVersion: Number("long"),
 * };
 * const command = new UpdateBillingGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBillingGroupResponse
 * //   version: Number("long"),
 * // };
 *
 * ```
 *
 * @param UpdateBillingGroupCommandInput - {@link UpdateBillingGroupCommandInput}
 * @returns {@link UpdateBillingGroupCommandOutput}
 * @see {@link UpdateBillingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateBillingGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link VersionConflictException} (client fault)
 *  <p>An exception thrown when the version of an entity specified with the
 *             <code>expectedVersion</code> parameter does not match the latest version in the
 *          system.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class UpdateBillingGroupCommand extends $Command
  .classBuilder<
    UpdateBillingGroupCommandInput,
    UpdateBillingGroupCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "UpdateBillingGroup", {})
  .n("IoTClient", "UpdateBillingGroupCommand")
  .sc(UpdateBillingGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBillingGroupRequest;
      output: UpdateBillingGroupResponse;
    };
    sdk: {
      input: UpdateBillingGroupCommandInput;
      output: UpdateBillingGroupCommandOutput;
    };
  };
}
