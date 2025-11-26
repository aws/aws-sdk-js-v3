// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDirectoryRegistrationRequest } from "../models/models_0";
import type {
  PcaConnectorAdClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PcaConnectorAdClient";
import { DeleteDirectoryRegistration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDirectoryRegistrationCommand}.
 */
export interface DeleteDirectoryRegistrationCommandInput extends DeleteDirectoryRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDirectoryRegistrationCommand}.
 */
export interface DeleteDirectoryRegistrationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a directory registration. Deleting a directory registration deauthorizes
 *          Amazon Web Services Private CA with the directory. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, DeleteDirectoryRegistrationCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, DeleteDirectoryRegistrationCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * // import type { PcaConnectorAdClientConfig } from "@aws-sdk/client-pca-connector-ad";
 * const config = {}; // type is PcaConnectorAdClientConfig
 * const client = new PcaConnectorAdClient(config);
 * const input = { // DeleteDirectoryRegistrationRequest
 *   DirectoryRegistrationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteDirectoryRegistrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDirectoryRegistrationCommandInput - {@link DeleteDirectoryRegistrationCommandInput}
 * @returns {@link DeleteDirectoryRegistrationCommandOutput}
 * @see {@link DeleteDirectoryRegistrationCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectoryRegistrationCommandOutput} for command's `response` shape.
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
export class DeleteDirectoryRegistrationCommand extends $Command
  .classBuilder<
    DeleteDirectoryRegistrationCommandInput,
    DeleteDirectoryRegistrationCommandOutput,
    PcaConnectorAdClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PcaConnectorAdClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PcaConnectorAd", "DeleteDirectoryRegistration", {})
  .n("PcaConnectorAdClient", "DeleteDirectoryRegistrationCommand")
  .sc(DeleteDirectoryRegistration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDirectoryRegistrationRequest;
      output: {};
    };
    sdk: {
      input: DeleteDirectoryRegistrationCommandInput;
      output: DeleteDirectoryRegistrationCommandOutput;
    };
  };
}
