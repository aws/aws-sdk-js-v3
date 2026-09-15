// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteResiliencyGroupRequest, DeleteResiliencyGroupResult } from "../models/models_0";
import { DeleteResiliencyGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteResiliencyGroupCommand}.
 */
export interface DeleteResiliencyGroupCommandInput extends DeleteResiliencyGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResiliencyGroupCommand}.
 */
export interface DeleteResiliencyGroupCommandOutput extends DeleteResiliencyGroupResult, __MetadataBearer {}

/**
 * <p>Deletes the specified resiliency group. Deletion is asynchronous: the resiliency group
 *       transitions through the <code>deleting</code> state before it reaches the
 *       <code>deleted</code> state. The response returns the resiliency group so you can observe its
 *       current state without a subsequent <a>GetResiliencyGroup</a> call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteResiliencyGroupCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteResiliencyGroupCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DeleteResiliencyGroupRequest
 *   resiliencyGroupId: "STRING_VALUE", // required
 * };
 * const command = new DeleteResiliencyGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteResiliencyGroupResult
 * //   resiliencyGroup: { // ResiliencyGroup
 * //     resiliencyGroupId: "STRING_VALUE",
 * //     resiliencyGroupArn: "STRING_VALUE",
 * //     resiliencyGroupName: "STRING_VALUE",
 * //     resiliencyGroupType: "Managed",
 * //     ownerAccount: "STRING_VALUE",
 * //     state: "pending" || "available" || "deleting" || "deleted",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteResiliencyGroupCommandInput - {@link DeleteResiliencyGroupCommandInput}
 * @returns {@link DeleteResiliencyGroupCommandOutput}
 * @see {@link DeleteResiliencyGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteResiliencyGroupCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class DeleteResiliencyGroupCommand extends command<DeleteResiliencyGroupCommandInput, DeleteResiliencyGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteResiliencyGroup",
  DeleteResiliencyGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResiliencyGroupRequest;
      output: DeleteResiliencyGroupResult;
    };
    sdk: {
      input: DeleteResiliencyGroupCommandInput;
      output: DeleteResiliencyGroupCommandOutput;
    };
  };
}
