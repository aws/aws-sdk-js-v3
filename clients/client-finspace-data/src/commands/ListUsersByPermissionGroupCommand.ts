// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import {
  ListUsersByPermissionGroupRequest,
  ListUsersByPermissionGroupResponse,
  ListUsersByPermissionGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListUsersByPermissionGroupCommand, se_ListUsersByPermissionGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUsersByPermissionGroupCommand}.
 */
export interface ListUsersByPermissionGroupCommandInput extends ListUsersByPermissionGroupRequest {}
/**
 * @public
 *
 * The output of {@link ListUsersByPermissionGroupCommand}.
 */
export interface ListUsersByPermissionGroupCommandOutput extends ListUsersByPermissionGroupResponse, __MetadataBearer {}

/**
 * <p>Lists details of all the users in a specific permission group.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, ListUsersByPermissionGroupCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, ListUsersByPermissionGroupCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FinspaceDataClient(config);
 * const input = { // ListUsersByPermissionGroupRequest
 *   permissionGroupId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"), // required
 * };
 * const command = new ListUsersByPermissionGroupCommand(input);
 * const response = await client.send(command);
 * // { // ListUsersByPermissionGroupResponse
 * //   users: [ // UserByPermissionGroupList
 * //     { // UserByPermissionGroup
 * //       userId: "STRING_VALUE",
 * //       status: "CREATING" || "ENABLED" || "DISABLED",
 * //       firstName: "STRING_VALUE",
 * //       lastName: "STRING_VALUE",
 * //       emailAddress: "STRING_VALUE",
 * //       type: "SUPER_USER" || "APP_USER",
 * //       apiAccess: "ENABLED" || "DISABLED",
 * //       apiAccessPrincipalArn: "STRING_VALUE",
 * //       membershipStatus: "ADDITION_IN_PROGRESS" || "ADDITION_SUCCESS" || "REMOVAL_IN_PROGRESS",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUsersByPermissionGroupCommandInput - {@link ListUsersByPermissionGroupCommandInput}
 * @returns {@link ListUsersByPermissionGroupCommandOutput}
 * @see {@link ListUsersByPermissionGroupCommandInput} for command's `input` shape.
 * @see {@link ListUsersByPermissionGroupCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 * @public
 */
export class ListUsersByPermissionGroupCommand extends $Command
  .classBuilder<
    ListUsersByPermissionGroupCommandInput,
    ListUsersByPermissionGroupCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroPublicAPI", "ListUsersByPermissionGroup", {})
  .n("FinspaceDataClient", "ListUsersByPermissionGroupCommand")
  .f(void 0, ListUsersByPermissionGroupResponseFilterSensitiveLog)
  .ser(se_ListUsersByPermissionGroupCommand)
  .de(de_ListUsersByPermissionGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUsersByPermissionGroupRequest;
      output: ListUsersByPermissionGroupResponse;
    };
    sdk: {
      input: ListUsersByPermissionGroupCommandInput;
      output: ListUsersByPermissionGroupCommandOutput;
    };
  };
}
