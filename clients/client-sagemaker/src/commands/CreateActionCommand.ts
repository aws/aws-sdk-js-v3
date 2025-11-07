// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateActionRequest, CreateActionResponse } from "../models/models_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateAction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateActionCommand}.
 */
export interface CreateActionCommandInput extends CreateActionRequest {}
/**
 * @public
 *
 * The output of {@link CreateActionCommand}.
 */
export interface CreateActionCommandOutput extends CreateActionResponse, __MetadataBearer {}

/**
 * <p>Creates an <i>action</i>. An action is a lineage tracking entity that represents an action or activity. For example, a model deployment or an HPO job. Generally, an action involves at least one input or output artifact. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateActionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateActionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateActionRequest
 *   ActionName: "STRING_VALUE", // required
 *   Source: { // ActionSource
 *     SourceUri: "STRING_VALUE", // required
 *     SourceType: "STRING_VALUE",
 *     SourceId: "STRING_VALUE",
 *   },
 *   ActionType: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Status: "Unknown" || "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 *   Properties: { // LineageEntityParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MetadataProperties: { // MetadataProperties
 *     CommitId: "STRING_VALUE",
 *     Repository: "STRING_VALUE",
 *     GeneratedBy: "STRING_VALUE",
 *     ProjectId: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateActionCommand(input);
 * const response = await client.send(command);
 * // { // CreateActionResponse
 * //   ActionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateActionCommandInput - {@link CreateActionCommandInput}
 * @returns {@link CreateActionCommandOutput}
 * @see {@link CreateActionCommandInput} for command's `input` shape.
 * @see {@link CreateActionCommandOutput} for command's `response` shape.
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
export class CreateActionCommand extends $Command
  .classBuilder<
    CreateActionCommandInput,
    CreateActionCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "CreateAction", {})
  .n("SageMakerClient", "CreateActionCommand")
  .sc(CreateAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateActionRequest;
      output: CreateActionResponse;
    };
    sdk: {
      input: CreateActionCommandInput;
      output: CreateActionCommandOutput;
    };
  };
}
