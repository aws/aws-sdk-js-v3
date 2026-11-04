// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePrivateConnectivityConfigInput, CreatePrivateConnectivityConfigOutput } from "../models/models_0";
import { CreatePrivateConnectivityConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePrivateConnectivityConfigCommand}.
 */
export interface CreatePrivateConnectivityConfigCommandInput extends CreatePrivateConnectivityConfigInput {}
/**
 * @public
 *
 * The output of {@link CreatePrivateConnectivityConfigCommand}.
 */
export interface CreatePrivateConnectivityConfigCommandOutput extends CreatePrivateConnectivityConfigOutput, __MetadataBearer {}

/**
 * Creates the private connectivity configuration for the specified Outpost. Private connectivity establishes a service link VPN connection between the Outpost and its home Amazon Web Services Region using a VPC and subnet that you specify, which allows the service link traffic to flow through your VPC and minimizes public internet exposure.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, CreatePrivateConnectivityConfigCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, CreatePrivateConnectivityConfigCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // CreatePrivateConnectivityConfigInput
 *   OutpostId: "STRING_VALUE", // required
 *   VpcInformationList: [ // VpcInformationList // required
 *     { // VpcInformation
 *       VpcId: "STRING_VALUE",
 *       SubnetIds: [ // SubnetIds
 *         "STRING_VALUE",
 *       ],
 *       VpcEndpointId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreatePrivateConnectivityConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreatePrivateConnectivityConfigOutput
 * //   PrivateConnectivityConfig: { // PrivateConnectivityConfig
 * //     RoleArn: "STRING_VALUE",
 * //     PrivateConnectivityStatus: "ENABLED" || "DISABLED",
 * //     VpcInformationList: [ // VpcInformationList
 * //       { // VpcInformation
 * //         VpcId: "STRING_VALUE",
 * //         SubnetIds: [ // SubnetIds
 * //           "STRING_VALUE",
 * //         ],
 * //         VpcEndpointId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ProvisioningRoleArn: "STRING_VALUE",
 * //   },
 * //   OutpostId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePrivateConnectivityConfigCommandInput - {@link CreatePrivateConnectivityConfigCommandInput}
 * @returns {@link CreatePrivateConnectivityConfigCommandOutput}
 * @see {@link CreatePrivateConnectivityConfigCommandInput} for command's `input` shape.
 * @see {@link CreatePrivateConnectivityConfigCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have permission to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting this resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified request is not valid.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A parameter is not valid.
 *
 * @throws {@link OutpostsServiceException}
 *
 * Base exception class for all service exceptions from Outposts service.
 *
 * @public
 */
export class CreatePrivateConnectivityConfigCommand extends command<CreatePrivateConnectivityConfigCommandInput, CreatePrivateConnectivityConfigCommandOutput>(
  _ep0,
  _mw0,
  "CreatePrivateConnectivityConfig",
  CreatePrivateConnectivityConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePrivateConnectivityConfigInput;
      output: CreatePrivateConnectivityConfigOutput;
    };
    sdk: {
      input: CreatePrivateConnectivityConfigCommandInput;
      output: CreatePrivateConnectivityConfigCommandOutput;
    };
  };
}
