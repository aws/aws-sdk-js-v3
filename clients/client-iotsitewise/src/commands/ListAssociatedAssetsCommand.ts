// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListAssociatedAssetsRequest, ListAssociatedAssetsResponse } from "../models/models_0";
import { de_ListAssociatedAssetsCommand, se_ListAssociatedAssetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssociatedAssetsCommand}.
 */
export interface ListAssociatedAssetsCommandInput extends ListAssociatedAssetsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociatedAssetsCommand}.
 */
export interface ListAssociatedAssetsCommandOutput extends ListAssociatedAssetsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of associated assets.</p>
 *          <p>You can use this operation to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>List child assets associated to a parent asset by a hierarchy that you specify.</p>
 *             </li>
 *             <li>
 *                <p>List an asset's parent asset.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssociatedAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssociatedAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListAssociatedAssetsRequest
 *   assetId: "STRING_VALUE", // required
 *   hierarchyId: "STRING_VALUE",
 *   traversalDirection: "PARENT" || "CHILD",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssociatedAssetsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedAssetsResponse
 * //   assetSummaries: [ // AssociatedAssetsSummaries // required
 * //     { // AssociatedAssetsSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       assetModelId: "STRING_VALUE", // required
 * //       creationDate: new Date("TIMESTAMP"), // required
 * //       lastUpdateDate: new Date("TIMESTAMP"), // required
 * //       status: { // AssetStatus
 * //         state: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED", // required
 * //         error: { // ErrorDetails
 * //           code: "VALIDATION_ERROR" || "INTERNAL_FAILURE", // required
 * //           message: "STRING_VALUE", // required
 * //           details: [ // DetailedErrors
 * //             { // DetailedError
 * //               code: "INCOMPATIBLE_COMPUTE_LOCATION" || "INCOMPATIBLE_FORWARDING_CONFIGURATION", // required
 * //               message: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       hierarchies: [ // AssetHierarchies // required
 * //         { // AssetHierarchy
 * //           id: "STRING_VALUE",
 * //           name: "STRING_VALUE", // required
 * //           externalId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       description: "STRING_VALUE",
 * //       externalId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociatedAssetsCommandInput - {@link ListAssociatedAssetsCommandInput}
 * @returns {@link ListAssociatedAssetsCommandOutput}
 * @see {@link ListAssociatedAssetsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedAssetsCommandOutput} for command's `response` shape.
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
export class ListAssociatedAssetsCommand extends $Command
  .classBuilder<
    ListAssociatedAssetsCommandInput,
    ListAssociatedAssetsCommandOutput,
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
  .s("AWSIoTSiteWise", "ListAssociatedAssets", {})
  .n("IoTSiteWiseClient", "ListAssociatedAssetsCommand")
  .f(void 0, void 0)
  .ser(se_ListAssociatedAssetsCommand)
  .de(de_ListAssociatedAssetsCommand)
  .build() {}
