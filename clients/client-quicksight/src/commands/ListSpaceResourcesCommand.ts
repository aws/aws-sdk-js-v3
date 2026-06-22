// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSpaceResourcesRequest, ListSpaceResourcesResponse } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListSpaceResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSpaceResourcesCommand}.
 */
export interface ListSpaceResourcesCommandInput extends ListSpaceResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListSpaceResourcesCommand}.
 */
export interface ListSpaceResourcesCommandOutput extends ListSpaceResourcesResponse, __MetadataBearer {}

/**
 * <p>Lists the resources in an Amazon QuickSight space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListSpaceResourcesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListSpaceResourcesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListSpaceResourcesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   SpaceId: "STRING_VALUE", // required
 * };
 * const command = new ListSpaceResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListSpaceResourcesResponse
 * //   spaceId: "STRING_VALUE", // required
 * //   spaceArn: "STRING_VALUE",
 * //   SpaceResources: [ // SpaceResourceSummaries // required
 * //     { // SpaceResourceSummary
 * //       ResourceType: "TOPIC" || "DASHBOARD" || "KNOWLEDGE_BASE" || "ACTION_CONNECTOR" || "DATA_SET", // required
 * //       ResourceDetails: { // SpaceQuickSightResourceDetails Union: only one key present
 * //         resourceArn: "STRING_VALUE",
 * //       },
 * //       ResourceName: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSpaceResourcesCommandInput - {@link ListSpaceResourcesCommandInput}
 * @returns {@link ListSpaceResourcesCommandOutput}
 * @see {@link ListSpaceResourcesCommandInput} for command's `input` shape.
 * @see {@link ListSpaceResourcesCommandOutput} for command's `response` shape.
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
export class ListSpaceResourcesCommand extends $Command
  .classBuilder<
    ListSpaceResourcesCommandInput,
    ListSpaceResourcesCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "ListSpaceResources", {})
  .n("QuickSightClient", "ListSpaceResourcesCommand")
  .sc(ListSpaceResources$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSpaceResourcesRequest;
      output: ListSpaceResourcesResponse;
    };
    sdk: {
      input: ListSpaceResourcesCommandInput;
      output: ListSpaceResourcesCommandOutput;
    };
  };
}
