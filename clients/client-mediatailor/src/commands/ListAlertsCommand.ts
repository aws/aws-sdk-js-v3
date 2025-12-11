// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import type { ListAlertsRequest, ListAlertsResponse } from "../models/models_0";
import { ListAlerts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAlertsCommand}.
 */
export interface ListAlertsCommandInput extends ListAlertsRequest {}
/**
 * @public
 *
 * The output of {@link ListAlertsCommand}.
 */
export interface ListAlertsCommandOutput extends ListAlertsResponse, __MetadataBearer {}

/**
 * <p>Lists the alerts that are associated with a MediaTailor channel assembly resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListAlertsCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListAlertsCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // ListAlertsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new ListAlertsCommand(input);
 * const response = await client.send(command);
 * // { // ListAlertsResponse
 * //   Items: [ // __listOfAlert
 * //     { // Alert
 * //       AlertCode: "STRING_VALUE", // required
 * //       AlertMessage: "STRING_VALUE", // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       RelatedResourceArns: [ // __listOf__string // required
 * //         "STRING_VALUE",
 * //       ],
 * //       ResourceArn: "STRING_VALUE", // required
 * //       Category: "SCHEDULING_ERROR" || "PLAYBACK_WARNING" || "INFO",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAlertsCommandInput - {@link ListAlertsCommandInput}
 * @returns {@link ListAlertsCommandOutput}
 * @see {@link ListAlertsCommandInput} for command's `input` shape.
 * @see {@link ListAlertsCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class ListAlertsCommand extends $Command
  .classBuilder<
    ListAlertsCommandInput,
    ListAlertsCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "ListAlerts", {})
  .n("MediaTailorClient", "ListAlertsCommand")
  .sc(ListAlerts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAlertsRequest;
      output: ListAlertsResponse;
    };
    sdk: {
      input: ListAlertsCommandInput;
      output: ListAlertsCommandOutput;
    };
  };
}
