// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAggregatorV2Request, DeleteAggregatorV2Response } from "../models/models_2";
import { de_DeleteAggregatorV2Command, se_DeleteAggregatorV2Command } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAggregatorV2Command}.
 */
export interface DeleteAggregatorV2CommandInput extends DeleteAggregatorV2Request {}
/**
 * @public
 *
 * The output of {@link DeleteAggregatorV2Command}.
 */
export interface DeleteAggregatorV2CommandOutput extends DeleteAggregatorV2Response, __MetadataBearer {}

/**
 * <p>Deletes the Aggregator V2. This API is in public preview and subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteAggregatorV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteAggregatorV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // DeleteAggregatorV2Request
 *   AggregatorV2Arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAggregatorV2Command(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAggregatorV2CommandInput - {@link DeleteAggregatorV2CommandInput}
 * @returns {@link DeleteAggregatorV2CommandOutput}
 * @see {@link DeleteAggregatorV2CommandInput} for command's `input` shape.
 * @see {@link DeleteAggregatorV2CommandOutput} for command's `response` shape.
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
export class DeleteAggregatorV2Command extends $Command
  .classBuilder<
    DeleteAggregatorV2CommandInput,
    DeleteAggregatorV2CommandOutput,
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
  .s("SecurityHubAPIService", "DeleteAggregatorV2", {})
  .n("SecurityHubClient", "DeleteAggregatorV2Command")
  .f(void 0, void 0)
  .ser(se_DeleteAggregatorV2Command)
  .de(de_DeleteAggregatorV2Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAggregatorV2Request;
      output: {};
    };
    sdk: {
      input: DeleteAggregatorV2CommandInput;
      output: DeleteAggregatorV2CommandOutput;
    };
  };
}
