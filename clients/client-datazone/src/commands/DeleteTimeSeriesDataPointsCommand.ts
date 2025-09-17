// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTimeSeriesDataPointsInput, DeleteTimeSeriesDataPointsOutput } from "../models/models_1";
import { de_DeleteTimeSeriesDataPointsCommand, se_DeleteTimeSeriesDataPointsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTimeSeriesDataPointsCommand}.
 */
export interface DeleteTimeSeriesDataPointsCommandInput extends DeleteTimeSeriesDataPointsInput {}
/**
 * @public
 *
 * The output of {@link DeleteTimeSeriesDataPointsCommand}.
 */
export interface DeleteTimeSeriesDataPointsCommandOutput extends DeleteTimeSeriesDataPointsOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified time series form for the specified asset. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteTimeSeriesDataPointsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteTimeSeriesDataPointsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteTimeSeriesDataPointsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   entityType: "ASSET" || "LISTING", // required
 *   formName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteTimeSeriesDataPointsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTimeSeriesDataPointsCommandInput - {@link DeleteTimeSeriesDataPointsCommandInput}
 * @returns {@link DeleteTimeSeriesDataPointsCommandOutput}
 * @see {@link DeleteTimeSeriesDataPointsCommandInput} for command's `input` shape.
 * @see {@link DeleteTimeSeriesDataPointsCommandOutput} for command's `response` shape.
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
export class DeleteTimeSeriesDataPointsCommand extends $Command
  .classBuilder<
    DeleteTimeSeriesDataPointsCommandInput,
    DeleteTimeSeriesDataPointsCommandOutput,
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
  .s("DataZone", "DeleteTimeSeriesDataPoints", {})
  .n("DataZoneClient", "DeleteTimeSeriesDataPointsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTimeSeriesDataPointsCommand)
  .de(de_DeleteTimeSeriesDataPointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTimeSeriesDataPointsInput;
      output: {};
    };
    sdk: {
      input: DeleteTimeSeriesDataPointsCommandInput;
      output: DeleteTimeSeriesDataPointsCommandOutput;
    };
  };
}
