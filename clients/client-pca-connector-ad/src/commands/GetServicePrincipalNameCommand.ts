// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetServicePrincipalNameRequest, GetServicePrincipalNameResponse } from "../models/models_0";
import { PcaConnectorAdClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorAdClient";
import { de_GetServicePrincipalNameCommand, se_GetServicePrincipalNameCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServicePrincipalNameCommand}.
 */
export interface GetServicePrincipalNameCommandInput extends GetServicePrincipalNameRequest {}
/**
 * @public
 *
 * The output of {@link GetServicePrincipalNameCommand}.
 */
export interface GetServicePrincipalNameCommandOutput extends GetServicePrincipalNameResponse, __MetadataBearer {}

/**
 * <p>Lists the service principal name that the connector uses to authenticate with
 *          Active Directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, GetServicePrincipalNameCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, GetServicePrincipalNameCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * const client = new PcaConnectorAdClient(config);
 * const input = { // GetServicePrincipalNameRequest
 *   DirectoryRegistrationArn: "STRING_VALUE", // required
 *   ConnectorArn: "STRING_VALUE", // required
 * };
 * const command = new GetServicePrincipalNameCommand(input);
 * const response = await client.send(command);
 * // { // GetServicePrincipalNameResponse
 * //   ServicePrincipalName: { // ServicePrincipalName
 * //     DirectoryRegistrationArn: "STRING_VALUE",
 * //     ConnectorArn: "STRING_VALUE",
 * //     Status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //     StatusReason: "DIRECTORY_ACCESS_DENIED" || "DIRECTORY_NOT_REACHABLE" || "DIRECTORY_RESOURCE_NOT_FOUND" || "SPN_EXISTS_ON_DIFFERENT_AD_OBJECT" || "SPN_LIMIT_EXCEEDED" || "INTERNAL_FAILURE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServicePrincipalNameCommandInput - {@link GetServicePrincipalNameCommandInput}
 * @returns {@link GetServicePrincipalNameCommandOutput}
 * @see {@link GetServicePrincipalNameCommandInput} for command's `input` shape.
 * @see {@link GetServicePrincipalNameCommandOutput} for command's `response` shape.
 * @see {@link PcaConnectorAdClientResolvedConfig | config} for PcaConnectorAdClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You can receive this error if you attempt to create a resource share when you don't have
 *          the required permissions. This can be caused by insufficient permissions in policies
 *          attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen
 *          because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP)
 *          that affects your Amazon Web Services account. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with
 *          an internal server. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent resource. The resource might not be
 *          specified correctly, or its status might not be ACTIVE.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occurred. For example, invalid characters in a template name,
 *          or if a pagination token is invalid. </p>
 *
 * @throws {@link PcaConnectorAdServiceException}
 * <p>Base exception class for all service exceptions from PcaConnectorAd service.</p>
 *
 *
 * @public
 */
export class GetServicePrincipalNameCommand extends $Command
  .classBuilder<
    GetServicePrincipalNameCommandInput,
    GetServicePrincipalNameCommandOutput,
    PcaConnectorAdClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PcaConnectorAdClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PcaConnectorAd", "GetServicePrincipalName", {})
  .n("PcaConnectorAdClient", "GetServicePrincipalNameCommand")
  .f(void 0, void 0)
  .ser(se_GetServicePrincipalNameCommand)
  .de(de_GetServicePrincipalNameCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServicePrincipalNameRequest;
      output: GetServicePrincipalNameResponse;
    };
    sdk: {
      input: GetServicePrincipalNameCommandInput;
      output: GetServicePrincipalNameCommandOutput;
    };
  };
}
