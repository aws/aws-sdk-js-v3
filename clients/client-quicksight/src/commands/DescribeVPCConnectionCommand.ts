// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVPCConnectionRequest, DescribeVPCConnectionResponse } from "../models/models_4";
import { de_DescribeVPCConnectionCommand, se_DescribeVPCConnectionCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVPCConnectionCommand}.
 */
export interface DescribeVPCConnectionCommandInput extends DescribeVPCConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVPCConnectionCommand}.
 */
export interface DescribeVPCConnectionCommandOutput extends DescribeVPCConnectionResponse, __MetadataBearer {}

/**
 * <p>Describes a VPC connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeVPCConnectionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeVPCConnectionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QuickSightClient(config);
 * const input = { // DescribeVPCConnectionRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   VPCConnectionId: "STRING_VALUE", // required
 * };
 * const command = new DescribeVPCConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVPCConnectionResponse
 * //   VPCConnection: { // VPCConnection
 * //     VPCConnectionId: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     VPCId: "STRING_VALUE",
 * //     SecurityGroupIds: [ // SecurityGroupIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     DnsResolvers: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     Status: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETION_IN_PROGRESS" || "DELETION_FAILED" || "DELETED",
 * //     AvailabilityStatus: "AVAILABLE" || "UNAVAILABLE" || "PARTIALLY_AVAILABLE",
 * //     NetworkInterfaces: [ // NetworkInterfaceList
 * //       { // NetworkInterface
 * //         SubnetId: "STRING_VALUE",
 * //         AvailabilityZone: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //         Status: "CREATING" || "AVAILABLE" || "CREATION_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETED" || "DELETION_FAILED" || "DELETION_SCHEDULED" || "ATTACHMENT_FAILED_ROLLBACK_FAILED",
 * //         NetworkInterfaceId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RoleArn: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeVPCConnectionCommandInput - {@link DescribeVPCConnectionCommandInput}
 * @returns {@link DescribeVPCConnectionCommandOutput}
 * @see {@link DescribeVPCConnectionCommandInput} for command's `input` shape.
 * @see {@link DescribeVPCConnectionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 * @public
 */
export class DescribeVPCConnectionCommand extends $Command
  .classBuilder<
    DescribeVPCConnectionCommandInput,
    DescribeVPCConnectionCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DescribeVPCConnection", {})
  .n("QuickSightClient", "DescribeVPCConnectionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVPCConnectionCommand)
  .de(de_DescribeVPCConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVPCConnectionRequest;
      output: DescribeVPCConnectionResponse;
    };
    sdk: {
      input: DescribeVPCConnectionCommandInput;
      output: DescribeVPCConnectionCommandOutput;
    };
  };
}
