// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVerifiedAccessGroupRequest, ModifyVerifiedAccessGroupResult } from "../models/models_6";
import { ModifyVerifiedAccessGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVerifiedAccessGroupCommand}.
 */
export interface ModifyVerifiedAccessGroupCommandInput extends ModifyVerifiedAccessGroupRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVerifiedAccessGroupCommand}.
 */
export interface ModifyVerifiedAccessGroupCommandOutput extends ModifyVerifiedAccessGroupResult, __MetadataBearer {}

/**
 * <p>Modifies the specified Amazon Web Services Verified Access group configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVerifiedAccessGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVerifiedAccessGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyVerifiedAccessGroupRequest
 *   VerifiedAccessGroupId: "STRING_VALUE", // required
 *   VerifiedAccessInstanceId: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new ModifyVerifiedAccessGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVerifiedAccessGroupResult
 * //   VerifiedAccessGroup: { // VerifiedAccessGroup
 * //     VerifiedAccessGroupId: "STRING_VALUE",
 * //     VerifiedAccessInstanceId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     VerifiedAccessGroupArn: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     LastUpdatedTime: "STRING_VALUE",
 * //     DeletionTime: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SseSpecification: { // VerifiedAccessSseSpecificationResponse
 * //       CustomerManagedKeyEnabled: true || false,
 * //       KmsKeyArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyVerifiedAccessGroupCommandInput - {@link ModifyVerifiedAccessGroupCommandInput}
 * @returns {@link ModifyVerifiedAccessGroupCommandOutput}
 * @see {@link ModifyVerifiedAccessGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyVerifiedAccessGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyVerifiedAccessGroupCommand extends $Command
  .classBuilder<
    ModifyVerifiedAccessGroupCommandInput,
    ModifyVerifiedAccessGroupCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyVerifiedAccessGroup", {})
  .n("EC2Client", "ModifyVerifiedAccessGroupCommand")
  .sc(ModifyVerifiedAccessGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVerifiedAccessGroupRequest;
      output: ModifyVerifiedAccessGroupResult;
    };
    sdk: {
      input: ModifyVerifiedAccessGroupCommandInput;
      output: ModifyVerifiedAccessGroupCommandOutput;
    };
  };
}
