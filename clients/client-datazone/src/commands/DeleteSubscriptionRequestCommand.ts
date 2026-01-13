// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteSubscriptionRequestInput } from "../models/models_1";
import { DeleteSubscriptionRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSubscriptionRequestCommand}.
 */
export interface DeleteSubscriptionRequestCommandInput extends DeleteSubscriptionRequestInput {}
/**
 * @public
 *
 * The output of {@link DeleteSubscriptionRequestCommand}.
 */
export interface DeleteSubscriptionRequestCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a subscription request in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteSubscriptionRequestCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteSubscriptionRequestCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteSubscriptionRequestInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteSubscriptionRequestCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSubscriptionRequestCommandInput - {@link DeleteSubscriptionRequestCommandInput}
 * @returns {@link DeleteSubscriptionRequestCommandOutput}
 * @see {@link DeleteSubscriptionRequestCommandInput} for command's `input` shape.
 * @see {@link DeleteSubscriptionRequestCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class DeleteSubscriptionRequestCommand extends $Command
  .classBuilder<
    DeleteSubscriptionRequestCommandInput,
    DeleteSubscriptionRequestCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "DeleteSubscriptionRequest", {})
  .n("DataZoneClient", "DeleteSubscriptionRequestCommand")
  .sc(DeleteSubscriptionRequest$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSubscriptionRequestInput;
      output: {};
    };
    sdk: {
      input: DeleteSubscriptionRequestCommandInput;
      output: DeleteSubscriptionRequestCommandOutput;
    };
  };
}
