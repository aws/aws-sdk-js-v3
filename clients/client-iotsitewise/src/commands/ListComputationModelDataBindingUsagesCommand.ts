// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type {
  ListComputationModelDataBindingUsagesRequest,
  ListComputationModelDataBindingUsagesResponse,
} from "../models/models_0";
import { ListComputationModelDataBindingUsages } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListComputationModelDataBindingUsagesCommand}.
 */
export interface ListComputationModelDataBindingUsagesCommandInput
  extends ListComputationModelDataBindingUsagesRequest {}
/**
 * @public
 *
 * The output of {@link ListComputationModelDataBindingUsagesCommand}.
 */
export interface ListComputationModelDataBindingUsagesCommandOutput
  extends ListComputationModelDataBindingUsagesResponse,
    __MetadataBearer {}

/**
 * <p> Lists all data binding usages for computation models. This allows to identify where
 *       specific data bindings are being utilized across the computation models. This track
 *       dependencies between data sources and computation models. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListComputationModelDataBindingUsagesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListComputationModelDataBindingUsagesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListComputationModelDataBindingUsagesRequest
 *   dataBindingValueFilter: { // DataBindingValueFilter
 *     asset: { // AssetBindingValueFilter
 *       assetId: "STRING_VALUE", // required
 *     },
 *     assetModel: { // AssetModelBindingValueFilter
 *       assetModelId: "STRING_VALUE", // required
 *     },
 *     assetProperty: { // AssetPropertyBindingValueFilter
 *       assetId: "STRING_VALUE", // required
 *       propertyId: "STRING_VALUE", // required
 *     },
 *     assetModelProperty: { // AssetModelPropertyBindingValueFilter
 *       assetModelId: "STRING_VALUE", // required
 *       propertyId: "STRING_VALUE", // required
 *     },
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListComputationModelDataBindingUsagesCommand(input);
 * const response = await client.send(command);
 * // { // ListComputationModelDataBindingUsagesResponse
 * //   dataBindingUsageSummaries: [ // ComputationModelDataBindingUsageSummaries // required
 * //     { // ComputationModelDataBindingUsageSummary
 * //       computationModelIds: [ // ComputationModelIdList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       matchedDataBinding: { // MatchedDataBinding
 * //         value: { // DataBindingValue
 * //           assetModelProperty: { // AssetModelPropertyBindingValue
 * //             assetModelId: "STRING_VALUE", // required
 * //             propertyId: "STRING_VALUE", // required
 * //           },
 * //           assetProperty: { // AssetPropertyBindingValue
 * //             assetId: "STRING_VALUE", // required
 * //             propertyId: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListComputationModelDataBindingUsagesCommandInput - {@link ListComputationModelDataBindingUsagesCommandInput}
 * @returns {@link ListComputationModelDataBindingUsagesCommandOutput}
 * @see {@link ListComputationModelDataBindingUsagesCommandInput} for command's `input` shape.
 * @see {@link ListComputationModelDataBindingUsagesCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
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
export class ListComputationModelDataBindingUsagesCommand extends $Command
  .classBuilder<
    ListComputationModelDataBindingUsagesCommandInput,
    ListComputationModelDataBindingUsagesCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "ListComputationModelDataBindingUsages", {})
  .n("IoTSiteWiseClient", "ListComputationModelDataBindingUsagesCommand")
  .sc(ListComputationModelDataBindingUsages)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComputationModelDataBindingUsagesRequest;
      output: ListComputationModelDataBindingUsagesResponse;
    };
    sdk: {
      input: ListComputationModelDataBindingUsagesCommandInput;
      output: ListComputationModelDataBindingUsagesCommandOutput;
    };
  };
}
