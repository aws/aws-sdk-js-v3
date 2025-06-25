// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DetachAndDeleteS3AccessPointRequest, DetachAndDeleteS3AccessPointResponse } from "../models/models_0";
import {
  de_DetachAndDeleteS3AccessPointCommand,
  se_DetachAndDeleteS3AccessPointCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachAndDeleteS3AccessPointCommand}.
 */
export interface DetachAndDeleteS3AccessPointCommandInput extends DetachAndDeleteS3AccessPointRequest {}
/**
 * @public
 *
 * The output of {@link DetachAndDeleteS3AccessPointCommand}.
 */
export interface DetachAndDeleteS3AccessPointCommandOutput
  extends DetachAndDeleteS3AccessPointResponse,
    __MetadataBearer {}

/**
 * <p>Detaches an S3 access point from an Amazon FSx volume and deletes the S3 access point.</p>
 *          <p>The requester requires the following permission to perform this action:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>fsx:DetachAndDeleteS3AccessPoint</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>s3:DeleteAccessPoint</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DetachAndDeleteS3AccessPointCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DetachAndDeleteS3AccessPointCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // DetachAndDeleteS3AccessPointRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DetachAndDeleteS3AccessPointCommand(input);
 * const response = await client.send(command);
 * // { // DetachAndDeleteS3AccessPointResponse
 * //   Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "UPDATING" || "FAILED",
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DetachAndDeleteS3AccessPointCommandInput - {@link DetachAndDeleteS3AccessPointCommandInput}
 * @returns {@link DetachAndDeleteS3AccessPointCommandOutput}
 * @see {@link DetachAndDeleteS3AccessPointCommandInput} for command's `input` shape.
 * @see {@link DetachAndDeleteS3AccessPointCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link S3AccessPointAttachmentNotFound} (client fault)
 *  <p>The access point specified was not found.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class DetachAndDeleteS3AccessPointCommand extends $Command
  .classBuilder<
    DetachAndDeleteS3AccessPointCommandInput,
    DetachAndDeleteS3AccessPointCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSimbaAPIService_v20180301", "DetachAndDeleteS3AccessPoint", {})
  .n("FSxClient", "DetachAndDeleteS3AccessPointCommand")
  .f(void 0, void 0)
  .ser(se_DetachAndDeleteS3AccessPointCommand)
  .de(de_DetachAndDeleteS3AccessPointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachAndDeleteS3AccessPointRequest;
      output: DetachAndDeleteS3AccessPointResponse;
    };
    sdk: {
      input: DetachAndDeleteS3AccessPointCommandInput;
      output: DetachAndDeleteS3AccessPointCommandOutput;
    };
  };
}
