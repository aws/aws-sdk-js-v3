// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetConnectorRequest, GetConnectorResponse } from "../models/models_0";
import { PcaConnectorScepClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorScepClient";
import { de_GetConnectorCommand, se_GetConnectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConnectorCommand}.
 */
export interface GetConnectorCommandInput extends GetConnectorRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectorCommand}.
 */
export interface GetConnectorCommandOutput extends GetConnectorResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about the specified <a href="https://docs.aws.amazon.com/C4SCEP_API/pca-connector-scep/latest/APIReference/API_Connector.html">Connector</a>. Calling this action returns important details about the connector, such as the public SCEP URL where your clients can request certificates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorScepClient, GetConnectorCommand } from "@aws-sdk/client-pca-connector-scep"; // ES Modules import
 * // const { PcaConnectorScepClient, GetConnectorCommand } = require("@aws-sdk/client-pca-connector-scep"); // CommonJS import
 * // import type { PcaConnectorScepClientConfig } from "@aws-sdk/client-pca-connector-scep";
 * const config = {}; // type is PcaConnectorScepClientConfig
 * const client = new PcaConnectorScepClient(config);
 * const input = { // GetConnectorRequest
 *   ConnectorArn: "STRING_VALUE", // required
 * };
 * const command = new GetConnectorCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectorResponse
 * //   Connector: { // Connector
 * //     Arn: "STRING_VALUE",
 * //     CertificateAuthorityArn: "STRING_VALUE",
 * //     Type: "GENERAL_PURPOSE" || "INTUNE",
 * //     MobileDeviceManagement: { // MobileDeviceManagement Union: only one key present
 * //       Intune: { // IntuneConfiguration
 * //         AzureApplicationId: "STRING_VALUE", // required
 * //         Domain: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     OpenIdConfiguration: { // OpenIdConfiguration
 * //       Issuer: "STRING_VALUE",
 * //       Subject: "STRING_VALUE",
 * //       Audience: "STRING_VALUE",
 * //     },
 * //     Status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //     StatusReason: "INTERNAL_FAILURE" || "PRIVATECA_ACCESS_DENIED" || "PRIVATECA_INVALID_STATE" || "PRIVATECA_RESOURCE_NOT_FOUND",
 * //     Endpoint: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConnectorCommandInput - {@link GetConnectorCommandInput}
 * @returns {@link GetConnectorCommandOutput}
 * @see {@link GetConnectorCommandInput} for command's `input` shape.
 * @see {@link GetConnectorCommandOutput} for command's `response` shape.
 * @see {@link PcaConnectorScepClientResolvedConfig | config} for PcaConnectorScepClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You can receive this error if you attempt to perform an operation and you don't have
 *       the required permissions. This can be caused by insufficient permissions in policies
 *       attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen
 *       because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP)
 *       that affects your Amazon Web Services account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with
 *       an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent resource. The resource might be incorrectly specified, or it might have a status other than <code>ACTIVE</code>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occurred. For example, invalid characters in a name tag, or an invalid pagination token.</p>
 *
 * @throws {@link PcaConnectorScepServiceException}
 * <p>Base exception class for all service exceptions from PcaConnectorScep service.</p>
 *
 *
 * @public
 */
export class GetConnectorCommand extends $Command
  .classBuilder<
    GetConnectorCommandInput,
    GetConnectorCommandOutput,
    PcaConnectorScepClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PcaConnectorScepClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PcaConnectorScep", "GetConnector", {})
  .n("PcaConnectorScepClient", "GetConnectorCommand")
  .f(void 0, void 0)
  .ser(se_GetConnectorCommand)
  .de(de_GetConnectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectorRequest;
      output: GetConnectorResponse;
    };
    sdk: {
      input: GetConnectorCommandInput;
      output: GetConnectorCommandOutput;
    };
  };
}
