// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociateTrafficDistributionGroupUserRequest,
  AssociateTrafficDistributionGroupUserResponse,
} from "../models/models_0";
import {
  de_AssociateTrafficDistributionGroupUserCommand,
  se_AssociateTrafficDistributionGroupUserCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateTrafficDistributionGroupUserCommand}.
 */
export interface AssociateTrafficDistributionGroupUserCommandInput
  extends AssociateTrafficDistributionGroupUserRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTrafficDistributionGroupUserCommand}.
 */
export interface AssociateTrafficDistributionGroupUserCommandOutput
  extends AssociateTrafficDistributionGroupUserResponse,
    __MetadataBearer {}

/**
 * <p>Associates an agent with a traffic distribution group. This API can be called only in the
 *    Region where the traffic distribution group is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateTrafficDistributionGroupUserCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateTrafficDistributionGroupUserCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // AssociateTrafficDistributionGroupUserRequest
 *   TrafficDistributionGroupId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new AssociateTrafficDistributionGroupUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateTrafficDistributionGroupUserCommandInput - {@link AssociateTrafficDistributionGroupUserCommandInput}
 * @returns {@link AssociateTrafficDistributionGroupUserCommandOutput}
 * @see {@link AssociateTrafficDistributionGroupUserCommandInput} for command's `input` shape.
 * @see {@link AssociateTrafficDistributionGroupUserCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
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
 * @public
 */
export class AssociateTrafficDistributionGroupUserCommand extends $Command
  .classBuilder<
    AssociateTrafficDistributionGroupUserCommandInput,
    AssociateTrafficDistributionGroupUserCommandOutput,
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
  .s("AmazonConnectService", "AssociateTrafficDistributionGroupUser", {})
  .n("ConnectClient", "AssociateTrafficDistributionGroupUserCommand")
  .f(void 0, void 0)
  .ser(se_AssociateTrafficDistributionGroupUserCommand)
  .de(de_AssociateTrafficDistributionGroupUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateTrafficDistributionGroupUserRequest;
      output: {};
    };
    sdk: {
      input: AssociateTrafficDistributionGroupUserCommandInput;
      output: AssociateTrafficDistributionGroupUserCommandOutput;
    };
  };
}
