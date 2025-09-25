// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEmailTemplateRequest, DeleteEmailTemplateResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteEmailTemplate } from "../schemas/schemas_43_DeleteEmailTemplate";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEmailTemplateCommand}.
 */
export interface DeleteEmailTemplateCommandInput extends DeleteEmailTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEmailTemplateCommand}.
 */
export interface DeleteEmailTemplateCommandOutput extends DeleteEmailTemplateResponse, __MetadataBearer {}

/**
 * <p>Deletes a message template for messages that were sent through the email channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteEmailTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteEmailTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // DeleteEmailTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   Version: "STRING_VALUE",
 * };
 * const command = new DeleteEmailTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEmailTemplateResponse
 * //   MessageBody: { // MessageBody
 * //     Message: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteEmailTemplateCommandInput - {@link DeleteEmailTemplateCommandInput}
 * @returns {@link DeleteEmailTemplateCommandOutput}
 * @see {@link DeleteEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteEmailTemplateCommandOutput} for command's `response` shape.
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
export class DeleteEmailTemplateCommand extends $Command
  .classBuilder<
    DeleteEmailTemplateCommandInput,
    DeleteEmailTemplateCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "DeleteEmailTemplate", {})
  .n("PinpointClient", "DeleteEmailTemplateCommand")
  .sc(DeleteEmailTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEmailTemplateRequest;
      output: DeleteEmailTemplateResponse;
    };
    sdk: {
      input: DeleteEmailTemplateCommandInput;
      output: DeleteEmailTemplateCommandOutput;
    };
  };
}
