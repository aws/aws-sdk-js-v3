// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodestarNotificationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTargetsRequest, ListTargetsResult, ListTargetsResultFilterSensitiveLog } from "../models/models_0";
import { de_ListTargetsCommand, se_ListTargetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTargetsCommand}.
 */
export interface ListTargetsCommandInput extends ListTargetsRequest {}
/**
 * @public
 *
 * The output of {@link ListTargetsCommand}.
 */
export interface ListTargetsCommandOutput extends ListTargetsResult, __MetadataBearer {}

/**
 * <p>Returns a list of the notification rule targets for an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, ListTargetsCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, ListTargetsCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const input = { // ListTargetsRequest
 *   Filters: [ // ListTargetsFilters
 *     { // ListTargetsFilter
 *       Name: "TARGET_TYPE" || "TARGET_ADDRESS" || "TARGET_STATUS", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTargetsCommand(input);
 * const response = await client.send(command);
 * // { // ListTargetsResult
 * //   Targets: [ // TargetsBatch
 * //     { // TargetSummary
 * //       TargetAddress: "STRING_VALUE",
 * //       TargetType: "STRING_VALUE",
 * //       TargetStatus: "PENDING" || "ACTIVE" || "UNREACHABLE" || "INACTIVE" || "DEACTIVATED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTargetsCommandInput - {@link ListTargetsCommandInput}
 * @returns {@link ListTargetsCommandOutput}
 * @see {@link ListTargetsCommandInput} for command's `input` shape.
 * @see {@link ListTargetsCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for CodestarNotificationsClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The value for the enumeration token used in the request to return the next batch of the results is not valid. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link CodestarNotificationsServiceException}
 * <p>Base exception class for all service exceptions from CodestarNotifications service.</p>
 *
 *
 * @public
 */
export class ListTargetsCommand extends $Command
  .classBuilder<
    ListTargetsCommandInput,
    ListTargetsCommandOutput,
    CodestarNotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodestarNotificationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStarNotifications_20191015", "ListTargets", {})
  .n("CodestarNotificationsClient", "ListTargetsCommand")
  .f(void 0, ListTargetsResultFilterSensitiveLog)
  .ser(se_ListTargetsCommand)
  .de(de_ListTargetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTargetsRequest;
      output: ListTargetsResult;
    };
    sdk: {
      input: ListTargetsCommandInput;
      output: ListTargetsCommandOutput;
    };
  };
}
