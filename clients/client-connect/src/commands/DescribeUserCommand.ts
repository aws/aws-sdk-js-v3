// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeUserRequest, DescribeUserResponse, DescribeUserResponseFilterSensitiveLog } from "../models/models_1";
import { de_DescribeUserCommand, se_DescribeUserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeUserCommand}.
 */
export interface DescribeUserCommandInput extends DescribeUserRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUserCommand}.
 */
export interface DescribeUserCommandOutput extends DescribeUserResponse, __MetadataBearer {}

/**
 * <p>Describes the specified user. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID in the Amazon Connect console</a> (it’s the final part of the ARN). The console does not display the
 *    user IDs. Instead, list the users and note the IDs provided in the output.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeUserCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeUserCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeUserRequest
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeUserCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserResponse
 * //   User: { // User
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Username: "STRING_VALUE",
 * //     IdentityInfo: { // UserIdentityInfo
 * //       FirstName: "STRING_VALUE",
 * //       LastName: "STRING_VALUE",
 * //       Email: "STRING_VALUE",
 * //       SecondaryEmail: "STRING_VALUE",
 * //       Mobile: "STRING_VALUE",
 * //     },
 * //     PhoneConfig: { // UserPhoneConfig
 * //       PhoneType: "SOFT_PHONE" || "DESK_PHONE", // required
 * //       AutoAccept: true || false,
 * //       AfterContactWorkTimeLimit: Number("int"),
 * //       DeskPhoneNumber: "STRING_VALUE",
 * //       PersistentConnection: true || false,
 * //     },
 * //     DirectoryUserId: "STRING_VALUE",
 * //     SecurityProfileIds: [ // SecurityProfileIds
 * //       "STRING_VALUE",
 * //     ],
 * //     RoutingProfileId: "STRING_VALUE",
 * //     HierarchyGroupId: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LastModifiedRegion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeUserCommandInput - {@link DescribeUserCommandInput}
 * @returns {@link DescribeUserCommandOutput}
 * @see {@link DescribeUserCommandInput} for command's `input` shape.
 * @see {@link DescribeUserCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DescribeUserCommand extends $Command
  .classBuilder<
    DescribeUserCommandInput,
    DescribeUserCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DescribeUser", {})
  .n("ConnectClient", "DescribeUserCommand")
  .f(void 0, DescribeUserResponseFilterSensitiveLog)
  .ser(se_DescribeUserCommand)
  .de(de_DescribeUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeUserRequest;
      output: DescribeUserResponse;
    };
    sdk: {
      input: DescribeUserCommandInput;
      output: DescribeUserCommandOutput;
    };
  };
}
