// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateServiceEnvironmentRequest, UpdateServiceEnvironmentResponse } from "../models/models_0";
import { UpdateServiceEnvironment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceEnvironmentCommand}.
 */
export interface UpdateServiceEnvironmentCommandInput extends UpdateServiceEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceEnvironmentCommand}.
 */
export interface UpdateServiceEnvironmentCommandOutput extends UpdateServiceEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Updates a service environment. You can update the state of a service environment from <code>ENABLED</code> to <code>DISABLED</code> to prevent new service jobs from being placed in the service environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, UpdateServiceEnvironmentCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, UpdateServiceEnvironmentCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // UpdateServiceEnvironmentRequest
 *   serviceEnvironment: "STRING_VALUE", // required
 *   state: "ENABLED" || "DISABLED",
 *   capacityLimits: [ // CapacityLimits
 *     { // CapacityLimit
 *       maxCapacity: Number("int"),
 *       capacityUnit: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateServiceEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceEnvironmentResponse
 * //   serviceEnvironmentName: "STRING_VALUE", // required
 * //   serviceEnvironmentArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateServiceEnvironmentCommandInput - {@link UpdateServiceEnvironmentCommandInput}
 * @returns {@link UpdateServiceEnvironmentCommandOutput}
 * @see {@link UpdateServiceEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceEnvironmentCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateServiceEnvironmentCommand extends $Command
  .classBuilder<
    UpdateServiceEnvironmentCommandInput,
    UpdateServiceEnvironmentCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "UpdateServiceEnvironment", {})
  .n("BatchClient", "UpdateServiceEnvironmentCommand")
  .sc(UpdateServiceEnvironment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceEnvironmentRequest;
      output: UpdateServiceEnvironmentResponse;
    };
    sdk: {
      input: UpdateServiceEnvironmentCommandInput;
      output: UpdateServiceEnvironmentCommandOutput;
    };
  };
}
