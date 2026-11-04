// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartSearchResultExportJobInput, StartSearchResultExportJobOutput } from "../models/models_0";
import { StartSearchResultExportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartSearchResultExportJobCommand}.
 */
export interface StartSearchResultExportJobCommandInput extends StartSearchResultExportJobInput {}
/**
 * @public
 *
 * The output of {@link StartSearchResultExportJobCommand}.
 */
export interface StartSearchResultExportJobCommandOutput extends StartSearchResultExportJobOutput, __MetadataBearer {}

/**
 * This operations starts a job to export the results of search job to a designated S3 bucket.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupSearchClient, StartSearchResultExportJobCommand } from "@aws-sdk/client-backupsearch"; // ES Modules import
 * // const { BackupSearchClient, StartSearchResultExportJobCommand } = require("@aws-sdk/client-backupsearch"); // CommonJS import
 * // import type { BackupSearchClientConfig } from "@aws-sdk/client-backupsearch";
 * const config = {}; // type is BackupSearchClientConfig
 * const client = new BackupSearchClient(config);
 * const input = { // StartSearchResultExportJobInput
 *   SearchJobIdentifier: "STRING_VALUE", // required
 *   ExportSpecification: { // ExportSpecification Union: only one key present
 *     s3ExportSpecification: { // S3ExportSpecification
 *       DestinationBucket: "STRING_VALUE", // required
 *       DestinationPrefix: "STRING_VALUE",
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RoleArn: "STRING_VALUE",
 * };
 * const command = new StartSearchResultExportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartSearchResultExportJobOutput
 * //   ExportJobArn: "STRING_VALUE",
 * //   ExportJobIdentifier: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartSearchResultExportJobCommandInput - {@link StartSearchResultExportJobCommandInput}
 * @returns {@link StartSearchResultExportJobCommandOutput}
 * @see {@link StartSearchResultExportJobCommandInput} for command's `input` shape.
 * @see {@link StartSearchResultExportJobCommandOutput} for command's `response` shape.
 * @see {@link BackupSearchClientResolvedConfig | config} for BackupSearchClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception occurs when a conflict with a previous successful operation is detected. This generally occurs when the previous operation did not have time to propagate to the host serving the current request.
 *
 * A retry (with appropriate backoff logic) is the recommended response to this exception.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource was not found for this request.
 *
 * Confirm the resource information, such as the ARN or type is correct and exists, then retry the request.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request denied due to exceeding the quota limits permitted.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link BackupSearchServiceException}
 *
 * Base exception class for all service exceptions from BackupSearch service.
 *
 * @public
 */
export class StartSearchResultExportJobCommand extends command<StartSearchResultExportJobCommandInput, StartSearchResultExportJobCommandOutput>(
  _ep0,
  _mw0,
  "StartSearchResultExportJob",
  StartSearchResultExportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSearchResultExportJobInput;
      output: StartSearchResultExportJobOutput;
    };
    sdk: {
      input: StartSearchResultExportJobCommandInput;
      output: StartSearchResultExportJobCommandOutput;
    };
  };
}
