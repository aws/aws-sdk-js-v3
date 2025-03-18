// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListConfiguredTableAssociationsInput, ListConfiguredTableAssociationsOutput } from "../models/models_0";
import {
  de_ListConfiguredTableAssociationsCommand,
  se_ListConfiguredTableAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfiguredTableAssociationsCommand}.
 */
export interface ListConfiguredTableAssociationsCommandInput extends ListConfiguredTableAssociationsInput {}
/**
 * @public
 *
 * The output of {@link ListConfiguredTableAssociationsCommand}.
 */
export interface ListConfiguredTableAssociationsCommandOutput
  extends ListConfiguredTableAssociationsOutput,
    __MetadataBearer {}

/**
 * <p>Lists configured table associations for a membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListConfiguredTableAssociationsCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListConfiguredTableAssociationsCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // ListConfiguredTableAssociationsInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListConfiguredTableAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfiguredTableAssociationsOutput
 * //   configuredTableAssociationSummaries: [ // ConfiguredTableAssociationSummaryList // required
 * //     { // ConfiguredTableAssociationSummary
 * //       configuredTableId: "STRING_VALUE", // required
 * //       membershipId: "STRING_VALUE", // required
 * //       membershipArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       analysisRuleTypes: [ // ConfiguredTableAssociationAnalysisRuleTypeList
 * //         "AGGREGATION" || "LIST" || "CUSTOM",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfiguredTableAssociationsCommandInput - {@link ListConfiguredTableAssociationsCommandInput}
 * @returns {@link ListConfiguredTableAssociationsCommandOutput}
 * @see {@link ListConfiguredTableAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListConfiguredTableAssociationsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 * @public
 */
export class ListConfiguredTableAssociationsCommand extends $Command
  .classBuilder<
    ListConfiguredTableAssociationsCommandInput,
    ListConfiguredTableAssociationsCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "ListConfiguredTableAssociations", {})
  .n("CleanRoomsClient", "ListConfiguredTableAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListConfiguredTableAssociationsCommand)
  .de(de_ListConfiguredTableAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfiguredTableAssociationsInput;
      output: ListConfiguredTableAssociationsOutput;
    };
    sdk: {
      input: ListConfiguredTableAssociationsCommandInput;
      output: ListConfiguredTableAssociationsCommandOutput;
    };
  };
}
