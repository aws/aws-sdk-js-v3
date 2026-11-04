// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePendingAggregationRequestRequest } from "../models/models_0";
import { DeletePendingAggregationRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePendingAggregationRequestCommand}.
 */
export interface DeletePendingAggregationRequestCommandInput extends DeletePendingAggregationRequestRequest {}
/**
 * @public
 *
 * The output of {@link DeletePendingAggregationRequestCommand}.
 */
export interface DeletePendingAggregationRequestCommandOutput extends __MetadataBearer {}

/**
 * Deletes pending authorization requests for a specified aggregator account in a specified region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeletePendingAggregationRequestCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeletePendingAggregationRequestCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DeletePendingAggregationRequestRequest
 *   RequesterAccountId: "STRING_VALUE", // required
 *   RequesterAwsRegion: "STRING_VALUE", // required
 * };
 * const command = new DeletePendingAggregationRequestCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePendingAggregationRequestCommandInput - {@link DeletePendingAggregationRequestCommandInput}
 * @returns {@link DeletePendingAggregationRequestCommandOutput}
 * @see {@link DeletePendingAggregationRequestCommandInput} for command's `input` shape.
 * @see {@link DeletePendingAggregationRequestCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more of the specified parameters are not valid. Verify that your parameters are valid and try again.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class DeletePendingAggregationRequestCommand extends command<DeletePendingAggregationRequestCommandInput, DeletePendingAggregationRequestCommandOutput>(
  _ep0,
  _mw0,
  "DeletePendingAggregationRequest",
  DeletePendingAggregationRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePendingAggregationRequestRequest;
      output: {};
    };
    sdk: {
      input: DeletePendingAggregationRequestCommandInput;
      output: DeletePendingAggregationRequestCommandOutput;
    };
  };
}
