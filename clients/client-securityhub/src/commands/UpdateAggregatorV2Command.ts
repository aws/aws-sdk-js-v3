// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAggregatorV2Request, UpdateAggregatorV2Response } from "../models/models_3";
import { UpdateAggregatorV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAggregatorV2Command}.
 */
export interface UpdateAggregatorV2CommandInput extends UpdateAggregatorV2Request {}
/**
 * @public
 *
 * The output of {@link UpdateAggregatorV2Command}.
 */
export interface UpdateAggregatorV2CommandOutput extends UpdateAggregatorV2Response, __MetadataBearer {}

/**
 * <p>Udpates the configuration for the Aggregator V2.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateAggregatorV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateAggregatorV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // UpdateAggregatorV2Request
 *   AggregatorV2Arn: "STRING_VALUE", // required
 *   RegionLinkingMode: "STRING_VALUE", // required
 *   LinkedRegions: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateAggregatorV2Command(input);
 * const response = await client.send(command);
 * // { // UpdateAggregatorV2Response
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
 * @param UpdateAggregatorV2CommandInput - {@link UpdateAggregatorV2CommandInput}
 * @returns {@link UpdateAggregatorV2CommandOutput}
 * @see {@link UpdateAggregatorV2CommandInput} for command's `input` shape.
 * @see {@link UpdateAggregatorV2CommandOutput} for command's `response` shape.
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
export class UpdateAggregatorV2Command extends command<UpdateAggregatorV2CommandInput, UpdateAggregatorV2CommandOutput>(
  _ep0,
  _mw0,
  "UpdateAggregatorV2",
  UpdateAggregatorV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAggregatorV2Request;
      output: UpdateAggregatorV2Response;
    };
    sdk: {
      input: UpdateAggregatorV2CommandInput;
      output: UpdateAggregatorV2CommandOutput;
    };
  };
}
