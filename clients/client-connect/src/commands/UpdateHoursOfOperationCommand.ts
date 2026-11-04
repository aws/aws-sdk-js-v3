// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateHoursOfOperationRequest } from "../models/models_3";
import { UpdateHoursOfOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateHoursOfOperationCommand}.
 */
export interface UpdateHoursOfOperationCommandInput extends UpdateHoursOfOperationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHoursOfOperationCommand}.
 */
export interface UpdateHoursOfOperationCommandOutput extends __MetadataBearer {}

/**
 * Updates the hours of operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateHoursOfOperationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateHoursOfOperationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateHoursOfOperationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HoursOfOperationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   TimeZone: "STRING_VALUE",
 *   Config: [ // HoursOfOperationConfigList
 *     { // HoursOfOperationConfig
 *       Day: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY", // required
 *       StartTime: { // HoursOfOperationTimeSlice
 *         Hours: Number("int"), // required
 *         Minutes: Number("int"), // required
 *       },
 *       EndTime: {
 *         Hours: Number("int"), // required
 *         Minutes: Number("int"), // required
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateHoursOfOperationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateHoursOfOperationCommandInput - {@link UpdateHoursOfOperationCommandInput}
 * @returns {@link UpdateHoursOfOperationCommandOutput}
 * @see {@link UpdateHoursOfOperationCommandInput} for command's `input` shape.
 * @see {@link UpdateHoursOfOperationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * A resource with the specified name already exists.
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
export class UpdateHoursOfOperationCommand extends command<UpdateHoursOfOperationCommandInput, UpdateHoursOfOperationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateHoursOfOperation",
  UpdateHoursOfOperation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateHoursOfOperationRequest;
      output: {};
    };
    sdk: {
      input: UpdateHoursOfOperationCommandInput;
      output: UpdateHoursOfOperationCommandOutput;
    };
  };
}
