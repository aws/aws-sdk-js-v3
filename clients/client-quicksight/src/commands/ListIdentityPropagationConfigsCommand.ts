// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListIdentityPropagationConfigsRequest, ListIdentityPropagationConfigsResponse } from "../models/models_4";
import {
  de_ListIdentityPropagationConfigsCommand,
  se_ListIdentityPropagationConfigsCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIdentityPropagationConfigsCommand}.
 */
export interface ListIdentityPropagationConfigsCommandInput extends ListIdentityPropagationConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListIdentityPropagationConfigsCommand}.
 */
export interface ListIdentityPropagationConfigsCommandOutput
  extends ListIdentityPropagationConfigsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all services and authorized targets that the Amazon QuickSight IAM Identity Center application can access.</p>
 *          <p>This operation is only supported for Amazon QuickSight accounts that use IAM Identity Center.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListIdentityPropagationConfigsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListIdentityPropagationConfigsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // ListIdentityPropagationConfigsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListIdentityPropagationConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentityPropagationConfigsResponse
 * //   Services: [ // AuthorizedTargetsByServices
 * //     { // AuthorizedTargetsByService
 * //       Service: "REDSHIFT" || "QBUSINESS" || "ATHENA",
 * //       AuthorizedTargets: [ // AuthorizedTargetsList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdentityPropagationConfigsCommandInput - {@link ListIdentityPropagationConfigsCommandInput}
 * @returns {@link ListIdentityPropagationConfigsCommandOutput}
 * @see {@link ListIdentityPropagationConfigsCommandInput} for command's `input` shape.
 * @see {@link ListIdentityPropagationConfigsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
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
export class ListIdentityPropagationConfigsCommand extends $Command
  .classBuilder<
    ListIdentityPropagationConfigsCommandInput,
    ListIdentityPropagationConfigsCommandOutput,
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
  .s("QuickSight_20180401", "ListIdentityPropagationConfigs", {})
  .n("QuickSightClient", "ListIdentityPropagationConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListIdentityPropagationConfigsCommand)
  .de(de_ListIdentityPropagationConfigsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIdentityPropagationConfigsRequest;
      output: ListIdentityPropagationConfigsResponse;
    };
    sdk: {
      input: ListIdentityPropagationConfigsCommandInput;
      output: ListIdentityPropagationConfigsCommandOutput;
    };
  };
}
