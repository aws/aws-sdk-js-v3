// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetIpamRoutingPolicyRegistrationDeltasRequest,
  GetIpamRoutingPolicyRegistrationDeltasResult,
} from "../models/models_6";
import { GetIpamRoutingPolicyRegistrationDeltas$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIpamRoutingPolicyRegistrationDeltasCommand}.
 */
export interface GetIpamRoutingPolicyRegistrationDeltasCommandInput extends GetIpamRoutingPolicyRegistrationDeltasRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamRoutingPolicyRegistrationDeltasCommand}.
 */
export interface GetIpamRoutingPolicyRegistrationDeltasCommandOutput extends GetIpamRoutingPolicyRegistrationDeltasResult, __MetadataBearer {}

/**
 * <p>Retrieves the history of routing policy registration changes for an IPAM internet registry association. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamRoutingPolicyRegistrationDeltasCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamRoutingPolicyRegistrationDeltasCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamRoutingPolicyRegistrationDeltasRequest
 *   DryRun: true || false,
 *   IpamInternetRegistryAssociationId: "STRING_VALUE", // required
 *   DeltaId: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   ChronologicalOrder: "forward" || "reverse",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetIpamRoutingPolicyRegistrationDeltasCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamRoutingPolicyRegistrationDeltasResult
 * //   IpamRoutingPolicyRegistrationDeltas: [ // IpamRoutingPolicyRegistrationDeltaSet
 * //     { // IpamRoutingPolicyRegistrationDelta
 * //       DeltaId: "STRING_VALUE",
 * //       DeltaJson: "STRING_VALUE",
 * //       State: "pending" || "published" || "failed",
 * //       StateMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamRoutingPolicyRegistrationDeltasCommandInput - {@link GetIpamRoutingPolicyRegistrationDeltasCommandInput}
 * @returns {@link GetIpamRoutingPolicyRegistrationDeltasCommandOutput}
 * @see {@link GetIpamRoutingPolicyRegistrationDeltasCommandInput} for command's `input` shape.
 * @see {@link GetIpamRoutingPolicyRegistrationDeltasCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamRoutingPolicyRegistrationDeltasCommand extends command<GetIpamRoutingPolicyRegistrationDeltasCommandInput, GetIpamRoutingPolicyRegistrationDeltasCommandOutput>(
  _ep0,
  _mw0,
  "GetIpamRoutingPolicyRegistrationDeltas",
  GetIpamRoutingPolicyRegistrationDeltas$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamRoutingPolicyRegistrationDeltasRequest;
      output: GetIpamRoutingPolicyRegistrationDeltasResult;
    };
    sdk: {
      input: GetIpamRoutingPolicyRegistrationDeltasCommandInput;
      output: GetIpamRoutingPolicyRegistrationDeltasCommandOutput;
    };
  };
}
