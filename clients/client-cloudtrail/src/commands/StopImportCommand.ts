// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopImportRequest, StopImportResponse } from "../models/models_0";
import { StopImport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <important>
 *             <p>CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-service-availability-change.html">CloudTrail Lake availability change</a>.</p>
 *          </important>
 *          <p> Stops a specified import. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, StopImportCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, StopImportCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
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
export class StopImportCommand extends command<StopImportCommandInput, StopImportCommandOutput>(
  _ep0,
  _mw0,
  "StopImport",
  StopImport$
) {
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
