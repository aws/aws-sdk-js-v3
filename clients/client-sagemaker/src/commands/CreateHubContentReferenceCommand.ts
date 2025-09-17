// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateHubContentReferenceRequest, CreateHubContentReferenceResponse } from "../models/models_1";
import { de_CreateHubContentReferenceCommand, se_CreateHubContentReferenceCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHubContentReferenceCommand}.
 */
export interface CreateHubContentReferenceCommandInput extends CreateHubContentReferenceRequest {}
/**
 * @public
 *
 * The output of {@link CreateHubContentReferenceCommand}.
 */
export interface CreateHubContentReferenceCommandOutput extends CreateHubContentReferenceResponse, __MetadataBearer {}

/**
 * <p>Create a hub content reference in order to add a model in the JumpStart public hub to a private hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateHubContentReferenceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateHubContentReferenceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateHubContentReferenceRequest
 *   HubName: "STRING_VALUE", // required
 *   SageMakerPublicHubContentArn: "STRING_VALUE", // required
 *   HubContentName: "STRING_VALUE",
 *   MinVersion: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateHubContentReferenceCommand(input);
 * const response = await client.send(command);
 * // { // CreateHubContentReferenceResponse
 * //   HubArn: "STRING_VALUE", // required
 * //   HubContentArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateHubContentReferenceCommandInput - {@link CreateHubContentReferenceCommandInput}
 * @returns {@link CreateHubContentReferenceCommandOutput}
 * @see {@link CreateHubContentReferenceCommandInput} for command's `input` shape.
 * @see {@link CreateHubContentReferenceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class CreateHubContentReferenceCommand extends $Command
  .classBuilder<
    CreateHubContentReferenceCommandInput,
    CreateHubContentReferenceCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "CreateHubContentReference", {})
  .n("SageMakerClient", "CreateHubContentReferenceCommand")
  .f(void 0, void 0)
  .ser(se_CreateHubContentReferenceCommand)
  .de(de_CreateHubContentReferenceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHubContentReferenceRequest;
      output: CreateHubContentReferenceResponse;
    };
    sdk: {
      input: CreateHubContentReferenceCommandInput;
      output: CreateHubContentReferenceCommandOutput;
    };
  };
}
