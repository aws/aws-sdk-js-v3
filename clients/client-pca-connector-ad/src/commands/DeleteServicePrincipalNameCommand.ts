// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteServicePrincipalNameRequest } from "../models/models_0";
import { PcaConnectorAdClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorAdClient";
import { DeleteServicePrincipalName } from "../schemas/schemas_3_ServicePrincipal";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServicePrincipalNameCommand}.
 */
export interface DeleteServicePrincipalNameCommandInput extends DeleteServicePrincipalNameRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServicePrincipalNameCommand}.
 */
export interface DeleteServicePrincipalNameCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the service principal name (SPN) used by a connector to authenticate with your
 *          Active Directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, DeleteServicePrincipalNameCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, DeleteServicePrincipalNameCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * // import type { PcaConnectorAdClientConfig } from "@aws-sdk/client-pca-connector-ad";
 * const config = {}; // type is PcaConnectorAdClientConfig
 * const client = new PcaConnectorAdClient(config);
 * const input = { // DeleteServicePrincipalNameRequest
 *   DirectoryRegistrationArn: "STRING_VALUE", // required
 *   ConnectorArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteServicePrincipalNameCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteServicePrincipalNameCommandInput - {@link DeleteServicePrincipalNameCommandInput}
 * @returns {@link DeleteServicePrincipalNameCommandOutput}
 * @see {@link DeleteServicePrincipalNameCommandInput} for command's `input` shape.
 * @see {@link DeleteServicePrincipalNameCommandOutput} for command's `response` shape.
 * @see {@link PcaConnectorAdClientResolvedConfig | config} for PcaConnectorAdClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You can receive this error if you attempt to create a resource share when you don't have
 *          the required permissions. This can be caused by insufficient permissions in policies
 *          attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen
 *          because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP)
 *          that affects your Amazon Web Services account. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request cannot be completed for one of the following reasons because the requested
 *          resource was being concurrently modified by another request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with
 *          an internal server. </p>
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
export class DeleteServicePrincipalNameCommand extends $Command
  .classBuilder<
    DeleteServicePrincipalNameCommandInput,
    DeleteServicePrincipalNameCommandOutput,
    PcaConnectorAdClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PcaConnectorAdClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PcaConnectorAd", "DeleteServicePrincipalName", {})
  .n("PcaConnectorAdClient", "DeleteServicePrincipalNameCommand")
  .sc(DeleteServicePrincipalName)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServicePrincipalNameRequest;
      output: {};
    };
    sdk: {
      input: DeleteServicePrincipalNameCommandInput;
      output: DeleteServicePrincipalNameCommandOutput;
    };
  };
}
