// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelContactRequest, ContactIdResponse } from "../models/models_0";
import { CancelContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelContactCommand}.
 */
export interface CancelContactCommandInput extends CancelContactRequest {}
/**
 * @public
 *
 * The output of {@link CancelContactCommand}.
 */
export interface CancelContactCommandOutput extends ContactIdResponse, __MetadataBearer {}

/**
 * Cancels or stops a contact with a specified contact ID based on its position in the [contact lifecycle](https://docs.aws.amazon.com/ground-station/latest/ug/contacts.lifecycle.html).
 *
 * For contacts that:
 *
 * - Have yet to start, the contact will be cancelled.
 * - Have started but have yet to finish, the contact will be stopped.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CancelContactCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CancelContactCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // CancelContactRequest
 *   contactId: "STRING_VALUE", // required
 * };
 * const command = new CancelContactCommand(input);
 * const response = await client.send(command);
 * // { // ContactIdResponse
 * //   contactId: "STRING_VALUE",
 * //   versionId: Number("int"),
 * // };
 *
 * ```
 *
 * @param CancelContactCommandInput - {@link CancelContactCommandInput}
 * @returns {@link CancelContactCommandOutput}
 * @see {@link CancelContactCommandInput} for command's `input` shape.
 * @see {@link CancelContactCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *
 * Dependency encountered an error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource was not found.
 *
 * @throws {@link GroundStationServiceException}
 *
 * Base exception class for all service exceptions from GroundStation service.
 *
 * @public
 */
export class CancelContactCommand extends command<CancelContactCommandInput, CancelContactCommandOutput>(
  _ep0,
  _mw0,
  "CancelContact",
  CancelContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelContactRequest;
      output: ContactIdResponse;
    };
    sdk: {
      input: CancelContactCommandInput;
      output: CancelContactCommandOutput;
    };
  };
}
