// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetTemplateGroupAccessControlEntryRequest,
  GetTemplateGroupAccessControlEntryResponse,
} from "../models/models_0";
import { GetTemplateGroupAccessControlEntry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTemplateGroupAccessControlEntryCommand}.
 */
export interface GetTemplateGroupAccessControlEntryCommandInput extends GetTemplateGroupAccessControlEntryRequest {}
/**
 * @public
 *
 * The output of {@link GetTemplateGroupAccessControlEntryCommand}.
 */
export interface GetTemplateGroupAccessControlEntryCommandOutput extends GetTemplateGroupAccessControlEntryResponse, __MetadataBearer {}

/**
 * Retrieves the group access control entries for a template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, GetTemplateGroupAccessControlEntryCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, GetTemplateGroupAccessControlEntryCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * // import type { PcaConnectorAdClientConfig } from "@aws-sdk/client-pca-connector-ad";
 * const config = {}; // type is PcaConnectorAdClientConfig
 * const client = new PcaConnectorAdClient(config);
 * const input = { // GetTemplateGroupAccessControlEntryRequest
 *   TemplateArn: "STRING_VALUE", // required
 *   GroupSecurityIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetTemplateGroupAccessControlEntryCommand(input);
 * const response = await client.send(command);
 * // { // GetTemplateGroupAccessControlEntryResponse
 * //   AccessControlEntry: { // AccessControlEntry
 * //     GroupDisplayName: "STRING_VALUE",
 * //     GroupSecurityIdentifier: "STRING_VALUE",
 * //     AccessRights: { // AccessRights
 * //       Enroll: "ALLOW" || "DENY",
 * //       AutoEnroll: "ALLOW" || "DENY",
 * //     },
 * //     TemplateArn: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTemplateGroupAccessControlEntryCommandInput - {@link GetTemplateGroupAccessControlEntryCommandInput}
 * @returns {@link GetTemplateGroupAccessControlEntryCommandOutput}
 * @see {@link GetTemplateGroupAccessControlEntryCommandInput} for command's `input` shape.
 * @see {@link GetTemplateGroupAccessControlEntryCommandOutput} for command's `response` shape.
 * @see {@link PcaConnectorAdClientResolvedConfig | config} for PcaConnectorAdClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You can receive this error if you attempt to create a resource share when you don't have the required permissions. This can be caused by insufficient permissions in policies attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP) that affects your Amazon Web Services account.
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
export class GetTemplateGroupAccessControlEntryCommand extends command<GetTemplateGroupAccessControlEntryCommandInput, GetTemplateGroupAccessControlEntryCommandOutput>(
  _ep0,
  _mw0,
  "GetTemplateGroupAccessControlEntry",
  GetTemplateGroupAccessControlEntry$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTemplateGroupAccessControlEntryRequest;
      output: GetTemplateGroupAccessControlEntryResponse;
    };
    sdk: {
      input: GetTemplateGroupAccessControlEntryCommandInput;
      output: GetTemplateGroupAccessControlEntryCommandOutput;
    };
  };
}
