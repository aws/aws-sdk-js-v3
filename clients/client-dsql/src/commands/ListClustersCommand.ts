// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DSQLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DSQLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListClustersInput, ListClustersOutput } from "../models/models_0";
import { de_ListClustersCommand, se_ListClustersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListClustersCommand}.
 */
export interface ListClustersCommandInput extends ListClustersInput {}
/**
 * @public
 *
 * The output of {@link ListClustersCommand}.
 */
export interface ListClustersCommandOutput extends ListClustersOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a list of clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, ListClustersCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, ListClustersCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * const client = new DSQLClient(config);
 * const input = { // ListClustersInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * // { // ListClustersOutput
 * //   nextToken: "STRING_VALUE",
 * //   clusters: [ // ClusterList // required
 * //     { // ClusterSummary
 * //       identifier: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListClustersCommandInput - {@link ListClustersCommandInput}
 * @returns {@link ListClustersCommandOutput}
 * @see {@link ListClustersCommandInput} for command's `input` shape.
 * @see {@link ListClustersCommandOutput} for command's `response` shape.
 * @see {@link DSQLClientResolvedConfig | config} for DSQLClient's `config` shape.
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
 * @example List Clusters
 * ```javascript
 * //
 * const input = {
 *   "maxResults": 20
 * };
 * const command = new ListClustersCommand(input);
 * await client.send(command);
 * // example id: example-1
 * ```
 *
 */
export class ListClustersCommand extends $Command
  .classBuilder<
    ListClustersCommandInput,
    ListClustersCommandOutput,
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
  .s("DSQL", "ListClusters", {})
  .n("DSQLClient", "ListClustersCommand")
  .f(void 0, void 0)
  .ser(se_ListClustersCommand)
  .de(de_ListClustersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClustersInput;
      output: ListClustersOutput;
    };
    sdk: {
      input: ListClustersCommandInput;
      output: ListClustersCommandOutput;
    };
  };
}
