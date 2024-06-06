// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient";
import { ExportBundleRequest, ExportBundleResult } from "../models/models_0";
import { de_ExportBundleCommand, se_ExportBundleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportBundleCommand}.
 */
export interface ExportBundleCommandInput extends ExportBundleRequest {}
/**
 * @public
 *
 * The output of {@link ExportBundleCommand}.
 */
export interface ExportBundleCommandOutput extends ExportBundleResult, __MetadataBearer {}

/**
 * <p>
 *             Generates customized software development kit (SDK) and or tool packages
 *             used to integrate mobile web or mobile app clients with backend AWS resources.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, ExportBundleCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, ExportBundleCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const input = { // ExportBundleRequest
 *   bundleId: "STRING_VALUE", // required
 *   projectId: "STRING_VALUE",
 *   platform: "OSX" || "WINDOWS" || "LINUX" || "OBJC" || "SWIFT" || "ANDROID" || "JAVASCRIPT",
 * };
 * const command = new ExportBundleCommand(input);
 * const response = await client.send(command);
 * // { // ExportBundleResult
 * //   downloadUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportBundleCommandInput - {@link ExportBundleCommandInput}
 * @returns {@link ExportBundleCommandOutput}
 * @see {@link ExportBundleCommandInput} for command's `input` shape.
 * @see {@link ExportBundleCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for MobileClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>
 *             The request cannot be processed because some parameter is not valid or the project
 *             state prevents the operation from being performed.
 *         </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>
 *             The service has encountered an unexpected error condition which prevents it from
 *             servicing the request.
 *         </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>
 *             No entity can be found with the specified identifier.
 *         </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>
 *             The service is temporarily unavailable. The request should be retried after some
 *             time delay.
 *         </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>
 *             Too many requests have been received for this AWS account in too short a time. The
 *             request should be retried after some time delay.
 *         </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>
 *             Credentials of the caller are insufficient to authorize the request.
 *         </p>
 *
 * @throws {@link MobileServiceException}
 * <p>Base exception class for all service exceptions from Mobile service.</p>
 *
 * @public
 */
export class ExportBundleCommand extends $Command
  .classBuilder<
    ExportBundleCommandInput,
    ExportBundleCommandOutput,
    MobileClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MobileClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMobileService", "ExportBundle", {})
  .n("MobileClient", "ExportBundleCommand")
  .f(void 0, void 0)
  .ser(se_ExportBundleCommand)
  .de(de_ExportBundleCommand)
  .build() {}
