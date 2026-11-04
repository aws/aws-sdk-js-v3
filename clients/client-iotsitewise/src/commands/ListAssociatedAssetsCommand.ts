// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssociatedAssetsRequest, ListAssociatedAssetsResponse } from "../models/models_1";
import { ListAssociatedAssets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves a paginated list of associated assets.
 *
 * You can use this operation to do the following:
 *
 * - `CHILD` - List all child assets associated to the asset.
 * - `PARENT` - List the asset's parent asset.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssociatedAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssociatedAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
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
 * //       externalId: "STRING_VALUE",
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
 * //           externalId: "STRING_VALUE",
 * //           name: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       description: "STRING_VALUE",
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
export class ListAssociatedAssetsCommand extends command<ListAssociatedAssetsCommandInput, ListAssociatedAssetsCommandOutput>(
  _ep0,
  _mw0,
  "ListAssociatedAssets",
  ListAssociatedAssets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociatedAssetsRequest;
      output: ListAssociatedAssetsResponse;
    };
    sdk: {
      input: ListAssociatedAssetsCommandInput;
      output: ListAssociatedAssetsCommandOutput;
    };
  };
}
