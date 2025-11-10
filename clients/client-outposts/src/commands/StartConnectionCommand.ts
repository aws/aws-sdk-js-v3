// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartConnectionRequest, StartConnectionResponse } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { StartConnection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartConnectionCommand}.
 */
export interface StartConnectionCommandInput extends StartConnectionRequest {}
/**
 * @public
 *
 * The output of {@link StartConnectionCommand}.
 */
export interface StartConnectionCommandOutput extends StartConnectionResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>
 *       Amazon Web Services uses this action to install Outpost servers.</p>
 *          </note>
 *          <p> Starts the connection required for Outpost server installation. </p>
 *          <p>
 *       Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For
 *       more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html">
 *       Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html">
 *       Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, StartConnectionCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, StartConnectionCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // StartConnectionRequest
 *   DeviceSerialNumber: "STRING_VALUE",
 *   AssetId: "STRING_VALUE", // required
 *   ClientPublicKey: "STRING_VALUE", // required
 *   NetworkInterfaceDeviceIndex: Number("int"), // required
 * };
 * const command = new StartConnectionCommand(input);
 * const response = await client.send(command);
 * // { // StartConnectionResponse
 * //   ConnectionId: "STRING_VALUE",
 * //   UnderlayIpAddress: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartConnectionCommandInput - {@link StartConnectionCommandInput}
 * @returns {@link StartConnectionCommandOutput}
 * @see {@link StartConnectionCommandInput} for command's `input` shape.
 * @see {@link StartConnectionCommandOutput} for command's `response` shape.
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
export class StartConnectionCommand extends $Command
  .classBuilder<
    StartConnectionCommandInput,
    StartConnectionCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "StartConnection", {})
  .n("OutpostsClient", "StartConnectionCommand")
  .sc(StartConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartConnectionRequest;
      output: StartConnectionResponse;
    };
    sdk: {
      input: StartConnectionCommandInput;
      output: StartConnectionCommandOutput;
    };
  };
}
