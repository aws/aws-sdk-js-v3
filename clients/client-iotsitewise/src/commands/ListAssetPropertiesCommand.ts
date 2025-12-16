// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type { ListAssetPropertiesRequest, ListAssetPropertiesResponse } from "../models/models_0";
import { ListAssetProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssetPropertiesCommand}.
 */
export interface ListAssetPropertiesCommandInput extends ListAssetPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ListAssetPropertiesCommand}.
 */
export interface ListAssetPropertiesCommandOutput extends ListAssetPropertiesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of properties associated with an asset.
 *       If you update properties associated with the model before you finish listing all the properties,
 *         you need to start all over again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssetPropertiesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssetPropertiesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListAssetPropertiesRequest
 *   assetId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filter: "ALL" || "BASE",
 * };
 * const command = new ListAssetPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetPropertiesResponse
 * //   assetPropertySummaries: [ // AssetPropertySummaries // required
 * //     { // AssetPropertySummary
 * //       id: "STRING_VALUE", // required
 * //       externalId: "STRING_VALUE",
 * //       alias: "STRING_VALUE",
 * //       unit: "STRING_VALUE",
 * //       notification: { // PropertyNotification
 * //         topic: "STRING_VALUE", // required
 * //         state: "ENABLED" || "DISABLED", // required
 * //       },
 * //       assetCompositeModelId: "STRING_VALUE",
 * //       path: [ // AssetPropertyPath
 * //         { // AssetPropertyPathSegment
 * //           id: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssetPropertiesCommandInput - {@link ListAssetPropertiesCommandInput}
 * @returns {@link ListAssetPropertiesCommandOutput}
 * @see {@link ListAssetPropertiesCommandInput} for command's `input` shape.
 * @see {@link ListAssetPropertiesCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
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
export class ListAssetPropertiesCommand extends $Command
  .classBuilder<
    ListAssetPropertiesCommandInput,
    ListAssetPropertiesCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "ListAssetProperties", {})
  .n("IoTSiteWiseClient", "ListAssetPropertiesCommand")
  .sc(ListAssetProperties$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetPropertiesRequest;
      output: ListAssetPropertiesResponse;
    };
    sdk: {
      input: ListAssetPropertiesCommandInput;
      output: ListAssetPropertiesCommandOutput;
    };
  };
}
