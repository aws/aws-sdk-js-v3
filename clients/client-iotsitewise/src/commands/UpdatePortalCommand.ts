// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePortalRequest, UpdatePortalResponse } from "../models/models_1";
import { UpdatePortal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Important:** The IoT SiteWise Monitor feature will no longer be open to new customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see [IoT SiteWise Monitor availability change](https://docs.aws.amazon.com/iot-sitewise/latest/appguide/iotsitewise-monitor-availability-change.html).
 *
 * Updates an IoT SiteWise Monitor portal.
 *
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
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a rate limit. For example, you might have exceeded the number of IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so on.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link IoTSiteWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTSiteWise service.
 *
 * @public
 */
export class UpdatePortalCommand extends command<UpdatePortalCommandInput, UpdatePortalCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePortal",
  UpdatePortal$
) {
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
