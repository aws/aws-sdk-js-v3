// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient";
import { ExportProjectRequest, ExportProjectResult } from "../models/models_0";
import { de_ExportProjectCommand, se_ExportProjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportProjectCommand}.
 */
export interface ExportProjectCommandInput extends ExportProjectRequest {}
/**
 * @public
 *
 * The output of {@link ExportProjectCommand}.
 */
export interface ExportProjectCommandOutput extends ExportProjectResult, __MetadataBearer {}

/**
 * <p>
 *             Exports project configuration to a snapshot which can be downloaded and shared.
 *             Note that mobile app push credentials are encrypted in exported projects, so they
 *             can only be shared successfully within the same AWS account.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, ExportProjectCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, ExportProjectCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const input = { // ExportProjectRequest
 *   projectId: "STRING_VALUE", // required
 * };
 * const command = new ExportProjectCommand(input);
 * const response = await client.send(command);
 * // { // ExportProjectResult
 * //   downloadUrl: "STRING_VALUE",
 * //   shareUrl: "STRING_VALUE",
 * //   snapshotId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportProjectCommandInput - {@link ExportProjectCommandInput}
 * @returns {@link ExportProjectCommandOutput}
 * @see {@link ExportProjectCommandInput} for command's `input` shape.
 * @see {@link ExportProjectCommandOutput} for command's `response` shape.
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
export class ExportProjectCommand extends $Command
  .classBuilder<
    ExportProjectCommandInput,
    ExportProjectCommandOutput,
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
  .s("AWSMobileService", "ExportProject", {})
  .n("MobileClient", "ExportProjectCommand")
  .f(void 0, void 0)
  .ser(se_ExportProjectCommand)
  .de(de_ExportProjectCommand)
  .build() {}
