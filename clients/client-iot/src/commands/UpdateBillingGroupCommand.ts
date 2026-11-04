// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBillingGroupRequest, UpdateBillingGroupResponse } from "../models/models_2";
import { UpdateBillingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates information about the billing group.
 *
 * Requires permission to access the [UpdateBillingGroup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link VersionConflictException} (client fault)
 *
 * An exception thrown when the version of an entity specified with the `expectedVersion` parameter does not match the latest version in the system.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class UpdateBillingGroupCommand extends command<UpdateBillingGroupCommandInput, UpdateBillingGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBillingGroup",
  UpdateBillingGroup$
) {
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
