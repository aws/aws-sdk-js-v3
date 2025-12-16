// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetEffectiveHoursOfOperationsRequest, GetEffectiveHoursOfOperationsResponse } from "../models/models_1";
import { GetEffectiveHoursOfOperations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEffectiveHoursOfOperationsCommand}.
 */
export interface GetEffectiveHoursOfOperationsCommandInput extends GetEffectiveHoursOfOperationsRequest {}
/**
 * @public
 *
 * The output of {@link GetEffectiveHoursOfOperationsCommand}.
 */
export interface GetEffectiveHoursOfOperationsCommandOutput
  extends GetEffectiveHoursOfOperationsResponse,
    __MetadataBearer {}

/**
 * <p>Get the hours of operations with the effective override applied.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetEffectiveHoursOfOperationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetEffectiveHoursOfOperationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // GetEffectiveHoursOfOperationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HoursOfOperationId: "STRING_VALUE", // required
 *   FromDate: "STRING_VALUE", // required
 *   ToDate: "STRING_VALUE", // required
 * };
 * const command = new GetEffectiveHoursOfOperationsCommand(input);
 * const response = await client.send(command);
 * // { // GetEffectiveHoursOfOperationsResponse
 * //   EffectiveHoursOfOperationList: [ // EffectiveHoursOfOperationList
 * //     { // EffectiveHoursOfOperations
 * //       Date: "STRING_VALUE",
 * //       OperationalHours: [ // OperationalHours
 * //         { // OperationalHour
 * //           Start: { // OverrideTimeSlice
 * //             Hours: Number("int"), // required
 * //             Minutes: Number("int"), // required
 * //           },
 * //           End: {
 * //             Hours: Number("int"), // required
 * //             Minutes: Number("int"), // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   TimeZone: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEffectiveHoursOfOperationsCommandInput - {@link GetEffectiveHoursOfOperationsCommandInput}
 * @returns {@link GetEffectiveHoursOfOperationsCommandOutput}
 * @see {@link GetEffectiveHoursOfOperationsCommandInput} for command's `input` shape.
 * @see {@link GetEffectiveHoursOfOperationsCommandOutput} for command's `response` shape.
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
export class GetEffectiveHoursOfOperationsCommand extends $Command
  .classBuilder<
    GetEffectiveHoursOfOperationsCommandInput,
    GetEffectiveHoursOfOperationsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "GetEffectiveHoursOfOperations", {})
  .n("ConnectClient", "GetEffectiveHoursOfOperationsCommand")
  .sc(GetEffectiveHoursOfOperations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEffectiveHoursOfOperationsRequest;
      output: GetEffectiveHoursOfOperationsResponse;
    };
    sdk: {
      input: GetEffectiveHoursOfOperationsCommandInput;
      output: GetEffectiveHoursOfOperationsCommandOutput;
    };
  };
}
