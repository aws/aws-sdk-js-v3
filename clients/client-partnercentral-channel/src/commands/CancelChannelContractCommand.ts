// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelChannelContractRequest, CancelChannelContractResponse } from "../models/models_0";
import { CancelChannelContract$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelChannelContractCommand}.
 */
export interface CancelChannelContractCommandInput extends CancelChannelContractRequest {}
/**
 * @public
 *
 * The output of {@link CancelChannelContractCommand}.
 */
export interface CancelChannelContractCommandOutput extends CancelChannelContractResponse, __MetadataBearer {}

/**
 * <p>Cancels a pending channel contract created within the last 30 days. A request for a channel contract that isn't PENDING, including one that is already CANCELED, fails with a ValidationException.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, CancelChannelContractCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, CancelChannelContractCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // CancelChannelContractRequest
 *   catalog: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   reason: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CancelChannelContractCommand(input);
 * const response = await client.send(command);
 * // { // CancelChannelContractResponse
 * //   channelContractDetail: { // CancelChannelContractDetail
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "PENDING" || "ACCEPTED" || "EXPIRED" || "CANCELED" || "INACTIVE",
 * //     cancellationReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CancelChannelContractCommandInput - {@link CancelChannelContractCommandInput}
 * @returns {@link CancelChannelContractCommandOutput}
 * @see {@link CancelChannelContractCommandInput} for command's `input` shape.
 * @see {@link CancelChannelContractCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralChannelClientResolvedConfig | config} for PartnerCentralChannelClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests being sent in a short period.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation due to invalid input parameters.</p>
 *
 * @throws {@link PartnerCentralChannelServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralChannel service.</p>
 *
 *
 * @example Example for CancelChannelContract
 * ```javascript
 * //
 * const input = {
 *   catalog: "AWS",
 *   clientToken: "clientToken",
 *   identifier: "cc-4fj3bd2o3vb91",
 *   reason: "No longer providing managed services for this customer"
 * };
 * const command = new CancelChannelContractCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   channelContractDetail: {
 *     arn: "arn:aws:partnercentral:us-east-1:111122223333:catalog/AWS/channel-contract/cc-4fj3bd2o3vb91",
 *     cancellationReason: "No longer providing managed services for this customer",
 *     id: "cc-4fj3bd2o3vb91",
 *     status: "CANCELED"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CancelChannelContractCommand extends command<CancelChannelContractCommandInput, CancelChannelContractCommandOutput>(
  _ep0,
  _mw0,
  "CancelChannelContract",
  CancelChannelContract$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelChannelContractRequest;
      output: CancelChannelContractResponse;
    };
    sdk: {
      input: CancelChannelContractCommandInput;
      output: CancelChannelContractCommandOutput;
    };
  };
}
