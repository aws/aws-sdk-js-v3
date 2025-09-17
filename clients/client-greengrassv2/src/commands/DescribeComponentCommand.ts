// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { DescribeComponentRequest, DescribeComponentResponse } from "../models/models_0";
import { de_DescribeComponentCommand, se_DescribeComponentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeComponentCommand}.
 */
export interface DescribeComponentCommandInput extends DescribeComponentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeComponentCommand}.
 */
export interface DescribeComponentCommandOutput extends DescribeComponentResponse, __MetadataBearer {}

/**
 * <p>Retrieves metadata for a version of a component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, DescribeComponentCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, DescribeComponentCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // import type { GreengrassV2ClientConfig } from "@aws-sdk/client-greengrassv2";
 * const config = {}; // type is GreengrassV2ClientConfig
 * const client = new GreengrassV2Client(config);
 * const input = { // DescribeComponentRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DescribeComponentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeComponentResponse
 * //   arn: "STRING_VALUE",
 * //   componentName: "STRING_VALUE",
 * //   componentVersion: "STRING_VALUE",
 * //   creationTimestamp: new Date("TIMESTAMP"),
 * //   publisher: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   status: { // CloudComponentStatus
 * //     componentState: "REQUESTED" || "INITIATED" || "DEPLOYABLE" || "FAILED" || "DEPRECATED",
 * //     message: "STRING_VALUE",
 * //     errors: { // StringMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     vendorGuidance: "ACTIVE" || "DISCONTINUED" || "DELETED",
 * //     vendorGuidanceMessage: "STRING_VALUE",
 * //   },
 * //   platforms: [ // ComponentPlatformList
 * //     { // ComponentPlatform
 * //       name: "STRING_VALUE",
 * //       attributes: { // PlatformAttributesMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeComponentCommandInput - {@link DescribeComponentCommandInput}
 * @returns {@link DescribeComponentCommandOutput}
 * @see {@link DescribeComponentCommandInput} for command's `input` shape.
 * @see {@link DescribeComponentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota. For example, you might have exceeded the
 *       amount of times that you can retrieve device or deployment status per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 *
 * @public
 */
export class DescribeComponentCommand extends $Command
  .classBuilder<
    DescribeComponentCommandInput,
    DescribeComponentCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GreengrassV2", "DescribeComponent", {})
  .n("GreengrassV2Client", "DescribeComponentCommand")
  .f(void 0, void 0)
  .ser(se_DescribeComponentCommand)
  .de(de_DescribeComponentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeComponentRequest;
      output: DescribeComponentResponse;
    };
    sdk: {
      input: DescribeComponentCommandInput;
      output: DescribeComponentCommandOutput;
    };
  };
}
