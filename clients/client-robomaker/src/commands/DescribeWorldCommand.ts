// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeWorldRequest, DescribeWorldResponse } from "../models/models_0";
import { de_DescribeWorldCommand, se_DescribeWorldCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorldCommand}.
 */
export interface DescribeWorldCommandInput extends DescribeWorldRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorldCommand}.
 */
export interface DescribeWorldCommandOutput extends DescribeWorldResponse, __MetadataBearer {}

/**
 * <p>Describes a world.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeWorldCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeWorldCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // DescribeWorldRequest
 *   world: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorldCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorldResponse
 * //   arn: "STRING_VALUE",
 * //   generationJob: "STRING_VALUE",
 * //   template: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   worldDescriptionBody: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWorldCommandInput - {@link DescribeWorldCommandInput}
 * @returns {@link DescribeWorldCommandOutput}
 * @see {@link DescribeWorldCommandInput} for command's `input` shape.
 * @see {@link DescribeWorldCommandOutput} for command's `response` shape.
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
export class DescribeWorldCommand extends $Command
  .classBuilder<
    DescribeWorldCommandInput,
    DescribeWorldCommandOutput,
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
  .s("robomaker", "DescribeWorld", {})
  .n("RoboMakerClient", "DescribeWorldCommand")
  .f(void 0, void 0)
  .ser(se_DescribeWorldCommand)
  .de(de_DescribeWorldCommand)
  .build() {}
