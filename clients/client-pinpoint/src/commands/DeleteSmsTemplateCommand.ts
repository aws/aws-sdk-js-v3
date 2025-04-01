// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSmsTemplateRequest, DeleteSmsTemplateResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_DeleteSmsTemplateCommand, se_DeleteSmsTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSmsTemplateCommand}.
 */
export interface DeleteSmsTemplateCommandInput extends DeleteSmsTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSmsTemplateCommand}.
 */
export interface DeleteSmsTemplateCommandOutput extends DeleteSmsTemplateResponse, __MetadataBearer {}

/**
 * <p>Deletes a message template for messages that were sent through the SMS channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteSmsTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteSmsTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // DeleteSmsTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   Version: "STRING_VALUE",
 * };
 * const command = new DeleteSmsTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSmsTemplateResponse
 * //   MessageBody: { // MessageBody
 * //     Message: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteSmsTemplateCommandInput - {@link DeleteSmsTemplateCommandInput}
 * @returns {@link DeleteSmsTemplateCommandOutput}
 * @see {@link DeleteSmsTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteSmsTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 *
 * @public
 */
export class DeleteSmsTemplateCommand extends $Command
  .classBuilder<
    DeleteSmsTemplateCommandInput,
    DeleteSmsTemplateCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "DeleteSmsTemplate", {})
  .n("PinpointClient", "DeleteSmsTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSmsTemplateCommand)
  .de(de_DeleteSmsTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSmsTemplateRequest;
      output: DeleteSmsTemplateResponse;
    };
    sdk: {
      input: DeleteSmsTemplateCommandInput;
      output: DeleteSmsTemplateCommandOutput;
    };
  };
}
