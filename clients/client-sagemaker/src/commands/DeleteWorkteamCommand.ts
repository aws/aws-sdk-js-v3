// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteWorkteamRequest, DeleteWorkteamResponse } from "../models/models_2";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteWorkteam$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkteamCommand}.
 */
export interface DeleteWorkteamCommandInput extends DeleteWorkteamRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkteamCommand}.
 */
export interface DeleteWorkteamCommandOutput extends DeleteWorkteamResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing work team. This operation can't be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteWorkteamRequest
 *   WorkteamName: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkteamCommand(input);
 * const response = await client.send(command);
 * // { // DeleteWorkteamResponse
 * //   Success: true || false, // required
 * // };
 *
 * ```
 *
 * @param DeleteWorkteamCommandInput - {@link DeleteWorkteamCommandInput}
 * @returns {@link DeleteWorkteamCommandOutput}
 * @see {@link DeleteWorkteamCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DeleteWorkteamCommand extends $Command
  .classBuilder<
    DeleteWorkteamCommandInput,
    DeleteWorkteamCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeleteWorkteam", {})
  .n("SageMakerClient", "DeleteWorkteamCommand")
  .sc(DeleteWorkteam$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkteamRequest;
      output: DeleteWorkteamResponse;
    };
    sdk: {
      input: DeleteWorkteamCommandInput;
      output: DeleteWorkteamCommandOutput;
    };
  };
}
