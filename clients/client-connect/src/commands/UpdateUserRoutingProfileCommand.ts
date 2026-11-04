// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUserRoutingProfileRequest } from "../models/models_4";
import { UpdateUserRoutingProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateUserRoutingProfileCommand}.
 */
export interface UpdateUserRoutingProfileCommandInput extends UpdateUserRoutingProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserRoutingProfileCommand}.
 */
export interface UpdateUserRoutingProfileCommandOutput extends __MetadataBearer {}

/**
 * Assigns the specified routing profile to the specified user.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserRoutingProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserRoutingProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateUserRoutingProfileRequest
 *   RoutingProfileId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new UpdateUserRoutingProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserRoutingProfileCommandInput - {@link UpdateUserRoutingProfileCommandInput}
 * @returns {@link UpdateUserRoutingProfileCommandOutput}
 * @see {@link UpdateUserRoutingProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateUserRoutingProfileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
export class UpdateUserRoutingProfileCommand extends command<UpdateUserRoutingProfileCommandInput, UpdateUserRoutingProfileCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUserRoutingProfile",
  UpdateUserRoutingProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserRoutingProfileRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserRoutingProfileCommandInput;
      output: UpdateUserRoutingProfileCommandOutput;
    };
  };
}
