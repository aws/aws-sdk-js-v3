// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { StartViewerSessionRevocationRequest, StartViewerSessionRevocationResponse } from "../models/models_0";
import {
  de_StartViewerSessionRevocationCommand,
  se_StartViewerSessionRevocationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartViewerSessionRevocationCommand}.
 */
export interface StartViewerSessionRevocationCommandInput extends StartViewerSessionRevocationRequest {}
/**
 * @public
 *
 * The output of {@link StartViewerSessionRevocationCommand}.
 */
export interface StartViewerSessionRevocationCommandOutput
  extends StartViewerSessionRevocationResponse,
    __MetadataBearer {}

/**
 * <p>Starts the process of revoking the viewer session associated with a specified channel ARN
 *       and viewer ID. Optionally, you can provide a version to revoke viewer sessions less than and
 *       including that version. For instructions on associating a viewer ID with a viewer session, see
 *         <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up
 *         Private Channels</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, StartViewerSessionRevocationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, StartViewerSessionRevocationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const input = { // StartViewerSessionRevocationRequest
 *   channelArn: "STRING_VALUE", // required
 *   viewerId: "STRING_VALUE", // required
 *   viewerSessionVersionsLessThanOrEqualTo: Number("int"),
 * };
 * const command = new StartViewerSessionRevocationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartViewerSessionRevocationCommandInput - {@link StartViewerSessionRevocationCommandInput}
 * @returns {@link StartViewerSessionRevocationCommandOutput}
 * @see {@link StartViewerSessionRevocationCommandInput} for command's `input` shape.
 * @see {@link StartViewerSessionRevocationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class StartViewerSessionRevocationCommand extends $Command
  .classBuilder<
    StartViewerSessionRevocationCommandInput,
    StartViewerSessionRevocationCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoService", "StartViewerSessionRevocation", {})
  .n("IvsClient", "StartViewerSessionRevocationCommand")
  .f(void 0, void 0)
  .ser(se_StartViewerSessionRevocationCommand)
  .de(de_StartViewerSessionRevocationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartViewerSessionRevocationRequest;
      output: {};
    };
    sdk: {
      input: StartViewerSessionRevocationCommandInput;
      output: StartViewerSessionRevocationCommandOutput;
    };
  };
}
