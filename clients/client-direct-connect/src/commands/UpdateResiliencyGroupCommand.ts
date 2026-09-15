// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateResiliencyGroupRequest, UpdateResiliencyGroupResult } from "../models/models_0";
import { UpdateResiliencyGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateResiliencyGroupCommand}.
 */
export interface UpdateResiliencyGroupCommandInput extends UpdateResiliencyGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResiliencyGroupCommand}.
 */
export interface UpdateResiliencyGroupCommandOutput extends UpdateResiliencyGroupResult, __MetadataBearer {}

/**
 * <p>Updates the name of the specified resiliency group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, UpdateResiliencyGroupCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, UpdateResiliencyGroupCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // UpdateResiliencyGroupRequest
 *   resiliencyGroupId: "STRING_VALUE", // required
 *   resiliencyGroupName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateResiliencyGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResiliencyGroupResult
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
 * @param UpdateResiliencyGroupCommandInput - {@link UpdateResiliencyGroupCommandInput}
 * @returns {@link UpdateResiliencyGroupCommandOutput}
 * @see {@link UpdateResiliencyGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateResiliencyGroupCommandOutput} for command's `response` shape.
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
export class UpdateResiliencyGroupCommand extends command<UpdateResiliencyGroupCommandInput, UpdateResiliencyGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateResiliencyGroup",
  UpdateResiliencyGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResiliencyGroupRequest;
      output: UpdateResiliencyGroupResult;
    };
    sdk: {
      input: UpdateResiliencyGroupCommandInput;
      output: UpdateResiliencyGroupCommandOutput;
    };
  };
}
