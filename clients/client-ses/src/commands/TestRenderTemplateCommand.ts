// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TestRenderTemplateRequest, TestRenderTemplateResponse } from "../models/models_0";
import { TestRenderTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.
 *
 * You can execute this operation no more than once per second.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, TestRenderTemplateCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, TestRenderTemplateCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
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
 *
 * Indicates that one or more of the replacement values you provided is invalid. This error may occur when the TemplateData object contains invalid JSON.
 *
 * @throws {@link MissingRenderingAttributeException} (client fault)
 *
 * Indicates that one or more of the replacement values for the specified template was not specified. Ensure that the TemplateData object contains references to all of the replacement tags in the specified template.
 *
 * @throws {@link TemplateDoesNotExistException} (client fault)
 *
 * Indicates that the Template object you specified does not exist in your Amazon SES account.
 *
 * @throws {@link SESServiceException}
 *
 * Base exception class for all service exceptions from SES service.
 *
 * @public
 */
export class TestRenderTemplateCommand extends command<TestRenderTemplateCommandInput, TestRenderTemplateCommandOutput>(
  _ep0,
  _mw0,
  "TestRenderTemplate",
  TestRenderTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestRenderTemplateRequest;
      output: TestRenderTemplateResponse;
    };
    sdk: {
      input: TestRenderTemplateCommandInput;
      output: TestRenderTemplateCommandOutput;
    };
  };
}
