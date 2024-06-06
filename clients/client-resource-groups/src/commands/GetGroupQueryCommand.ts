// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetGroupQueryInput, GetGroupQueryOutput } from "../models/models_0";
import { de_GetGroupQueryCommand, se_GetGroupQueryCommand } from "../protocols/Aws_restJson1";
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGroupQueryCommand}.
 */
export interface GetGroupQueryCommandInput extends GetGroupQueryInput {}
/**
 * @public
 *
 * The output of {@link GetGroupQueryCommand}.
 */
export interface GetGroupQueryCommandOutput extends GetGroupQueryOutput, __MetadataBearer {}

/**
 * <p>Retrieves the resource query associated with the specified resource group. For more
 *             information about resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create
 *                 a tag-based group in Resource Groups</a>.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:GetGroupQuery</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, GetGroupQueryCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, GetGroupQueryCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const input = { // GetGroupQueryInput
 *   GroupName: "STRING_VALUE",
 *   Group: "STRING_VALUE",
 * };
 * const command = new GetGroupQueryCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupQueryOutput
 * //   GroupQuery: { // GroupQuery
 * //     GroupName: "STRING_VALUE", // required
 * //     ResourceQuery: { // ResourceQuery
 * //       Type: "TAG_FILTERS_1_0" || "CLOUDFORMATION_STACK_1_0", // required
 * //       Query: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGroupQueryCommandInput - {@link GetGroupQueryCommandInput}
 * @returns {@link GetGroupQueryCommandOutput}
 * @see {@link GetGroupQueryCommandInput} for command's `input` shape.
 * @see {@link GetGroupQueryCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the specified resources don't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>You've exceeded throttling limits by making too many requests in a period of
 *             time.</p>
 *
 * @throws {@link ResourceGroupsServiceException}
 * <p>Base exception class for all service exceptions from ResourceGroups service.</p>
 *
 * @public
 */
export class GetGroupQueryCommand extends $Command
  .classBuilder<
    GetGroupQueryCommandInput,
    GetGroupQueryCommandOutput,
    ResourceGroupsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Ardi", "GetGroupQuery", {})
  .n("ResourceGroupsClient", "GetGroupQueryCommand")
  .f(void 0, void 0)
  .ser(se_GetGroupQueryCommand)
  .de(de_GetGroupQueryCommand)
  .build() {}
