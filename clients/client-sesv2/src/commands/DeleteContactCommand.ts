// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteContactRequest, DeleteContactResponse } from "../models/models_0";
import { DeleteContact$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteContactCommand}.
 */
export interface DeleteContactCommandInput extends DeleteContactRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContactCommand}.
 */
export interface DeleteContactCommandOutput extends DeleteContactResponse, __MetadataBearer {}

/**
 * <p>Removes a contact from a contact list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteContactCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteContactCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // DeleteContactRequest
 *   ContactListName: "STRING_VALUE", // required
 *   EmailAddress: "STRING_VALUE", // required
 * };
 * const command = new DeleteContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContactCommandInput - {@link DeleteContactCommandInput}
 * @returns {@link DeleteContactCommandOutput}
 * @see {@link DeleteContactCommandInput} for command's `input` shape.
 * @see {@link DeleteContactCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
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
export class DeleteContactCommand extends $Command
  .classBuilder<
    DeleteContactCommandInput,
    DeleteContactCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService_v2", "DeleteContact", {})
  .n("SESv2Client", "DeleteContactCommand")
  .sc(DeleteContact$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContactRequest;
      output: {};
    };
    sdk: {
      input: DeleteContactCommandInput;
      output: DeleteContactCommandOutput;
    };
  };
}
