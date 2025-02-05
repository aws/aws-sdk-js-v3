// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListCompositionRelationshipsRequest, ListCompositionRelationshipsResponse } from "../models/models_1";
import {
  de_ListCompositionRelationshipsCommand,
  se_ListCompositionRelationshipsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListCompositionRelationshipsCommandOutput
  extends ListCompositionRelationshipsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of composition relationships for an asset model of type
 *         <code>COMPONENT_MODEL</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListCompositionRelationshipsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListCompositionRelationshipsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
export class ListCompositionRelationshipsCommand extends $Command
  .classBuilder<
    ListCompositionRelationshipsCommandInput,
    ListCompositionRelationshipsCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "ListCompositionRelationships", {})
  .n("IoTSiteWiseClient", "ListCompositionRelationshipsCommand")
  .f(void 0, void 0)
  .ser(se_ListCompositionRelationshipsCommand)
  .de(de_ListCompositionRelationshipsCommand)
  .build() {
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
