// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { GetMinuteUsageRequest, GetMinuteUsageResponse } from "../models/models_0";
import { GetMinuteUsage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMinuteUsageCommand}.
 */
export interface GetMinuteUsageCommandInput extends GetMinuteUsageRequest {}
/**
 * @public
 *
 * The output of {@link GetMinuteUsageCommand}.
 */
export interface GetMinuteUsageCommandOutput extends GetMinuteUsageResponse, __MetadataBearer {}

/**
 * <p>Returns the number of reserved minutes used by account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetMinuteUsageCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetMinuteUsageCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // GetMinuteUsageRequest
 *   month: Number("int"), // required
 *   year: Number("int"), // required
 * };
 * const command = new GetMinuteUsageCommand(input);
 * const response = await client.send(command);
 * // { // GetMinuteUsageResponse
 * //   isReservedMinutesCustomer: true || false,
 * //   totalReservedMinuteAllocation: Number("int"),
 * //   upcomingMinutesScheduled: Number("int"),
 * //   totalScheduledMinutes: Number("int"),
 * //   estimatedMinutesRemaining: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetMinuteUsageCommandInput - {@link GetMinuteUsageCommandInput}
 * @returns {@link GetMinuteUsageCommandOutput}
 * @see {@link GetMinuteUsageCommandInput} for command's `input` shape.
 * @see {@link GetMinuteUsageCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 *
 * @public
 */
export class GetMinuteUsageCommand extends $Command
  .classBuilder<
    GetMinuteUsageCommandInput,
    GetMinuteUsageCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GroundStation", "GetMinuteUsage", {})
  .n("GroundStationClient", "GetMinuteUsageCommand")
  .sc(GetMinuteUsage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMinuteUsageRequest;
      output: GetMinuteUsageResponse;
    };
    sdk: {
      input: GetMinuteUsageCommandInput;
      output: GetMinuteUsageCommandOutput;
    };
  };
}
