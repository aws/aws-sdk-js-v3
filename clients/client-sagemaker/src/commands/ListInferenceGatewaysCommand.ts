// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListInferenceGatewaysRequest, ListInferenceGatewaysResponse } from "../models/models_4";
import { ListInferenceGateways$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListInferenceGatewaysCommand}.
 */
export interface ListInferenceGatewaysCommandInput extends ListInferenceGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link ListInferenceGatewaysCommand}.
 */
export interface ListInferenceGatewaysCommandOutput extends ListInferenceGatewaysResponse, __MetadataBearer {}

/**
 * Lists the in-cluster inference gateways in a global inference gateway, in the order that they were
 * added. Each summary includes the status of the in-cluster inference gateway and, if the status is
 * `FAILED`, the reason for the failure. `DescribeGlobalInferenceGateway` doesn't return the in-cluster
 * inference gateways; use this operation to list them.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListInferenceGatewaysCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListInferenceGatewaysCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListInferenceGatewaysRequest
 *   Identifier: "STRING_VALUE", // required
 *   Filters: [ // GlobalInferenceGatewayMemberFilters
 *     { // GlobalInferenceGatewayMemberFilter
 *       Name: "Status" || "ClusterArn", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListInferenceGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // ListInferenceGatewaysResponse
 * //   InferenceGatewaySummaries: [ // GlobalInferenceGatewayMemberSummaries // required
 * //     { // GlobalInferenceGatewayMemberSummary
 * //       Name: "STRING_VALUE", // required
 * //       Namespace: "STRING_VALUE", // required
 * //       ClusterArn: "STRING_VALUE", // required
 * //       Status: "ADDING" || "ACTIVE" || "REMOVING" || "FAILED",
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInferenceGatewaysCommandInput - {@link ListInferenceGatewaysCommandInput}
 * @returns {@link ListInferenceGatewaysCommandOutput}
 * @see {@link ListInferenceGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListInferenceGatewaysCommandOutput} for command's `response` shape.
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
export class ListInferenceGatewaysCommand extends command<ListInferenceGatewaysCommandInput, ListInferenceGatewaysCommandOutput>(
  _ep0,
  _mw0,
  "ListInferenceGateways",
  ListInferenceGateways$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInferenceGatewaysRequest;
      output: ListInferenceGatewaysResponse;
    };
    sdk: {
      input: ListInferenceGatewaysCommandInput;
      output: ListInferenceGatewaysCommandOutput;
    };
  };
}
