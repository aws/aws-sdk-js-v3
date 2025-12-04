// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateTemplateGroupAccessControlEntryRequest } from "../models/models_0";
import type {
  PcaConnectorAdClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PcaConnectorAdClient";
import { UpdateTemplateGroupAccessControlEntry } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTemplateGroupAccessControlEntryCommand}.
 */
export interface UpdateTemplateGroupAccessControlEntryCommandInput
  extends UpdateTemplateGroupAccessControlEntryRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTemplateGroupAccessControlEntryCommand}.
 */
export interface UpdateTemplateGroupAccessControlEntryCommandOutput extends __MetadataBearer {}

/**
 * <p>Update a group access control entry you created using <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplateGroupAccessControlEntry.html">CreateTemplateGroupAccessControlEntry</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorAdClient, UpdateTemplateGroupAccessControlEntryCommand } from "@aws-sdk/client-pca-connector-ad"; // ES Modules import
 * // const { PcaConnectorAdClient, UpdateTemplateGroupAccessControlEntryCommand } = require("@aws-sdk/client-pca-connector-ad"); // CommonJS import
 * // import type { PcaConnectorAdClientConfig } from "@aws-sdk/client-pca-connector-ad";
 * const config = {}; // type is PcaConnectorAdClientConfig
 * const client = new PcaConnectorAdClient(config);
 * const input = { // UpdateTemplateGroupAccessControlEntryRequest
 *   TemplateArn: "STRING_VALUE", // required
 *   GroupSecurityIdentifier: "STRING_VALUE", // required
 *   GroupDisplayName: "STRING_VALUE",
 *   AccessRights: { // AccessRights
 *     Enroll: "ALLOW" || "DENY",
 *     AutoEnroll: "ALLOW" || "DENY",
 *   },
 * };
 * const command = new UpdateTemplateGroupAccessControlEntryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTemplateGroupAccessControlEntryCommandInput - {@link UpdateTemplateGroupAccessControlEntryCommandInput}
 * @returns {@link UpdateTemplateGroupAccessControlEntryCommandOutput}
 * @see {@link UpdateTemplateGroupAccessControlEntryCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplateGroupAccessControlEntryCommandOutput} for command's `response` shape.
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
export class UpdateTemplateGroupAccessControlEntryCommand extends $Command
  .classBuilder<
    UpdateTemplateGroupAccessControlEntryCommandInput,
    UpdateTemplateGroupAccessControlEntryCommandOutput,
    PcaConnectorAdClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PcaConnectorAdClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PcaConnectorAd", "UpdateTemplateGroupAccessControlEntry", {})
  .n("PcaConnectorAdClient", "UpdateTemplateGroupAccessControlEntryCommand")
  .sc(UpdateTemplateGroupAccessControlEntry)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTemplateGroupAccessControlEntryRequest;
      output: {};
    };
    sdk: {
      input: UpdateTemplateGroupAccessControlEntryCommandInput;
      output: UpdateTemplateGroupAccessControlEntryCommandOutput;
    };
  };
}
