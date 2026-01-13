// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeHoursOfOperationOverrideRequest,
  DescribeHoursOfOperationOverrideResponse,
} from "../models/models_1";
import { DescribeHoursOfOperationOverride$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHoursOfOperationOverrideCommand}.
 */
export interface DescribeHoursOfOperationOverrideCommandInput extends DescribeHoursOfOperationOverrideRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHoursOfOperationOverrideCommand}.
 */
export interface DescribeHoursOfOperationOverrideCommandOutput extends DescribeHoursOfOperationOverrideResponse, __MetadataBearer {}

/**
 * <p>Describes the hours of operation override.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeHoursOfOperationOverrideCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeHoursOfOperationOverrideCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeHoursOfOperationOverrideRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HoursOfOperationId: "STRING_VALUE", // required
 *   HoursOfOperationOverrideId: "STRING_VALUE", // required
 * };
 * const command = new DescribeHoursOfOperationOverrideCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHoursOfOperationOverrideResponse
 * //   HoursOfOperationOverride: { // HoursOfOperationOverride
 * //     HoursOfOperationOverrideId: "STRING_VALUE",
 * //     HoursOfOperationId: "STRING_VALUE",
 * //     HoursOfOperationArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Config: [ // HoursOfOperationOverrideConfigList
 * //       { // HoursOfOperationOverrideConfig
 * //         Day: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 * //         StartTime: { // OverrideTimeSlice
 * //           Hours: Number("int"), // required
 * //           Minutes: Number("int"), // required
 * //         },
 * //         EndTime: {
 * //           Hours: Number("int"), // required
 * //           Minutes: Number("int"), // required
 * //         },
 * //       },
 * //     ],
 * //     EffectiveFrom: "STRING_VALUE",
 * //     EffectiveTill: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeHoursOfOperationOverrideCommandInput - {@link DescribeHoursOfOperationOverrideCommandInput}
 * @returns {@link DescribeHoursOfOperationOverrideCommandOutput}
 * @see {@link DescribeHoursOfOperationOverrideCommandInput} for command's `input` shape.
 * @see {@link DescribeHoursOfOperationOverrideCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
export class DescribeHoursOfOperationOverrideCommand extends $Command
  .classBuilder<
    DescribeHoursOfOperationOverrideCommandInput,
    DescribeHoursOfOperationOverrideCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DescribeHoursOfOperationOverride", {})
  .n("ConnectClient", "DescribeHoursOfOperationOverrideCommand")
  .sc(DescribeHoursOfOperationOverride$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeHoursOfOperationOverrideRequest;
      output: DescribeHoursOfOperationOverrideResponse;
    };
    sdk: {
      input: DescribeHoursOfOperationOverrideCommandInput;
      output: DescribeHoursOfOperationOverrideCommandOutput;
    };
  };
}
