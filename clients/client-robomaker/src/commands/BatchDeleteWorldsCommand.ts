// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteWorldsRequest, BatchDeleteWorldsResponse } from "../models/models_0";
import { de_BatchDeleteWorldsCommand, se_BatchDeleteWorldsCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteWorldsCommand}.
 */
export interface BatchDeleteWorldsCommandInput extends BatchDeleteWorldsRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteWorldsCommand}.
 */
export interface BatchDeleteWorldsCommandOutput extends BatchDeleteWorldsResponse, __MetadataBearer {}

/**
 * <p>Deletes one or more worlds in a batch operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, BatchDeleteWorldsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, BatchDeleteWorldsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // BatchDeleteWorldsRequest
 *   worlds: [ // Arns // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteWorldsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteWorldsResponse
 * //   unprocessedWorlds: [ // Arns
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteWorldsCommandInput - {@link BatchDeleteWorldsCommandInput}
 * @returns {@link BatchDeleteWorldsCommandOutput}
 * @see {@link BatchDeleteWorldsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteWorldsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 * @public
 */
export class BatchDeleteWorldsCommand extends $Command
  .classBuilder<
    BatchDeleteWorldsCommandInput,
    BatchDeleteWorldsCommandOutput,
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
  .s("robomaker", "BatchDeleteWorlds", {})
  .n("RoboMakerClient", "BatchDeleteWorldsCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteWorldsCommand)
  .de(de_BatchDeleteWorldsCommand)
  .build() {}
