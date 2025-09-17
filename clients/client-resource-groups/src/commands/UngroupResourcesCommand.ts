// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UngroupResourcesInput, UngroupResourcesOutput } from "../models/models_0";
import { de_UngroupResourcesCommand, se_UngroupResourcesCommand } from "../protocols/Aws_restJson1";
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UngroupResourcesCommand}.
 */
export interface UngroupResourcesCommandInput extends UngroupResourcesInput {}
/**
 * @public
 *
 * The output of {@link UngroupResourcesCommand}.
 */
export interface UngroupResourcesCommandOutput extends UngroupResourcesOutput, __MetadataBearer {}

/**
 * <p>Removes the specified resources from the specified group. This operation works only
 *             with static groups that you populated using the <a>GroupResources</a>
 *             operation. It doesn't work with any resource groups that are automatically populated by
 *             tag-based or CloudFormation stack-based queries.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:UngroupResources</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, UngroupResourcesCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, UngroupResourcesCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // UngroupResourcesInput
 *   Group: "STRING_VALUE", // required
 *   ResourceArns: [ // ResourceArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UngroupResourcesCommand(input);
 * const response = await client.send(command);
 * // { // UngroupResourcesOutput
 * //   Succeeded: [ // ResourceArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   Failed: [ // FailedResourceList
 * //     { // FailedResource
 * //       ResourceArn: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Pending: [ // PendingResourceList
 * //     { // PendingResource
 * //       ResourceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UngroupResourcesCommandInput - {@link UngroupResourcesCommandInput}
 * @returns {@link UngroupResourcesCommandOutput}
 * @see {@link UngroupResourcesCommandInput} for command's `input` shape.
 * @see {@link UngroupResourcesCommandOutput} for command's `response` shape.
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
export class UngroupResourcesCommand extends $Command
  .classBuilder<
    UngroupResourcesCommandInput,
    UngroupResourcesCommandOutput,
    ResourceGroupsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Ardi", "UngroupResources", {})
  .n("ResourceGroupsClient", "UngroupResourcesCommand")
  .f(void 0, void 0)
  .ser(se_UngroupResourcesCommand)
  .de(de_UngroupResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UngroupResourcesInput;
      output: UngroupResourcesOutput;
    };
    sdk: {
      input: UngroupResourcesCommandInput;
      output: UngroupResourcesCommandOutput;
    };
  };
}
