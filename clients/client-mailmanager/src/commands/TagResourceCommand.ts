// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { TagResourceRequest, TagResourceRequestFilterSensitiveLog, TagResourceResponse } from "../models/models_0";
import { de_TagResourceCommand, se_TagResourceCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TagResourceCommand}.
 */
export interface TagResourceCommandInput extends TagResourceRequest {}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {}

/**
 * <p> Adds one or more tags (keys and values) to a specified resource. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, TagResourceCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, TagResourceCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // TagResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagResourceCommandInput - {@link TagResourceCommandInput}
 * @returns {@link TagResourceCommandOutput}
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Occurs when an operation exceeds a predefined service quota or limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 * @public
 */
export class TagResourceCommand extends $Command
  .classBuilder<
    TagResourceCommandInput,
    TagResourceCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "TagResource", {})
  .n("MailManagerClient", "TagResourceCommand")
  .f(TagResourceRequestFilterSensitiveLog, void 0)
  .ser(se_TagResourceCommand)
  .de(de_TagResourceCommand)
  .build() {}
