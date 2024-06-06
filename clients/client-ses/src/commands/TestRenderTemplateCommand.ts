// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TestRenderTemplateRequest, TestRenderTemplateResponse } from "../models/models_0";
import { de_TestRenderTemplateCommand, se_TestRenderTemplateCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestRenderTemplateCommand}.
 */
export interface TestRenderTemplateCommandInput extends TestRenderTemplateRequest {}
/**
 * @public
 *
 * The output of {@link TestRenderTemplateCommand}.
 */
export interface TestRenderTemplateCommandOutput extends TestRenderTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a preview of the MIME content of an email when provided with a template and a
 *             set of replacement data.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, TestRenderTemplateCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, TestRenderTemplateCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // TestRenderTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   TemplateData: "STRING_VALUE", // required
 * };
 * const command = new TestRenderTemplateCommand(input);
 * const response = await client.send(command);
 * // { // TestRenderTemplateResponse
 * //   RenderedTemplate: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TestRenderTemplateCommandInput - {@link TestRenderTemplateCommandInput}
 * @returns {@link TestRenderTemplateCommandOutput}
 * @see {@link TestRenderTemplateCommandInput} for command's `input` shape.
 * @see {@link TestRenderTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link InvalidRenderingParameterException} (client fault)
 *  <p>Indicates that one or more of the replacement values you provided is invalid. This
 *             error may occur when the TemplateData object contains invalid JSON.</p>
 *
 * @throws {@link MissingRenderingAttributeException} (client fault)
 *  <p>Indicates that one or more of the replacement values for the specified template was
 *             not specified. Ensure that the TemplateData object contains references to all of the
 *             replacement tags in the specified template.</p>
 *
 * @throws {@link TemplateDoesNotExistException} (client fault)
 *  <p>Indicates that the Template object you specified does not exist in your Amazon SES
 *             account.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 */
export class TestRenderTemplateCommand extends $Command
  .classBuilder<
    TestRenderTemplateCommandInput,
    TestRenderTemplateCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "TestRenderTemplate", {})
  .n("SESClient", "TestRenderTemplateCommand")
  .f(void 0, void 0)
  .ser(se_TestRenderTemplateCommand)
  .de(de_TestRenderTemplateCommand)
  .build() {}
