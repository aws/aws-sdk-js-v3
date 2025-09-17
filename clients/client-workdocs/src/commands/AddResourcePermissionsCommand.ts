// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  AddResourcePermissionsRequest,
  AddResourcePermissionsRequestFilterSensitiveLog,
  AddResourcePermissionsResponse,
  AddResourcePermissionsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_AddResourcePermissionsCommand, se_AddResourcePermissionsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddResourcePermissionsCommand}.
 */
export interface AddResourcePermissionsCommandInput extends AddResourcePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link AddResourcePermissionsCommand}.
 */
export interface AddResourcePermissionsCommandOutput extends AddResourcePermissionsResponse, __MetadataBearer {}

/**
 * <p>Creates a set of permissions for the specified folder or document. The resource
 *             permissions are overwritten if the principals already have different
 *             permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, AddResourcePermissionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, AddResourcePermissionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // AddResourcePermissionsRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   ResourceId: "STRING_VALUE", // required
 *   Principals: [ // SharePrincipalList // required
 *     { // SharePrincipal
 *       Id: "STRING_VALUE", // required
 *       Type: "USER" || "GROUP" || "INVITE" || "ANONYMOUS" || "ORGANIZATION", // required
 *       Role: "VIEWER" || "CONTRIBUTOR" || "OWNER" || "COOWNER", // required
 *     },
 *   ],
 *   NotificationOptions: { // NotificationOptions
 *     SendEmail: true || false,
 *     EmailMessage: "STRING_VALUE",
 *   },
 * };
 * const command = new AddResourcePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // AddResourcePermissionsResponse
 * //   ShareResults: [ // ShareResultsList
 * //     { // ShareResult
 * //       PrincipalId: "STRING_VALUE",
 * //       InviteePrincipalId: "STRING_VALUE",
 * //       Role: "VIEWER" || "CONTRIBUTOR" || "OWNER" || "COOWNER",
 * //       Status: "SUCCESS" || "FAILURE",
 * //       ShareId: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddResourcePermissionsCommandInput - {@link AddResourcePermissionsCommandInput}
 * @returns {@link AddResourcePermissionsCommandOutput}
 * @see {@link AddResourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link AddResourcePermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *  <p>The specified document version is not in the INITIALIZED state.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>The operation is not permitted.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 * @throws {@link WorkDocsServiceException}
 * <p>Base exception class for all service exceptions from WorkDocs service.</p>
 *
 *
 * @public
 */
export class AddResourcePermissionsCommand extends $Command
  .classBuilder<
    AddResourcePermissionsCommandInput,
    AddResourcePermissionsCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGorillaBoyService", "AddResourcePermissions", {})
  .n("WorkDocsClient", "AddResourcePermissionsCommand")
  .f(AddResourcePermissionsRequestFilterSensitiveLog, AddResourcePermissionsResponseFilterSensitiveLog)
  .ser(se_AddResourcePermissionsCommand)
  .de(de_AddResourcePermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddResourcePermissionsRequest;
      output: AddResourcePermissionsResponse;
    };
    sdk: {
      input: AddResourcePermissionsCommandInput;
      output: AddResourcePermissionsCommandOutput;
    };
  };
}
