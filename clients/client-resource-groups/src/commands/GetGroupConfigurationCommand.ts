// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetGroupConfigurationInput, GetGroupConfigurationOutput } from "../models/models_0";
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";
import { GetGroupConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGroupConfigurationCommand}.
 */
export interface GetGroupConfigurationCommandInput extends GetGroupConfigurationInput {}
/**
 * @public
 *
 * The output of {@link GetGroupConfigurationCommand}.
 */
export interface GetGroupConfigurationCommandOutput extends GetGroupConfigurationOutput, __MetadataBearer {}

/**
 * <p>Retrieves the service configuration associated with the specified resource group. For
 *             details about the service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:GetGroupConfiguration</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, GetGroupConfigurationCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, GetGroupConfigurationCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // GetGroupConfigurationInput
 *   Group: "STRING_VALUE",
 * };
 * const command = new GetGroupConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupConfigurationOutput
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
 * @param GetGroupConfigurationCommandInput - {@link GetGroupConfigurationCommandInput}
 * @returns {@link GetGroupConfigurationCommandOutput}
 * @see {@link GetGroupConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetGroupConfigurationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetGroupConfigurationCommand extends $Command
  .classBuilder<
    GetGroupConfigurationCommandInput,
    GetGroupConfigurationCommandOutput,
    ResourceGroupsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Ardi", "GetGroupConfiguration", {})
  .n("ResourceGroupsClient", "GetGroupConfigurationCommand")
  .sc(GetGroupConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGroupConfigurationInput;
      output: GetGroupConfigurationOutput;
    };
    sdk: {
      input: GetGroupConfigurationCommandInput;
      output: GetGroupConfigurationCommandOutput;
    };
  };
}
