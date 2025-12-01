// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartReadSetExportJobRequest, StartReadSetExportJobResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { StartReadSetExportJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Starts a read set export job. When the export job is finished, the read set is exported to an Amazon S3 bucket which can be retrieved using the <code>GetReadSetExportJob</code> API operation.</p> <p>To monitor the status of the export job, use the <code>ListReadSetExportJobs</code> API operation. </p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class StartReadSetExportJobCommand extends $Command
  .classBuilder<
    StartReadSetExportJobCommandInput,
    StartReadSetExportJobCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "StartReadSetExportJob", {})
  .n("OmicsClient", "StartReadSetExportJobCommand")
  .sc(StartReadSetExportJob)
  .build() {
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
