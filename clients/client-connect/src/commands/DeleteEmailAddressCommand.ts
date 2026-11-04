// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEmailAddressRequest, DeleteEmailAddressResponse } from "../models/models_1";
import { DeleteEmailAddress$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEmailAddressCommand}.
 */
export interface DeleteEmailAddressCommandInput extends DeleteEmailAddressRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEmailAddressCommand}.
 */
export interface DeleteEmailAddressCommandOutput extends DeleteEmailAddressResponse, __MetadataBearer {}

/**
 * Deletes email address from the specified Connect Customer instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteEmailAddressCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteEmailAddressCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteEmailAddressRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EmailAddressId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEmailAddressCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEmailAddressCommandInput - {@link DeleteEmailAddressCommandInput}
 * @returns {@link DeleteEmailAddressCommandOutput}
 * @see {@link DeleteEmailAddressCommandInput} for command's `input` shape.
 * @see {@link DeleteEmailAddressCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * A resource already has that name.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class DeleteEmailAddressCommand extends command<DeleteEmailAddressCommandInput, DeleteEmailAddressCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEmailAddress",
  DeleteEmailAddress$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEmailAddressRequest;
      output: {};
    };
    sdk: {
      input: DeleteEmailAddressCommandInput;
      output: DeleteEmailAddressCommandOutput;
    };
  };
}
