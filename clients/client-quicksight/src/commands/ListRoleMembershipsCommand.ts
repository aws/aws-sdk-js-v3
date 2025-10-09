// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRoleMembershipsRequest, ListRoleMembershipsResponse } from "../models/models_5";
import { de_ListRoleMembershipsCommand, se_ListRoleMembershipsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRoleMembershipsCommand}.
 */
export interface ListRoleMembershipsCommandInput extends ListRoleMembershipsRequest {}
/**
 * @public
 *
 * The output of {@link ListRoleMembershipsCommand}.
 */
export interface ListRoleMembershipsCommandOutput extends ListRoleMembershipsResponse, __MetadataBearer {}

/**
 * <p>Lists all groups that are associated with a role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListRoleMembershipsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListRoleMembershipsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListRoleMembershipsRequest
 *   Role: "ADMIN" || "AUTHOR" || "READER" || "ADMIN_PRO" || "AUTHOR_PRO" || "READER_PRO", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new ListRoleMembershipsCommand(input);
 * const response = await client.send(command);
 * // { // ListRoleMembershipsResponse
 * //   MembersList: [ // GroupsList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListRoleMembershipsCommandInput - {@link ListRoleMembershipsCommandInput}
 * @returns {@link ListRoleMembershipsCommandOutput}
 * @see {@link ListRoleMembershipsCommandInput} for command's `input` shape.
 * @see {@link ListRoleMembershipsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class ListRoleMembershipsCommand extends $Command
  .classBuilder<
    ListRoleMembershipsCommandInput,
    ListRoleMembershipsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "ListRoleMemberships", {})
  .n("QuickSightClient", "ListRoleMembershipsCommand")
  .f(void 0, void 0)
  .ser(se_ListRoleMembershipsCommand)
  .de(de_ListRoleMembershipsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRoleMembershipsRequest;
      output: ListRoleMembershipsResponse;
    };
    sdk: {
      input: ListRoleMembershipsCommandInput;
      output: ListRoleMembershipsCommandOutput;
    };
  };
}
