// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetUserDetailsRequest, GetUserDetailsResponse } from "../models/models_0";
import { GetUserDetails$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetUserDetailsCommand}.
 */
export interface GetUserDetailsCommandInput extends GetUserDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetUserDetailsCommand}.
 */
export interface GetUserDetailsCommandOutput extends GetUserDetailsResponse, __MetadataBearer {}

/**
 * Returns information about a user.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, GetUserDetailsCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, GetUserDetailsCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * // import type { CodeCatalystClientConfig } from "@aws-sdk/client-codecatalyst";
 * const config = {}; // type is CodeCatalystClientConfig
 * const client = new CodeCatalystClient(config);
 * const input = { // GetUserDetailsRequest
 *   id: "STRING_VALUE",
 *   userName: "STRING_VALUE",
 * };
 * const command = new GetUserDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetUserDetailsResponse
 * //   userId: "STRING_VALUE",
 * //   userName: "STRING_VALUE",
 * //   displayName: "STRING_VALUE",
 * //   primaryEmail: { // EmailAddress
 * //     email: "STRING_VALUE",
 * //     verified: true || false,
 * //   },
 * //   version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetUserDetailsCommandInput - {@link GetUserDetailsCommandInput}
 * @returns {@link GetUserDetailsCommandOutput}
 * @see {@link GetUserDetailsCommandInput} for command's `input` shape.
 * @see {@link GetUserDetailsCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request. Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce the number of resources, or change the tier if applicable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.
 *
 * @throws {@link CodeCatalystServiceException}
 *
 * Base exception class for all service exceptions from CodeCatalyst service.
 *
 * @public
 */
export class GetUserDetailsCommand extends command<GetUserDetailsCommandInput, GetUserDetailsCommandOutput>(
  _ep0,
  _mw0,
  "GetUserDetails",
  GetUserDetails$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserDetailsRequest;
      output: GetUserDetailsResponse;
    };
    sdk: {
      input: GetUserDetailsCommandInput;
      output: GetUserDetailsCommandOutput;
    };
  };
}
