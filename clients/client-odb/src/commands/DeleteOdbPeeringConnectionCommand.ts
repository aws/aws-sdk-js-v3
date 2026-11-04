// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteOdbPeeringConnectionInput, DeleteOdbPeeringConnectionOutput } from "../models/models_0";
import { DeleteOdbPeeringConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteOdbPeeringConnectionCommand}.
 */
export interface DeleteOdbPeeringConnectionCommandInput extends DeleteOdbPeeringConnectionInput {}
/**
 * @public
 *
 * The output of {@link DeleteOdbPeeringConnectionCommand}.
 */
export interface DeleteOdbPeeringConnectionCommandOutput extends DeleteOdbPeeringConnectionOutput, __MetadataBearer {}

/**
 * Deletes an ODB peering connection.
 *
 * When you delete an ODB peering connection, the underlying VPC peering connection is also deleted.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, DeleteOdbPeeringConnectionCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, DeleteOdbPeeringConnectionCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // DeleteOdbPeeringConnectionInput
 *   odbPeeringConnectionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOdbPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOdbPeeringConnectionCommandInput - {@link DeleteOdbPeeringConnectionCommandInput}
 * @returns {@link DeleteOdbPeeringConnectionCommandOutput}
 * @see {@link DeleteOdbPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteOdbPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it is missing required fields or has invalid inputs.
 *
 * @throws {@link OdbServiceException}
 *
 * Base exception class for all service exceptions from Odb service.
 *
 * @public
 */
export class DeleteOdbPeeringConnectionCommand extends command<DeleteOdbPeeringConnectionCommandInput, DeleteOdbPeeringConnectionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteOdbPeeringConnection",
  DeleteOdbPeeringConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOdbPeeringConnectionInput;
      output: {};
    };
    sdk: {
      input: DeleteOdbPeeringConnectionCommandInput;
      output: DeleteOdbPeeringConnectionCommandOutput;
    };
  };
}
