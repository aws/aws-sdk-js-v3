// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetReadSetExportJobRequest, GetReadSetExportJobResponse } from "../models/models_0";
import { GetReadSetExportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetReadSetExportJobCommand}.
 */
export interface GetReadSetExportJobCommandInput extends GetReadSetExportJobRequest {}
/**
 * @public
 *
 * The output of {@link GetReadSetExportJobCommand}.
 */
export interface GetReadSetExportJobCommandOutput extends GetReadSetExportJobResponse, __MetadataBearer {}

/**
 * Retrieves status information about a read set export job and returns the data in JSON format. Use this operation to actively monitor the progress of an export job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetReadSetExportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetReadSetExportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetReadSetExportJobRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetReadSetExportJobCommand(input);
 * const response = await client.send(command);
 * // { // GetReadSetExportJobResponse
 * //   id: "STRING_VALUE", // required
 * //   sequenceStoreId: "STRING_VALUE", // required
 * //   destination: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   statusMessage: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   completionTime: new Date("TIMESTAMP"),
 * //   readSets: [ // ExportReadSetDetailList
 * //     { // ExportReadSetDetail
 * //       id: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       statusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetReadSetExportJobCommandInput - {@link GetReadSetExportJobCommandInput}
 * @returns {@link GetReadSetExportJobCommandOutput}
 * @see {@link GetReadSetExportJobCommandInput} for command's `input` shape.
 * @see {@link GetReadSetExportJobCommandOutput} for command's `response` shape.
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
export class GetReadSetExportJobCommand extends command<GetReadSetExportJobCommandInput, GetReadSetExportJobCommandOutput>(
  _ep0,
  _mw0,
  "GetReadSetExportJob",
  GetReadSetExportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReadSetExportJobRequest;
      output: GetReadSetExportJobResponse;
    };
    sdk: {
      input: GetReadSetExportJobCommandInput;
      output: GetReadSetExportJobCommandOutput;
    };
  };
}
