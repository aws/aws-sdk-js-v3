// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteIpamInternetRegistryAssociationRequest,
  DeleteIpamInternetRegistryAssociationResult,
} from "../models/models_2";
import { DeleteIpamInternetRegistryAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIpamInternetRegistryAssociationCommand}.
 */
export interface DeleteIpamInternetRegistryAssociationCommandInput extends DeleteIpamInternetRegistryAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIpamInternetRegistryAssociationCommand}.
 */
export interface DeleteIpamInternetRegistryAssociationCommandOutput extends DeleteIpamInternetRegistryAssociationResult, __MetadataBearer {}

/**
 * <p>Deletes an IPAM internet registry association. Before deleting, you must remove all routing policy registrations associated with the internet registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteIpamInternetRegistryAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteIpamInternetRegistryAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteIpamInternetRegistryAssociationRequest
 *   DryRun: true || false,
 *   IpamInternetRegistryAssociationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteIpamInternetRegistryAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIpamInternetRegistryAssociationResult
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
 * @param DeleteIpamInternetRegistryAssociationCommandInput - {@link DeleteIpamInternetRegistryAssociationCommandInput}
 * @returns {@link DeleteIpamInternetRegistryAssociationCommandOutput}
 * @see {@link DeleteIpamInternetRegistryAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteIpamInternetRegistryAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteIpamInternetRegistryAssociationCommand extends command<DeleteIpamInternetRegistryAssociationCommandInput, DeleteIpamInternetRegistryAssociationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIpamInternetRegistryAssociation",
  DeleteIpamInternetRegistryAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIpamInternetRegistryAssociationRequest;
      output: DeleteIpamInternetRegistryAssociationResult;
    };
    sdk: {
      input: DeleteIpamInternetRegistryAssociationCommandInput;
      output: DeleteIpamInternetRegistryAssociationCommandOutput;
    };
  };
}
