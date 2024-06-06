// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTemplatesRequest, ListTemplatesResponse } from "../models/models_0";
import { de_ListTemplatesCommand, se_ListTemplatesCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTemplatesCommand}.
 */
export interface ListTemplatesCommandInput extends ListTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListTemplatesCommand}.
 */
export interface ListTemplatesCommandOutput extends ListTemplatesResponse, __MetadataBearer {}

/**
 * <p>Lists the email templates present in your Amazon SES account in the current
 *             Amazon Web Services Region.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListTemplatesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListTemplatesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // ListTemplatesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListTemplatesResponse
 * //   TemplatesMetadata: [ // TemplateMetadataList
 * //     { // TemplateMetadata
 * //       Name: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTemplatesCommandInput - {@link ListTemplatesCommandInput}
 * @returns {@link ListTemplatesCommandOutput}
 * @see {@link ListTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListTemplatesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 */
export class ListTemplatesCommand extends $Command
  .classBuilder<
    ListTemplatesCommandInput,
    ListTemplatesCommandOutput,
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
  .s("SimpleEmailService", "ListTemplates", {})
  .n("SESClient", "ListTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_ListTemplatesCommand)
  .de(de_ListTemplatesCommand)
  .build() {}
