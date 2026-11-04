// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUserProficienciesRequest } from "../models/models_4";
import { UpdateUserProficiencies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateUserProficienciesCommand}.
 */
export interface UpdateUserProficienciesCommandInput extends UpdateUserProficienciesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserProficienciesCommand}.
 */
export interface UpdateUserProficienciesCommandOutput extends __MetadataBearer {}

/**
 * Updates the properties associated with the proficiencies of a user.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserProficienciesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserProficienciesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateUserProficienciesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   UserProficiencies: [ // UserProficiencyList // required
 *     { // UserProficiency
 *       AttributeName: "STRING_VALUE", // required
 *       AttributeValue: "STRING_VALUE", // required
 *       Level: Number("float"), // required
 *     },
 *   ],
 * };
 * const command = new UpdateUserProficienciesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserProficienciesCommandInput - {@link UpdateUserProficienciesCommandInput}
 * @returns {@link UpdateUserProficienciesCommandOutput}
 * @see {@link UpdateUserProficienciesCommandInput} for command's `input` shape.
 * @see {@link UpdateUserProficienciesCommandOutput} for command's `response` shape.
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
export class UpdateUserProficienciesCommand extends command<UpdateUserProficienciesCommandInput, UpdateUserProficienciesCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUserProficiencies",
  UpdateUserProficiencies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserProficienciesRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserProficienciesCommandInput;
      output: UpdateUserProficienciesCommandOutput;
    };
  };
}
