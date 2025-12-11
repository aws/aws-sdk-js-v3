// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAggregatorV2Request, CreateAggregatorV2Response } from "../models/models_2";
import { CreateAggregatorV2 } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAggregatorV2Command}.
 */
export interface CreateAggregatorV2CommandInput extends CreateAggregatorV2Request {}
/**
 * @public
 *
 * The output of {@link CreateAggregatorV2Command}.
 */
export interface CreateAggregatorV2CommandOutput extends CreateAggregatorV2Response, __MetadataBearer {}

/**
 * <p>Enables aggregation across Amazon Web Services Regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateAggregatorV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateAggregatorV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // CreateAggregatorV2Request
 *   RegionLinkingMode: "STRING_VALUE", // required
 *   LinkedRegions: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateAggregatorV2Command(input);
 * const response = await client.send(command);
 * // { // CreateAggregatorV2Response
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
 * @param CreateAggregatorV2CommandInput - {@link CreateAggregatorV2CommandInput}
 * @returns {@link CreateAggregatorV2CommandOutput}
 * @see {@link CreateAggregatorV2CommandInput} for command's `input` shape.
 * @see {@link CreateAggregatorV2CommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was rejected because it would exceed the service quota limit.</p>
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
export class CreateAggregatorV2Command extends $Command
  .classBuilder<
    CreateAggregatorV2CommandInput,
    CreateAggregatorV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "CreateAggregatorV2", {})
  .n("SecurityHubClient", "CreateAggregatorV2Command")
  .sc(CreateAggregatorV2)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAggregatorV2Request;
      output: CreateAggregatorV2Response;
    };
    sdk: {
      input: CreateAggregatorV2CommandInput;
      output: CreateAggregatorV2CommandOutput;
    };
  };
}
