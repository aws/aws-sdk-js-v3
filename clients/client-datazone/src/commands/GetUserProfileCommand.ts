// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetUserProfileInput, GetUserProfileOutput } from "../models/models_1";
import { GetUserProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetUserProfileCommand}.
 */
export interface GetUserProfileCommandInput extends GetUserProfileInput {}
/**
 * @public
 *
 * The output of {@link GetUserProfileCommand}.
 */
export interface GetUserProfileCommandOutput extends GetUserProfileOutput, __MetadataBearer {}

/**
 * Gets a user profile in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetUserProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetUserProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetUserProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   userIdentifier: "STRING_VALUE", // required
 *   type: "IAM" || "SSO",
 *   sessionName: "STRING_VALUE",
 * };
 * const command = new GetUserProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetUserProfileOutput
 * //   domainId: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   type: "IAM" || "SSO",
 * //   status: "ASSIGNED" || "NOT_ASSIGNED" || "ACTIVATED" || "DEACTIVATED",
 * //   details: { // UserProfileDetails Union: only one key present
 * //     iam: { // IamUserProfileDetails
 * //       arn: "STRING_VALUE",
 * //       principalId: "STRING_VALUE",
 * //       sessionName: "STRING_VALUE",
 * //       groupProfileId: "STRING_VALUE",
 * //     },
 * //     sso: { // SsoUserProfileDetails
 * //       username: "STRING_VALUE",
 * //       firstName: "STRING_VALUE",
 * //       lastName: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetUserProfileCommandInput - {@link GetUserProfileCommandInput}
 * @returns {@link GetUserProfileCommandOutput}
 * @see {@link GetUserProfileCommandInput} for command's `input` shape.
 * @see {@link GetUserProfileCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class GetUserProfileCommand extends command<GetUserProfileCommandInput, GetUserProfileCommandOutput>(
  _ep0,
  _mw0,
  "GetUserProfile",
  GetUserProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserProfileInput;
      output: GetUserProfileOutput;
    };
    sdk: {
      input: GetUserProfileCommandInput;
      output: GetUserProfileCommandOutput;
    };
  };
}
