// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopImportRequest, StopImportResponse } from "../models/models_0";
import { de_StopImportCommand, se_StopImportCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopImportCommand}.
 */
export interface StopImportCommandInput extends StopImportRequest {}
/**
 * @public
 *
 * The output of {@link StopImportCommand}.
 */
export interface StopImportCommandOutput extends StopImportResponse, __MetadataBearer {}

/**
 * <p> Stops a specified import. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, StopImportCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, StopImportCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // StopImportRequest
 *   ImportId: "STRING_VALUE", // required
 * };
 * const command = new StopImportCommand(input);
 * const response = await client.send(command);
 * // { // StopImportResponse
 * //   ImportId: "STRING_VALUE",
 * //   ImportSource: { // ImportSource
 * //     S3: { // S3ImportSource
 * //       S3LocationUri: "STRING_VALUE", // required
 * //       S3BucketRegion: "STRING_VALUE", // required
 * //       S3BucketAccessRoleArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   Destinations: [ // ImportDestinations
 * //     "STRING_VALUE",
 * //   ],
 * //   ImportStatus: "INITIALIZING" || "IN_PROGRESS" || "FAILED" || "STOPPED" || "COMPLETED",
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   StartEventTime: new Date("TIMESTAMP"),
 * //   EndEventTime: new Date("TIMESTAMP"),
 * //   ImportStatistics: { // ImportStatistics
 * //     PrefixesFound: Number("long"),
 * //     PrefixesCompleted: Number("long"),
 * //     FilesCompleted: Number("long"),
 * //     EventsCompleted: Number("long"),
 * //     FailedEntries: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param StopImportCommandInput - {@link StopImportCommandInput}
 * @returns {@link StopImportCommandOutput}
 * @see {@link StopImportCommandInput} for command's `input` shape.
 * @see {@link StopImportCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link ImportNotFoundException} (client fault)
 *  <p> The specified import was not found. </p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class StopImportCommand extends $Command
  .classBuilder<
    StopImportCommandInput,
    StopImportCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudTrail_20131101", "StopImport", {})
  .n("CloudTrailClient", "StopImportCommand")
  .f(void 0, void 0)
  .ser(se_StopImportCommand)
  .de(de_StopImportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopImportRequest;
      output: StopImportResponse;
    };
    sdk: {
      input: StopImportCommandInput;
      output: StopImportCommandOutput;
    };
  };
}
