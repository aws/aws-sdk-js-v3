// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  EnableIpamInternetRegistryAssociationRequest,
  EnableIpamInternetRegistryAssociationResult,
} from "../models/models_6";
import { EnableIpamInternetRegistryAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableIpamInternetRegistryAssociationCommand}.
 */
export interface EnableIpamInternetRegistryAssociationCommandInput extends EnableIpamInternetRegistryAssociationRequest {}
/**
 * @public
 *
 * The output of {@link EnableIpamInternetRegistryAssociationCommand}.
 */
export interface EnableIpamInternetRegistryAssociationCommandOutput extends EnableIpamInternetRegistryAssociationResult, __MetadataBearer {}

/**
 * <p>Enables Resource Public Key Infrastructure (RPKI) on an existing IPAM internet registry association by providing BGP Public Key Infrastructure (BPKI) certificate details. After enabling, you can create Route Origin Authorizations (ROAs) for prefixes registered with the internet registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableIpamInternetRegistryAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableIpamInternetRegistryAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // EnableIpamInternetRegistryAssociationRequest
 *   DryRun: true || false,
 *   IpamInternetRegistryAssociationId: "STRING_VALUE", // required
 *   RpkiVersion: "STRING_VALUE", // required
 *   ServiceUri: "STRING_VALUE", // required
 *   ChildHandle: "STRING_VALUE", // required
 *   ParentHandle: "STRING_VALUE", // required
 *   ParentBpkiTa: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new EnableIpamInternetRegistryAssociationCommand(input);
 * const response = await client.send(command);
 * // { // EnableIpamInternetRegistryAssociationResult
 * //   IpamInternetRegistryAssociation: { // IpamInternetRegistryAssociation
 * //     OwnerId: "STRING_VALUE",
 * //     IpamInternetRegistryAssociationId: "STRING_VALUE",
 * //     IpamInternetRegistryAssociationArn: "STRING_VALUE",
 * //     IpamId: "STRING_VALUE",
 * //     IpamRegion: "STRING_VALUE",
 * //     Rir: "ripe" || "apnic" || "arin" || "lacnic",
 * //     OrganizationHandle: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     State: "pending-enable" || "create-in-progress" || "create-failed" || "enable-in-progress" || "enable-complete" || "enable-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //     StateMessage: "STRING_VALUE",
 * //     ChildRequestXml: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param EnableIpamInternetRegistryAssociationCommandInput - {@link EnableIpamInternetRegistryAssociationCommandInput}
 * @returns {@link EnableIpamInternetRegistryAssociationCommandOutput}
 * @see {@link EnableIpamInternetRegistryAssociationCommandInput} for command's `input` shape.
 * @see {@link EnableIpamInternetRegistryAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class EnableIpamInternetRegistryAssociationCommand extends command<EnableIpamInternetRegistryAssociationCommandInput, EnableIpamInternetRegistryAssociationCommandOutput>(
  _ep0,
  _mw0,
  "EnableIpamInternetRegistryAssociation",
  EnableIpamInternetRegistryAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableIpamInternetRegistryAssociationRequest;
      output: EnableIpamInternetRegistryAssociationResult;
    };
    sdk: {
      input: EnableIpamInternetRegistryAssociationCommandInput;
      output: EnableIpamInternetRegistryAssociationCommandOutput;
    };
  };
}
