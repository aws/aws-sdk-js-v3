// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteTrafficMirrorFilterRequest, DeleteTrafficMirrorFilterResult } from "../models/models_2";
import { DeleteTrafficMirrorFilter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTrafficMirrorFilterCommand}.
 */
export interface DeleteTrafficMirrorFilterCommandInput extends DeleteTrafficMirrorFilterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrafficMirrorFilterCommand}.
 */
export interface DeleteTrafficMirrorFilterCommandOutput extends DeleteTrafficMirrorFilterResult, __MetadataBearer {}

/**
 * <p>Deletes the specified Traffic Mirror filter.</p>
 *          <p>You cannot delete a Traffic Mirror filter that is in use by a Traffic Mirror session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTrafficMirrorFilterCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTrafficMirrorFilterCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteTrafficMirrorFilterRequest
 *   TrafficMirrorFilterId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTrafficMirrorFilterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTrafficMirrorFilterResult
 * //   TrafficMirrorFilterId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTrafficMirrorFilterCommandInput - {@link DeleteTrafficMirrorFilterCommandInput}
 * @returns {@link DeleteTrafficMirrorFilterCommandOutput}
 * @see {@link DeleteTrafficMirrorFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficMirrorFilterCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteTrafficMirrorFilterCommand extends $Command
  .classBuilder<
    DeleteTrafficMirrorFilterCommandInput,
    DeleteTrafficMirrorFilterCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteTrafficMirrorFilter", {})
  .n("EC2Client", "DeleteTrafficMirrorFilterCommand")
  .sc(DeleteTrafficMirrorFilter$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrafficMirrorFilterRequest;
      output: DeleteTrafficMirrorFilterResult;
    };
    sdk: {
      input: DeleteTrafficMirrorFilterCommandInput;
      output: DeleteTrafficMirrorFilterCommandOutput;
    };
  };
}
