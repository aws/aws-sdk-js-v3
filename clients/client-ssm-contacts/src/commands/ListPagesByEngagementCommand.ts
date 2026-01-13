// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPagesByEngagementRequest, ListPagesByEngagementResult } from "../models/models_0";
import { ListPagesByEngagement$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPagesByEngagementCommand}.
 */
export interface ListPagesByEngagementCommandInput extends ListPagesByEngagementRequest {}
/**
 * @public
 *
 * The output of {@link ListPagesByEngagementCommand}.
 */
export interface ListPagesByEngagementCommandOutput extends ListPagesByEngagementResult, __MetadataBearer {}

/**
 * <p>Lists the engagements to contact channels that occurred by engaging a contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPagesByEngagementCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListPagesByEngagementCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // ListPagesByEngagementRequest
 *   EngagementId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPagesByEngagementCommand(input);
 * const response = await client.send(command);
 * // { // ListPagesByEngagementResult
 * //   NextToken: "STRING_VALUE",
 * //   Pages: [ // PagesList // required
 * //     { // Page
 * //       PageArn: "STRING_VALUE", // required
 * //       EngagementArn: "STRING_VALUE", // required
 * //       ContactArn: "STRING_VALUE", // required
 * //       Sender: "STRING_VALUE", // required
 * //       IncidentId: "STRING_VALUE",
 * //       SentTime: new Date("TIMESTAMP"),
 * //       DeliveryTime: new Date("TIMESTAMP"),
 * //       ReadTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPagesByEngagementCommandInput - {@link ListPagesByEngagementCommandInput}
 * @returns {@link ListPagesByEngagementCommandOutput}
 * @see {@link ListPagesByEngagementCommandInput} for command's `input` shape.
 * @see {@link ListPagesByEngagementCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 *
 * @public
 */
export class ListPagesByEngagementCommand extends $Command
  .classBuilder<
    ListPagesByEngagementCommandInput,
    ListPagesByEngagementCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMContacts", "ListPagesByEngagement", {})
  .n("SSMContactsClient", "ListPagesByEngagementCommand")
  .sc(ListPagesByEngagement$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPagesByEngagementRequest;
      output: ListPagesByEngagementResult;
    };
    sdk: {
      input: ListPagesByEngagementCommandInput;
      output: ListPagesByEngagementCommandOutput;
    };
  };
}
