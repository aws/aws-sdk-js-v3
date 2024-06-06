// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTemplateActiveVersionRequest, UpdateTemplateActiveVersionResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  de_UpdateTemplateActiveVersionCommand,
  se_UpdateTemplateActiveVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTemplateActiveVersionCommand}.
 */
export interface UpdateTemplateActiveVersionCommandInput extends UpdateTemplateActiveVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTemplateActiveVersionCommand}.
 */
export interface UpdateTemplateActiveVersionCommandOutput
  extends UpdateTemplateActiveVersionResponse,
    __MetadataBearer {}

/**
 * <p>Changes the status of a specific version of a message template to <i>active</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateTemplateActiveVersionCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateTemplateActiveVersionCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // UpdateTemplateActiveVersionRequest
 *   TemplateActiveVersionRequest: { // TemplateActiveVersionRequest
 *     Version: "STRING_VALUE",
 *   },
 *   TemplateName: "STRING_VALUE", // required
 *   TemplateType: "STRING_VALUE", // required
 * };
 * const command = new UpdateTemplateActiveVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTemplateActiveVersionResponse
 * //   MessageBody: { // MessageBody
 * //     Message: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateTemplateActiveVersionCommandInput - {@link UpdateTemplateActiveVersionCommandInput}
 * @returns {@link UpdateTemplateActiveVersionCommandOutput}
 * @see {@link UpdateTemplateActiveVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplateActiveVersionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateTemplateActiveVersionCommand extends $Command
  .classBuilder<
    UpdateTemplateActiveVersionCommandInput,
    UpdateTemplateActiveVersionCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "UpdateTemplateActiveVersion", {})
  .n("PinpointClient", "UpdateTemplateActiveVersionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTemplateActiveVersionCommand)
  .de(de_UpdateTemplateActiveVersionCommand)
  .build() {}
