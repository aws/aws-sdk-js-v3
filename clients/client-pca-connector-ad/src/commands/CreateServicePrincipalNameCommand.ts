// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateServicePrincipalNameRequest } from "../models/models_0";
import { CreateServicePrincipalName$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateServicePrincipalNameCommand}.
 */
export interface CreateServicePrincipalNameCommandInput extends CreateServicePrincipalNameRequest {}
/**
 * @public
 *
 * The output of {@link CreateServicePrincipalNameCommand}.
 */
export interface CreateServicePrincipalNameCommandOutput extends __MetadataBearer {}

/**
 * Creates a service principal name (SPN) for the service account in Active Directory. Kerberos authentication uses SPNs to associate a service instance with a service sign-in account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, CreateServicePrincipalNameCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, CreateServicePrincipalNameCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * // import type { PcaConnectorAdClientConfig } from "@aws-sdk/client-pca-connector-ad";
 * const config = {}; // type is PcaConnectorAdClientConfig
 * const client = new PcaConnectorAdClient(config);
 * const input = { // CreateServicePrincipalNameRequest
 *   DirectoryRegistrationArn: "STRING_VALUE", // required
 *   ConnectorArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateServicePrincipalNameCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateServicePrincipalNameCommandInput - {@link CreateServicePrincipalNameCommandInput}
 * @returns {@link CreateServicePrincipalNameCommandOutput}
 * @see {@link CreateServicePrincipalNameCommandInput} for command's `input` shape.
 * @see {@link CreateServicePrincipalNameCommandOutput} for command's `response` shape.
 * @see {@link PcaConnectorAdClientResolvedConfig | config} for PcaConnectorAdClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You can receive this error if you attempt to create a resource share when you don't have the required permissions. This can be caused by insufficient permissions in policies attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP) that affects your Amazon Web Services account.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This request cannot be completed for one of the following reasons because the requested resource was being concurrently modified by another request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a nonexistent resource. The resource might not be specified correctly, or its status might not be ACTIVE.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An input validation error occurred. For example, invalid characters in a template name, or if a pagination token is invalid.
 *
 * @throws {@link PcaConnectorAdServiceException}
 *
 * Base exception class for all service exceptions from PcaConnectorAd service.
 *
 * @public
 */
export class CreateServicePrincipalNameCommand extends command<CreateServicePrincipalNameCommandInput, CreateServicePrincipalNameCommandOutput>(
  _ep0,
  _mw0,
  "CreateServicePrincipalName",
  CreateServicePrincipalName$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServicePrincipalNameRequest;
      output: {};
    };
    sdk: {
      input: CreateServicePrincipalNameCommandInput;
      output: CreateServicePrincipalNameCommandOutput;
    };
  };
}
