// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListActionsRequest, ListActionsResponse } from "../models/models_0";
import { de_ListActionsCommand, se_ListActionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListActionsCommand}.
 */
export interface ListActionsCommandInput extends ListActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListActionsCommand}.
 */
export interface ListActionsCommandOutput extends ListActionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of actions for a specific target resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListActionsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListActionsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListActionsRequest
 *   targetResourceType: "ASSET", // required
 *   targetResourceId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListActionsResponse
 * //   actionSummaries: [ // ActionSummaries // required
 * //     { // ActionSummary
 * //       actionId: "STRING_VALUE",
 * //       actionDefinitionId: "STRING_VALUE",
 * //       targetResource: { // TargetResource
 * //         assetId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ListActionsCommandInput - {@link ListActionsCommandInput}
 * @returns {@link ListActionsCommandOutput}
 * @see {@link ListActionsCommandInput} for command's `input` shape.
 * @see {@link ListActionsCommandOutput} for command's `response` shape.
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
export class ListActionsCommand extends $Command
  .classBuilder<
    ListActionsCommandInput,
    ListActionsCommandOutput,
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
  .s("AWSIoTSiteWise", "ListActions", {})
  .n("IoTSiteWiseClient", "ListActionsCommand")
  .f(void 0, void 0)
  .ser(se_ListActionsCommand)
  .de(de_ListActionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListActionsRequest;
      output: ListActionsResponse;
    };
    sdk: {
      input: ListActionsCommandInput;
      output: ListActionsCommandOutput;
    };
  };
}
