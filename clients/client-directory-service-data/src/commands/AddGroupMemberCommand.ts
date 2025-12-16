// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DirectoryServiceDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceDataClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AddGroupMemberRequest, AddGroupMemberResult } from "../models/models_0";
import { AddGroupMember$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddGroupMemberCommand}.
 */
export interface AddGroupMemberCommandInput extends AddGroupMemberRequest {}
/**
 * @public
 *
 * The output of {@link AddGroupMemberCommand}.
 */
export interface AddGroupMemberCommandOutput extends AddGroupMemberResult, __MetadataBearer {}

/**
 * <p>Adds an existing user, group, or computer as a group member.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceDataClient, AddGroupMemberCommand } from "@aws-sdk/client-directory-service-data"; // ES Modules import
 * // const { DirectoryServiceDataClient, AddGroupMemberCommand } = require("@aws-sdk/client-directory-service-data"); // CommonJS import
 * // import type { DirectoryServiceDataClientConfig } from "@aws-sdk/client-directory-service-data";
 * const config = {}; // type is DirectoryServiceDataClientConfig
 * const client = new DirectoryServiceDataClient(config);
 * const input = { // AddGroupMemberRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   GroupName: "STRING_VALUE", // required
 *   MemberName: "STRING_VALUE", // required
 *   MemberRealm: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new AddGroupMemberCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddGroupMemberCommandInput - {@link AddGroupMemberCommandInput}
 * @returns {@link AddGroupMemberCommandOutput}
 * @see {@link AddGroupMemberCommandInput} for command's `input` shape.
 * @see {@link AddGroupMemberCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceDataClientResolvedConfig | config} for DirectoryServiceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permission to perform the request or access the directory. It can also
 *       occur when the <code>DirectoryId</code> doesn't exist or the user, member, or group might be
 *       outside of your organizational unit (OU). </p>
 *          <p> Make sure that you have the authentication and authorization to perform the action.
 *       Review the directory information in the request, and make sure that the object isn't outside
 *       of your OU. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> This error will occur when you try to create a resource that conflicts with an existing
 *       object. It can also occur when adding a member to a group that the member is already
 *       in.</p>
 *          <p> This error can be caused by a request sent within the 8-hour idempotency window with the
 *       same client token but different input parameters. Client tokens should not be re-used across
 *       different requests. After 8 hours, any request with the same client token is treated as a new
 *       request. </p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p> The request could not be completed due to a problem in the configuration or current state
 *       of the specified directory. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The operation didn't succeed because an internal error occurred. Try again later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource couldn't be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The limit on the number of requests per second has been exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request isn't valid. Review the details in the error message to update the invalid
 *       parameters or values in your request. </p>
 *
 * @throws {@link DirectoryServiceDataServiceException}
 * <p>Base exception class for all service exceptions from DirectoryServiceData service.</p>
 *
 *
 * @example To add a member to the Marketing group
 * ```javascript
 * // The following command adds an existing user to the Marketing group in the europe.example.com domain.
 * const input = {
 *   ClientToken: "550e8400-e29b-41d4-a716-446655440000",
 *   DirectoryId: "d-12233abcde",
 *   GroupName: "Marketing",
 *   MemberName: "Pat Candella",
 *   MemberRealm: "europe.example.com"
 * };
 * const command = new AddGroupMemberCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AddGroupMemberCommand extends $Command
  .classBuilder<
    AddGroupMemberCommandInput,
    AddGroupMemberCommandOutput,
    DirectoryServiceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryServiceData", "AddGroupMember", {})
  .n("DirectoryServiceDataClient", "AddGroupMemberCommand")
  .sc(AddGroupMember$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddGroupMemberRequest;
      output: {};
    };
    sdk: {
      input: AddGroupMemberCommandInput;
      output: AddGroupMemberCommandOutput;
    };
  };
}
