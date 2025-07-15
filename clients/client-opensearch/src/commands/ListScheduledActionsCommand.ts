// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListScheduledActionsRequest, ListScheduledActionsResponse } from "../models/models_1";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_ListScheduledActionsCommand, se_ListScheduledActionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListScheduledActionsCommand}.
 */
export interface ListScheduledActionsCommandInput extends ListScheduledActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListScheduledActionsCommand}.
 */
export interface ListScheduledActionsCommandOutput extends ListScheduledActionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of configuration changes that are scheduled for a domain. These changes can
 *    be <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">service software
 *     updates</a> or <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html#auto-tune-types">blue/green
 *     Auto-Tune enhancements</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListScheduledActionsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListScheduledActionsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // ListScheduledActionsRequest
 *   DomainName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListScheduledActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListScheduledActionsResponse
 * //   ScheduledActions: [ // ScheduledActionsList
 * //     { // ScheduledAction
 * //       Id: "STRING_VALUE", // required
 * //       Type: "SERVICE_SOFTWARE_UPDATE" || "JVM_HEAP_SIZE_TUNING" || "JVM_YOUNG_GEN_TUNING", // required
 * //       Severity: "HIGH" || "MEDIUM" || "LOW", // required
 * //       ScheduledTime: Number("long"), // required
 * //       Description: "STRING_VALUE",
 * //       ScheduledBy: "CUSTOMER" || "SYSTEM",
 * //       Status: "PENDING_UPDATE" || "IN_PROGRESS" || "FAILED" || "COMPLETED" || "NOT_ELIGIBLE" || "ELIGIBLE",
 * //       Mandatory: true || false,
 * //       Cancellable: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListScheduledActionsCommandInput - {@link ListScheduledActionsCommandInput}
 * @returns {@link ListScheduledActionsCommandOutput}
 * @see {@link ListScheduledActionsCommandInput} for command's `input` shape.
 * @see {@link ListScheduledActionsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Request processing failed because you provided an invalid pagination token.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class ListScheduledActionsCommand extends $Command
  .classBuilder<
    ListScheduledActionsCommandInput,
    ListScheduledActionsCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "ListScheduledActions", {})
  .n("OpenSearchClient", "ListScheduledActionsCommand")
  .f(void 0, void 0)
  .ser(se_ListScheduledActionsCommand)
  .de(de_ListScheduledActionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScheduledActionsRequest;
      output: ListScheduledActionsResponse;
    };
    sdk: {
      input: ListScheduledActionsCommandInput;
      output: ListScheduledActionsCommandOutput;
    };
  };
}
