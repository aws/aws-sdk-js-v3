// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateHoursOfOperationRequest, CreateHoursOfOperationResponse } from "../models/models_0";
import { CreateHoursOfOperation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHoursOfOperationCommand}.
 */
export interface CreateHoursOfOperationCommandInput extends CreateHoursOfOperationRequest {}
/**
 * @public
 *
 * The output of {@link CreateHoursOfOperationCommand}.
 */
export interface CreateHoursOfOperationCommandOutput extends CreateHoursOfOperationResponse, __MetadataBearer {}

/**
 * <p>Creates hours of operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateHoursOfOperationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateHoursOfOperationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateHoursOfOperationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   TimeZone: "STRING_VALUE", // required
 *   Config: [ // HoursOfOperationConfigList // required
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
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateHoursOfOperationCommand(input);
 * const response = await client.send(command);
 * // { // CreateHoursOfOperationResponse
 * //   HoursOfOperationId: "STRING_VALUE",
 * //   HoursOfOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateHoursOfOperationCommandInput - {@link CreateHoursOfOperationCommandInput}
 * @returns {@link CreateHoursOfOperationCommandOutput}
 * @see {@link CreateHoursOfOperationCommandInput} for command's `input` shape.
 * @see {@link CreateHoursOfOperationCommandOutput} for command's `response` shape.
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
export class CreateHoursOfOperationCommand extends $Command
  .classBuilder<
    CreateHoursOfOperationCommandInput,
    CreateHoursOfOperationCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateHoursOfOperation", {})
  .n("ConnectClient", "CreateHoursOfOperationCommand")
  .sc(CreateHoursOfOperation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHoursOfOperationRequest;
      output: CreateHoursOfOperationResponse;
    };
    sdk: {
      input: CreateHoursOfOperationCommandInput;
      output: CreateHoursOfOperationCommandOutput;
    };
  };
}
