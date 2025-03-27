// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetImportJobRequest, GetImportJobResponse, GetImportJobResponseFilterSensitiveLog } from "../models/models_1";
import { de_GetImportJobCommand, se_GetImportJobCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetImportJobCommand}.
 */
export interface GetImportJobCommandInput extends GetImportJobRequest {}
/**
 * @public
 *
 * The output of {@link GetImportJobCommand}.
 */
export interface GetImportJobCommandOutput extends GetImportJobResponse, __MetadataBearer {}

/**
 * <p>Retrieves the started import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, GetImportJobCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, GetImportJobCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // GetImportJobRequest
 *   importJobId: "STRING_VALUE", // required
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new GetImportJobCommand(input);
 * const response = await client.send(command);
 * // { // GetImportJobResponse
 * //   importJob: { // ImportJobData
 * //     importJobId: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     uploadId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     importJobType: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     url: "STRING_VALUE", // required
 * //     failedRecordReport: "STRING_VALUE",
 * //     urlExpiry: new Date("TIMESTAMP"), // required
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     metadata: { // ContentMetadata
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     externalSourceConfiguration: { // ExternalSourceConfiguration
 * //       source: "STRING_VALUE", // required
 * //       configuration: { // Configuration Union: only one key present
 * //         connectConfiguration: { // ConnectConfiguration
 * //           instanceId: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetImportJobCommandInput - {@link GetImportJobCommandInput}
 * @returns {@link GetImportJobCommandOutput}
 * @see {@link GetImportJobCommandInput} for command's `input` shape.
 * @see {@link GetImportJobCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class GetImportJobCommand extends $Command
  .classBuilder<
    GetImportJobCommandInput,
    GetImportJobCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "GetImportJob", {})
  .n("QConnectClient", "GetImportJobCommand")
  .f(void 0, GetImportJobResponseFilterSensitiveLog)
  .ser(se_GetImportJobCommand)
  .de(de_GetImportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImportJobRequest;
      output: GetImportJobResponse;
    };
    sdk: {
      input: GetImportJobCommandInput;
      output: GetImportJobCommandOutput;
    };
  };
}
