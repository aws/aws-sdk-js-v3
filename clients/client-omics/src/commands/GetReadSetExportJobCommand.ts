// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetReadSetExportJobRequest, GetReadSetExportJobResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetReadSetExportJobCommand, se_GetReadSetExportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets information about a read set export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetReadSetExportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetReadSetExportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
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
export class GetReadSetExportJobCommand extends $Command
  .classBuilder<
    GetReadSetExportJobCommandInput,
    GetReadSetExportJobCommandOutput,
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
  .s("Omics", "GetReadSetExportJob", {})
  .n("OmicsClient", "GetReadSetExportJobCommand")
  .f(void 0, void 0)
  .ser(se_GetReadSetExportJobCommand)
  .de(de_GetReadSetExportJobCommand)
  .build() {
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
