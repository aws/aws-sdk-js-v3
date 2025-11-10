// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDeviceResourcesInput, ListDeviceResourcesOutput } from "../models/models_0";
import { ListDeviceResources } from "../schemas/schemas_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowDeviceManagementClientResolvedConfig,
} from "../SnowDeviceManagementClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeviceResourcesCommand}.
 */
export interface ListDeviceResourcesCommandInput extends ListDeviceResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListDeviceResourcesCommand}.
 */
export interface ListDeviceResourcesCommandOutput extends ListDeviceResourcesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of the Amazon Web Services resources available for a device. Currently, Amazon EC2 instances are the only supported resource type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowDeviceManagementClient, ListDeviceResourcesCommand } from "@aws-sdk/client-snow-device-management"; // ES Modules import
 * // const { SnowDeviceManagementClient, ListDeviceResourcesCommand } = require("@aws-sdk/client-snow-device-management"); // CommonJS import
 * // import type { SnowDeviceManagementClientConfig } from "@aws-sdk/client-snow-device-management";
 * const config = {}; // type is SnowDeviceManagementClientConfig
 * const client = new SnowDeviceManagementClient(config);
 * const input = { // ListDeviceResourcesInput
 *   managedDeviceId: "STRING_VALUE", // required
 *   type: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDeviceResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListDeviceResourcesOutput
 * //   resources: [ // ResourceSummaryList
 * //     { // ResourceSummary
 * //       resourceType: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeviceResourcesCommandInput - {@link ListDeviceResourcesCommandInput}
 * @returns {@link ListDeviceResourcesCommandOutput}
 * @see {@link ListDeviceResourcesCommandInput} for command's `input` shape.
 * @see {@link ListDeviceResourcesCommandOutput} for command's `response` shape.
 * @see {@link SnowDeviceManagementClientResolvedConfig | config} for SnowDeviceManagementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SnowDeviceManagementServiceException}
 * <p>Base exception class for all service exceptions from SnowDeviceManagement service.</p>
 *
 *
 * @public
 */
export class ListDeviceResourcesCommand extends $Command
  .classBuilder<
    ListDeviceResourcesCommandInput,
    ListDeviceResourcesCommandOutput,
    SnowDeviceManagementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowDeviceManagementClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SnowDeviceManagement", "ListDeviceResources", {})
  .n("SnowDeviceManagementClient", "ListDeviceResourcesCommand")
  .sc(ListDeviceResources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeviceResourcesInput;
      output: ListDeviceResourcesOutput;
    };
    sdk: {
      input: ListDeviceResourcesCommandInput;
      output: ListDeviceResourcesCommandOutput;
    };
  };
}
