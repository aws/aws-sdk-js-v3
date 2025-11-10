// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PromoteRequest, PromoteResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { Promote } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PromoteCommand}.
 */
export interface PromoteCommandInput extends PromoteRequest {}
/**
 * @public
 *
 * The output of {@link PromoteCommand}.
 */
export interface PromoteCommandOutput extends PromoteResponse, __MetadataBearer {}

/**
 * <p>Promotes a data replication replica broker to the primary broker role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, PromoteCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, PromoteCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * // import type { MqClientConfig } from "@aws-sdk/client-mq";
 * const config = {}; // type is MqClientConfig
 * const client = new MqClient(config);
 * const input = { // PromoteRequest
 *   BrokerId: "STRING_VALUE", // required
 *   Mode: "SWITCHOVER" || "FAILOVER", // required
 * };
 * const command = new PromoteCommand(input);
 * const response = await client.send(command);
 * // { // PromoteResponse
 * //   BrokerId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PromoteCommandInput - {@link PromoteCommandInput}
 * @returns {@link PromoteCommandOutput}
 * @see {@link PromoteCommandInput} for command's `input` shape.
 * @see {@link PromoteCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 *
 * @public
 */
export class PromoteCommand extends $Command
  .classBuilder<
    PromoteCommandInput,
    PromoteCommandOutput,
    MqClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MqClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("mq", "Promote", {})
  .n("MqClient", "PromoteCommand")
  .sc(Promote)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PromoteRequest;
      output: PromoteResponse;
    };
    sdk: {
      input: PromoteCommandInput;
      output: PromoteCommandOutput;
    };
  };
}
