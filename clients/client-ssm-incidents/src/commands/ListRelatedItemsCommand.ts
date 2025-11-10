// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRelatedItemsInput, ListRelatedItemsOutput } from "../models/models_0";
import { ListRelatedItems } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRelatedItemsCommand}.
 */
export interface ListRelatedItemsCommandInput extends ListRelatedItemsInput {}
/**
 * @public
 *
 * The output of {@link ListRelatedItemsCommand}.
 */
export interface ListRelatedItemsCommandOutput extends ListRelatedItemsOutput, __MetadataBearer {}

/**
 * <p>List all related items for an incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListRelatedItemsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListRelatedItemsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // ListRelatedItemsInput
 *   incidentRecordArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRelatedItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListRelatedItemsOutput
 * //   relatedItems: [ // RelatedItemList // required
 * //     { // RelatedItem
 * //       identifier: { // ItemIdentifier
 * //         value: { // ItemValue Union: only one key present
 * //           arn: "STRING_VALUE",
 * //           url: "STRING_VALUE",
 * //           metricDefinition: "STRING_VALUE",
 * //           pagerDutyIncidentDetail: { // PagerDutyIncidentDetail
 * //             id: "STRING_VALUE", // required
 * //             autoResolve: true || false,
 * //             secretId: "STRING_VALUE",
 * //           },
 * //         },
 * //         type: "STRING_VALUE", // required
 * //       },
 * //       title: "STRING_VALUE",
 * //       generatedId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRelatedItemsCommandInput - {@link ListRelatedItemsCommandInput}
 * @returns {@link ListRelatedItemsCommandOutput}
 * @see {@link ListRelatedItemsCommandInput} for command's `input` shape.
 * @see {@link ListRelatedItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 *
 * @public
 */
export class ListRelatedItemsCommand extends $Command
  .classBuilder<
    ListRelatedItemsCommandInput,
    ListRelatedItemsCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMIncidents", "ListRelatedItems", {})
  .n("SSMIncidentsClient", "ListRelatedItemsCommand")
  .sc(ListRelatedItems)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRelatedItemsInput;
      output: ListRelatedItemsOutput;
    };
    sdk: {
      input: ListRelatedItemsCommandInput;
      output: ListRelatedItemsCommandOutput;
    };
  };
}
