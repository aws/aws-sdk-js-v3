// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeHoursOfOperationOverrideRequest, DescribeHoursOfOperationOverrideResponse } from "../models/models_1";
import {
  de_DescribeHoursOfOperationOverrideCommand,
  se_DescribeHoursOfOperationOverrideCommand,
} from "../protocols/Aws_restJson1";

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
export interface DescribeHoursOfOperationOverrideCommandOutput
  extends DescribeHoursOfOperationOverrideResponse,
    __MetadataBearer {}

/**
 * <p>Describes the hours of operation override.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeHoursOfOperationOverrideCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeHoursOfOperationOverrideCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DescribeHoursOfOperationOverride", {})
  .n("ConnectClient", "DescribeHoursOfOperationOverrideCommand")
  .f(void 0, void 0)
  .ser(se_DescribeHoursOfOperationOverrideCommand)
  .de(de_DescribeHoursOfOperationOverrideCommand)
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
