// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DSQLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DSQLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMultiRegionClustersInput } from "../models/models_0";
import { de_DeleteMultiRegionClustersCommand, se_DeleteMultiRegionClustersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMultiRegionClustersCommand}.
 */
export interface DeleteMultiRegionClustersCommandInput extends DeleteMultiRegionClustersInput {}
/**
 * @public
 *
 * The output of {@link DeleteMultiRegionClustersCommand}.
 */
export interface DeleteMultiRegionClustersCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a multi-Region cluster in Amazon Aurora DSQL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, DeleteMultiRegionClustersCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, DeleteMultiRegionClustersCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DSQLClient(config);
 * const input = { // DeleteMultiRegionClustersInput
 *   linkedClusterArns: [ // ClusterArnList // required
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteMultiRegionClustersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMultiRegionClustersCommandInput - {@link DeleteMultiRegionClustersCommandInput}
 * @returns {@link DeleteMultiRegionClustersCommandOutput}
 * @see {@link DeleteMultiRegionClustersCommandInput} for command's `input` shape.
 * @see {@link DeleteMultiRegionClustersCommandOutput} for command's `response` shape.
 * @see {@link DSQLClientResolvedConfig | config} for DSQLClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
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
 * @example Delete Multi Region Clusters
 * ```javascript
 * //
 * const input = {
 *   "linkedClusterArns": [
 *     "arn:aws:dsql:us-east-1:111122223333:cluster/abcdefghijklmnopqrst12345",
 *     "arn:aws:dsql:us-east-2:111122223333:cluster/klmnopqrstuvwxyzabcd54321"
 *   ]
 * };
 * const command = new DeleteMultiRegionClustersCommand(input);
 * await client.send(command);
 * // example id: example-1
 * ```
 *
 */
export class DeleteMultiRegionClustersCommand extends $Command
  .classBuilder<
    DeleteMultiRegionClustersCommandInput,
    DeleteMultiRegionClustersCommandOutput,
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
  .s("DSQL", "DeleteMultiRegionClusters", {})
  .n("DSQLClient", "DeleteMultiRegionClustersCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMultiRegionClustersCommand)
  .de(de_DeleteMultiRegionClustersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMultiRegionClustersInput;
      output: {};
    };
    sdk: {
      input: DeleteMultiRegionClustersCommandInput;
      output: DeleteMultiRegionClustersCommandOutput;
    };
  };
}
