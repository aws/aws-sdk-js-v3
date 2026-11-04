// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPortalsRequest, ListPortalsResponse } from "../models/models_1";
import { ListPortals$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPortalsCommand}.
 */
export interface ListPortalsCommandInput extends ListPortalsRequest {}
/**
 * @public
 *
 * The output of {@link ListPortalsCommand}.
 */
export interface ListPortalsCommandOutput extends ListPortalsResponse, __MetadataBearer {}

/**
 * Retrieves a paginated list of IoT SiteWise Monitor portals.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListPortalsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListPortalsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListPortalsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPortalsCommand(input);
 * const response = await client.send(command);
 * // { // ListPortalsResponse
 * //   portalSummaries: [ // PortalSummaries
 * //     { // PortalSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       startUrl: "STRING_VALUE", // required
 * //       creationDate: new Date("TIMESTAMP"),
 * //       lastUpdateDate: new Date("TIMESTAMP"),
 * //       roleArn: "STRING_VALUE",
 * //       status: { // PortalStatus
 * //         state: "CREATING" || "PENDING" || "UPDATING" || "DELETING" || "ACTIVE" || "FAILED", // required
 * //         error: { // MonitorErrorDetails
 * //           code: "INTERNAL_FAILURE" || "VALIDATION_ERROR" || "LIMIT_EXCEEDED",
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //       portalType: "SITEWISE_PORTAL_V1" || "SITEWISE_PORTAL_V2",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPortalsCommandInput - {@link ListPortalsCommandInput}
 * @returns {@link ListPortalsCommandOutput}
 * @see {@link ListPortalsCommandInput} for command's `input` shape.
 * @see {@link ListPortalsCommandOutput} for command's `response` shape.
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
export class ListPortalsCommand extends command<ListPortalsCommandInput, ListPortalsCommandOutput>(
  _ep0,
  _mw0,
  "ListPortals",
  ListPortals$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPortalsRequest;
      output: ListPortalsResponse;
    };
    sdk: {
      input: ListPortalsCommandInput;
      output: ListPortalsCommandOutput;
    };
  };
}
