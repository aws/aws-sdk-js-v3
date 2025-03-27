// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTimeSeriesDataPointInput, GetTimeSeriesDataPointOutput } from "../models/models_1";
import { de_GetTimeSeriesDataPointCommand, se_GetTimeSeriesDataPointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTimeSeriesDataPointCommand}.
 */
export interface GetTimeSeriesDataPointCommandInput extends GetTimeSeriesDataPointInput {}
/**
 * @public
 *
 * The output of {@link GetTimeSeriesDataPointCommand}.
 */
export interface GetTimeSeriesDataPointCommandOutput extends GetTimeSeriesDataPointOutput, __MetadataBearer {}

/**
 * <p>Gets the existing data point for the asset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetTimeSeriesDataPointCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetTimeSeriesDataPointCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetTimeSeriesDataPointInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   entityType: "ASSET" || "LISTING", // required
 *   identifier: "STRING_VALUE", // required
 *   formName: "STRING_VALUE", // required
 * };
 * const command = new GetTimeSeriesDataPointCommand(input);
 * const response = await client.send(command);
 * // { // GetTimeSeriesDataPointOutput
 * //   domainId: "STRING_VALUE",
 * //   entityId: "STRING_VALUE",
 * //   entityType: "ASSET" || "LISTING",
 * //   formName: "STRING_VALUE",
 * //   form: { // TimeSeriesDataPointFormOutput
 * //     formName: "STRING_VALUE", // required
 * //     typeIdentifier: "STRING_VALUE", // required
 * //     typeRevision: "STRING_VALUE",
 * //     timestamp: new Date("TIMESTAMP"), // required
 * //     content: "STRING_VALUE",
 * //     id: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTimeSeriesDataPointCommandInput - {@link GetTimeSeriesDataPointCommandInput}
 * @returns {@link GetTimeSeriesDataPointCommandOutput}
 * @see {@link GetTimeSeriesDataPointCommandInput} for command's `input` shape.
 * @see {@link GetTimeSeriesDataPointCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class GetTimeSeriesDataPointCommand extends $Command
  .classBuilder<
    GetTimeSeriesDataPointCommandInput,
    GetTimeSeriesDataPointCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "GetTimeSeriesDataPoint", {})
  .n("DataZoneClient", "GetTimeSeriesDataPointCommand")
  .f(void 0, void 0)
  .ser(se_GetTimeSeriesDataPointCommand)
  .de(de_GetTimeSeriesDataPointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTimeSeriesDataPointInput;
      output: GetTimeSeriesDataPointOutput;
    };
    sdk: {
      input: GetTimeSeriesDataPointCommandInput;
      output: GetTimeSeriesDataPointCommandOutput;
    };
  };
}
