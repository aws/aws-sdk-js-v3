// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { ListKxScalingGroupsRequest, ListKxScalingGroupsResponse } from "../models/models_0";
import { ListKxScalingGroups } from "../schemas/schemas_5_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKxScalingGroupsCommand}.
 */
export interface ListKxScalingGroupsCommandInput extends ListKxScalingGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListKxScalingGroupsCommand}.
 */
export interface ListKxScalingGroupsCommandOutput extends ListKxScalingGroupsResponse, __MetadataBearer {}

/**
 * <p>
 * Returns a list of scaling groups in a kdb environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, ListKxScalingGroupsCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, ListKxScalingGroupsCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // ListKxScalingGroupsRequest
 *   environmentId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListKxScalingGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListKxScalingGroupsResponse
 * //   scalingGroups: [ // KxScalingGroupList
 * //     { // KxScalingGroup
 * //       scalingGroupName: "STRING_VALUE",
 * //       hostType: "STRING_VALUE",
 * //       clusters: [ // KxClusterNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       availabilityZoneId: "STRING_VALUE",
 * //       status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //       statusReason: "STRING_VALUE",
 * //       lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //       createdTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKxScalingGroupsCommandInput - {@link ListKxScalingGroupsCommandInput}
 * @returns {@link ListKxScalingGroupsCommandOutput}
 * @see {@link ListKxScalingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListKxScalingGroupsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 *
 * @public
 */
export class ListKxScalingGroupsCommand extends $Command
  .classBuilder<
    ListKxScalingGroupsCommandInput,
    ListKxScalingGroupsCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "ListKxScalingGroups", {})
  .n("FinspaceClient", "ListKxScalingGroupsCommand")
  .sc(ListKxScalingGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKxScalingGroupsRequest;
      output: ListKxScalingGroupsResponse;
    };
    sdk: {
      input: ListKxScalingGroupsCommandInput;
      output: ListKxScalingGroupsCommandOutput;
    };
  };
}
