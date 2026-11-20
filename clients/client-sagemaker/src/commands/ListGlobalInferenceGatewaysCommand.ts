// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGlobalInferenceGatewaysRequest, ListGlobalInferenceGatewaysResponse } from "../models/models_4";
import { ListGlobalInferenceGateways$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListGlobalInferenceGatewaysCommand}.
 */
export interface ListGlobalInferenceGatewaysCommandInput extends ListGlobalInferenceGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link ListGlobalInferenceGatewaysCommand}.
 */
export interface ListGlobalInferenceGatewaysCommandOutput extends ListGlobalInferenceGatewaysResponse, __MetadataBearer {}

/**
 * <p>Lists summaries of the global inference gateways in your account. You can filter the results by status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListGlobalInferenceGatewaysCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListGlobalInferenceGatewaysCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListGlobalInferenceGatewaysRequest
 *   Filters: [ // GlobalInferenceGatewayFilters
 *     { // GlobalInferenceGatewayFilter
 *       Name: "Status", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListGlobalInferenceGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // ListGlobalInferenceGatewaysResponse
 * //   GlobalInferenceGatewaySummaries: [ // GlobalInferenceGatewaySummaries // required
 * //     { // GlobalInferenceGatewaySummary
 * //       Arn: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGlobalInferenceGatewaysCommandInput - {@link ListGlobalInferenceGatewaysCommandInput}
 * @returns {@link ListGlobalInferenceGatewaysCommandOutput}
 * @see {@link ListGlobalInferenceGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListGlobalInferenceGatewaysCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListGlobalInferenceGatewaysCommand extends command<ListGlobalInferenceGatewaysCommandInput, ListGlobalInferenceGatewaysCommandOutput>(
  _ep0,
  _mw0,
  "ListGlobalInferenceGateways",
  ListGlobalInferenceGateways$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGlobalInferenceGatewaysRequest;
      output: ListGlobalInferenceGatewaysResponse;
    };
    sdk: {
      input: ListGlobalInferenceGatewaysCommandInput;
      output: ListGlobalInferenceGatewaysCommandOutput;
    };
  };
}
