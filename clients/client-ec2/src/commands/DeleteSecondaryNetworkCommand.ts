// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSecondaryNetworkRequest, DeleteSecondaryNetworkResult } from "../models/models_2";
import { DeleteSecondaryNetwork$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSecondaryNetworkCommand}.
 */
export interface DeleteSecondaryNetworkCommandInput extends DeleteSecondaryNetworkRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSecondaryNetworkCommand}.
 */
export interface DeleteSecondaryNetworkCommandOutput extends DeleteSecondaryNetworkResult, __MetadataBearer {}

/**
 * <p>Deletes a secondary network. You must delete all secondary subnets in the secondary network before you can delete the secondary network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSecondaryNetworkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSecondaryNetworkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteSecondaryNetworkRequest
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   SecondaryNetworkId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSecondaryNetworkCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSecondaryNetworkResult
 * //   SecondaryNetwork: { // SecondaryNetwork
 * //     SecondaryNetworkId: "STRING_VALUE",
 * //     SecondaryNetworkArn: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     Type: "rdma",
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //     StateReason: "STRING_VALUE",
 * //     Ipv4CidrBlockAssociations: [ // SecondaryNetworkIpv4CidrBlockAssociationList
 * //       { // SecondaryNetworkIpv4CidrBlockAssociation
 * //         AssociationId: "STRING_VALUE",
 * //         CidrBlock: "STRING_VALUE",
 * //         State: "associating" || "associated" || "association-failed" || "disassociating" || "disassociated" || "disassociation-failed",
 * //         StateReason: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteSecondaryNetworkCommandInput - {@link DeleteSecondaryNetworkCommandInput}
 * @returns {@link DeleteSecondaryNetworkCommandOutput}
 * @see {@link DeleteSecondaryNetworkCommandInput} for command's `input` shape.
 * @see {@link DeleteSecondaryNetworkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To delete a secondary network
 * ```javascript
 * // This example deletes a secondary network.
 * const input = {
 *   ClientToken: "550e8400-e29b-41d4-a716-446655440000",
 *   SecondaryNetworkId: "sn-0123456789abcdef0"
 * };
 * const command = new DeleteSecondaryNetworkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ClientToken: "550e8400-e29b-41d4-a716-446655440000",
 *   SecondaryNetwork: {
 *     Ipv4CidrBlockAssociations: [
 *       {
 *         AssociationId: "sn-cidr-assoc-56789901234abcdef0",
 *         CidrBlock: "10.0.0.0/16",
 *         State: "disassociating"
 *       }
 *     ],
 *     OwnerId: "123456789012",
 *     SecondaryNetworkArn: "arn:aws:ec2:us-east-2:123456789012:secondary-network/sn-0123456789abcdef0",
 *     SecondaryNetworkId: "sn-0123456789abcdef0",
 *     State: "delete-in-progress",
 *     Tags: [
 *       {
 *         Key: "Name",
 *         Value: "Prod Secondary Network"
 *       }
 *     ],
 *     Type: "rdma"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteSecondaryNetworkCommand extends command<DeleteSecondaryNetworkCommandInput, DeleteSecondaryNetworkCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSecondaryNetwork",
  DeleteSecondaryNetwork$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSecondaryNetworkRequest;
      output: DeleteSecondaryNetworkResult;
    };
    sdk: {
      input: DeleteSecondaryNetworkCommandInput;
      output: DeleteSecondaryNetworkCommandOutput;
    };
  };
}
