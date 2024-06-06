// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListAssetModelCompositeModelsRequest, ListAssetModelCompositeModelsResponse } from "../models/models_0";
import {
  de_ListAssetModelCompositeModelsCommand,
  se_ListAssetModelCompositeModelsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssetModelCompositeModelsCommand}.
 */
export interface ListAssetModelCompositeModelsCommandInput extends ListAssetModelCompositeModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssetModelCompositeModelsCommand}.
 */
export interface ListAssetModelCompositeModelsCommandOutput
  extends ListAssetModelCompositeModelsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of composite models associated with the asset model</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssetModelCompositeModelsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssetModelCompositeModelsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListAssetModelCompositeModelsRequest
 *   assetModelId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssetModelCompositeModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetModelCompositeModelsResponse
 * //   assetModelCompositeModelSummaries: [ // AssetModelCompositeModelSummaries // required
 * //     { // AssetModelCompositeModelSummary
 * //       id: "STRING_VALUE", // required
 * //       externalId: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       path: [ // AssetModelCompositeModelPath
 * //         { // AssetModelCompositeModelPathSegment
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
 * @param ListAssetModelCompositeModelsCommandInput - {@link ListAssetModelCompositeModelsCommandInput}
 * @returns {@link ListAssetModelCompositeModelsCommandOutput}
 * @see {@link ListAssetModelCompositeModelsCommandInput} for command's `input` shape.
 * @see {@link ListAssetModelCompositeModelsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListAssetModelCompositeModelsCommand extends $Command
  .classBuilder<
    ListAssetModelCompositeModelsCommandInput,
    ListAssetModelCompositeModelsCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "ListAssetModelCompositeModels", {})
  .n("IoTSiteWiseClient", "ListAssetModelCompositeModelsCommand")
  .f(void 0, void 0)
  .ser(se_ListAssetModelCompositeModelsCommand)
  .de(de_ListAssetModelCompositeModelsCommand)
  .build() {}
