// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListHoursOfOperationOverridesRequest, ListHoursOfOperationOverridesResponse } from "../models/models_1";
import {
  de_ListHoursOfOperationOverridesCommand,
  se_ListHoursOfOperationOverridesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHoursOfOperationOverridesCommand}.
 */
export interface ListHoursOfOperationOverridesCommandInput extends ListHoursOfOperationOverridesRequest {}
/**
 * @public
 *
 * The output of {@link ListHoursOfOperationOverridesCommand}.
 */
export interface ListHoursOfOperationOverridesCommandOutput
  extends ListHoursOfOperationOverridesResponse,
    __MetadataBearer {}

/**
 * <p>List the hours of operation overrides.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListHoursOfOperationOverridesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListHoursOfOperationOverridesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // ListHoursOfOperationOverridesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HoursOfOperationId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListHoursOfOperationOverridesCommand(input);
 * const response = await client.send(command);
 * // { // ListHoursOfOperationOverridesResponse
 * //   NextToken: "STRING_VALUE",
 * //   HoursOfOperationOverrideList: [ // HoursOfOperationOverrideList
 * //     { // HoursOfOperationOverride
 * //       HoursOfOperationOverrideId: "STRING_VALUE",
 * //       HoursOfOperationId: "STRING_VALUE",
 * //       HoursOfOperationArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Config: [ // HoursOfOperationOverrideConfigList
 * //         { // HoursOfOperationOverrideConfig
 * //           Day: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 * //           StartTime: { // OverrideTimeSlice
 * //             Hours: Number("int"), // required
 * //             Minutes: Number("int"), // required
 * //           },
 * //           EndTime: {
 * //             Hours: Number("int"), // required
 * //             Minutes: Number("int"), // required
 * //           },
 * //         },
 * //       ],
 * //       EffectiveFrom: "STRING_VALUE",
 * //       EffectiveTill: "STRING_VALUE",
 * //     },
 * //   ],
 * //   LastModifiedRegion: "STRING_VALUE",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param ListHoursOfOperationOverridesCommandInput - {@link ListHoursOfOperationOverridesCommandInput}
 * @returns {@link ListHoursOfOperationOverridesCommandOutput}
 * @see {@link ListHoursOfOperationOverridesCommandInput} for command's `input` shape.
 * @see {@link ListHoursOfOperationOverridesCommandOutput} for command's `response` shape.
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
export class ListHoursOfOperationOverridesCommand extends $Command
  .classBuilder<
    ListHoursOfOperationOverridesCommandInput,
    ListHoursOfOperationOverridesCommandOutput,
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
  .s("AmazonConnectService", "ListHoursOfOperationOverrides", {})
  .n("ConnectClient", "ListHoursOfOperationOverridesCommand")
  .f(void 0, void 0)
  .ser(se_ListHoursOfOperationOverridesCommand)
  .de(de_ListHoursOfOperationOverridesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHoursOfOperationOverridesRequest;
      output: ListHoursOfOperationOverridesResponse;
    };
    sdk: {
      input: ListHoursOfOperationOverridesCommandInput;
      output: ListHoursOfOperationOverridesCommandOutput;
    };
  };
}
