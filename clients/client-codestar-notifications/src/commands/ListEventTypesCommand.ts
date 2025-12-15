// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodestarNotificationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListEventTypesRequest, ListEventTypesResult } from "../models/models_0";
import { ListEventTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventTypesCommand}.
 */
export interface ListEventTypesCommandInput extends ListEventTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListEventTypesCommand}.
 */
export interface ListEventTypesCommandOutput extends ListEventTypesResult, __MetadataBearer {}

/**
 * <p>Returns information about the event types available for configuring notifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, ListEventTypesCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, ListEventTypesCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * // import type { CodestarNotificationsClientConfig } from "@aws-sdk/client-codestar-notifications";
 * const config = {}; // type is CodestarNotificationsClientConfig
 * const client = new CodestarNotificationsClient(config);
 * const input = { // ListEventTypesRequest
 *   Filters: [ // ListEventTypesFilters
 *     { // ListEventTypesFilter
 *       Name: "RESOURCE_TYPE" || "SERVICE_NAME", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEventTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListEventTypesResult
 * //   EventTypes: [ // EventTypeBatch
 * //     { // EventTypeSummary
 * //       EventTypeId: "STRING_VALUE",
 * //       ServiceName: "STRING_VALUE",
 * //       EventTypeName: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventTypesCommandInput - {@link ListEventTypesCommandInput}
 * @returns {@link ListEventTypesCommandOutput}
 * @see {@link ListEventTypesCommandInput} for command's `input` shape.
 * @see {@link ListEventTypesCommandOutput} for command's `response` shape.
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
export class ListEventTypesCommand extends $Command
  .classBuilder<
    ListEventTypesCommandInput,
    ListEventTypesCommandOutput,
    CodestarNotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodestarNotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeStarNotifications_20191015", "ListEventTypes", {})
  .n("CodestarNotificationsClient", "ListEventTypesCommand")
  .sc(ListEventTypes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventTypesRequest;
      output: ListEventTypesResult;
    };
    sdk: {
      input: ListEventTypesCommandInput;
      output: ListEventTypesCommandOutput;
    };
  };
}
