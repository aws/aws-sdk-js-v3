// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeAssetRequest, DescribeAssetResponse } from "../models/models_0";
import { DescribeAsset } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssetCommand}.
 */
export interface DescribeAssetCommandInput extends DescribeAssetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssetCommand}.
 */
export interface DescribeAssetCommandOutput extends DescribeAssetResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an asset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeAssetCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeAssetCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeAssetRequest
 *   assetId: "STRING_VALUE", // required
 *   excludeProperties: true || false,
 * };
 * const command = new DescribeAssetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssetResponse
 * //   assetId: "STRING_VALUE", // required
 * //   assetExternalId: "STRING_VALUE",
 * //   assetArn: "STRING_VALUE", // required
 * //   assetName: "STRING_VALUE", // required
 * //   assetModelId: "STRING_VALUE", // required
 * //   assetProperties: [ // AssetProperties // required
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
 * //   assetHierarchies: [ // AssetHierarchies // required
 * //     { // AssetHierarchy
 * //       id: "STRING_VALUE",
 * //       externalId: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   assetCompositeModels: [ // AssetCompositeModels
 * //     { // AssetCompositeModel
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       type: "STRING_VALUE", // required
 * //       properties: [ // required
 * //         {
 * //           id: "STRING_VALUE", // required
 * //           externalId: "STRING_VALUE",
 * //           name: "STRING_VALUE", // required
 * //           alias: "STRING_VALUE",
 * //           notification: {
 * //             topic: "STRING_VALUE", // required
 * //             state: "ENABLED" || "DISABLED", // required
 * //           },
 * //           dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 * //           dataTypeSpec: "STRING_VALUE",
 * //           unit: "STRING_VALUE",
 * //           path: [
 * //             {
 * //               id: "STRING_VALUE",
 * //               name: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       id: "STRING_VALUE",
 * //       externalId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   assetCreationDate: new Date("TIMESTAMP"), // required
 * //   assetLastUpdateDate: new Date("TIMESTAMP"), // required
 * //   assetStatus: { // AssetStatus
 * //     state: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED", // required
 * //     error: { // ErrorDetails
 * //       code: "VALIDATION_ERROR" || "INTERNAL_FAILURE", // required
 * //       message: "STRING_VALUE", // required
 * //       details: [ // DetailedErrors
 * //         { // DetailedError
 * //           code: "INCOMPATIBLE_COMPUTE_LOCATION" || "INCOMPATIBLE_FORWARDING_CONFIGURATION", // required
 * //           message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   assetDescription: "STRING_VALUE",
 * //   assetCompositeModelSummaries: [ // AssetCompositeModelSummaries
 * //     { // AssetCompositeModelSummary
 * //       id: "STRING_VALUE", // required
 * //       externalId: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       path: [ // AssetCompositeModelPath // required
 * //         { // AssetCompositeModelPathSegment
 * //           id: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAssetCommandInput - {@link DescribeAssetCommandInput}
 * @returns {@link DescribeAssetCommandOutput}
 * @see {@link DescribeAssetCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetCommandOutput} for command's `response` shape.
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
export class DescribeAssetCommand extends $Command
  .classBuilder<
    DescribeAssetCommandInput,
    DescribeAssetCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "DescribeAsset", {})
  .n("IoTSiteWiseClient", "DescribeAssetCommand")
  .sc(DescribeAsset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAssetRequest;
      output: DescribeAssetResponse;
    };
    sdk: {
      input: DescribeAssetCommandInput;
      output: DescribeAssetCommandOutput;
    };
  };
}
