// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateSpaceResourcesRequest, UpdateSpaceResourcesResponse } from "../models/models_5";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateSpaceResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSpaceResourcesCommand}.
 */
export interface UpdateSpaceResourcesCommandInput extends UpdateSpaceResourcesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSpaceResourcesCommand}.
 */
export interface UpdateSpaceResourcesCommandOutput extends UpdateSpaceResourcesResponse, __MetadataBearer {}

/**
 * <p>Adds or removes resources from an Amazon QuickSight space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateSpaceResourcesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateSpaceResourcesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateSpaceResourcesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   SpaceId: "STRING_VALUE", // required
 *   AddResources: [ // SpaceResourceOperations
 *     { // SpaceResourceOperation
 *       ResourceType: "TOPIC" || "DASHBOARD" || "KNOWLEDGE_BASE" || "ACTION_CONNECTOR" || "DATA_SET", // required
 *       ResourceDetails: { // SpaceQuickSightResourceDetails Union: only one key present
 *         resourceArn: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   RemoveResources: [
 *     {
 *       ResourceType: "TOPIC" || "DASHBOARD" || "KNOWLEDGE_BASE" || "ACTION_CONNECTOR" || "DATA_SET", // required
 *       ResourceDetails: {//  Union: only one key present
 *         resourceArn: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateSpaceResourcesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSpaceResourcesResponse
 * //   spaceId: "STRING_VALUE", // required
 * //   spaceArn: "STRING_VALUE",
 * //   FailedResourceOperations: [ // FailedSpaceResourceOperations
 * //     { // FailedSpaceResourceOperation
 * //       ResourceType: "TOPIC" || "DASHBOARD" || "KNOWLEDGE_BASE" || "ACTION_CONNECTOR" || "DATA_SET", // required
 * //       ResourceDetails: { // SpaceQuickSightResourceDetails Union: only one key present
 * //         resourceArn: "STRING_VALUE",
 * //       },
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSpaceResourcesCommandInput - {@link UpdateSpaceResourcesCommandInput}
 * @returns {@link UpdateSpaceResourcesCommandOutput}
 * @see {@link UpdateSpaceResourcesCommandInput} for command's `input` shape.
 * @see {@link UpdateSpaceResourcesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
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
export class UpdateSpaceResourcesCommand extends $Command
  .classBuilder<
    UpdateSpaceResourcesCommandInput,
    UpdateSpaceResourcesCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "UpdateSpaceResources", {})
  .n("QuickSightClient", "UpdateSpaceResourcesCommand")
  .sc(UpdateSpaceResources$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSpaceResourcesRequest;
      output: UpdateSpaceResourcesResponse;
    };
    sdk: {
      input: UpdateSpaceResourcesCommandInput;
      output: UpdateSpaceResourcesCommandOutput;
    };
  };
}
