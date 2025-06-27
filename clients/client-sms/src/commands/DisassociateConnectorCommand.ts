// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateConnectorRequest, DisassociateConnectorResponse } from "../models/models_0";
import { de_DisassociateConnectorCommand, se_DisassociateConnectorCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateConnectorCommand}.
 */
export interface DisassociateConnectorCommandInput extends DisassociateConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateConnectorCommand}.
 */
export interface DisassociateConnectorCommandOutput extends DisassociateConnectorResponse, __MetadataBearer {}

/**
 * <p>Disassociates the specified connector from Server Migration Service.</p>
 *          <p>After you disassociate a connector, it is no longer available to support
 *             replication jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DisassociateConnectorCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DisassociateConnectorCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // DisassociateConnectorRequest
 *   connectorId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateConnectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateConnectorCommandInput - {@link DisassociateConnectorCommandInput}
 * @returns {@link DisassociateConnectorCommandOutput}
 * @see {@link DisassociateConnectorCommandInput} for command's `input` shape.
 * @see {@link DisassociateConnectorCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 *
 * @public
 */
export class DisassociateConnectorCommand extends $Command
  .classBuilder<
    DisassociateConnectorCommandInput,
    DisassociateConnectorCommandOutput,
    SMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSServerMigrationService_V2016_10_24", "DisassociateConnector", {})
  .n("SMSClient", "DisassociateConnectorCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateConnectorCommand)
  .de(de_DisassociateConnectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateConnectorRequest;
      output: {};
    };
    sdk: {
      input: DisassociateConnectorCommandInput;
      output: DisassociateConnectorCommandOutput;
    };
  };
}
