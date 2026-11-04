// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProvisioningClaimRequest, CreateProvisioningClaimResponse } from "../models/models_0";
import { CreateProvisioningClaim$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a provisioning claim.
 *
 * Requires permission to access the [CreateProvisioningClaim](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateProvisioningClaimCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateProvisioningClaimCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class CreateProvisioningClaimCommand extends command<CreateProvisioningClaimCommandInput, CreateProvisioningClaimCommandOutput>(
  _ep0,
  _mw0,
  "CreateProvisioningClaim",
  CreateProvisioningClaim$
) {
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
