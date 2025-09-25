// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAssistantAssociationsRequest, ListAssistantAssociationsResponse } from "../models/models_0";
import { ListAssistantAssociations } from "../schemas/schemas_2_List";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssistantAssociationsCommand}.
 */
export interface ListAssistantAssociationsCommandInput extends ListAssistantAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssistantAssociationsCommand}.
 */
export interface ListAssistantAssociationsCommandOutput extends ListAssistantAssociationsResponse, __MetadataBearer {}

/**
 * <p>Lists information about assistant associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, ListAssistantAssociationsCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, ListAssistantAssociationsCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // ListAssistantAssociationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   assistantId: "STRING_VALUE", // required
 * };
 * const command = new ListAssistantAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssistantAssociationsResponse
 * //   assistantAssociationSummaries: [ // AssistantAssociationSummaryList // required
 * //     { // AssistantAssociationSummary
 * //       assistantAssociationId: "STRING_VALUE", // required
 * //       assistantAssociationArn: "STRING_VALUE", // required
 * //       assistantId: "STRING_VALUE", // required
 * //       assistantArn: "STRING_VALUE", // required
 * //       associationType: "STRING_VALUE", // required
 * //       associationData: { // AssistantAssociationOutputData Union: only one key present
 * //         knowledgeBaseAssociation: { // KnowledgeBaseAssociationData
 * //           knowledgeBaseId: "STRING_VALUE",
 * //           knowledgeBaseArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssistantAssociationsCommandInput - {@link ListAssistantAssociationsCommandInput}
 * @returns {@link ListAssistantAssociationsCommandOutput}
 * @see {@link ListAssistantAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListAssistantAssociationsCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 *
 * @public
 */
export class ListAssistantAssociationsCommand extends $Command
  .classBuilder<
    ListAssistantAssociationsCommandInput,
    ListAssistantAssociationsCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "ListAssistantAssociations", {})
  .n("WisdomClient", "ListAssistantAssociationsCommand")
  .sc(ListAssistantAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssistantAssociationsRequest;
      output: ListAssistantAssociationsResponse;
    };
    sdk: {
      input: ListAssistantAssociationsCommandInput;
      output: ListAssistantAssociationsCommandOutput;
    };
  };
}
