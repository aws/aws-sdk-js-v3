// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import {
  ListPermissionGroupsByUserRequest,
  ListPermissionGroupsByUserResponse,
  ListPermissionGroupsByUserResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListPermissionGroupsByUserCommand, se_ListPermissionGroupsByUserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPermissionGroupsByUserCommand}.
 */
export interface ListPermissionGroupsByUserCommandInput extends ListPermissionGroupsByUserRequest {}
/**
 * @public
 *
 * The output of {@link ListPermissionGroupsByUserCommand}.
 */
export interface ListPermissionGroupsByUserCommandOutput extends ListPermissionGroupsByUserResponse, __MetadataBearer {}

/**
 * <p>Lists all the permission groups that are associated with a specific user.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, ListPermissionGroupsByUserCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, ListPermissionGroupsByUserCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FinspaceDataClient(config);
 * const input = { // ListPermissionGroupsByUserRequest
 *   userId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"), // required
 * };
 * const command = new ListPermissionGroupsByUserCommand(input);
 * const response = await client.send(command);
 * // { // ListPermissionGroupsByUserResponse
 * //   permissionGroups: [ // PermissionGroupByUserList
 * //     { // PermissionGroupByUser
 * //       permissionGroupId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       membershipStatus: "ADDITION_IN_PROGRESS" || "ADDITION_SUCCESS" || "REMOVAL_IN_PROGRESS",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPermissionGroupsByUserCommandInput - {@link ListPermissionGroupsByUserCommandInput}
 * @returns {@link ListPermissionGroupsByUserCommandOutput}
 * @see {@link ListPermissionGroupsByUserCommandInput} for command's `input` shape.
 * @see {@link ListPermissionGroupsByUserCommandOutput} for command's `response` shape.
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
export class ListPermissionGroupsByUserCommand extends $Command
  .classBuilder<
    ListPermissionGroupsByUserCommandInput,
    ListPermissionGroupsByUserCommandOutput,
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
  .s("AWSHabaneroPublicAPI", "ListPermissionGroupsByUser", {})
  .n("FinspaceDataClient", "ListPermissionGroupsByUserCommand")
  .f(void 0, ListPermissionGroupsByUserResponseFilterSensitiveLog)
  .ser(se_ListPermissionGroupsByUserCommand)
  .de(de_ListPermissionGroupsByUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPermissionGroupsByUserRequest;
      output: ListPermissionGroupsByUserResponse;
    };
    sdk: {
      input: ListPermissionGroupsByUserCommandInput;
      output: ListPermissionGroupsByUserCommandOutput;
    };
  };
}
