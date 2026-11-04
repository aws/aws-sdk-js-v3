// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAggregatorV2Request, DeleteAggregatorV2Response } from "../models/models_2";
import { DeleteAggregatorV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the Aggregator V2.
 *
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
 *
 * You don't have permission to perform the action specified in the request.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request causes conflict with the current state of the service resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because we can't find the specified resource.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it's missing required fields or has invalid inputs.
 *
 * @throws {@link SecurityHubServiceException}
 *
 * Base exception class for all service exceptions from SecurityHub service.
 *
 * @public
 */
export class DeleteAggregatorV2Command extends command<DeleteAggregatorV2CommandInput, DeleteAggregatorV2CommandOutput>(
  _ep0,
  _mw0,
  "DeleteAggregatorV2",
  DeleteAggregatorV2$
) {
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
