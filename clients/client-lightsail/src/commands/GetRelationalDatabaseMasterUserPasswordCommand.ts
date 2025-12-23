// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import type {
  GetRelationalDatabaseMasterUserPasswordRequest,
  GetRelationalDatabaseMasterUserPasswordResult,
} from "../models/models_1";
import { GetRelationalDatabaseMasterUserPassword$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRelationalDatabaseMasterUserPasswordCommand}.
 */
export interface GetRelationalDatabaseMasterUserPasswordCommandInput extends GetRelationalDatabaseMasterUserPasswordRequest {}
/**
 * @public
 *
 * The output of {@link GetRelationalDatabaseMasterUserPasswordCommand}.
 */
export interface GetRelationalDatabaseMasterUserPasswordCommandOutput extends GetRelationalDatabaseMasterUserPasswordResult, __MetadataBearer {}

/**
 * <p>Returns the current, previous, or pending versions of the master user password for a
 *       Lightsail database.</p>
 *          <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based
 *       access control via resource tags applied to the resource identified by
 *       relationalDatabaseName.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseMasterUserPasswordCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseMasterUserPasswordCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetRelationalDatabaseMasterUserPasswordRequest
 *   relationalDatabaseName: "STRING_VALUE", // required
 *   passwordVersion: "CURRENT" || "PREVIOUS" || "PENDING",
 * };
 * const command = new GetRelationalDatabaseMasterUserPasswordCommand(input);
 * const response = await client.send(command);
 * // { // GetRelationalDatabaseMasterUserPasswordResult
 * //   masterUserPassword: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetRelationalDatabaseMasterUserPasswordCommandInput - {@link GetRelationalDatabaseMasterUserPasswordCommandInput}
 * @returns {@link GetRelationalDatabaseMasterUserPasswordCommandOutput}
 * @see {@link GetRelationalDatabaseMasterUserPasswordCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseMasterUserPasswordCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an operation is performed on resources in an opt-in
 *       Region that is currently being set up.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class GetRelationalDatabaseMasterUserPasswordCommand extends $Command
  .classBuilder<
    GetRelationalDatabaseMasterUserPasswordCommandInput,
    GetRelationalDatabaseMasterUserPasswordCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Lightsail_20161128", "GetRelationalDatabaseMasterUserPassword", {})
  .n("LightsailClient", "GetRelationalDatabaseMasterUserPasswordCommand")
  .sc(GetRelationalDatabaseMasterUserPassword$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRelationalDatabaseMasterUserPasswordRequest;
      output: GetRelationalDatabaseMasterUserPasswordResult;
    };
    sdk: {
      input: GetRelationalDatabaseMasterUserPasswordCommandInput;
      output: GetRelationalDatabaseMasterUserPasswordCommandOutput;
    };
  };
}
