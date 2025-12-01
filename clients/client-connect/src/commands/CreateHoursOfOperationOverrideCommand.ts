// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateHoursOfOperationOverrideRequest, CreateHoursOfOperationOverrideResponse } from "../models/models_0";
import { CreateHoursOfOperationOverride } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHoursOfOperationOverrideCommand}.
 */
export interface CreateHoursOfOperationOverrideCommandInput extends CreateHoursOfOperationOverrideRequest {}
/**
 * @public
 *
 * The output of {@link CreateHoursOfOperationOverrideCommand}.
 */
export interface CreateHoursOfOperationOverrideCommandOutput
  extends CreateHoursOfOperationOverrideResponse,
    __MetadataBearer {}

/**
 * <p>Creates an hours of operation override in an Amazon Connect hours of operation resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateHoursOfOperationOverrideCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateHoursOfOperationOverrideCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateHoursOfOperationOverrideRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HoursOfOperationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Config: [ // HoursOfOperationOverrideConfigList // required
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
 *   EffectiveFrom: "STRING_VALUE", // required
 *   EffectiveTill: "STRING_VALUE", // required
 * };
 * const command = new CreateHoursOfOperationOverrideCommand(input);
 * const response = await client.send(command);
 * // { // CreateHoursOfOperationOverrideResponse
 * //   HoursOfOperationOverrideId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateHoursOfOperationOverrideCommandInput - {@link CreateHoursOfOperationOverrideCommandInput}
 * @returns {@link CreateHoursOfOperationOverrideCommandOutput}
 * @see {@link CreateHoursOfOperationOverrideCommandInput} for command's `input` shape.
 * @see {@link CreateHoursOfOperationOverrideCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
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
export class CreateHoursOfOperationOverrideCommand extends $Command
  .classBuilder<
    CreateHoursOfOperationOverrideCommandInput,
    CreateHoursOfOperationOverrideCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateHoursOfOperationOverride", {})
  .n("ConnectClient", "CreateHoursOfOperationOverrideCommand")
  .sc(CreateHoursOfOperationOverride)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHoursOfOperationOverrideRequest;
      output: CreateHoursOfOperationOverrideResponse;
    };
    sdk: {
      input: CreateHoursOfOperationOverrideCommandInput;
      output: CreateHoursOfOperationOverrideCommandOutput;
    };
  };
}
