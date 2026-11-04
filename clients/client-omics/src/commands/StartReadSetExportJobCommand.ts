// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartReadSetExportJobRequest, StartReadSetExportJobResponse } from "../models/models_0";
import { StartReadSetExportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartReadSetExportJobCommand}.
 */
export interface StartReadSetExportJobCommandInput extends StartReadSetExportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartReadSetExportJobCommand}.
 */
export interface StartReadSetExportJobCommandOutput extends StartReadSetExportJobResponse, __MetadataBearer {}

/**
 * Starts a read set export job. When the export job is finished, the read set is exported to an Amazon S3 bucket which can be retrieved using the `GetReadSetExportJob` API operation.
 *
 * To monitor the status of the export job, use the `ListReadSetExportJobs` API operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, StartReadSetExportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, StartReadSetExportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // StartReadSetExportJobRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   destination: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   sources: [ // ExportReadSetList // required
 *     { // ExportReadSet
 *       readSetId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartReadSetExportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartReadSetExportJobResponse
 * //   id: "STRING_VALUE", // required
 * //   sequenceStoreId: "STRING_VALUE", // required
 * //   destination: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StartReadSetExportJobCommandInput - {@link StartReadSetExportJobCommandInput}
 * @returns {@link StartReadSetExportJobCommandOutput}
 * @see {@link StartReadSetExportJobCommandInput} for command's `input` shape.
 * @see {@link StartReadSetExportJobCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class StartReadSetExportJobCommand extends command<StartReadSetExportJobCommandInput, StartReadSetExportJobCommandOutput>(
  _ep0,
  _mw0,
  "StartReadSetExportJob",
  StartReadSetExportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartReadSetExportJobRequest;
      output: StartReadSetExportJobResponse;
    };
    sdk: {
      input: StartReadSetExportJobCommandInput;
      output: StartReadSetExportJobCommandOutput;
    };
  };
}
