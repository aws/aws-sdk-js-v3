// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteResourcePermissionInput, DeleteResourcePermissionOutput } from "../models/models_0";
import { DeleteResourcePermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteResourcePermissionCommand}.
 */
export interface DeleteResourcePermissionCommandInput extends DeleteResourcePermissionInput {}
/**
 * @public
 *
 * The output of {@link DeleteResourcePermissionCommand}.
 */
export interface DeleteResourcePermissionCommandOutput extends DeleteResourcePermissionOutput, __MetadataBearer {}

/**
 * <p>Removes permissions associated with the target database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, DeleteResourcePermissionCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, DeleteResourcePermissionCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // DeleteResourcePermissionInput
 *   ActionType: "RESTORE",
 *   SourceResourceArn: "STRING_VALUE",
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteResourcePermissionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteResourcePermissionOutput
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteResourcePermissionCommandInput - {@link DeleteResourcePermissionCommandInput}
 * @returns {@link DeleteResourcePermissionCommandOutput}
 * @see {@link DeleteResourcePermissionCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePermissionCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource is not available.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 *
 * @public
 */
export class DeleteResourcePermissionCommand extends command<DeleteResourcePermissionCommandInput, DeleteResourcePermissionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteResourcePermission",
  DeleteResourcePermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourcePermissionInput;
      output: DeleteResourcePermissionOutput;
    };
    sdk: {
      input: DeleteResourcePermissionCommandInput;
      output: DeleteResourcePermissionCommandOutput;
    };
  };
}
