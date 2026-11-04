// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetConnectionRequest, GetConnectionResponse } from "../models/models_0";
import { GetConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetConnectionCommand}.
 */
export interface GetConnectionCommandInput extends GetConnectionRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectionCommand}.
 */
export interface GetConnectionCommandOutput extends GetConnectionResponse, __MetadataBearer {}

/**
 * > **Note:** Amazon Web Services uses this action to install Outpost servers.
 *
 * Gets information about the specified connection.
 *
 * Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see [Amazon Web Services managed policies for Amazon Web Services Outposts](https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html) and [Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail](https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html) in the *Amazon Web Services Outposts User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetConnectionCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetConnectionCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // GetConnectionRequest
 *   ConnectionId: "STRING_VALUE", // required
 * };
 * const command = new GetConnectionCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectionResponse
 * //   ConnectionId: "STRING_VALUE",
 * //   ConnectionDetails: { // ConnectionDetails
 * //     ClientPublicKey: "STRING_VALUE",
 * //     ServerPublicKey: "STRING_VALUE",
 * //     ServerEndpoint: "STRING_VALUE",
 * //     ClientTunnelAddress: "STRING_VALUE",
 * //     ServerTunnelAddress: "STRING_VALUE",
 * //     AllowedIps: [ // CIDRList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConnectionCommandInput - {@link GetConnectionCommandInput}
 * @returns {@link GetConnectionCommandOutput}
 * @see {@link GetConnectionCommandInput} for command's `input` shape.
 * @see {@link GetConnectionCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have permission to perform this operation.
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
export class GetConnectionCommand extends command<GetConnectionCommandInput, GetConnectionCommandOutput>(
  _ep0,
  _mw0,
  "GetConnection",
  GetConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectionRequest;
      output: GetConnectionResponse;
    };
    sdk: {
      input: GetConnectionCommandInput;
      output: GetConnectionCommandOutput;
    };
  };
}
