// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeHoursOfOperationRequest, DescribeHoursOfOperationResponse } from "../models/models_1";
import { de_DescribeHoursOfOperationCommand, se_DescribeHoursOfOperationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHoursOfOperationCommand}.
 */
export interface DescribeHoursOfOperationCommandInput extends DescribeHoursOfOperationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHoursOfOperationCommand}.
 */
export interface DescribeHoursOfOperationCommandOutput extends DescribeHoursOfOperationResponse, __MetadataBearer {}

/**
 * <p>Describes the hours of operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeHoursOfOperationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeHoursOfOperationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribeHoursOfOperationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HoursOfOperationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeHoursOfOperationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHoursOfOperationResponse
 * //   HoursOfOperation: { // HoursOfOperation
 * //     HoursOfOperationId: "STRING_VALUE",
 * //     HoursOfOperationArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     TimeZone: "STRING_VALUE",
 * //     Config: [ // HoursOfOperationConfigList
 * //       { // HoursOfOperationConfig
 * //         Day: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY", // required
 * //         StartTime: { // HoursOfOperationTimeSlice
 * //           Hours: Number("int"), // required
 * //           Minutes: Number("int"), // required
 * //         },
 * //         EndTime: {
 * //           Hours: Number("int"), // required
 * //           Minutes: Number("int"), // required
 * //         },
 * //       },
 * //     ],
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LastModifiedRegion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeHoursOfOperationCommandInput - {@link DescribeHoursOfOperationCommandInput}
 * @returns {@link DescribeHoursOfOperationCommandOutput}
 * @see {@link DescribeHoursOfOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeHoursOfOperationCommandOutput} for command's `response` shape.
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
export class DescribeHoursOfOperationCommand extends $Command
  .classBuilder<
    DescribeHoursOfOperationCommandInput,
    DescribeHoursOfOperationCommandOutput,
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
  .s("AmazonConnectService", "DescribeHoursOfOperation", {})
  .n("ConnectClient", "DescribeHoursOfOperationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeHoursOfOperationCommand)
  .de(de_DescribeHoursOfOperationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeHoursOfOperationRequest;
      output: DescribeHoursOfOperationResponse;
    };
    sdk: {
      input: DescribeHoursOfOperationCommandInput;
      output: DescribeHoursOfOperationCommandOutput;
    };
  };
}
