// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListUsersRequest, ListUsersResponse } from "../models/models_0";
import { ListUsers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUsersCommand}.
 */
export interface ListUsersCommandInput extends ListUsersRequest {}
/**
 * @public
 *
 * The output of {@link ListUsersCommand}.
 */
export interface ListUsersCommandOutput extends ListUsersResponse, __MetadataBearer {}

/**
 * <p>Lists the users that belong to the specified Amazon Chime account. You can specify an email
 *             address to list only the user that the email address belongs to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListUsersCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListUsersCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // ListUsersRequest
 *   AccountId: "STRING_VALUE", // required
 *   UserEmail: "STRING_VALUE",
 *   UserType: "PrivateUser" || "SharedDevice",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * // { // ListUsersResponse
 * //   Users: [ // UserList
 * //     { // User
 * //       UserId: "STRING_VALUE", // required
 * //       AccountId: "STRING_VALUE",
 * //       PrimaryEmail: "STRING_VALUE",
 * //       PrimaryProvisionedNumber: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       LicenseType: "Basic" || "Plus" || "Pro" || "ProTrial",
 * //       UserType: "PrivateUser" || "SharedDevice",
 * //       UserRegistrationStatus: "Unregistered" || "Registered" || "Suspended",
 * //       UserInvitationStatus: "Pending" || "Accepted" || "Failed",
 * //       RegisteredOn: new Date("TIMESTAMP"),
 * //       InvitedOn: new Date("TIMESTAMP"),
 * //       AlexaForBusinessMetadata: { // AlexaForBusinessMetadata
 * //         IsAlexaForBusinessEnabled: true || false,
 * //         AlexaForBusinessRoomArn: "STRING_VALUE",
 * //       },
 * //       PersonalPIN: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUsersCommandInput - {@link ListUsersCommandInput}
 * @returns {@link ListUsersCommandOutput}
 * @see {@link ListUsersCommandInput} for command's `input` shape.
 * @see {@link ListUsersCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 *
 * @public
 */
export class ListUsersCommand extends $Command
  .classBuilder<
    ListUsersCommandInput,
    ListUsersCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "ListUsers", {})
  .n("ChimeClient", "ListUsersCommand")
  .sc(ListUsers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUsersRequest;
      output: ListUsersResponse;
    };
    sdk: {
      input: ListUsersCommandInput;
      output: ListUsersCommandOutput;
    };
  };
}
