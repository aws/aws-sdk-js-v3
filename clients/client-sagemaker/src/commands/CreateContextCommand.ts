// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateContextRequest, CreateContextResponse } from "../models/models_1";
import { de_CreateContextCommand, se_CreateContextCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateContextCommand}.
 */
export interface CreateContextCommandInput extends CreateContextRequest {}
/**
 * @public
 *
 * The output of {@link CreateContextCommand}.
 */
export interface CreateContextCommandOutput extends CreateContextResponse, __MetadataBearer {}

/**
 * <p>Creates a <i>context</i>. A context is a lineage tracking entity that
 *         represents a logical grouping of other tracking or experiment entities. Some examples are
 *         an endpoint and a model package. For more information, see
 *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
 *           ML Lineage Tracking</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateContextCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateContextCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateContextRequest
 *   ContextName: "STRING_VALUE", // required
 *   Source: { // ContextSource
 *     SourceUri: "STRING_VALUE", // required
 *     SourceType: "STRING_VALUE",
 *     SourceId: "STRING_VALUE",
 *   },
 *   ContextType: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Properties: { // LineageEntityParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateContextCommand(input);
 * const response = await client.send(command);
 * // { // CreateContextResponse
 * //   ContextArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateContextCommandInput - {@link CreateContextCommandInput}
 * @returns {@link CreateContextCommandOutput}
 * @see {@link CreateContextCommandInput} for command's `input` shape.
 * @see {@link CreateContextCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class CreateContextCommand extends $Command
  .classBuilder<
    CreateContextCommandInput,
    CreateContextCommandOutput,
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
  .s("SageMaker", "CreateContext", {})
  .n("SageMakerClient", "CreateContextCommand")
  .f(void 0, void 0)
  .ser(se_CreateContextCommand)
  .de(de_CreateContextCommand)
  .build() {}
