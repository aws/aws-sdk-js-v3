// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetReadSetImportJobRequest, GetReadSetImportJobResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetReadSetImportJobCommand, se_GetReadSetImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReadSetImportJobCommand}.
 */
export interface GetReadSetImportJobCommandInput extends GetReadSetImportJobRequest {}
/**
 * @public
 *
 * The output of {@link GetReadSetImportJobCommand}.
 */
export interface GetReadSetImportJobCommandOutput extends GetReadSetImportJobResponse, __MetadataBearer {}

/**
 * <p>Gets information about a read set import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetReadSetImportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetReadSetImportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // GetReadSetImportJobRequest
 *   id: "STRING_VALUE", // required
 *   sequenceStoreId: "STRING_VALUE", // required
 * };
 * const command = new GetReadSetImportJobCommand(input);
 * const response = await client.send(command);
 * // { // GetReadSetImportJobResponse
 * //   id: "STRING_VALUE", // required
 * //   sequenceStoreId: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   statusMessage: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   completionTime: new Date("TIMESTAMP"),
 * //   sources: [ // ImportReadSetSourceList // required
 * //     { // ImportReadSetSourceItem
 * //       sourceFiles: { // SourceFiles
 * //         source1: "STRING_VALUE", // required
 * //         source2: "STRING_VALUE",
 * //       },
 * //       sourceFileType: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       statusMessage: "STRING_VALUE",
 * //       subjectId: "STRING_VALUE", // required
 * //       sampleId: "STRING_VALUE", // required
 * //       generatedFrom: "STRING_VALUE",
 * //       referenceArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       readSetId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetReadSetImportJobCommandInput - {@link GetReadSetImportJobCommandInput}
 * @returns {@link GetReadSetImportJobCommandOutput}
 * @see {@link GetReadSetImportJobCommandInput} for command's `input` shape.
 * @see {@link GetReadSetImportJobCommandOutput} for command's `response` shape.
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
export class GetReadSetImportJobCommand extends $Command
  .classBuilder<
    GetReadSetImportJobCommandInput,
    GetReadSetImportJobCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "GetReadSetImportJob", {})
  .n("OmicsClient", "GetReadSetImportJobCommand")
  .f(void 0, void 0)
  .ser(se_GetReadSetImportJobCommand)
  .de(de_GetReadSetImportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReadSetImportJobRequest;
      output: GetReadSetImportJobResponse;
    };
    sdk: {
      input: GetReadSetImportJobCommandInput;
      output: GetReadSetImportJobCommandOutput;
    };
  };
}
