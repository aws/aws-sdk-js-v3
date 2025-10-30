// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import {
  CreateAccountAssociationRequest,
  CreateAccountAssociationRequestFilterSensitiveLog,
  CreateAccountAssociationResponse,
  CreateAccountAssociationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAccountAssociationCommand, se_CreateAccountAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccountAssociationCommand}.
 */
export interface CreateAccountAssociationCommandInput extends CreateAccountAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccountAssociationCommand}.
 */
export interface CreateAccountAssociationCommandOutput extends CreateAccountAssociationResponse, __MetadataBearer {}

/**
 * <p>Creates a new account association via the destination id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, CreateAccountAssociationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, CreateAccountAssociationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // CreateAccountAssociationRequest
 *   ClientToken: "STRING_VALUE",
 *   ConnectorDestinationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAccountAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccountAssociationResponse
 * //   OAuthAuthorizationUrl: "STRING_VALUE", // required
 * //   AccountAssociationId: "STRING_VALUE", // required
 * //   AssociationState: "ASSOCIATION_IN_PROGRESS" || "ASSOCIATION_FAILED" || "ASSOCIATION_SUCCEEDED" || "ASSOCIATION_DELETING" || "REFRESH_TOKEN_EXPIRED", // required
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAccountAssociationCommandInput - {@link CreateAccountAssociationCommandInput}
 * @returns {@link CreateAccountAssociationCommandOutput}
 * @see {@link CreateAccountAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateAccountAssociationCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict with the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
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
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class CreateAccountAssociationCommand extends $Command
  .classBuilder<
    CreateAccountAssociationCommandInput,
    CreateAccountAssociationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotManagedIntegrations", "CreateAccountAssociation", {})
  .n("IoTManagedIntegrationsClient", "CreateAccountAssociationCommand")
  .f(CreateAccountAssociationRequestFilterSensitiveLog, CreateAccountAssociationResponseFilterSensitiveLog)
  .ser(se_CreateAccountAssociationCommand)
  .de(de_CreateAccountAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccountAssociationRequest;
      output: CreateAccountAssociationResponse;
    };
    sdk: {
      input: CreateAccountAssociationCommandInput;
      output: CreateAccountAssociationCommandOutput;
    };
  };
}
