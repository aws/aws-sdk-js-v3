// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMLConfigurationRequest } from "../models/models_0";
import { DeleteMLConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMLConfigurationCommand}.
 */
export interface DeleteMLConfigurationCommandInput extends DeleteMLConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMLConfigurationCommand}.
 */
export interface DeleteMLConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Deletes a ML modeling configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, DeleteMLConfigurationCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, DeleteMLConfigurationCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // DeleteMLConfigurationRequest
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteMLConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMLConfigurationCommandInput - {@link DeleteMLConfigurationCommandInput}
 * @returns {@link DeleteMLConfigurationCommandOutput}
 * @see {@link DeleteMLConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteMLConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource you are requesting does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request parameters for this request are incorrect.
 *
 * @throws {@link CleanRoomsMLServiceException}
 *
 * Base exception class for all service exceptions from CleanRoomsML service.
 *
 * @public
 */
export class DeleteMLConfigurationCommand extends command<DeleteMLConfigurationCommandInput, DeleteMLConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMLConfiguration",
  DeleteMLConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMLConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteMLConfigurationCommandInput;
      output: DeleteMLConfigurationCommandOutput;
    };
  };
}
