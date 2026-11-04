// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSubscriptionRequestInput } from "../models/models_1";
import { DeleteSubscriptionRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a subscription request in Amazon DataZone.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class DeleteSubscriptionRequestCommand extends command<DeleteSubscriptionRequestCommandInput, DeleteSubscriptionRequestCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSubscriptionRequest",
  DeleteSubscriptionRequest$
) {
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
