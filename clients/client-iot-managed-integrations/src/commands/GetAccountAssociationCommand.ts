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
  GetAccountAssociationRequest,
  GetAccountAssociationResponse,
  GetAccountAssociationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetAccountAssociationCommand, se_GetAccountAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountAssociationCommand}.
 */
export interface GetAccountAssociationCommandInput extends GetAccountAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountAssociationCommand}.
 */
export interface GetAccountAssociationCommandOutput extends GetAccountAssociationResponse, __MetadataBearer {}

/**
 * <p>Get an account association for an Amazon Web Services account linked to a customer-managed destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetAccountAssociationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetAccountAssociationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetAccountAssociationRequest
 *   AccountAssociationId: "STRING_VALUE", // required
 * };
 * const command = new GetAccountAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountAssociationResponse
 * //   AccountAssociationId: "STRING_VALUE", // required
 * //   AssociationState: "ASSOCIATION_IN_PROGRESS" || "ASSOCIATION_FAILED" || "ASSOCIATION_SUCCEEDED" || "ASSOCIATION_DELETING" || "REFRESH_TOKEN_EXPIRED", // required
 * //   ErrorMessage: "STRING_VALUE",
 * //   ConnectorDestinationId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   OAuthAuthorizationUrl: "STRING_VALUE", // required
 * //   Tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountAssociationCommandInput - {@link GetAccountAssociationCommandInput}
 * @returns {@link GetAccountAssociationCommandOutput}
 * @see {@link GetAccountAssociationCommandInput} for command's `input` shape.
 * @see {@link GetAccountAssociationCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
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
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class GetAccountAssociationCommand extends $Command
  .classBuilder<
    GetAccountAssociationCommandInput,
    GetAccountAssociationCommandOutput,
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
  .s("IotManagedIntegrations", "GetAccountAssociation", {})
  .n("IoTManagedIntegrationsClient", "GetAccountAssociationCommand")
  .f(void 0, GetAccountAssociationResponseFilterSensitiveLog)
  .ser(se_GetAccountAssociationCommand)
  .de(de_GetAccountAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccountAssociationRequest;
      output: GetAccountAssociationResponse;
    };
    sdk: {
      input: GetAccountAssociationCommandInput;
      output: GetAccountAssociationCommandOutput;
    };
  };
}
