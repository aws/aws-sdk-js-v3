// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListClusterOperationsRequest, ListClusterOperationsResponse } from "../models/models_4";
import { ListClusterOperations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListClusterOperationsCommand}.
 */
export interface ListClusterOperationsCommandInput extends ListClusterOperationsRequest {}
/**
 * @public
 *
 * The output of {@link ListClusterOperationsCommand}.
 */
export interface ListClusterOperationsCommandOutput extends ListClusterOperationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of operation summaries for a specified HyperPod cluster, such as scaling operations and deep health checks. The operation supports filtering, sorting, and pagination of results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListClusterOperationsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListClusterOperationsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListClusterOperationsRequest
 *   ClusterName: "STRING_VALUE", // required
 *   Status: "InProgress" || "Superseded" || "Done",
 *   Type: "Scaling" || "DeepHealthCheck",
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   SortBy: "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListClusterOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListClusterOperationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ClusterOperationSummaries: [ // ClusterOperationSummaries
 * //     { // ClusterOperationSummary
 * //       OperationId: "STRING_VALUE",
 * //       ClusterArn: "STRING_VALUE",
 * //       Type: "Scaling" || "DeepHealthCheck",
 * //       Status: "InProgress" || "Superseded" || "Done",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListClusterOperationsCommandInput - {@link ListClusterOperationsCommandInput}
 * @returns {@link ListClusterOperationsCommandOutput}
 * @see {@link ListClusterOperationsCommandInput} for command's `input` shape.
 * @see {@link ListClusterOperationsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
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
export class ListClusterOperationsCommand extends command<ListClusterOperationsCommandInput, ListClusterOperationsCommandOutput>(
  _ep0,
  _mw0,
  "ListClusterOperations",
  ListClusterOperations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClusterOperationsRequest;
      output: ListClusterOperationsResponse;
    };
    sdk: {
      input: ListClusterOperationsCommandInput;
      output: ListClusterOperationsCommandOutput;
    };
  };
}
