// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPrivateConnectivityConfigInput, GetPrivateConnectivityConfigOutput } from "../models/models_0";
import { GetPrivateConnectivityConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPrivateConnectivityConfigCommand}.
 */
export interface GetPrivateConnectivityConfigCommandInput extends GetPrivateConnectivityConfigInput {}
/**
 * @public
 *
 * The output of {@link GetPrivateConnectivityConfigCommand}.
 */
export interface GetPrivateConnectivityConfigCommandOutput extends GetPrivateConnectivityConfigOutput, __MetadataBearer {}

/**
 * <p>Gets the private connectivity configuration for the specified Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetPrivateConnectivityConfigCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetPrivateConnectivityConfigCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // GetPrivateConnectivityConfigInput
 *   OutpostId: "STRING_VALUE", // required
 * };
 * const command = new GetPrivateConnectivityConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetPrivateConnectivityConfigOutput
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
 * // };
 *
 * ```
 *
 * @param GetPrivateConnectivityConfigCommandInput - {@link GetPrivateConnectivityConfigCommandInput}
 * @returns {@link GetPrivateConnectivityConfigCommandOutput}
 * @see {@link GetPrivateConnectivityConfigCommandInput} for command's `input` shape.
 * @see {@link GetPrivateConnectivityConfigCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class GetPrivateConnectivityConfigCommand extends command<GetPrivateConnectivityConfigCommandInput, GetPrivateConnectivityConfigCommandOutput>(
  _ep0,
  _mw0,
  "GetPrivateConnectivityConfig",
  GetPrivateConnectivityConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPrivateConnectivityConfigInput;
      output: GetPrivateConnectivityConfigOutput;
    };
    sdk: {
      input: GetPrivateConnectivityConfigCommandInput;
      output: GetPrivateConnectivityConfigCommandOutput;
    };
  };
}
