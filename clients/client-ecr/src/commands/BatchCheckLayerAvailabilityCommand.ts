// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchCheckLayerAvailabilityRequest, BatchCheckLayerAvailabilityResponse } from "../models/models_0";
import { de_BatchCheckLayerAvailabilityCommand, se_BatchCheckLayerAvailabilityCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchCheckLayerAvailabilityCommand}.
 */
export interface BatchCheckLayerAvailabilityCommandInput extends BatchCheckLayerAvailabilityRequest {}
/**
 * @public
 *
 * The output of {@link BatchCheckLayerAvailabilityCommand}.
 */
export interface BatchCheckLayerAvailabilityCommandOutput
  extends BatchCheckLayerAvailabilityResponse,
    __MetadataBearer {}

/**
 * <p>Checks the availability of one or more image layers in a repository.</p>
 *          <p>When an image is pushed to a repository, each image layer is checked to verify if it
 *             has been uploaded before. If it has been uploaded, then the image layer is
 *             skipped.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, BatchCheckLayerAvailabilityCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, BatchCheckLayerAvailabilityCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ECRClient(config);
 * const input = { // BatchCheckLayerAvailabilityRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   layerDigests: [ // BatchedOperationLayerDigestList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchCheckLayerAvailabilityCommand(input);
 * const response = await client.send(command);
 * // { // BatchCheckLayerAvailabilityResponse
 * //   layers: [ // LayerList
 * //     { // Layer
 * //       layerDigest: "STRING_VALUE",
 * //       layerAvailability: "AVAILABLE" || "UNAVAILABLE",
 * //       layerSize: Number("long"),
 * //       mediaType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failures: [ // LayerFailureList
 * //     { // LayerFailure
 * //       layerDigest: "STRING_VALUE",
 * //       failureCode: "InvalidLayerDigest" || "MissingLayerDigest",
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCheckLayerAvailabilityCommandInput - {@link BatchCheckLayerAvailabilityCommandInput}
 * @returns {@link BatchCheckLayerAvailabilityCommandOutput}
 * @see {@link BatchCheckLayerAvailabilityCommandInput} for command's `input` shape.
 * @see {@link BatchCheckLayerAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 * @public
 */
export class BatchCheckLayerAvailabilityCommand extends $Command
  .classBuilder<
    BatchCheckLayerAvailabilityCommandInput,
    BatchCheckLayerAvailabilityCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "BatchCheckLayerAvailability", {})
  .n("ECRClient", "BatchCheckLayerAvailabilityCommand")
  .f(void 0, void 0)
  .ser(se_BatchCheckLayerAvailabilityCommand)
  .de(de_BatchCheckLayerAvailabilityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCheckLayerAvailabilityRequest;
      output: BatchCheckLayerAvailabilityResponse;
    };
    sdk: {
      input: BatchCheckLayerAvailabilityCommandInput;
      output: BatchCheckLayerAvailabilityCommandOutput;
    };
  };
}
