// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetManagedResourceVisibilityRequest, GetManagedResourceVisibilityResult } from "../models/models_6";
import { GetManagedResourceVisibility$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetManagedResourceVisibilityCommand}.
 */
export interface GetManagedResourceVisibilityCommandInput extends GetManagedResourceVisibilityRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedResourceVisibilityCommand}.
 */
export interface GetManagedResourceVisibilityCommandOutput extends GetManagedResourceVisibilityResult, __MetadataBearer {}

/**
 * <p>Retrieves the managed resource visibility configuration for the account. The response
 *             indicates whether managed resources are hidden or visible by default.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetManagedResourceVisibilityCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetManagedResourceVisibilityCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetManagedResourceVisibilityRequest
 *   DryRun: true || false,
 * };
 * const command = new GetManagedResourceVisibilityCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedResourceVisibilityResult
 * //   Visibility: { // ManagedResourceVisibilitySettings
 * //     DefaultVisibility: "hidden" || "visible",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetManagedResourceVisibilityCommandInput - {@link GetManagedResourceVisibilityCommandInput}
 * @returns {@link GetManagedResourceVisibilityCommandOutput}
 * @see {@link GetManagedResourceVisibilityCommandInput} for command's `input` shape.
 * @see {@link GetManagedResourceVisibilityCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetManagedResourceVisibilityCommand extends $Command
  .classBuilder<
    GetManagedResourceVisibilityCommandInput,
    GetManagedResourceVisibilityCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetManagedResourceVisibility", {})
  .n("EC2Client", "GetManagedResourceVisibilityCommand")
  .sc(GetManagedResourceVisibility$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedResourceVisibilityRequest;
      output: GetManagedResourceVisibilityResult;
    };
    sdk: {
      input: GetManagedResourceVisibilityCommandInput;
      output: GetManagedResourceVisibilityCommandOutput;
    };
  };
}
