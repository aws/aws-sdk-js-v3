// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDeviceResourcesInput, ListDeviceResourcesOutput } from "../models/models_0";
import { de_ListDeviceResourcesCommand, se_ListDeviceResourcesCommand } from "../protocols/Aws_restJson1";
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SnowDeviceManagement", "ListDeviceResources", {})
  .n("SnowDeviceManagementClient", "ListDeviceResourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListDeviceResourcesCommand)
  .de(de_ListDeviceResourcesCommand)
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
