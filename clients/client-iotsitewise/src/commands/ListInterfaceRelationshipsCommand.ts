// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListInterfaceRelationshipsRequest, ListInterfaceRelationshipsResponse } from "../models/models_1";
import { de_ListInterfaceRelationshipsCommand, se_ListInterfaceRelationshipsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInterfaceRelationshipsCommand}.
 */
export interface ListInterfaceRelationshipsCommandInput extends ListInterfaceRelationshipsRequest {}
/**
 * @public
 *
 * The output of {@link ListInterfaceRelationshipsCommand}.
 */
export interface ListInterfaceRelationshipsCommandOutput extends ListInterfaceRelationshipsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of asset models that have a specific interface asset model
 *       applied to them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListInterfaceRelationshipsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListInterfaceRelationshipsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListInterfaceRelationshipsRequest
 *   interfaceAssetModelId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListInterfaceRelationshipsCommand(input);
 * const response = await client.send(command);
 * // { // ListInterfaceRelationshipsResponse
 * //   interfaceRelationshipSummaries: [ // InterfaceRelationshipSummaries // required
 * //     { // InterfaceRelationshipSummary
 * //       id: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInterfaceRelationshipsCommandInput - {@link ListInterfaceRelationshipsCommandInput}
 * @returns {@link ListInterfaceRelationshipsCommandOutput}
 * @see {@link ListInterfaceRelationshipsCommandInput} for command's `input` shape.
 * @see {@link ListInterfaceRelationshipsCommandOutput} for command's `response` shape.
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
export class ListInterfaceRelationshipsCommand extends $Command
  .classBuilder<
    ListInterfaceRelationshipsCommandInput,
    ListInterfaceRelationshipsCommandOutput,
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
  .s("AWSIoTSiteWise", "ListInterfaceRelationships", {})
  .n("IoTSiteWiseClient", "ListInterfaceRelationshipsCommand")
  .f(void 0, void 0)
  .ser(se_ListInterfaceRelationshipsCommand)
  .de(de_ListInterfaceRelationshipsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInterfaceRelationshipsRequest;
      output: ListInterfaceRelationshipsResponse;
    };
    sdk: {
      input: ListInterfaceRelationshipsCommandInput;
      output: ListInterfaceRelationshipsCommandOutput;
    };
  };
}
