// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListClustersInput, ListClustersOutput } from "../models/models_0";
import { ListClusters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns information about provisioned Amazon DocumentDB elastic clusters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, ListClustersCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, ListClustersCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * // import type { DocDBElasticClientConfig } from "@aws-sdk/client-docdb-elastic";
 * const config = {}; // type is DocDBElasticClientConfig
 * const client = new DocDBElasticClient(config);
 * const input = { // ListClustersInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * // { // ListClustersOutput
 * //   clusters: [ // ClusterList
 * //     { // ClusterInList
 * //       clusterName: "STRING_VALUE", // required
 * //       clusterArn: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClustersCommandInput - {@link ListClustersCommandInput}
 * @returns {@link ListClustersCommandOutput}
 * @see {@link ListClustersCommandInput} for command's `input` shape.
 * @see {@link ListClustersCommandOutput} for command's `response` shape.
 * @see {@link DocDBElasticClientResolvedConfig | config} for DocDBElasticClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * An exception that occurs when there are not sufficient permissions to perform an action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There was an internal server error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * ThrottlingException will be thrown when request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A structure defining a validation exception.
 *
 * @throws {@link DocDBElasticServiceException}
 *
 * Base exception class for all service exceptions from DocDBElastic service.
 *
 * @public
 */
export class ListClustersCommand extends command<ListClustersCommandInput, ListClustersCommandOutput>(
  _ep0,
  _mw0,
  "ListClusters",
  ListClusters$
) {
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
