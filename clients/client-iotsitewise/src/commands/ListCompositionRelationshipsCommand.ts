// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCompositionRelationshipsRequest, ListCompositionRelationshipsResponse } from "../models/models_1";
import { ListCompositionRelationships$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCompositionRelationshipsCommand}.
 */
export interface ListCompositionRelationshipsCommandInput extends ListCompositionRelationshipsRequest {}
/**
 * @public
 *
 * The output of {@link ListCompositionRelationshipsCommand}.
 */
export interface ListCompositionRelationshipsCommandOutput extends ListCompositionRelationshipsResponse, __MetadataBearer {}

/**
 * Retrieves a paginated list of composition relationships for an asset model of type `COMPONENT_MODEL`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListCompositionRelationshipsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListCompositionRelationshipsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListCompositionRelationshipsRequest
 *   assetModelId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCompositionRelationshipsCommand(input);
 * const response = await client.send(command);
 * // { // ListCompositionRelationshipsResponse
 * //   compositionRelationshipSummaries: [ // CompositionRelationshipSummaries // required
 * //     { // CompositionRelationshipSummary
 * //       assetModelId: "STRING_VALUE", // required
 * //       assetModelCompositeModelId: "STRING_VALUE", // required
 * //       assetModelCompositeModelType: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCompositionRelationshipsCommandInput - {@link ListCompositionRelationshipsCommandInput}
 * @returns {@link ListCompositionRelationshipsCommandOutput}
 * @see {@link ListCompositionRelationshipsCommandInput} for command's `input` shape.
 * @see {@link ListCompositionRelationshipsCommandOutput} for command's `response` shape.
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
export class ListCompositionRelationshipsCommand extends command<ListCompositionRelationshipsCommandInput, ListCompositionRelationshipsCommandOutput>(
  _ep0,
  _mw0,
  "ListCompositionRelationships",
  ListCompositionRelationships$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCompositionRelationshipsRequest;
      output: ListCompositionRelationshipsResponse;
    };
    sdk: {
      input: ListCompositionRelationshipsCommandInput;
      output: ListCompositionRelationshipsCommandOutput;
    };
  };
}
