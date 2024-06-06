// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelAnnotationImportRequest, CancelAnnotationImportResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_CancelAnnotationImportJobCommand, se_CancelAnnotationImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelAnnotationImportJobCommand}.
 */
export interface CancelAnnotationImportJobCommandInput extends CancelAnnotationImportRequest {}
/**
 * @public
 *
 * The output of {@link CancelAnnotationImportJobCommand}.
 */
export interface CancelAnnotationImportJobCommandOutput extends CancelAnnotationImportResponse, __MetadataBearer {}

/**
 * <p>Cancels an annotation import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CancelAnnotationImportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CancelAnnotationImportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // CancelAnnotationImportRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new CancelAnnotationImportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelAnnotationImportJobCommandInput - {@link CancelAnnotationImportJobCommandInput}
 * @returns {@link CancelAnnotationImportJobCommandOutput}
 * @see {@link CancelAnnotationImportJobCommandInput} for command's `input` shape.
 * @see {@link CancelAnnotationImportJobCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
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
 * @public
 */
export class CancelAnnotationImportJobCommand extends $Command
  .classBuilder<
    CancelAnnotationImportJobCommandInput,
    CancelAnnotationImportJobCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "CancelAnnotationImportJob", {})
  .n("OmicsClient", "CancelAnnotationImportJobCommand")
  .f(void 0, void 0)
  .ser(se_CancelAnnotationImportJobCommand)
  .de(de_CancelAnnotationImportJobCommand)
  .build() {}
