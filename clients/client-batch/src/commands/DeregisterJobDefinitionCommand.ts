// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterJobDefinitionRequest, DeregisterJobDefinitionResponse } from "../models/models_0";
import { de_DeregisterJobDefinitionCommand, se_DeregisterJobDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterJobDefinitionCommand}.
 */
export interface DeregisterJobDefinitionCommandInput extends DeregisterJobDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterJobDefinitionCommand}.
 */
export interface DeregisterJobDefinitionCommandOutput extends DeregisterJobDefinitionResponse, __MetadataBearer {}

/**
 * <p>Deregisters an Batch job definition. Job definitions are permanently deleted after 180
 *       days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DeregisterJobDefinitionCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DeregisterJobDefinitionCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // DeregisterJobDefinitionRequest
 *   jobDefinition: "STRING_VALUE", // required
 * };
 * const command = new DeregisterJobDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterJobDefinitionCommandInput - {@link DeregisterJobDefinitionCommandInput}
 * @returns {@link DeregisterJobDefinitionCommandOutput}
 * @see {@link DeregisterJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeregisterJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 *
 * @example To deregister a job definition
 * ```javascript
 * // This example deregisters a job definition called sleep10.
 * const input = {
 *   jobDefinition: "sleep10"
 * };
 * const command = new DeregisterJobDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeregisterJobDefinitionCommand extends $Command
  .classBuilder<
    DeregisterJobDefinitionCommandInput,
    DeregisterJobDefinitionCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBatchV20160810", "DeregisterJobDefinition", {})
  .n("BatchClient", "DeregisterJobDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterJobDefinitionCommand)
  .de(de_DeregisterJobDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterJobDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeregisterJobDefinitionCommandInput;
      output: DeregisterJobDefinitionCommandOutput;
    };
  };
}
