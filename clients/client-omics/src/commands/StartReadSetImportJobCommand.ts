// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartReadSetImportJobRequest, StartReadSetImportJobResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { StartReadSetImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartReadSetImportJobCommand}.
 */
export interface StartReadSetImportJobCommandInput extends StartReadSetImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartReadSetImportJobCommand}.
 */
export interface StartReadSetImportJobCommandOutput extends StartReadSetImportJobResponse, __MetadataBearer {}

/**
 * <p>Imports a read set from the sequence store. Read set import jobs support a maximum of 100 read sets of different types. Monitor the progress of your read set import job by calling the <code>GetReadSetImportJob</code> API operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, StartReadSetImportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, StartReadSetImportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // StartReadSetImportJobRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   sources: [ // StartReadSetImportJobSourceList // required
 *     { // StartReadSetImportJobSourceItem
 *       sourceFiles: { // SourceFiles
 *         source1: "STRING_VALUE", // required
 *         source2: "STRING_VALUE",
 *       },
 *       sourceFileType: "STRING_VALUE", // required
 *       subjectId: "STRING_VALUE", // required
 *       sampleId: "STRING_VALUE", // required
 *       generatedFrom: "STRING_VALUE",
 *       referenceArn: "STRING_VALUE",
 *       name: "STRING_VALUE",
 *       description: "STRING_VALUE",
 *       tags: { // TagMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new StartReadSetImportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartReadSetImportJobResponse
 * //   id: "STRING_VALUE", // required
 * //   sequenceStoreId: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StartReadSetImportJobCommandInput - {@link StartReadSetImportJobCommandInput}
 * @returns {@link StartReadSetImportJobCommandOutput}
 * @see {@link StartReadSetImportJobCommandInput} for command's `input` shape.
 * @see {@link StartReadSetImportJobCommandOutput} for command's `response` shape.
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
export class StartReadSetImportJobCommand extends $Command
  .classBuilder<
    StartReadSetImportJobCommandInput,
    StartReadSetImportJobCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "StartReadSetImportJob", {})
  .n("OmicsClient", "StartReadSetImportJobCommand")
  .sc(StartReadSetImportJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartReadSetImportJobRequest;
      output: StartReadSetImportJobResponse;
    };
    sdk: {
      input: StartReadSetImportJobCommandInput;
      output: StartReadSetImportJobCommandOutput;
    };
  };
}
