// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateUserProfileInput, CreateUserProfileOutput } from "../models/models_1";
import { CreateUserProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateUserProfileCommand}.
 */
export interface CreateUserProfileCommandInput extends CreateUserProfileInput {}
/**
 * @public
 *
 * The output of {@link CreateUserProfileCommand}.
 */
export interface CreateUserProfileCommandOutput extends CreateUserProfileOutput, __MetadataBearer {}

/**
 * Creates a user profile in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateUserProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateUserProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateUserProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   userIdentifier: "STRING_VALUE", // required
 *   userType: "IAM_USER" || "IAM_ROLE" || "SSO_USER" || "IAM_ROLE_SESSION",
 *   sessionName: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateUserProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateUserProfileOutput
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
 * @param CreateUserProfileCommandInput - {@link CreateUserProfileCommandInput}
 * @returns {@link CreateUserProfileCommandOutput}
 * @see {@link CreateUserProfileCommandInput} for command's `input` shape.
 * @see {@link CreateUserProfileCommandOutput} for command's `response` shape.
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
export class CreateUserProfileCommand extends command<CreateUserProfileCommandInput, CreateUserProfileCommandOutput>(
  _ep0,
  _mw0,
  "CreateUserProfile",
  CreateUserProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUserProfileInput;
      output: CreateUserProfileOutput;
    };
    sdk: {
      input: CreateUserProfileCommandInput;
      output: CreateUserProfileCommandOutput;
    };
  };
}
