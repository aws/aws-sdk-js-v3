// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateUserProfileInput,
  CreateUserProfileOutput,
  CreateUserProfileOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateUserProfileCommand, se_CreateUserProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a user profile in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateUserProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateUserProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // CreateUserProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   userIdentifier: "STRING_VALUE", // required
 *   userType: "IAM_USER" || "IAM_ROLE" || "SSO_USER",
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 * @public
 */
export class CreateUserProfileCommand extends $Command
  .classBuilder<
    CreateUserProfileCommandInput,
    CreateUserProfileCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "CreateUserProfile", {})
  .n("DataZoneClient", "CreateUserProfileCommand")
  .f(void 0, CreateUserProfileOutputFilterSensitiveLog)
  .ser(se_CreateUserProfileCommand)
  .de(de_CreateUserProfileCommand)
  .build() {}
