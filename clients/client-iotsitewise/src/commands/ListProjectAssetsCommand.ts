// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProjectAssetsRequest, ListProjectAssetsResponse } from "../models/models_1";
import { ListProjectAssets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProjectAssetsCommand}.
 */
export interface ListProjectAssetsCommandInput extends ListProjectAssetsRequest {}
/**
 * @public
 *
 * The output of {@link ListProjectAssetsCommand}.
 */
export interface ListProjectAssetsCommandOutput extends ListProjectAssetsResponse, __MetadataBearer {}

/**
 * Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListProjectAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListProjectAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListProjectAssetsRequest
 *   projectId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListProjectAssetsCommand(input);
 * const response = await client.send(command);
 * // { // ListProjectAssetsResponse
 * //   assetIds: [ // AssetIDs // required
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProjectAssetsCommandInput - {@link ListProjectAssetsCommandInput}
 * @returns {@link ListProjectAssetsCommandOutput}
 * @see {@link ListProjectAssetsCommandInput} for command's `input` shape.
 * @see {@link ListProjectAssetsCommandOutput} for command's `response` shape.
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
export class ListProjectAssetsCommand extends command<ListProjectAssetsCommandInput, ListProjectAssetsCommandOutput>(
  _ep0,
  _mw0,
  "ListProjectAssets",
  ListProjectAssets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProjectAssetsRequest;
      output: ListProjectAssetsResponse;
    };
    sdk: {
      input: ListProjectAssetsCommandInput;
      output: ListProjectAssetsCommandOutput;
    };
  };
}
