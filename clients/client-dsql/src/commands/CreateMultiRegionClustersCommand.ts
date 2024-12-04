// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DSQLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DSQLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateMultiRegionClustersInput, CreateMultiRegionClustersOutput } from "../models/models_0";
import { de_CreateMultiRegionClustersCommand, se_CreateMultiRegionClustersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMultiRegionClustersCommand}.
 */
export interface CreateMultiRegionClustersCommandInput extends CreateMultiRegionClustersInput {}
/**
 * @public
 *
 * The output of {@link CreateMultiRegionClustersCommand}.
 */
export interface CreateMultiRegionClustersCommandOutput extends CreateMultiRegionClustersOutput, __MetadataBearer {}

/**
 * <p>Creates multi-Region clusters in Amazon Aurora DSQL.
 *       Multi-Region clusters require a linked Region list, which is an array
 *       of the Regions in which you want to create linked clusters.
 *       Multi-Region clusters require a witness Region, which participates in quorum in failure scenarios.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, CreateMultiRegionClustersCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, CreateMultiRegionClustersCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * const client = new DSQLClient(config);
 * const input = { // CreateMultiRegionClustersInput
 *   linkedRegionList: [ // RegionList // required
 *     "STRING_VALUE",
 *   ],
 *   clusterProperties: { // ClusterPropertyMap
 *     "<keys>": { // LinkedClusterProperties
 *       deletionProtectionEnabled: true || false,
 *       tags: { // TagMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 *   witnessRegion: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateMultiRegionClustersCommand(input);
 * const response = await client.send(command);
 * // { // CreateMultiRegionClustersOutput
 * //   linkedClusterArns: [ // ClusterArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateMultiRegionClustersCommandInput - {@link CreateMultiRegionClustersCommandInput}
 * @returns {@link CreateMultiRegionClustersCommandOutput}
 * @see {@link CreateMultiRegionClustersCommandInput} for command's `input` shape.
 * @see {@link CreateMultiRegionClustersCommandOutput} for command's `response` shape.
 * @see {@link DSQLClientResolvedConfig | config} for DSQLClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service limit was exceeded.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error,
 *       exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link DSQLServiceException}
 * <p>Base exception class for all service exceptions from DSQL service.</p>
 *
 * @public
 * @example Create Multi Region Clusters
 * ```javascript
 * //
 * const input = {
 *   "linkedRegionList": [
 *     "us-east-1",
 *     "us-east-2"
 *   ],
 *   "witnessRegion": "us-west-2"
 * };
 * const command = new CreateMultiRegionClustersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "linkedClusterArns": [
 *     "arn:aws:xanadu:us-east-1:111122223333:cluster/abcdefghijklmnopqrst12345",
 *     "arn:aws:xanadu:us-east-2:111122223333:cluster/klmnopqrstuvwxyzabcd54321"
 *   ]
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class CreateMultiRegionClustersCommand extends $Command
  .classBuilder<
    CreateMultiRegionClustersCommandInput,
    CreateMultiRegionClustersCommandOutput,
    DSQLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DSQLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DSQL", "CreateMultiRegionClusters", {})
  .n("DSQLClient", "CreateMultiRegionClustersCommand")
  .f(void 0, void 0)
  .ser(se_CreateMultiRegionClustersCommand)
  .de(de_CreateMultiRegionClustersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMultiRegionClustersInput;
      output: CreateMultiRegionClustersOutput;
    };
    sdk: {
      input: CreateMultiRegionClustersCommandInput;
      output: CreateMultiRegionClustersCommandOutput;
    };
  };
}
