// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartReferenceImportJobRequest, StartReferenceImportJobResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_StartReferenceImportJobCommand, se_StartReferenceImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartReferenceImportJobCommand}.
 */
export interface StartReferenceImportJobCommandInput extends StartReferenceImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartReferenceImportJobCommand}.
 */
export interface StartReferenceImportJobCommandOutput extends StartReferenceImportJobResponse, __MetadataBearer {}

/**
 * <p>Starts a reference import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, StartReferenceImportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, StartReferenceImportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // StartReferenceImportJobRequest
 *   referenceStoreId: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   sources: [ // StartReferenceImportJobSourceList // required
 *     { // StartReferenceImportJobSourceItem
 *       sourceFile: "STRING_VALUE", // required
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       tags: { // TagMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new StartReferenceImportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartReferenceImportJobResponse
 * //   id: "STRING_VALUE", // required
 * //   referenceStoreId: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StartReferenceImportJobCommandInput - {@link StartReferenceImportJobCommandInput}
 * @returns {@link StartReferenceImportJobCommandOutput}
 * @see {@link StartReferenceImportJobCommandInput} for command's `input` shape.
 * @see {@link StartReferenceImportJobCommandOutput} for command's `response` shape.
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
export class StartReferenceImportJobCommand extends $Command
  .classBuilder<
    StartReferenceImportJobCommandInput,
    StartReferenceImportJobCommandOutput,
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
  .s("Omics", "StartReferenceImportJob", {})
  .n("OmicsClient", "StartReferenceImportJobCommand")
  .f(void 0, void 0)
  .ser(se_StartReferenceImportJobCommand)
  .de(de_StartReferenceImportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartReferenceImportJobRequest;
      output: StartReferenceImportJobResponse;
    };
    sdk: {
      input: StartReferenceImportJobCommandInput;
      output: StartReferenceImportJobCommandOutput;
    };
  };
}
