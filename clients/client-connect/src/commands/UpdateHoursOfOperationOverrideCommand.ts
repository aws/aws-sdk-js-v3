// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateHoursOfOperationOverrideRequest } from "../models/models_3";
import { UpdateHoursOfOperationOverride } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateHoursOfOperationOverrideCommand}.
 */
export interface UpdateHoursOfOperationOverrideCommandInput extends UpdateHoursOfOperationOverrideRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHoursOfOperationOverrideCommand}.
 */
export interface UpdateHoursOfOperationOverrideCommandOutput extends __MetadataBearer {}

/**
 * <p>Update the hours of operation override.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateHoursOfOperationOverrideCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateHoursOfOperationOverrideCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateHoursOfOperationOverrideRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HoursOfOperationId: "STRING_VALUE", // required
 *   HoursOfOperationOverrideId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Config: [ // HoursOfOperationOverrideConfigList
 *     { // HoursOfOperationOverrideConfig
 *       Day: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 *       StartTime: { // OverrideTimeSlice
 *         Hours: Number("int"), // required
 *         Minutes: Number("int"), // required
 *       },
 *       EndTime: {
 *         Hours: Number("int"), // required
 *         Minutes: Number("int"), // required
 *       },
 *     },
 *   ],
 *   EffectiveFrom: "STRING_VALUE",
 *   EffectiveTill: "STRING_VALUE",
 * };
 * const command = new UpdateHoursOfOperationOverrideCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateHoursOfOperationOverrideCommandInput - {@link UpdateHoursOfOperationOverrideCommandInput}
 * @returns {@link UpdateHoursOfOperationOverrideCommandOutput}
 * @see {@link UpdateHoursOfOperationOverrideCommandInput} for command's `input` shape.
 * @see {@link UpdateHoursOfOperationOverrideCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link ConditionalOperationFailedException} (client fault)
 *  <p>Request processing failed because dependent condition failed.</p>
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateHoursOfOperationOverrideCommand extends $Command
  .classBuilder<
    UpdateHoursOfOperationOverrideCommandInput,
    UpdateHoursOfOperationOverrideCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateHoursOfOperationOverride", {})
  .n("ConnectClient", "UpdateHoursOfOperationOverrideCommand")
  .sc(UpdateHoursOfOperationOverride)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateHoursOfOperationOverrideRequest;
      output: {};
    };
    sdk: {
      input: UpdateHoursOfOperationOverrideCommandInput;
      output: UpdateHoursOfOperationOverrideCommandOutput;
    };
  };
}
