// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateUserProficienciesRequest } from "../models/models_0";
import { AssociateUserProficiencies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateUserProficienciesCommand}.
 */
export interface AssociateUserProficienciesCommandInput extends AssociateUserProficienciesRequest {}
/**
 * @public
 *
 * The output of {@link AssociateUserProficienciesCommand}.
 */
export interface AssociateUserProficienciesCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates a set of proficiencies with a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateUserProficienciesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateUserProficienciesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // AssociateUserProficienciesRequest
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
 * const command = new AssociateUserProficienciesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateUserProficienciesCommandInput - {@link AssociateUserProficienciesCommandInput}
 * @returns {@link AssociateUserProficienciesCommandOutput}
 * @see {@link AssociateUserProficienciesCommandInput} for command's `input` shape.
 * @see {@link AssociateUserProficienciesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class AssociateUserProficienciesCommand extends command<AssociateUserProficienciesCommandInput, AssociateUserProficienciesCommandOutput>(
  _ep0,
  _mw0,
  "AssociateUserProficiencies",
  AssociateUserProficiencies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateUserProficienciesRequest;
      output: {};
    };
    sdk: {
      input: AssociateUserProficienciesCommandInput;
      output: AssociateUserProficienciesCommandOutput;
    };
  };
}
