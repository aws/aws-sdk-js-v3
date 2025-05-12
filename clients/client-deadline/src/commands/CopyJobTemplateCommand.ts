// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CopyJobTemplateRequest, CopyJobTemplateResponse } from "../models/models_0";
import { de_CopyJobTemplateCommand, se_CopyJobTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyJobTemplateCommand}.
 */
export interface CopyJobTemplateCommandInput extends CopyJobTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CopyJobTemplateCommand}.
 */
export interface CopyJobTemplateCommandOutput extends CopyJobTemplateResponse, __MetadataBearer {}

/**
 * <p>Copies a job template to an Amazon S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, CopyJobTemplateCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, CopyJobTemplateCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // CopyJobTemplateRequest
 *   farmId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   targetS3Location: { // S3Location
 *     bucketName: "STRING_VALUE", // required
 *     key: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CopyJobTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CopyJobTemplateResponse
 * //   templateType: "JSON" || "YAML", // required
 * // };
 *
 * ```
 *
 * @param CopyJobTemplateCommandInput - {@link CopyJobTemplateCommandInput}
 * @returns {@link CopyJobTemplateCommandOutput}
 * @see {@link CopyJobTemplateCommandInput} for command's `input` shape.
 * @see {@link CopyJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class CopyJobTemplateCommand extends $Command
  .classBuilder<
    CopyJobTemplateCommandInput,
    CopyJobTemplateCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "CopyJobTemplate", {})
  .n("DeadlineClient", "CopyJobTemplateCommand")
  .f(void 0, void 0)
  .ser(se_CopyJobTemplateCommand)
  .de(de_CopyJobTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyJobTemplateRequest;
      output: CopyJobTemplateResponse;
    };
    sdk: {
      input: CopyJobTemplateCommandInput;
      output: CopyJobTemplateCommandOutput;
    };
  };
}
