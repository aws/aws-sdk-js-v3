// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type {
  ListComputationModelResolveToResourcesRequest,
  ListComputationModelResolveToResourcesResponse,
} from "../models/models_0";
import { ListComputationModelResolveToResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListComputationModelResolveToResourcesCommand}.
 */
export interface ListComputationModelResolveToResourcesCommandInput
  extends ListComputationModelResolveToResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListComputationModelResolveToResourcesCommand}.
 */
export interface ListComputationModelResolveToResourcesCommandOutput
  extends ListComputationModelResolveToResourcesResponse,
    __MetadataBearer {}

/**
 * <p>Lists all distinct resources that are resolved from the executed actions of the
 *       computation model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListComputationModelResolveToResourcesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListComputationModelResolveToResourcesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListComputationModelResolveToResourcesRequest
 *   computationModelId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListComputationModelResolveToResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListComputationModelResolveToResourcesResponse
 * //   computationModelResolveToResourceSummaries: [ // ComputationModelResolveToResourceSummaries // required
 * //     { // ComputationModelResolveToResourceSummary
 * //       resolveTo: { // ResolveTo
 * //         assetId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListComputationModelResolveToResourcesCommandInput - {@link ListComputationModelResolveToResourcesCommandInput}
 * @returns {@link ListComputationModelResolveToResourcesCommandOutput}
 * @see {@link ListComputationModelResolveToResourcesCommandInput} for command's `input` shape.
 * @see {@link ListComputationModelResolveToResourcesCommandOutput} for command's `response` shape.
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
export class ListComputationModelResolveToResourcesCommand extends $Command
  .classBuilder<
    ListComputationModelResolveToResourcesCommandInput,
    ListComputationModelResolveToResourcesCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "ListComputationModelResolveToResources", {})
  .n("IoTSiteWiseClient", "ListComputationModelResolveToResourcesCommand")
  .sc(ListComputationModelResolveToResources$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComputationModelResolveToResourcesRequest;
      output: ListComputationModelResolveToResourcesResponse;
    };
    sdk: {
      input: ListComputationModelResolveToResourcesCommandInput;
      output: ListComputationModelResolveToResourcesCommandOutput;
    };
  };
}
