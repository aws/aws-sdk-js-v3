// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWorldTemplateRequest, UpdateWorldTemplateResponse } from "../models/models_0";
import { de_UpdateWorldTemplateCommand, se_UpdateWorldTemplateCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorldTemplateCommand}.
 */
export interface UpdateWorldTemplateCommandInput extends UpdateWorldTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorldTemplateCommand}.
 */
export interface UpdateWorldTemplateCommandOutput extends UpdateWorldTemplateResponse, __MetadataBearer {}

/**
 * <p>Updates a world template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, UpdateWorldTemplateCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, UpdateWorldTemplateCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // UpdateWorldTemplateRequest
 *   template: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   templateBody: "STRING_VALUE",
 *   templateLocation: { // TemplateLocation
 *     s3Bucket: "STRING_VALUE", // required
 *     s3Key: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateWorldTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorldTemplateResponse
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateWorldTemplateCommandInput - {@link UpdateWorldTemplateCommandInput}
 * @returns {@link UpdateWorldTemplateCommandOutput}
 * @see {@link UpdateWorldTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateWorldTemplateCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 * @public
 */
export class UpdateWorldTemplateCommand extends $Command
  .classBuilder<
    UpdateWorldTemplateCommandInput,
    UpdateWorldTemplateCommandOutput,
    RoboMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RoboMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("robomaker", "UpdateWorldTemplate", {})
  .n("RoboMakerClient", "UpdateWorldTemplateCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWorldTemplateCommand)
  .de(de_UpdateWorldTemplateCommand)
  .build() {}
