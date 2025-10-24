// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAggregatorsV2Request, ListAggregatorsV2Response } from "../models/models_3";
import { de_ListAggregatorsV2Command, se_ListAggregatorsV2Command } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAggregatorsV2Command}.
 */
export interface ListAggregatorsV2CommandInput extends ListAggregatorsV2Request {}
/**
 * @public
 *
 * The output of {@link ListAggregatorsV2Command}.
 */
export interface ListAggregatorsV2CommandOutput extends ListAggregatorsV2Response, __MetadataBearer {}

/**
 * <p>Retrieves a list of V2 aggregators. This API is in public preview and subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListAggregatorsV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListAggregatorsV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // ListAggregatorsV2Request
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAggregatorsV2Command(input);
 * const response = await client.send(command);
 * // { // ListAggregatorsV2Response
 * //   AggregatorsV2: [ // AggregatorV2List
 * //     { // AggregatorV2
 * //       AggregatorV2Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAggregatorsV2CommandInput - {@link ListAggregatorsV2CommandInput}
 * @returns {@link ListAggregatorsV2CommandOutput}
 * @see {@link ListAggregatorsV2CommandInput} for command's `input` shape.
 * @see {@link ListAggregatorsV2CommandOutput} for command's `response` shape.
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
export class ListAggregatorsV2Command extends $Command
  .classBuilder<
    ListAggregatorsV2CommandInput,
    ListAggregatorsV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "ListAggregatorsV2", {})
  .n("SecurityHubClient", "ListAggregatorsV2Command")
  .f(void 0, void 0)
  .ser(se_ListAggregatorsV2Command)
  .de(de_ListAggregatorsV2Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAggregatorsV2Request;
      output: ListAggregatorsV2Response;
    };
    sdk: {
      input: ListAggregatorsV2CommandInput;
      output: ListAggregatorsV2CommandOutput;
    };
  };
}
