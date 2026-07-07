// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateConfigurationRequest, UpdateConfigurationResponse } from "../models/models_1";
import { UpdateConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationCommand}.
 */
export interface UpdateConfigurationCommandInput extends UpdateConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationCommand}.
 */
export interface UpdateConfigurationCommandOutput extends UpdateConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates the scan configuration for your Amazon Inspector account. If you don't specify an
 *          <code>accountId</code>, this operation updates the delegated administrator's configuration
 *          and propagates it to member accounts that have not been individually configured. If you
 *          specify an <code>accountId</code>, this operation updates that member account's
 *          configuration. Only the delegated administrator can specify an <code>accountId</code>;
 *          member accounts cannot call this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, UpdateConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, UpdateConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // UpdateConfigurationRequest
 *   accountId: "STRING_VALUE",
 *   ecrConfiguration: { // EcrConfiguration
 *     rescanDuration: "STRING_VALUE", // required
 *     pullDateRescanDuration: "STRING_VALUE",
 *     pullDateRescanMode: "STRING_VALUE",
 *   },
 *   ec2Configuration: { // Ec2Configuration
 *     scanMode: "STRING_VALUE", // required
 *     activateVMScanner: true || false,
 *   },
 *   updateConfigurationInheritance: { // UpdateConfigurationInheritance
 *     ec2Configuration: "STRING_VALUE",
 *     ecrConfiguration: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConfigurationCommandInput - {@link UpdateConfigurationCommandInput}
 * @returns {@link UpdateConfigurationCommandOutput}
 * @see {@link UpdateConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class UpdateConfigurationCommand extends command<UpdateConfigurationCommandInput, UpdateConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateConfiguration",
  UpdateConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateConfigurationCommandInput;
      output: UpdateConfigurationCommandOutput;
    };
  };
}
