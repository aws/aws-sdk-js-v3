// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListMembersInput, ListMembersOutput } from "../models/models_0";
import { de_ListMembersCommand, se_ListMembersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMembersCommand}.
 */
export interface ListMembersCommandInput extends ListMembersInput {}
/**
 * @public
 *
 * The output of {@link ListMembersCommand}.
 */
export interface ListMembersCommandOutput extends ListMembersOutput, __MetadataBearer {}

/**
 * <p>Lists all members within a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListMembersCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListMembersCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // ListMembersInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListMembersCommand(input);
 * const response = await client.send(command);
 * // { // ListMembersOutput
 * //   nextToken: "STRING_VALUE",
 * //   memberSummaries: [ // MemberSummaryList // required
 * //     { // MemberSummary
 * //       accountId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE", // required
 * //       abilities: [ // MemberAbilities // required
 * //         "CAN_QUERY" || "CAN_RECEIVE_RESULTS",
 * //       ],
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       membershipId: "STRING_VALUE",
 * //       membershipArn: "STRING_VALUE",
 * //       paymentConfiguration: { // PaymentConfiguration
 * //         queryCompute: { // QueryComputePaymentConfig
 * //           isResponsible: true || false, // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMembersCommandInput - {@link ListMembersCommandInput}
 * @returns {@link ListMembersCommandOutput}
 * @see {@link ListMembersCommandInput} for command's `input` shape.
 * @see {@link ListMembersCommandOutput} for command's `response` shape.
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
export class ListMembersCommand extends $Command
  .classBuilder<
    ListMembersCommandInput,
    ListMembersCommandOutput,
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
  .s("AWSBastionControlPlaneServiceLambda", "ListMembers", {})
  .n("CleanRoomsClient", "ListMembersCommand")
  .f(void 0, void 0)
  .ser(se_ListMembersCommand)
  .de(de_ListMembersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMembersInput;
      output: ListMembersOutput;
    };
    sdk: {
      input: ListMembersCommandInput;
      output: ListMembersCommandOutput;
    };
  };
}
