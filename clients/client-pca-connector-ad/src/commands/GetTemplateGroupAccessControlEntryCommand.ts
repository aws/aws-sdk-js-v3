// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetTemplateGroupAccessControlEntryRequest,
  GetTemplateGroupAccessControlEntryResponse,
} from "../models/models_0";
import { PcaConnectorAdClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorAdClient";
import {
  de_GetTemplateGroupAccessControlEntryCommand,
  se_GetTemplateGroupAccessControlEntryCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetTemplateGroupAccessControlEntryCommandOutput
  extends GetTemplateGroupAccessControlEntryResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the group access control entries for a template.</p>
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
export class GetTemplateGroupAccessControlEntryCommand extends $Command
  .classBuilder<
    GetTemplateGroupAccessControlEntryCommandInput,
    GetTemplateGroupAccessControlEntryCommandOutput,
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
  .s("PcaConnectorAd", "GetTemplateGroupAccessControlEntry", {})
  .n("PcaConnectorAdClient", "GetTemplateGroupAccessControlEntryCommand")
  .f(void 0, void 0)
  .ser(se_GetTemplateGroupAccessControlEntryCommand)
  .de(de_GetTemplateGroupAccessControlEntryCommand)
  .build() {
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
