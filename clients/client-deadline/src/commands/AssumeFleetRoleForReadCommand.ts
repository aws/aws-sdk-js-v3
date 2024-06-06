// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssumeFleetRoleForReadRequest,
  AssumeFleetRoleForReadResponse,
  AssumeFleetRoleForReadResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_AssumeFleetRoleForReadCommand, se_AssumeFleetRoleForReadCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssumeFleetRoleForReadCommand}.
 */
export interface AssumeFleetRoleForReadCommandInput extends AssumeFleetRoleForReadRequest {}
/**
 * @public
 *
 * The output of {@link AssumeFleetRoleForReadCommand}.
 */
export interface AssumeFleetRoleForReadCommandOutput extends AssumeFleetRoleForReadResponse, __MetadataBearer {}

/**
 * <p>Get Amazon Web Services credentials from the fleet role. The IAM permissions of the credentials are
 *          scoped down to have read-only access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, AssumeFleetRoleForReadCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, AssumeFleetRoleForReadCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // AssumeFleetRoleForReadRequest
 *   farmId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 * };
 * const command = new AssumeFleetRoleForReadCommand(input);
 * const response = await client.send(command);
 * // { // AssumeFleetRoleForReadResponse
 * //   credentials: { // AwsCredentials
 * //     accessKeyId: "STRING_VALUE", // required
 * //     secretAccessKey: "STRING_VALUE", // required
 * //     sessionToken: "STRING_VALUE", // required
 * //     expiration: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param AssumeFleetRoleForReadCommandInput - {@link AssumeFleetRoleForReadCommandInput}
 * @returns {@link AssumeFleetRoleForReadCommandOutput}
 * @see {@link AssumeFleetRoleForReadCommandInput} for command's `input` shape.
 * @see {@link AssumeFleetRoleForReadCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 * @public
 */
export class AssumeFleetRoleForReadCommand extends $Command
  .classBuilder<
    AssumeFleetRoleForReadCommandInput,
    AssumeFleetRoleForReadCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "AssumeFleetRoleForRead", {})
  .n("DeadlineClient", "AssumeFleetRoleForReadCommand")
  .f(void 0, AssumeFleetRoleForReadResponseFilterSensitiveLog)
  .ser(se_AssumeFleetRoleForReadCommand)
  .de(de_AssumeFleetRoleForReadCommand)
  .build() {}
