// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetImportRequest, GetImportResponse } from "../models/models_0";
import { GetImport } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetImportCommand}.
 */
export interface GetImportCommandInput extends GetImportRequest {}
/**
 * @public
 *
 * The output of {@link GetImportCommand}.
 */
export interface GetImportCommandOutput extends GetImportResponse, __MetadataBearer {}

/**
 * <p> Returns information about a specific import. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetImportCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetImportCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // GetImportRequest
 *   ImportId: "STRING_VALUE", // required
 * };
 * const command = new GetImportCommand(input);
 * const response = await client.send(command);
 * // { // GetImportResponse
 * //   ImportId: "STRING_VALUE",
 * //   Destinations: [ // ImportDestinations
 * //     "STRING_VALUE",
 * //   ],
 * //   ImportSource: { // ImportSource
 * //     S3: { // S3ImportSource
 * //       S3LocationUri: "STRING_VALUE", // required
 * //       S3BucketRegion: "STRING_VALUE", // required
 * //       S3BucketAccessRoleArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   StartEventTime: new Date("TIMESTAMP"),
 * //   EndEventTime: new Date("TIMESTAMP"),
 * //   ImportStatus: "INITIALIZING" || "IN_PROGRESS" || "FAILED" || "STOPPED" || "COMPLETED",
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   UpdatedTimestamp: new Date("TIMESTAMP"),
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
 * @param GetImportCommandInput - {@link GetImportCommandInput}
 * @returns {@link GetImportCommandOutput}
 * @see {@link GetImportCommandInput} for command's `input` shape.
 * @see {@link GetImportCommandOutput} for command's `response` shape.
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
export class GetImportCommand extends $Command
  .classBuilder<
    GetImportCommandInput,
    GetImportCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "GetImport", {})
  .n("CloudTrailClient", "GetImportCommand")
  .sc(GetImport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImportRequest;
      output: GetImportResponse;
    };
    sdk: {
      input: GetImportCommandInput;
      output: GetImportCommandOutput;
    };
  };
}
