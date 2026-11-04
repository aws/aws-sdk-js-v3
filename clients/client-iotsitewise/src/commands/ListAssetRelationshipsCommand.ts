// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssetRelationshipsRequest, ListAssetRelationshipsResponse } from "../models/models_1";
import { ListAssetRelationships$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssetRelationshipsCommand}.
 */
export interface ListAssetRelationshipsCommandInput extends ListAssetRelationshipsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssetRelationshipsCommand}.
 */
export interface ListAssetRelationshipsCommandOutput extends ListAssetRelationshipsResponse, __MetadataBearer {}

/**
 * Retrieves a paginated list of asset relationships for an asset. You can use this operation to identify an asset's root asset and all associated assets between that asset and its root.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssetRelationshipsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssetRelationshipsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListAssetRelationshipsRequest
 *   assetId: "STRING_VALUE", // required
 *   traversalType: "PATH_TO_ROOT", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssetRelationshipsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetRelationshipsResponse
 * //   assetRelationshipSummaries: [ // AssetRelationshipSummaries // required
 * //     { // AssetRelationshipSummary
 * //       hierarchyInfo: { // AssetHierarchyInfo
 * //         parentAssetId: "STRING_VALUE",
 * //         childAssetId: "STRING_VALUE",
 * //       },
 * //       relationshipType: "HIERARCHY", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssetRelationshipsCommandInput - {@link ListAssetRelationshipsCommandInput}
 * @returns {@link ListAssetRelationshipsCommandOutput}
 * @see {@link ListAssetRelationshipsCommandInput} for command's `input` shape.
 * @see {@link ListAssetRelationshipsCommandOutput} for command's `response` shape.
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
export class ListAssetRelationshipsCommand extends command<ListAssetRelationshipsCommandInput, ListAssetRelationshipsCommandOutput>(
  _ep0,
  _mw0,
  "ListAssetRelationships",
  ListAssetRelationships$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetRelationshipsRequest;
      output: ListAssetRelationshipsResponse;
    };
    sdk: {
      input: ListAssetRelationshipsCommandInput;
      output: ListAssetRelationshipsCommandOutput;
    };
  };
}
