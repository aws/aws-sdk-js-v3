// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSubscriptionTargetInput } from "../models/models_1";
import { DeleteSubscriptionTarget$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSubscriptionTargetCommand}.
 */
export interface DeleteSubscriptionTargetCommandInput extends DeleteSubscriptionTargetInput {}
/**
 * @public
 *
 * The output of {@link DeleteSubscriptionTargetCommand}.
 */
export interface DeleteSubscriptionTargetCommandOutput extends __MetadataBearer {}

/**
 * Deletes a subscription target in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteSubscriptionTargetCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteSubscriptionTargetCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteSubscriptionTargetInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteSubscriptionTargetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSubscriptionTargetCommandInput - {@link DeleteSubscriptionTargetCommandInput}
 * @returns {@link DeleteSubscriptionTargetCommandOutput}
 * @see {@link DeleteSubscriptionTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteSubscriptionTargetCommandOutput} for command's `response` shape.
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
export class DeleteSubscriptionTargetCommand extends command<DeleteSubscriptionTargetCommandInput, DeleteSubscriptionTargetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSubscriptionTarget",
  DeleteSubscriptionTarget$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSubscriptionTargetInput;
      output: {};
    };
    sdk: {
      input: DeleteSubscriptionTargetCommandInput;
      output: DeleteSubscriptionTargetCommandOutput;
    };
  };
}
