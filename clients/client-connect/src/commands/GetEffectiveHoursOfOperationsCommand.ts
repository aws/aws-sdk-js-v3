// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEffectiveHoursOfOperationsRequest, GetEffectiveHoursOfOperationsResponse } from "../models/models_2";
import { GetEffectiveHoursOfOperations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetEffectiveHoursOfOperationsCommandOutput extends GetEffectiveHoursOfOperationsResponse, __MetadataBearer {}

/**
 * Get the hours of operations with the effective override applied.
 *
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
 * //   EffectiveOverrideHoursList: [ // EffectiveOverrideHoursList
 * //     { // EffectiveOverrideHours
 * //       Date: "STRING_VALUE",
 * //       OverrideHours: [ // OverrideHours
 * //         { // OverrideHour
 * //           Start: {
 * //             Hours: Number("int"), // required
 * //             Minutes: Number("int"), // required
 * //           },
 * //           End: {
 * //             Hours: Number("int"), // required
 * //             Minutes: Number("int"), // required
 * //           },
 * //           OverrideName: "STRING_VALUE",
 * //           OperationalStatus: "OPEN" || "CLOSED",
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
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class GetEffectiveHoursOfOperationsCommand extends command<GetEffectiveHoursOfOperationsCommandInput, GetEffectiveHoursOfOperationsCommandOutput>(
  _ep0,
  _mw0,
  "GetEffectiveHoursOfOperations",
  GetEffectiveHoursOfOperations$
) {
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
