// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAggregatorV2Request, GetAggregatorV2Response } from "../models/models_2";
import { GetAggregatorV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAggregatorV2Command}.
 */
export interface GetAggregatorV2CommandInput extends GetAggregatorV2Request {}
/**
 * @public
 *
 * The output of {@link GetAggregatorV2Command}.
 */
export interface GetAggregatorV2CommandOutput extends GetAggregatorV2Response, __MetadataBearer {}

/**
 * <p>Returns the configuration of the specified Aggregator V2.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetAggregatorV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetAggregatorV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetAggregatorV2Request
 *   AggregatorV2Arn: "STRING_VALUE", // required
 * };
 * const command = new GetAggregatorV2Command(input);
 * const response = await client.send(command);
 * // { // GetAggregatorV2Response
 * //   AggregatorV2Arn: "STRING_VALUE",
 * //   AggregationRegion: "STRING_VALUE",
 * //   RegionLinkingMode: "STRING_VALUE",
 * //   LinkedRegions: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAggregatorV2CommandInput - {@link GetAggregatorV2CommandInput}
 * @returns {@link GetAggregatorV2CommandOutput}
 * @see {@link GetAggregatorV2CommandInput} for command's `input` shape.
 * @see {@link GetAggregatorV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request causes conflict with the current state of the service resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class GetAggregatorV2Command extends command<GetAggregatorV2CommandInput, GetAggregatorV2CommandOutput>(
  _ep0,
  _mw0,
  "GetAggregatorV2",
  GetAggregatorV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAggregatorV2Request;
      output: GetAggregatorV2Response;
    };
    sdk: {
      input: GetAggregatorV2CommandInput;
      output: GetAggregatorV2CommandOutput;
    };
  };
}
