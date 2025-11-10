// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListTemplateGroupAccessControlEntriesRequest,
  ListTemplateGroupAccessControlEntriesResponse,
} from "../models/models_0";
import { PcaConnectorAdClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorAdClient";
import { ListTemplateGroupAccessControlEntries } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTemplateGroupAccessControlEntriesCommand}.
 */
export interface ListTemplateGroupAccessControlEntriesCommandInput
  extends ListTemplateGroupAccessControlEntriesRequest {}
/**
 * @public
 *
 * The output of {@link ListTemplateGroupAccessControlEntriesCommand}.
 */
export interface ListTemplateGroupAccessControlEntriesCommandOutput
  extends ListTemplateGroupAccessControlEntriesResponse,
    __MetadataBearer {}

/**
 * <p>Lists group access control entries you created. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, ListTemplateGroupAccessControlEntriesCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, ListTemplateGroupAccessControlEntriesCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * // import type { PcaConnectorAdClientConfig } from "@aws-sdk/client-pca-connector-ad";
 * const config = {}; // type is PcaConnectorAdClientConfig
 * const client = new PcaConnectorAdClient(config);
 * const input = { // ListTemplateGroupAccessControlEntriesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   TemplateArn: "STRING_VALUE", // required
 * };
 * const command = new ListTemplateGroupAccessControlEntriesCommand(input);
 * const response = await client.send(command);
 * // { // ListTemplateGroupAccessControlEntriesResponse
 * //   AccessControlEntries: [ // AccessControlEntryList
 * //     { // AccessControlEntrySummary
 * //       GroupDisplayName: "STRING_VALUE",
 * //       GroupSecurityIdentifier: "STRING_VALUE",
 * //       AccessRights: { // AccessRights
 * //         Enroll: "ALLOW" || "DENY",
 * //         AutoEnroll: "ALLOW" || "DENY",
 * //       },
 * //       TemplateArn: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTemplateGroupAccessControlEntriesCommandInput - {@link ListTemplateGroupAccessControlEntriesCommandInput}
 * @returns {@link ListTemplateGroupAccessControlEntriesCommandOutput}
 * @see {@link ListTemplateGroupAccessControlEntriesCommandInput} for command's `input` shape.
 * @see {@link ListTemplateGroupAccessControlEntriesCommandOutput} for command's `response` shape.
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
export class ListTemplateGroupAccessControlEntriesCommand extends $Command
  .classBuilder<
    ListTemplateGroupAccessControlEntriesCommandInput,
    ListTemplateGroupAccessControlEntriesCommandOutput,
    PcaConnectorAdClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PcaConnectorAdClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PcaConnectorAd", "ListTemplateGroupAccessControlEntries", {})
  .n("PcaConnectorAdClient", "ListTemplateGroupAccessControlEntriesCommand")
  .sc(ListTemplateGroupAccessControlEntries)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTemplateGroupAccessControlEntriesRequest;
      output: ListTemplateGroupAccessControlEntriesResponse;
    };
    sdk: {
      input: ListTemplateGroupAccessControlEntriesCommandInput;
      output: ListTemplateGroupAccessControlEntriesCommandOutput;
    };
  };
}
