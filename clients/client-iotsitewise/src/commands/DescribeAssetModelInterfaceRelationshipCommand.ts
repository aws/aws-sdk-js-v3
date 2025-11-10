// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import {
  DescribeAssetModelInterfaceRelationshipRequest,
  DescribeAssetModelInterfaceRelationshipResponse,
} from "../models/models_0";
import { DescribeAssetModelInterfaceRelationship } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssetModelInterfaceRelationshipCommand}.
 */
export interface DescribeAssetModelInterfaceRelationshipCommandInput
  extends DescribeAssetModelInterfaceRelationshipRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssetModelInterfaceRelationshipCommand}.
 */
export interface DescribeAssetModelInterfaceRelationshipCommandOutput
  extends DescribeAssetModelInterfaceRelationshipResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about an interface relationship between an asset model and an
 *       interface asset model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeAssetModelInterfaceRelationshipCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeAssetModelInterfaceRelationshipCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeAssetModelInterfaceRelationshipRequest
 *   assetModelId: "STRING_VALUE", // required
 *   interfaceAssetModelId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAssetModelInterfaceRelationshipCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssetModelInterfaceRelationshipResponse
 * //   assetModelId: "STRING_VALUE", // required
 * //   interfaceAssetModelId: "STRING_VALUE", // required
 * //   propertyMappings: [ // PropertyMappings // required
 * //     { // PropertyMapping
 * //       assetModelPropertyId: "STRING_VALUE", // required
 * //       interfaceAssetModelPropertyId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   hierarchyMappings: [ // HierarchyMappings // required
 * //     { // HierarchyMapping
 * //       assetModelHierarchyId: "STRING_VALUE", // required
 * //       interfaceAssetModelHierarchyId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAssetModelInterfaceRelationshipCommandInput - {@link DescribeAssetModelInterfaceRelationshipCommandInput}
 * @returns {@link DescribeAssetModelInterfaceRelationshipCommandOutput}
 * @see {@link DescribeAssetModelInterfaceRelationshipCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetModelInterfaceRelationshipCommandOutput} for command's `response` shape.
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
export class DescribeAssetModelInterfaceRelationshipCommand extends $Command
  .classBuilder<
    DescribeAssetModelInterfaceRelationshipCommandInput,
    DescribeAssetModelInterfaceRelationshipCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "DescribeAssetModelInterfaceRelationship", {})
  .n("IoTSiteWiseClient", "DescribeAssetModelInterfaceRelationshipCommand")
  .sc(DescribeAssetModelInterfaceRelationship)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAssetModelInterfaceRelationshipRequest;
      output: DescribeAssetModelInterfaceRelationshipResponse;
    };
    sdk: {
      input: DescribeAssetModelInterfaceRelationshipCommandInput;
      output: DescribeAssetModelInterfaceRelationshipCommandOutput;
    };
  };
}
