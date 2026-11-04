// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutResourceAttributesRequest, PutResourceAttributesResult } from "../models/models_0";
import { PutResourceAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutResourceAttributesCommand}.
 */
export interface PutResourceAttributesCommandInput extends PutResourceAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutResourceAttributesCommand}.
 */
export interface PutResourceAttributesCommandOutput extends PutResourceAttributesResult, __MetadataBearer {}

/**
 * Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service repository. This association occurs asynchronously after `PutResourceAttributes` returns.
 *
 * > **Important:**
 * >
 * > - Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to *add* an IP address, it will then be required to call it with *both* the IP and MAC addresses to prevent overriding the MAC address.
 * > - Note the instructions regarding the special use case of the [`ResourceAttributeList`](https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList) parameter when specifying any "VM" related value.
 *
 * > **Note:** Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call `ListDiscoveredResources`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, PutResourceAttributesCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, PutResourceAttributesCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // PutResourceAttributesRequest
 *   ProgressUpdateStream: "STRING_VALUE", // required
 *   MigrationTaskName: "STRING_VALUE", // required
 *   ResourceAttributeList: [ // ResourceAttributeList // required
 *     { // ResourceAttribute
 *       Type: "IPV4_ADDRESS" || "IPV6_ADDRESS" || "MAC_ADDRESS" || "FQDN" || "VM_MANAGER_ID" || "VM_MANAGED_OBJECT_REFERENCE" || "VM_NAME" || "VM_PATH" || "BIOS_ID" || "MOTHERBOARD_SERIAL_NUMBER", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new PutResourceAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutResourceAttributesCommandInput - {@link PutResourceAttributesCommandInput}
 * @returns {@link PutResourceAttributesCommandOutput}
 * @see {@link PutResourceAttributesCommandInput} for command's `input` shape.
 * @see {@link PutResourceAttributesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link DryRunOperation} (client fault)
 *
 * Exception raised to indicate a successfully authorized action when the `DryRun` flag is set to "true".
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *
 * The home region is not set. Set the home region to continue.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Exception raised when an internal, configuration, or dependency error is encountered.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Exception raised when the request references a resource (Application Discovery Service configuration, update stream, migration task, etc.) that does not exist in Application Discovery Service (Application Discovery Service) or in Migration Hub's repository.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * Exception raised when there is an internal, configuration, or dependency error encountered.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *
 * Exception raised to indicate a request was not authorized when the `DryRun` flag is set to "true".
 *
 * @throws {@link MigrationHubServiceException}
 *
 * Base exception class for all service exceptions from MigrationHub service.
 *
 * @public
 */
export class PutResourceAttributesCommand extends command<PutResourceAttributesCommandInput, PutResourceAttributesCommandOutput>(
  _ep0,
  _mw0,
  "PutResourceAttributes",
  PutResourceAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutResourceAttributesRequest;
      output: {};
    };
    sdk: {
      input: PutResourceAttributesCommandInput;
      output: PutResourceAttributesCommandOutput;
    };
  };
}
