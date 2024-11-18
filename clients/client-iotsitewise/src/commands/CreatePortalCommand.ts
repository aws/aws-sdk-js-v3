// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { CreatePortalRequest, CreatePortalRequestFilterSensitiveLog, CreatePortalResponse } from "../models/models_0";
import { de_CreatePortalCommand, se_CreatePortalCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePortalCommand}.
 */
export interface CreatePortalCommandInput extends CreatePortalRequest {}
/**
 * @public
 *
 * The output of {@link CreatePortalCommand}.
 */
export interface CreatePortalCommandOutput extends CreatePortalResponse, __MetadataBearer {}

/**
 * <p>Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM
 *       to authenticate portal users and manage user permissions.</p>
 *          <note>
 *             <p>Before you can sign in to a new portal, you must add at least one identity to that
 *         portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or removing portal
 *           administrators</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreatePortalCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreatePortalCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CreatePortalRequest
 *   portalName: "STRING_VALUE", // required
 *   portalDescription: "STRING_VALUE",
 *   portalContactEmail: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   portalLogoImageFile: { // ImageFile
 *     data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")     // required
 *     type: "PNG", // required
 *   },
 *   roleArn: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   portalAuthMode: "IAM" || "SSO",
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
 * const command = new CreatePortalCommand(input);
 * const response = await client.send(command);
 * // { // CreatePortalResponse
 * //   portalId: "STRING_VALUE", // required
 * //   portalArn: "STRING_VALUE", // required
 * //   portalStartUrl: "STRING_VALUE", // required
 * //   portalStatus: { // PortalStatus
 * //     state: "CREATING" || "PENDING" || "UPDATING" || "DELETING" || "ACTIVE" || "FAILED", // required
 * //     error: { // MonitorErrorDetails
 * //       code: "INTERNAL_FAILURE" || "VALIDATION_ERROR" || "LIMIT_EXCEEDED",
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * //   ssoApplicationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreatePortalCommandInput - {@link CreatePortalCommandInput}
 * @returns {@link CreatePortalCommandOutput}
 * @see {@link CreatePortalCommandInput} for command's `input` shape.
 * @see {@link CreatePortalCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've reached the limit for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
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
 * @public
 */
export class CreatePortalCommand extends $Command
  .classBuilder<
    CreatePortalCommandInput,
    CreatePortalCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "CreatePortal", {})
  .n("IoTSiteWiseClient", "CreatePortalCommand")
  .f(CreatePortalRequestFilterSensitiveLog, void 0)
  .ser(se_CreatePortalCommand)
  .de(de_CreatePortalCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePortalRequest;
      output: CreatePortalResponse;
    };
    sdk: {
      input: CreatePortalCommandInput;
      output: CreatePortalCommandOutput;
    };
  };
}
