// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetApplicationRequest, GetApplicationResponse } from "../models/models_0";
import { GetApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandInput extends GetApplicationRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandOutput extends GetApplicationResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about an account access manager application, including its status, identity source, and tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountAccessClient, GetApplicationCommand } from "@aws-sdk/client-account-access"; // ES Modules import
 * // const { AccountAccessClient, GetApplicationCommand } = require("@aws-sdk/client-account-access"); // CommonJS import
 * // import type { AccountAccessClientConfig } from "@aws-sdk/client-account-access";
 * const config = {}; // type is AccountAccessClientConfig
 * const client = new AccountAccessClient(config);
 * const input = { // GetApplicationRequest
 *   applicationArn: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationResponse
 * //   identitySource: { // IdentitySourceDetails Union: only one key present
 * //     identityCenter: { // IdentityCenterDetails
 * //       instanceArn: "STRING_VALUE", // required
 * //       applicationArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   status: "CREATE_IN_PROGRESS" || "ACTIVE" || "DELETE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_FAILED", // required
 * //   tenantId: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   error: { // ErrorDetails
 * //     code: "AUTHORIZATION_ERROR" || "RESOURCE_NOT_FOUND_ERROR" || "SERVICE_QUOTA_EXCEEDED_ERROR" || "INTERNAL_SERVICE_ERROR", // required
 * //     message: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApplicationCommandInput - {@link GetApplicationCommandInput}
 * @returns {@link GetApplicationCommandOutput}
 * @see {@link GetApplicationCommandInput} for command's `input` shape.
 * @see {@link GetApplicationCommandOutput} for command's `response` shape.
 * @see {@link AccountAccessClientResolvedConfig | config} for AccountAccessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred. Try your request again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist. Verify that the resource identifier is correct and that the resource exists in the current Region.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Try your request again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by the service. Check your request parameters and retry the request.</p>
 *
 * @throws {@link AccountAccessServiceException}
 * <p>Base exception class for all service exceptions from AccountAccess service.</p>
 *
 *
 * @public
 */
export class GetApplicationCommand extends command<GetApplicationCommandInput, GetApplicationCommandOutput>(
  _ep0,
  _mw0,
  "GetApplication",
  GetApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationRequest;
      output: GetApplicationResponse;
    };
    sdk: {
      input: GetApplicationCommandInput;
      output: GetApplicationCommandOutput;
    };
  };
}
