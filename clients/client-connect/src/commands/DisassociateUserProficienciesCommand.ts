// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateUserProficienciesRequest } from "../models/models_1";
import {
  de_DisassociateUserProficienciesCommand,
  se_DisassociateUserProficienciesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateUserProficienciesCommand}.
 */
export interface DisassociateUserProficienciesCommandInput extends DisassociateUserProficienciesRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateUserProficienciesCommand}.
 */
export interface DisassociateUserProficienciesCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates a set of proficiencies from a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateUserProficienciesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateUserProficienciesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // DisassociateUserProficienciesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   UserProficiencies: [ // UserProficiencyDisassociateList // required
 *     { // UserProficiencyDisassociate
 *       AttributeName: "STRING_VALUE", // required
 *       AttributeValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new DisassociateUserProficienciesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateUserProficienciesCommandInput - {@link DisassociateUserProficienciesCommandInput}
 * @returns {@link DisassociateUserProficienciesCommandOutput}
 * @see {@link DisassociateUserProficienciesCommandInput} for command's `input` shape.
 * @see {@link DisassociateUserProficienciesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DisassociateUserProficienciesCommand extends $Command
  .classBuilder<
    DisassociateUserProficienciesCommandInput,
    DisassociateUserProficienciesCommandOutput,
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
  .s("AmazonConnectService", "DisassociateUserProficiencies", {})
  .n("ConnectClient", "DisassociateUserProficienciesCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateUserProficienciesCommand)
  .de(de_DisassociateUserProficienciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateUserProficienciesRequest;
      output: {};
    };
    sdk: {
      input: DisassociateUserProficienciesCommandInput;
      output: DisassociateUserProficienciesCommandOutput;
    };
  };
}
