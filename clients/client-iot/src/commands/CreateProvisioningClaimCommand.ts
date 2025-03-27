// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  CreateProvisioningClaimRequest,
  CreateProvisioningClaimResponse,
  CreateProvisioningClaimResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateProvisioningClaimCommand, se_CreateProvisioningClaimCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProvisioningClaimCommand}.
 */
export interface CreateProvisioningClaimCommandInput extends CreateProvisioningClaimRequest {}
/**
 * @public
 *
 * The output of {@link CreateProvisioningClaimCommand}.
 */
export interface CreateProvisioningClaimCommandOutput extends CreateProvisioningClaimResponse, __MetadataBearer {}

/**
 * <p>Creates a provisioning claim.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningClaim</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateProvisioningClaimCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateProvisioningClaimCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreateProvisioningClaimRequest
 *   templateName: "STRING_VALUE", // required
 * };
 * const command = new CreateProvisioningClaimCommand(input);
 * const response = await client.send(command);
 * // { // CreateProvisioningClaimResponse
 * //   certificateId: "STRING_VALUE",
 * //   certificatePem: "STRING_VALUE",
 * //   keyPair: { // KeyPair
 * //     PublicKey: "STRING_VALUE",
 * //     PrivateKey: "STRING_VALUE",
 * //   },
 * //   expiration: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateProvisioningClaimCommandInput - {@link CreateProvisioningClaimCommandInput}
 * @returns {@link CreateProvisioningClaimCommandOutput}
 * @see {@link CreateProvisioningClaimCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningClaimCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class CreateProvisioningClaimCommand extends $Command
  .classBuilder<
    CreateProvisioningClaimCommandInput,
    CreateProvisioningClaimCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "CreateProvisioningClaim", {})
  .n("IoTClient", "CreateProvisioningClaimCommand")
  .f(void 0, CreateProvisioningClaimResponseFilterSensitiveLog)
  .ser(se_CreateProvisioningClaimCommand)
  .de(de_CreateProvisioningClaimCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProvisioningClaimRequest;
      output: CreateProvisioningClaimResponse;
    };
    sdk: {
      input: CreateProvisioningClaimCommandInput;
      output: CreateProvisioningClaimCommandOutput;
    };
  };
}
