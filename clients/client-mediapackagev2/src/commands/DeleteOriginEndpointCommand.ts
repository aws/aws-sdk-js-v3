// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { DeleteOriginEndpointRequest, DeleteOriginEndpointResponse } from "../models/models_0";
import { de_DeleteOriginEndpointCommand, se_DeleteOriginEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOriginEndpointCommand}.
 */
export interface DeleteOriginEndpointCommandInput extends DeleteOriginEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOriginEndpointCommand}.
 */
export interface DeleteOriginEndpointCommandOutput extends DeleteOriginEndpointResponse, __MetadataBearer {}

/**
 * <p>Origin endpoints can serve content until they're deleted. Delete the endpoint if it should no longer respond to playback requests. You must delete all endpoints from a channel before you can delete the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, DeleteOriginEndpointCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, DeleteOriginEndpointCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * const client = new MediaPackageV2Client(config);
 * const input = { // DeleteOriginEndpointRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 *   OriginEndpointName: "STRING_VALUE", // required
 * };
 * const command = new DeleteOriginEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOriginEndpointCommandInput - {@link DeleteOriginEndpointCommandInput}
 * @returns {@link DeleteOriginEndpointCommandOutput}
 * @see {@link DeleteOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service.</p>
 *
 * @throws {@link MediaPackageV2ServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageV2 service.</p>
 *
 * @public
 */
export class DeleteOriginEndpointCommand extends $Command
  .classBuilder<
    DeleteOriginEndpointCommandInput,
    DeleteOriginEndpointCommandOutput,
    MediaPackageV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("mediapackagev2", "DeleteOriginEndpoint", {})
  .n("MediaPackageV2Client", "DeleteOriginEndpointCommand")
  .f(void 0, void 0)
  .ser(se_DeleteOriginEndpointCommand)
  .de(de_DeleteOriginEndpointCommand)
  .build() {}
