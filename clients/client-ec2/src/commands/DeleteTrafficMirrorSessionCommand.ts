// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTrafficMirrorSessionRequest, DeleteTrafficMirrorSessionResult } from "../models/models_3";
import { de_DeleteTrafficMirrorSessionCommand, se_DeleteTrafficMirrorSessionCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTrafficMirrorSessionCommand}.
 */
export interface DeleteTrafficMirrorSessionCommandInput extends DeleteTrafficMirrorSessionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrafficMirrorSessionCommand}.
 */
export interface DeleteTrafficMirrorSessionCommandOutput extends DeleteTrafficMirrorSessionResult, __MetadataBearer {}

/**
 * <p>Deletes the specified Traffic Mirror session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTrafficMirrorSessionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTrafficMirrorSessionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteTrafficMirrorSessionRequest
 *   TrafficMirrorSessionId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTrafficMirrorSessionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTrafficMirrorSessionResult
 * //   TrafficMirrorSessionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTrafficMirrorSessionCommandInput - {@link DeleteTrafficMirrorSessionCommandInput}
 * @returns {@link DeleteTrafficMirrorSessionCommandOutput}
 * @see {@link DeleteTrafficMirrorSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficMirrorSessionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteTrafficMirrorSessionCommand extends $Command
  .classBuilder<
    DeleteTrafficMirrorSessionCommandInput,
    DeleteTrafficMirrorSessionCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DeleteTrafficMirrorSession", {})
  .n("EC2Client", "DeleteTrafficMirrorSessionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTrafficMirrorSessionCommand)
  .de(de_DeleteTrafficMirrorSessionCommand)
  .build() {}
