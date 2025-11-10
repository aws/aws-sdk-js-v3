// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListIdentityPropagationConfigsRequest, ListIdentityPropagationConfigsResponse } from "../models/models_5";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListIdentityPropagationConfigs } from "../schemas/schemas_0";

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
 * <p>Lists all services and authorized targets that the Quick Sight IAM Identity Center application can access.</p>
 *          <p>This operation is only supported for Quick Sight accounts that use IAM Identity Center.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListIdentityPropagationConfigsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListIdentityPropagationConfigsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
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
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "ListIdentityPropagationConfigs", {})
  .n("QuickSightClient", "ListIdentityPropagationConfigsCommand")
  .sc(ListIdentityPropagationConfigs)
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
