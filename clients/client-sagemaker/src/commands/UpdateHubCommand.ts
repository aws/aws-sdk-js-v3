// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateHubRequest, UpdateHubResponse } from "../models/models_4";
import { de_UpdateHubCommand, se_UpdateHubCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateHubCommand}.
 */
export interface UpdateHubCommandInput extends UpdateHubRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHubCommand}.
 */
export interface UpdateHubCommandOutput extends UpdateHubResponse, __MetadataBearer {}

/**
 * <p>Update a hub.</p>
 *          <note>
 *             <p>Hub APIs are only callable through SageMaker Studio.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateHubCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateHubCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateHubRequest
 *   HubName: "STRING_VALUE", // required
 *   HubDescription: "STRING_VALUE",
 *   HubDisplayName: "STRING_VALUE",
 *   HubSearchKeywords: [ // HubSearchKeywordList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateHubCommand(input);
 * const response = await client.send(command);
 * // { // UpdateHubResponse
 * //   HubArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateHubCommandInput - {@link UpdateHubCommandInput}
 * @returns {@link UpdateHubCommandOutput}
 * @see {@link UpdateHubCommandInput} for command's `input` shape.
 * @see {@link UpdateHubCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class UpdateHubCommand extends $Command
  .classBuilder<
    UpdateHubCommandInput,
    UpdateHubCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "UpdateHub", {})
  .n("SageMakerClient", "UpdateHubCommand")
  .f(void 0, void 0)
  .ser(se_UpdateHubCommand)
  .de(de_UpdateHubCommand)
  .build() {}
