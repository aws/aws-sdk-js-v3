// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type { UpdatePortalRequest, UpdatePortalResponse } from "../models/models_1";
import { UpdatePortal } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePortalCommand}.
 */
export interface UpdatePortalCommandInput extends UpdatePortalRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePortalCommand}.
 */
export interface UpdatePortalCommandOutput extends UpdatePortalResponse, __MetadataBearer {}

/**
 * <p>Updates an IoT SiteWise Monitor portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdatePortalCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdatePortalCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // UpdatePortalRequest
 *   portalId: "STRING_VALUE", // required
 *   portalName: "STRING_VALUE", // required
 *   portalDescription: "STRING_VALUE",
 *   portalContactEmail: "STRING_VALUE", // required
 *   portalLogoImage: { // Image
 *     id: "STRING_VALUE",
 *     file: { // ImageFile
 *       data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *       type: "PNG", // required
 *     },
 *   },
 *   roleArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   notificationSenderEmail: "STRING_VALUE",
 *   alarms: { // Alarms
 *     alarmRoleArn: "STRING_VALUE", // required
 *     notificationLambdaArn: "STRING_VALUE",
 *   },
 *   portalType: "SITEWISE_PORTAL_V1" || "SITEWISE_PORTAL_V2",
 *   portalTypeConfiguration: { // PortalTypeConfiguration
 *     "<keys>": { // PortalTypeEntry
 *       portalTools: [ // PortalTools
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdatePortalCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePortalResponse
 * //   portalStatus: { // PortalStatus
 * //     state: "CREATING" || "PENDING" || "UPDATING" || "DELETING" || "ACTIVE" || "FAILED", // required
 * //     error: { // MonitorErrorDetails
 * //       code: "INTERNAL_FAILURE" || "VALIDATION_ERROR" || "LIMIT_EXCEEDED",
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePortalCommandInput - {@link UpdatePortalCommandInput}
 * @returns {@link UpdatePortalCommandOutput}
 * @see {@link UpdatePortalCommandInput} for command's `input` shape.
 * @see {@link UpdatePortalCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class UpdatePortalCommand extends $Command
  .classBuilder<
    UpdatePortalCommandInput,
    UpdatePortalCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "UpdatePortal", {})
  .n("IoTSiteWiseClient", "UpdatePortalCommand")
  .sc(UpdatePortal)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePortalRequest;
      output: UpdatePortalResponse;
    };
    sdk: {
      input: UpdatePortalCommandInput;
      output: UpdatePortalCommandOutput;
    };
  };
}
