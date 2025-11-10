// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeAssetCompositeModelRequest, DescribeAssetCompositeModelResponse } from "../models/models_0";
import { DescribeAssetCompositeModel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssetCompositeModelCommand}.
 */
export interface DescribeAssetCompositeModelCommandInput extends DescribeAssetCompositeModelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssetCompositeModelCommand}.
 */
export interface DescribeAssetCompositeModelCommandOutput
  extends DescribeAssetCompositeModelResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about an asset composite model (also known as an asset component).
 *       An <code>AssetCompositeModel</code> is an instance of an
 *       <code>AssetModelCompositeModel</code>. If you want to see information about the model this is
 *       based on, call <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModelCompositeModel.html">DescribeAssetModelCompositeModel</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeAssetCompositeModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeAssetCompositeModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeAssetCompositeModelRequest
 *   assetId: "STRING_VALUE", // required
 *   assetCompositeModelId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAssetCompositeModelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssetCompositeModelResponse
 * //   assetId: "STRING_VALUE", // required
 * //   assetCompositeModelId: "STRING_VALUE", // required
 * //   assetCompositeModelExternalId: "STRING_VALUE",
 * //   assetCompositeModelPath: [ // AssetCompositeModelPath // required
 * //     { // AssetCompositeModelPathSegment
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   assetCompositeModelName: "STRING_VALUE", // required
 * //   assetCompositeModelDescription: "STRING_VALUE", // required
 * //   assetCompositeModelType: "STRING_VALUE", // required
 * //   assetCompositeModelProperties: [ // AssetProperties // required
 * //     { // AssetProperty
 * //       id: "STRING_VALUE", // required
 * //       externalId: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       alias: "STRING_VALUE",
 * //       notification: { // PropertyNotification
 * //         topic: "STRING_VALUE", // required
 * //         state: "ENABLED" || "DISABLED", // required
 * //       },
 * //       dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 * //       dataTypeSpec: "STRING_VALUE",
 * //       unit: "STRING_VALUE",
 * //       path: [ // AssetPropertyPath
 * //         { // AssetPropertyPathSegment
 * //           id: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   assetCompositeModelSummaries: [ // AssetCompositeModelSummaries // required
 * //     { // AssetCompositeModelSummary
 * //       id: "STRING_VALUE", // required
 * //       externalId: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       path: [ // required
 * //         {
 * //           id: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   actionDefinitions: [ // ActionDefinitions
 * //     { // ActionDefinition
 * //       actionDefinitionId: "STRING_VALUE", // required
 * //       actionName: "STRING_VALUE", // required
 * //       actionType: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAssetCompositeModelCommandInput - {@link DescribeAssetCompositeModelCommandInput}
 * @returns {@link DescribeAssetCompositeModelCommandOutput}
 * @see {@link DescribeAssetCompositeModelCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetCompositeModelCommandOutput} for command's `response` shape.
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
export class DescribeAssetCompositeModelCommand extends $Command
  .classBuilder<
    DescribeAssetCompositeModelCommandInput,
    DescribeAssetCompositeModelCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "DescribeAssetCompositeModel", {})
  .n("IoTSiteWiseClient", "DescribeAssetCompositeModelCommand")
  .sc(DescribeAssetCompositeModel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAssetCompositeModelRequest;
      output: DescribeAssetCompositeModelResponse;
    };
    sdk: {
      input: DescribeAssetCompositeModelCommandInput;
      output: DescribeAssetCompositeModelCommandOutput;
    };
  };
}
