// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWorldTemplateRequest, CreateWorldTemplateResponse } from "../models/models_0";
import { de_CreateWorldTemplateCommand, se_CreateWorldTemplateCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorldTemplateCommand}.
 */
export interface CreateWorldTemplateCommandInput extends CreateWorldTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorldTemplateCommand}.
 */
export interface CreateWorldTemplateCommandOutput extends CreateWorldTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a world template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateWorldTemplateCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateWorldTemplateCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // CreateWorldTemplateRequest
 *   clientRequestToken: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   templateBody: "STRING_VALUE",
 *   templateLocation: { // TemplateLocation
 *     s3Bucket: "STRING_VALUE", // required
 *     s3Key: "STRING_VALUE", // required
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateWorldTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorldTemplateResponse
 * //   arn: "STRING_VALUE",
 * //   clientRequestToken: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   name: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateWorldTemplateCommandInput - {@link CreateWorldTemplateCommandInput}
 * @returns {@link CreateWorldTemplateCommandOutput}
 * @see {@link CreateWorldTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateWorldTemplateCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *          stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
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
export class CreateWorldTemplateCommand extends $Command
  .classBuilder<
    CreateWorldTemplateCommandInput,
    CreateWorldTemplateCommandOutput,
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
  .s("robomaker", "CreateWorldTemplate", {})
  .n("RoboMakerClient", "CreateWorldTemplateCommand")
  .f(void 0, void 0)
  .ser(se_CreateWorldTemplateCommand)
  .de(de_CreateWorldTemplateCommand)
  .build() {}
