// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateTrafficDistributionGroupUserRequest,
  DisassociateTrafficDistributionGroupUserResponse,
} from "../models/models_1";
import {
  de_DisassociateTrafficDistributionGroupUserCommand,
  se_DisassociateTrafficDistributionGroupUserCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateTrafficDistributionGroupUserCommand}.
 */
export interface DisassociateTrafficDistributionGroupUserCommandInput
  extends DisassociateTrafficDistributionGroupUserRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateTrafficDistributionGroupUserCommand}.
 */
export interface DisassociateTrafficDistributionGroupUserCommandOutput
  extends DisassociateTrafficDistributionGroupUserResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates an agent from a traffic distribution group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateTrafficDistributionGroupUserCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateTrafficDistributionGroupUserCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DisassociateTrafficDistributionGroupUserRequest
 *   TrafficDistributionGroupId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateTrafficDistributionGroupUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateTrafficDistributionGroupUserCommandInput - {@link DisassociateTrafficDistributionGroupUserCommandInput}
 * @returns {@link DisassociateTrafficDistributionGroupUserCommandOutput}
 * @see {@link DisassociateTrafficDistributionGroupUserCommandInput} for command's `input` shape.
 * @see {@link DisassociateTrafficDistributionGroupUserCommandOutput} for command's `response` shape.
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
export class DisassociateTrafficDistributionGroupUserCommand extends $Command
  .classBuilder<
    DisassociateTrafficDistributionGroupUserCommandInput,
    DisassociateTrafficDistributionGroupUserCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DisassociateTrafficDistributionGroupUser", {})
  .n("ConnectClient", "DisassociateTrafficDistributionGroupUserCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateTrafficDistributionGroupUserCommand)
  .de(de_DisassociateTrafficDistributionGroupUserCommand)
  .build() {}
