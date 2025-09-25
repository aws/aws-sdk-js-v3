// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteBillingGroupRequest, DeleteBillingGroupResponse } from "../models/models_1";
import { DeleteBillingGroup } from "../schemas/schemas_27_Billing";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBillingGroupCommand}.
 */
export interface DeleteBillingGroupCommandInput extends DeleteBillingGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBillingGroupCommand}.
 */
export interface DeleteBillingGroupCommandOutput extends DeleteBillingGroupResponse, __MetadataBearer {}

/**
 * <p>Deletes the billing group.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteBillingGroup</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteBillingGroupRequest
 *   billingGroupName: "STRING_VALUE", // required
 *   expectedVersion: Number("long"),
 * };
 * const command = new DeleteBillingGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBillingGroupCommandInput - {@link DeleteBillingGroupCommandInput}
 * @returns {@link DeleteBillingGroupCommandOutput}
 * @see {@link DeleteBillingGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class DeleteBillingGroupCommand extends $Command
  .classBuilder<
    DeleteBillingGroupCommandInput,
    DeleteBillingGroupCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DeleteBillingGroup", {})
  .n("IoTClient", "DeleteBillingGroupCommand")
  .sc(DeleteBillingGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBillingGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteBillingGroupCommandInput;
      output: DeleteBillingGroupCommandOutput;
    };
  };
}
