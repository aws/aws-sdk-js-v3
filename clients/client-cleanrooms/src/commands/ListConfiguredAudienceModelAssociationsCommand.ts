// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListConfiguredAudienceModelAssociationsInput,
  ListConfiguredAudienceModelAssociationsOutput,
} from "../models/models_0";
import {
  de_ListConfiguredAudienceModelAssociationsCommand,
  se_ListConfiguredAudienceModelAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfiguredAudienceModelAssociationsCommand}.
 */
export interface ListConfiguredAudienceModelAssociationsCommandInput
  extends ListConfiguredAudienceModelAssociationsInput {}
/**
 * @public
 *
 * The output of {@link ListConfiguredAudienceModelAssociationsCommand}.
 */
export interface ListConfiguredAudienceModelAssociationsCommandOutput
  extends ListConfiguredAudienceModelAssociationsOutput,
    __MetadataBearer {}

/**
 * <p>Lists information about requested configured audience model associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListConfiguredAudienceModelAssociationsCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListConfiguredAudienceModelAssociationsCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListConfiguredAudienceModelAssociationsInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListConfiguredAudienceModelAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfiguredAudienceModelAssociationsOutput
 * //   configuredAudienceModelAssociationSummaries: [ // ConfiguredAudienceModelAssociationSummaryList // required
 * //     { // ConfiguredAudienceModelAssociationSummary
 * //       membershipId: "STRING_VALUE", // required
 * //       membershipArn: "STRING_VALUE", // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       configuredAudienceModelArn: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfiguredAudienceModelAssociationsCommandInput - {@link ListConfiguredAudienceModelAssociationsCommandInput}
 * @returns {@link ListConfiguredAudienceModelAssociationsCommandOutput}
 * @see {@link ListConfiguredAudienceModelAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListConfiguredAudienceModelAssociationsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListConfiguredAudienceModelAssociationsCommand extends $Command
  .classBuilder<
    ListConfiguredAudienceModelAssociationsCommandInput,
    ListConfiguredAudienceModelAssociationsCommandOutput,
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
  .s("AWSBastionControlPlaneServiceLambda", "ListConfiguredAudienceModelAssociations", {})
  .n("CleanRoomsClient", "ListConfiguredAudienceModelAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListConfiguredAudienceModelAssociationsCommand)
  .de(de_ListConfiguredAudienceModelAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfiguredAudienceModelAssociationsInput;
      output: ListConfiguredAudienceModelAssociationsOutput;
    };
    sdk: {
      input: ListConfiguredAudienceModelAssociationsCommandInput;
      output: ListConfiguredAudienceModelAssociationsCommandOutput;
    };
  };
}
