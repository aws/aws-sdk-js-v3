// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type { ListAssetModelCompositeModelsRequest, ListAssetModelCompositeModelsResponse } from "../models/models_0";
import { ListAssetModelCompositeModels$ } from "../schemas/schemas_0";

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
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListAssetModelCompositeModelsRequest
 *   assetModelId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   assetModelVersion: "STRING_VALUE",
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "ListAssetModelCompositeModels", {})
  .n("IoTSiteWiseClient", "ListAssetModelCompositeModelsCommand")
  .sc(ListAssetModelCompositeModels$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetModelCompositeModelsRequest;
      output: ListAssetModelCompositeModelsResponse;
    };
    sdk: {
      input: ListAssetModelCompositeModelsCommandInput;
      output: ListAssetModelCompositeModelsCommandOutput;
    };
  };
}
