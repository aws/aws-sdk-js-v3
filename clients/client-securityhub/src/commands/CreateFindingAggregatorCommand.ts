// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFindingAggregatorRequest, CreateFindingAggregatorResponse } from "../models/models_2";
import { CreateFindingAggregator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateFindingAggregatorCommand}.
 */
export interface CreateFindingAggregatorCommandInput extends CreateFindingAggregatorRequest {}
/**
 * @public
 *
 * The output of {@link CreateFindingAggregatorCommand}.
 */
export interface CreateFindingAggregatorCommandOutput extends CreateFindingAggregatorResponse, __MetadataBearer {}

/**
 * > **Note:** The *aggregation Region* is now called the *home Region*.
 *
 * Used to enable cross-Region aggregation. This operation can be invoked from the home Region only.
 *
 * For information about how cross-Region aggregation works, see [Understanding cross-Region aggregation in Security Hub CSPM](https://docs.aws.amazon.com/securityhub/latest/userguide/finding-aggregation.html) in the *Security Hub CSPM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateFindingAggregatorCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateFindingAggregatorCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // CreateFindingAggregatorRequest
 *   RegionLinkingMode: "STRING_VALUE", // required
 *   Regions: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * // { // CreateFindingAggregatorResponse
 * //   FindingAggregatorArn: "STRING_VALUE",
 * //   FindingAggregationRegion: "STRING_VALUE",
 * //   RegionLinkingMode: "STRING_VALUE",
 * //   Regions: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateFindingAggregatorCommandInput - {@link CreateFindingAggregatorCommandInput}
 * @returns {@link CreateFindingAggregatorCommandOutput}
 * @see {@link CreateFindingAggregatorCommandInput} for command's `input` shape.
 * @see {@link CreateFindingAggregatorCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform the action specified in the request.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link InvalidAccessException} (client fault)
 *
 * The account doesn't have permission to perform this action.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because you supplied an invalid or out-of-range value for an input parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account or throttling limits. The error code describes the limit exceeded.
 *
 * @throws {@link SecurityHubServiceException}
 *
 * Base exception class for all service exceptions from SecurityHub service.
 *
 * @example To enable cross-Region aggregation
 * ```javascript
 * // The following example creates a finding aggregator. This is required to enable cross-Region aggregation.
 * const input = {
 *   RegionLinkingMode: "SPECIFIED_REGIONS",
 *   Regions: [
 *     "us-west-1",
 *     "us-west-2"
 *   ]
 * };
 * const command = new CreateFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   FindingAggregationRegion: "us-east-1",
 *   FindingAggregatorArn: "arn:aws:securityhub:us-east-1:222222222222:finding-aggregator/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   RegionLinkingMode: "SPECIFIED_REGIONS",
 *   Regions: [
 *     "us-west-1",
 *     "us-west-2"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateFindingAggregatorCommand extends command<CreateFindingAggregatorCommandInput, CreateFindingAggregatorCommandOutput>(
  _ep0,
  _mw0,
  "CreateFindingAggregator",
  CreateFindingAggregator$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFindingAggregatorRequest;
      output: CreateFindingAggregatorResponse;
    };
    sdk: {
      input: CreateFindingAggregatorCommandInput;
      output: CreateFindingAggregatorCommandOutput;
    };
  };
}
