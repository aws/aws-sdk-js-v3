// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNetworkInterfacePermissionRequest, CreateNetworkInterfacePermissionResult } from "../models/models_2";
import {
  de_CreateNetworkInterfacePermissionCommand,
  se_CreateNetworkInterfacePermissionCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkInterfacePermissionCommand}.
 */
export interface CreateNetworkInterfacePermissionCommandInput extends CreateNetworkInterfacePermissionRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkInterfacePermissionCommand}.
 */
export interface CreateNetworkInterfacePermissionCommandOutput
  extends CreateNetworkInterfacePermissionResult,
    __MetadataBearer {}

/**
 * <p>Grants an Amazon Web Services-authorized account permission to attach the specified network interface to
 *             an instance in their account.</p>
 *          <p>You can grant permission to a single Amazon Web Services account only, and only one account at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkInterfacePermissionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkInterfacePermissionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateNetworkInterfacePermissionRequest
 *   NetworkInterfaceId: "STRING_VALUE", // required
 *   AwsAccountId: "STRING_VALUE",
 *   AwsService: "STRING_VALUE",
 *   Permission: "INSTANCE-ATTACH" || "EIP-ASSOCIATE", // required
 *   DryRun: true || false,
 * };
 * const command = new CreateNetworkInterfacePermissionCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkInterfacePermissionResult
 * //   InterfacePermission: { // NetworkInterfacePermission
 * //     NetworkInterfacePermissionId: "STRING_VALUE",
 * //     NetworkInterfaceId: "STRING_VALUE",
 * //     AwsAccountId: "STRING_VALUE",
 * //     AwsService: "STRING_VALUE",
 * //     Permission: "INSTANCE-ATTACH" || "EIP-ASSOCIATE",
 * //     PermissionState: { // NetworkInterfacePermissionState
 * //       State: "pending" || "granted" || "revoking" || "revoked",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateNetworkInterfacePermissionCommandInput - {@link CreateNetworkInterfacePermissionCommandInput}
 * @returns {@link CreateNetworkInterfacePermissionCommandOutput}
 * @see {@link CreateNetworkInterfacePermissionCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkInterfacePermissionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateNetworkInterfacePermissionCommand extends $Command
  .classBuilder<
    CreateNetworkInterfacePermissionCommandInput,
    CreateNetworkInterfacePermissionCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CreateNetworkInterfacePermission", {})
  .n("EC2Client", "CreateNetworkInterfacePermissionCommand")
  .f(void 0, void 0)
  .ser(se_CreateNetworkInterfacePermissionCommand)
  .de(de_CreateNetworkInterfacePermissionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNetworkInterfacePermissionRequest;
      output: CreateNetworkInterfacePermissionResult;
    };
    sdk: {
      input: CreateNetworkInterfacePermissionCommandInput;
      output: CreateNetworkInterfacePermissionCommandOutput;
    };
  };
}
