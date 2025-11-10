// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDocumentDefaultVersionRequest, UpdateDocumentDefaultVersionResult } from "../models/models_2";
import { UpdateDocumentDefaultVersion } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDocumentDefaultVersionCommand}.
 */
export interface UpdateDocumentDefaultVersionCommandInput extends UpdateDocumentDefaultVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDocumentDefaultVersionCommand}.
 */
export interface UpdateDocumentDefaultVersionCommandOutput
  extends UpdateDocumentDefaultVersionResult,
    __MetadataBearer {}

/**
 * <p>Set the default version of a document. </p>
 *          <note>
 *             <p>If you change a document version for a State Manager association, Systems Manager immediately runs
 *     the association unless you previously specifed the <code>apply-only-at-cron-interval</code>
 *     parameter.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentDefaultVersionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateDocumentDefaultVersionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // UpdateDocumentDefaultVersionRequest
 *   Name: "STRING_VALUE", // required
 *   DocumentVersion: "STRING_VALUE", // required
 * };
 * const command = new UpdateDocumentDefaultVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDocumentDefaultVersionResult
 * //   Description: { // DocumentDefaultVersionDescription
 * //     Name: "STRING_VALUE",
 * //     DefaultVersion: "STRING_VALUE",
 * //     DefaultVersionName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDocumentDefaultVersionCommandInput - {@link UpdateDocumentDefaultVersionCommandInput}
 * @returns {@link UpdateDocumentDefaultVersionCommandOutput}
 * @see {@link UpdateDocumentDefaultVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentDefaultVersionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidDocumentSchemaVersion} (client fault)
 *  <p>The version of the document schema isn't supported.</p>
 *
 * @throws {@link InvalidDocumentVersion} (client fault)
 *  <p>The document version isn't valid or doesn't exist.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class UpdateDocumentDefaultVersionCommand extends $Command
  .classBuilder<
    UpdateDocumentDefaultVersionCommandInput,
    UpdateDocumentDefaultVersionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "UpdateDocumentDefaultVersion", {})
  .n("SSMClient", "UpdateDocumentDefaultVersionCommand")
  .sc(UpdateDocumentDefaultVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDocumentDefaultVersionRequest;
      output: UpdateDocumentDefaultVersionResult;
    };
    sdk: {
      input: UpdateDocumentDefaultVersionCommandInput;
      output: UpdateDocumentDefaultVersionCommandOutput;
    };
  };
}
