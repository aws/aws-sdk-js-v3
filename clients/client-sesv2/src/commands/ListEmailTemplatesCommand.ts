// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListEmailTemplatesRequest, ListEmailTemplatesResponse } from "../models/models_0";
import { ListEmailTemplates$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEmailTemplatesCommand}.
 */
export interface ListEmailTemplatesCommandInput extends ListEmailTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListEmailTemplatesCommand}.
 */
export interface ListEmailTemplatesCommandOutput extends ListEmailTemplatesResponse, __MetadataBearer {}

/**
 * <p>Lists the email templates present in your Amazon SES account in the current Amazon Web Services
 *             Region.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListEmailTemplatesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListEmailTemplatesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // ListEmailTemplatesRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListEmailTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListEmailTemplatesResponse
 * //   TemplatesMetadata: [ // EmailTemplateMetadataList
 * //     { // EmailTemplateMetadata
 * //       TemplateName: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEmailTemplatesCommandInput - {@link ListEmailTemplatesCommandInput}
 * @returns {@link ListEmailTemplatesCommandOutput}
 * @see {@link ListEmailTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListEmailTemplatesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class ListEmailTemplatesCommand extends $Command
  .classBuilder<
    ListEmailTemplatesCommandInput,
    ListEmailTemplatesCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService_v2", "ListEmailTemplates", {})
  .n("SESv2Client", "ListEmailTemplatesCommand")
  .sc(ListEmailTemplates$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEmailTemplatesRequest;
      output: ListEmailTemplatesResponse;
    };
    sdk: {
      input: ListEmailTemplatesCommandInput;
      output: ListEmailTemplatesCommandOutput;
    };
  };
}
