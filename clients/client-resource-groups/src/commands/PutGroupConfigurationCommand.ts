// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutGroupConfigurationInput, PutGroupConfigurationOutput } from "../models/models_0";
import type {
  ResourceGroupsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsClient";
import { PutGroupConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutGroupConfigurationCommand}.
 */
export interface PutGroupConfigurationCommandInput extends PutGroupConfigurationInput {}
/**
 * @public
 *
 * The output of {@link PutGroupConfigurationCommand}.
 */
export interface PutGroupConfigurationCommandOutput extends PutGroupConfigurationOutput, __MetadataBearer {}

/**
 * <p>Attaches a service configuration to the specified group. This occurs asynchronously,
 *             and can take time to complete. You can use <a>GetGroupConfiguration</a> to
 *             check the status of the update.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:PutGroupConfiguration</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, PutGroupConfigurationCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, PutGroupConfigurationCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // PutGroupConfigurationInput
 *   Group: "STRING_VALUE",
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
 * };
 * const command = new PutGroupConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutGroupConfigurationCommandInput - {@link PutGroupConfigurationCommandInput}
 * @returns {@link PutGroupConfigurationCommandOutput}
 * @see {@link PutGroupConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutGroupConfigurationCommandOutput} for command's `response` shape.
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
export class PutGroupConfigurationCommand extends $Command
  .classBuilder<
    PutGroupConfigurationCommandInput,
    PutGroupConfigurationCommandOutput,
    ResourceGroupsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Ardi", "PutGroupConfiguration", {})
  .n("ResourceGroupsClient", "PutGroupConfigurationCommand")
  .sc(PutGroupConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutGroupConfigurationInput;
      output: {};
    };
    sdk: {
      input: PutGroupConfigurationCommandInput;
      output: PutGroupConfigurationCommandOutput;
    };
  };
}
