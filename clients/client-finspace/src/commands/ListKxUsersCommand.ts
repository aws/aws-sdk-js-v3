// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { ListKxUsersRequest, ListKxUsersResponse } from "../models/models_0";
import { ListKxUsers } from "../schemas/schemas_5_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKxUsersCommand}.
 */
export interface ListKxUsersCommandInput extends ListKxUsersRequest {}
/**
 * @public
 *
 * The output of {@link ListKxUsersCommand}.
 */
export interface ListKxUsersCommandOutput extends ListKxUsersResponse, __MetadataBearer {}

/**
 * <p>Lists all the users in a kdb environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, ListKxUsersCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, ListKxUsersCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // ListKxUsersRequest
 *   environmentId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListKxUsersCommand(input);
 * const response = await client.send(command);
 * // { // ListKxUsersResponse
 * //   users: [ // KxUserList
 * //     { // KxUser
 * //       userArn: "STRING_VALUE",
 * //       userName: "STRING_VALUE",
 * //       iamRole: "STRING_VALUE",
 * //       createTimestamp: new Date("TIMESTAMP"),
 * //       updateTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKxUsersCommandInput - {@link ListKxUsersCommandInput}
 * @returns {@link ListKxUsersCommandOutput}
 * @see {@link ListKxUsersCommandInput} for command's `input` shape.
 * @see {@link ListKxUsersCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
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
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 *
 * @public
 */
export class ListKxUsersCommand extends $Command
  .classBuilder<
    ListKxUsersCommandInput,
    ListKxUsersCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "ListKxUsers", {})
  .n("FinspaceClient", "ListKxUsersCommand")
  .sc(ListKxUsers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKxUsersRequest;
      output: ListKxUsersResponse;
    };
    sdk: {
      input: ListKxUsersCommandInput;
      output: ListKxUsersCommandOutput;
    };
  };
}
