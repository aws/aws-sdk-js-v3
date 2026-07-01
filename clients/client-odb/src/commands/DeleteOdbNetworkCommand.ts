// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteOdbNetworkInput, DeleteOdbNetworkOutput } from "../models/models_0";
import { DeleteOdbNetwork$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteOdbNetworkCommand}.
 */
export interface DeleteOdbNetworkCommandInput extends DeleteOdbNetworkInput {}
/**
 * @public
 *
 * The output of {@link DeleteOdbNetworkCommand}.
 */
export interface DeleteOdbNetworkCommandOutput extends DeleteOdbNetworkOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified ODB network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, DeleteOdbNetworkCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, DeleteOdbNetworkCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // DeleteOdbNetworkInput
 *   odbNetworkId: "STRING_VALUE", // required
 *   deleteAssociatedResources: true || false, // required
 * };
 * const command = new DeleteOdbNetworkCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOdbNetworkCommandInput - {@link DeleteOdbNetworkCommandInput}
 * @returns {@link DeleteOdbNetworkCommandOutput}
 * @see {@link DeleteOdbNetworkCommandInput} for command's `input` shape.
 * @see {@link DeleteOdbNetworkCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class DeleteOdbNetworkCommand extends command<DeleteOdbNetworkCommandInput, DeleteOdbNetworkCommandOutput>(
  _ep0,
  _mw0,
  "DeleteOdbNetwork",
  DeleteOdbNetwork$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOdbNetworkInput;
      output: {};
    };
    sdk: {
      input: DeleteOdbNetworkCommandInput;
      output: DeleteOdbNetworkCommandOutput;
    };
  };
}
