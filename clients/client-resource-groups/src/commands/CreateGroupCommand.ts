// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateGroupInput, CreateGroupOutput } from "../models/models_0";
import type {
  ResourceGroupsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsClient";
import { CreateGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGroupCommand}.
 */
export interface CreateGroupCommandInput extends CreateGroupInput {}
/**
 * @public
 *
 * The output of {@link CreateGroupCommand}.
 */
export interface CreateGroupCommandOutput extends CreateGroupOutput, __MetadataBearer {}

/**
 * <p>Creates a resource group with the specified name and description. You can optionally
 *             include either a resource query or a service configuration. For more information about
 *             constructing a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/getting_started-query.html">Build queries and groups in
 *                 Resource Groups</a> in the <i>Resource Groups User Guide</i>. For more information
 *             about service-linked groups and service configurations, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:CreateGroup</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, CreateGroupCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, CreateGroupCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // CreateGroupInput
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ResourceQuery: { // ResourceQuery
 *     Type: "TAG_FILTERS_1_0" || "CLOUDFORMATION_STACK_1_0", // required
 *     Query: "STRING_VALUE", // required
 *   },
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Configuration: [ // GroupConfigurationList
 *     { // GroupConfigurationItem
 *       Type: "STRING_VALUE", // required
 *       Parameters: [ // GroupParameterList
 *         { // GroupConfigurationParameter
 *           Name: "STRING_VALUE", // required
 *           Values: [ // GroupConfigurationParameterValueList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *   ],
 *   Criticality: Number("int"),
 *   Owner: "STRING_VALUE",
 *   DisplayName: "STRING_VALUE",
 * };
 * const command = new CreateGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateGroupOutput
 * //   Group: { // Group
 * //     GroupArn: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Criticality: Number("int"),
 * //     Owner: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     ApplicationTag: { // ApplicationTag
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   ResourceQuery: { // ResourceQuery
 * //     Type: "TAG_FILTERS_1_0" || "CLOUDFORMATION_STACK_1_0", // required
 * //     Query: "STRING_VALUE", // required
 * //   },
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   GroupConfiguration: { // GroupConfiguration
 * //     Configuration: [ // GroupConfigurationList
 * //       { // GroupConfigurationItem
 * //         Type: "STRING_VALUE", // required
 * //         Parameters: [ // GroupParameterList
 * //           { // GroupConfigurationParameter
 * //             Name: "STRING_VALUE", // required
 * //             Values: [ // GroupConfigurationParameterValueList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     ProposedConfiguration: [
 * //       {
 * //         Type: "STRING_VALUE", // required
 * //         Parameters: [
 * //           {
 * //             Name: "STRING_VALUE", // required
 * //             Values: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     Status: "UPDATING" || "UPDATE_COMPLETE" || "UPDATE_FAILED",
 * //     FailureReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateGroupCommandInput - {@link CreateGroupCommandInput}
 * @returns {@link CreateGroupCommandOutput}
 * @see {@link CreateGroupCommandInput} for command's `input` shape.
 * @see {@link CreateGroupCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for ResourceGroupsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request includes one or more parameters that violate validation rules.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request. Check permissions.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error occurred while processing the request. Try again later.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>The request uses an HTTP method that isn't allowed for the specified resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>You've exceeded throttling limits by making too many requests in a period of
 *             time.</p>
 *
 * @throws {@link ResourceGroupsServiceException}
 * <p>Base exception class for all service exceptions from ResourceGroups service.</p>
 *
 *
 * @public
 */
export class CreateGroupCommand extends $Command
  .classBuilder<
    CreateGroupCommandInput,
    CreateGroupCommandOutput,
    ResourceGroupsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Ardi", "CreateGroup", {})
  .n("ResourceGroupsClient", "CreateGroupCommand")
  .sc(CreateGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGroupInput;
      output: CreateGroupOutput;
    };
    sdk: {
      input: CreateGroupCommandInput;
      output: CreateGroupCommandOutput;
    };
  };
}
