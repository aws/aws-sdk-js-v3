// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListStandardsControlAssociationsRequest, ListStandardsControlAssociationsResponse } from "../models/models_2";
import {
  de_ListStandardsControlAssociationsCommand,
  se_ListStandardsControlAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStandardsControlAssociationsCommand}.
 */
export interface ListStandardsControlAssociationsCommandInput extends ListStandardsControlAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListStandardsControlAssociationsCommand}.
 */
export interface ListStandardsControlAssociationsCommandOutput
  extends ListStandardsControlAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Specifies whether a control is currently enabled or disabled in each enabled standard in the calling account.
 *       </p>
 *          <p>This operation omits standards control associations for standard subscriptions where <code>StandardsControlsUpdatable</code> has value <code>NOT_READY_FOR_UPDATES</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListStandardsControlAssociationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListStandardsControlAssociationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // ListStandardsControlAssociationsRequest
 *   SecurityControlId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListStandardsControlAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListStandardsControlAssociationsResponse
 * //   StandardsControlAssociationSummaries: [ // StandardsControlAssociationSummaries // required
 * //     { // StandardsControlAssociationSummary
 * //       StandardsArn: "STRING_VALUE", // required
 * //       SecurityControlId: "STRING_VALUE", // required
 * //       SecurityControlArn: "STRING_VALUE", // required
 * //       AssociationStatus: "ENABLED" || "DISABLED", // required
 * //       RelatedRequirements: [ // RelatedRequirementsList
 * //         "STRING_VALUE",
 * //       ],
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       UpdatedReason: "STRING_VALUE",
 * //       StandardsControlTitle: "STRING_VALUE",
 * //       StandardsControlDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStandardsControlAssociationsCommandInput - {@link ListStandardsControlAssociationsCommandInput}
 * @returns {@link ListStandardsControlAssociationsCommandOutput}
 * @see {@link ListStandardsControlAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListStandardsControlAssociationsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class ListStandardsControlAssociationsCommand extends $Command
  .classBuilder<
    ListStandardsControlAssociationsCommandInput,
    ListStandardsControlAssociationsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "ListStandardsControlAssociations", {})
  .n("SecurityHubClient", "ListStandardsControlAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListStandardsControlAssociationsCommand)
  .de(de_ListStandardsControlAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStandardsControlAssociationsRequest;
      output: ListStandardsControlAssociationsResponse;
    };
    sdk: {
      input: ListStandardsControlAssociationsCommandInput;
      output: ListStandardsControlAssociationsCommandOutput;
    };
  };
}
