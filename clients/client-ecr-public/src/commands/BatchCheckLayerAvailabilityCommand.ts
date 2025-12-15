// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchCheckLayerAvailabilityRequest, BatchCheckLayerAvailabilityResponse } from "../models/models_0";
import { BatchCheckLayerAvailability$ } from "../schemas/schemas_0";

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
 * <p>Checks the availability of one or more image layers that are within a repository in a
 *          public registry. When an image is pushed to a repository, each image layer is checked to
 *          verify if it has been uploaded before. If it has been uploaded, then the image layer is
 *          skipped.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, BatchCheckLayerAvailabilityCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, BatchCheckLayerAvailabilityCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * // import type { ECRPUBLICClientConfig } from "@aws-sdk/client-ecr-public";
 * const config = {}; // type is ECRPUBLICClientConfig
 * const client = new ECRPUBLICClient(config);
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
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
 *
 * @throws {@link RegistryNotFoundException} (client fault)
 *  <p>The registry doesn't exist.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository can't be found. Check the spelling of the specified repository
 *          and ensure that you're performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UnsupportedCommandException} (client fault)
 *  <p>The action isn't supported in this Region.</p>
 *
 * @throws {@link ECRPUBLICServiceException}
 * <p>Base exception class for all service exceptions from ECRPUBLIC service.</p>
 *
 *
 * @public
 */
export class BatchCheckLayerAvailabilityCommand extends $Command
  .classBuilder<
    BatchCheckLayerAvailabilityCommandInput,
    BatchCheckLayerAvailabilityCommandOutput,
    ECRPUBLICClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRPUBLICClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SpencerFrontendService", "BatchCheckLayerAvailability", {})
  .n("ECRPUBLICClient", "BatchCheckLayerAvailabilityCommand")
  .sc(BatchCheckLayerAvailability$)
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
