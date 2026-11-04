// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePortalRequest, DescribePortalResponse } from "../models/models_0";
import { DescribePortal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePortalCommand}.
 */
export interface DescribePortalCommandInput extends DescribePortalRequest {}
/**
 * @public
 *
 * The output of {@link DescribePortalCommand}.
 */
export interface DescribePortalCommandOutput extends DescribePortalResponse, __MetadataBearer {}

/**
 * Retrieves information about a portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribePortalCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribePortalCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribePortalRequest
 *   portalId: "STRING_VALUE", // required
 * };
 * const command = new DescribePortalCommand(input);
 * const response = await client.send(command);
 * // { // DescribePortalResponse
 * //   portalId: "STRING_VALUE", // required
 * //   portalArn: "STRING_VALUE", // required
 * //   portalName: "STRING_VALUE", // required
 * //   portalDescription: "STRING_VALUE",
 * //   portalClientId: "STRING_VALUE", // required
 * //   portalStartUrl: "STRING_VALUE", // required
 * //   portalContactEmail: "STRING_VALUE", // required
 * //   portalStatus: { // PortalStatus
 * //     state: "CREATING" || "PENDING" || "UPDATING" || "DELETING" || "ACTIVE" || "FAILED", // required
 * //     error: { // MonitorErrorDetails
 * //       code: "INTERNAL_FAILURE" || "VALIDATION_ERROR" || "LIMIT_EXCEEDED",
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * //   portalCreationDate: new Date("TIMESTAMP"), // required
 * //   portalLastUpdateDate: new Date("TIMESTAMP"), // required
 * //   portalLogoImageLocation: { // ImageLocation
 * //     id: "STRING_VALUE", // required
 * //     url: "STRING_VALUE", // required
 * //   },
 * //   roleArn: "STRING_VALUE",
 * //   portalAuthMode: "IAM" || "SSO",
 * //   notificationSenderEmail: "STRING_VALUE",
 * //   alarms: { // Alarms
 * //     alarmRoleArn: "STRING_VALUE", // required
 * //     notificationLambdaArn: "STRING_VALUE",
 * //   },
 * //   portalType: "SITEWISE_PORTAL_V1" || "SITEWISE_PORTAL_V2",
 * //   portalTypeConfiguration: { // PortalTypeConfiguration
 * //     "<keys>": { // PortalTypeEntry
 * //       portalTools: [ // PortalTools
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePortalCommandInput - {@link DescribePortalCommandInput}
 * @returns {@link DescribePortalCommandOutput}
 * @see {@link DescribePortalCommandInput} for command's `input` shape.
 * @see {@link DescribePortalCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
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
export class DescribePortalCommand extends command<DescribePortalCommandInput, DescribePortalCommandOutput>(
  _ep0,
  _mw0,
  "DescribePortal",
  DescribePortal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePortalRequest;
      output: DescribePortalResponse;
    };
    sdk: {
      input: DescribePortalCommandInput;
      output: DescribePortalCommandOutput;
    };
  };
}
