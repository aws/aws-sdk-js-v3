// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RebootBrokerRequest, RebootBrokerResponse } from "../models/models_0";
import type { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { RebootBroker } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RebootBrokerCommand}.
 */
export interface RebootBrokerCommandInput extends RebootBrokerRequest {}
/**
 * @public
 *
 * The output of {@link RebootBrokerCommand}.
 */
export interface RebootBrokerCommandOutput extends RebootBrokerResponse, __MetadataBearer {}

/**
 * <p>Reboots a broker. Note: This API is asynchronous.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, RebootBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, RebootBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * // import type { MqClientConfig } from "@aws-sdk/client-mq";
 * const config = {}; // type is MqClientConfig
 * const client = new MqClient(config);
 * const input = { // RebootBrokerRequest
 *   BrokerId: "STRING_VALUE", // required
 * };
 * const command = new RebootBrokerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RebootBrokerCommandInput - {@link RebootBrokerCommandInput}
 * @returns {@link RebootBrokerCommandOutput}
 * @see {@link RebootBrokerCommandInput} for command's `input` shape.
 * @see {@link RebootBrokerCommandOutput} for command's `response` shape.
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
export class RebootBrokerCommand extends $Command
  .classBuilder<
    RebootBrokerCommandInput,
    RebootBrokerCommandOutput,
    MqClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MqClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("mq", "RebootBroker", {})
  .n("MqClient", "RebootBrokerCommand")
  .sc(RebootBroker)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RebootBrokerRequest;
      output: {};
    };
    sdk: {
      input: RebootBrokerCommandInput;
      output: RebootBrokerCommandOutput;
    };
  };
}
