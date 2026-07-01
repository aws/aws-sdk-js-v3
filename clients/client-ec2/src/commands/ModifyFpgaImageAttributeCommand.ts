// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyFpgaImageAttributeRequest, ModifyFpgaImageAttributeResult } from "../models/models_6";
import { ModifyFpgaImageAttribute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyFpgaImageAttributeCommand}.
 */
export interface ModifyFpgaImageAttributeCommandInput extends ModifyFpgaImageAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyFpgaImageAttributeCommand}.
 */
export interface ModifyFpgaImageAttributeCommandOutput extends ModifyFpgaImageAttributeResult, __MetadataBearer {}

/**
 * <p>Modifies the specified attribute of the specified Amazon FPGA Image (AFI).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyFpgaImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyFpgaImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyFpgaImageAttributeRequest
 *   DryRun: true || false,
 *   FpgaImageId: "STRING_VALUE", // required
 *   Attribute: "description" || "name" || "loadPermission" || "productCodes",
 *   OperationType: "add" || "remove",
 *   UserIds: [ // UserIdStringList
 *     "STRING_VALUE",
 *   ],
 *   UserGroups: [ // UserGroupStringList
 *     "STRING_VALUE",
 *   ],
 *   ProductCodes: [ // ProductCodeStringList
 *     "STRING_VALUE",
 *   ],
 *   LoadPermission: { // LoadPermissionModifications
 *     Add: [ // LoadPermissionListRequest
 *       { // LoadPermissionRequest
 *         Group: "all",
 *         UserId: "STRING_VALUE",
 *       },
 *     ],
 *     Remove: [
 *       {
 *         Group: "all",
 *         UserId: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 * };
 * const command = new ModifyFpgaImageAttributeCommand(input);
 * const response = await client.send(command);
 * // { // ModifyFpgaImageAttributeResult
 * //   FpgaImageAttribute: { // FpgaImageAttribute
 * //     FpgaImageId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     LoadPermissions: [ // LoadPermissionList
 * //       { // LoadPermission
 * //         UserId: "STRING_VALUE",
 * //         Group: "all",
 * //       },
 * //     ],
 * //     ProductCodes: [ // ProductCodeList
 * //       { // ProductCode
 * //         ProductCodeId: "STRING_VALUE",
 * //         ProductCodeType: "devpay" || "marketplace",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyFpgaImageAttributeCommandInput - {@link ModifyFpgaImageAttributeCommandInput}
 * @returns {@link ModifyFpgaImageAttributeCommandOutput}
 * @see {@link ModifyFpgaImageAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyFpgaImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyFpgaImageAttributeCommand extends command<ModifyFpgaImageAttributeCommandInput, ModifyFpgaImageAttributeCommandOutput>(
  _ep0,
  _mw0,
  "ModifyFpgaImageAttribute",
  ModifyFpgaImageAttribute$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyFpgaImageAttributeRequest;
      output: ModifyFpgaImageAttributeResult;
    };
    sdk: {
      input: ModifyFpgaImageAttributeCommandInput;
      output: ModifyFpgaImageAttributeCommandOutput;
    };
  };
}
