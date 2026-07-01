// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyIpamRequest, ModifyIpamResult } from "../models/models_6";
import { ModifyIpam$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyIpamCommand}.
 */
export interface ModifyIpamCommandInput extends ModifyIpamRequest {}
/**
 * @public
 *
 * The output of {@link ModifyIpamCommand}.
 */
export interface ModifyIpamCommandOutput extends ModifyIpamResult, __MetadataBearer {}

/**
 * <p>Modify the configurations of an IPAM.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIpamCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIpamCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyIpamRequest
 *   DryRun: true || false,
 *   IpamId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   AddOperatingRegions: [ // AddIpamOperatingRegionSet
 *     { // AddIpamOperatingRegion
 *       RegionName: "STRING_VALUE",
 *     },
 *   ],
 *   RemoveOperatingRegions: [ // RemoveIpamOperatingRegionSet
 *     { // RemoveIpamOperatingRegion
 *       RegionName: "STRING_VALUE",
 *     },
 *   ],
 *   Tier: "free" || "advanced",
 *   EnablePrivateGua: true || false,
 *   MeteredAccount: "ipam-owner" || "resource-owner",
 * };
 * const command = new ModifyIpamCommand(input);
 * const response = await client.send(command);
 * // { // ModifyIpamResult
 * //   Ipam: { // Ipam
 * //     OwnerId: "STRING_VALUE",
 * //     IpamId: "STRING_VALUE",
 * //     IpamArn: "STRING_VALUE",
 * //     IpamRegion: "STRING_VALUE",
 * //     PublicDefaultScopeId: "STRING_VALUE",
 * //     PrivateDefaultScopeId: "STRING_VALUE",
 * //     ScopeCount: Number("int"),
 * //     Description: "STRING_VALUE",
 * //     OperatingRegions: [ // IpamOperatingRegionSet
 * //       { // IpamOperatingRegion
 * //         RegionName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DefaultResourceDiscoveryId: "STRING_VALUE",
 * //     DefaultResourceDiscoveryAssociationId: "STRING_VALUE",
 * //     ResourceDiscoveryAssociationCount: Number("int"),
 * //     StateMessage: "STRING_VALUE",
 * //     Tier: "free" || "advanced",
 * //     EnablePrivateGua: true || false,
 * //     MeteredAccount: "ipam-owner" || "resource-owner",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyIpamCommandInput - {@link ModifyIpamCommandInput}
 * @returns {@link ModifyIpamCommandOutput}
 * @see {@link ModifyIpamCommandInput} for command's `input` shape.
 * @see {@link ModifyIpamCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyIpamCommand extends command<ModifyIpamCommandInput, ModifyIpamCommandOutput>(
  _ep0,
  _mw0,
  "ModifyIpam",
  ModifyIpam$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyIpamRequest;
      output: ModifyIpamResult;
    };
    sdk: {
      input: ModifyIpamCommandInput;
      output: ModifyIpamCommandOutput;
    };
  };
}
