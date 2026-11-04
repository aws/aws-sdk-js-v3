// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSecurityControlRequest, UpdateSecurityControlResponse } from "../models/models_3";
import { UpdateSecurityControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSecurityControlCommand}.
 */
export interface UpdateSecurityControlCommandInput extends UpdateSecurityControlRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSecurityControlCommand}.
 */
export interface UpdateSecurityControlCommandOutput extends UpdateSecurityControlResponse, __MetadataBearer {}

/**
 * Updates the properties of a security control.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateSecurityControlCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateSecurityControlCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // UpdateSecurityControlRequest
 *   SecurityControlId: "STRING_VALUE", // required
 *   Parameters: { // Parameters // required
 *     "<keys>": { // ParameterConfiguration
 *       ValueType: "DEFAULT" || "CUSTOM", // required
 *       Value: { // ParameterValue Union: only one key present
 *         Integer: Number("int"),
 *         IntegerList: [ // IntegerList
 *           Number("int"),
 *         ],
 *         Double: Number("double"),
 *         String: "STRING_VALUE",
 *         StringList: [ // StringList
 *           "STRING_VALUE",
 *         ],
 *         Boolean: true || false,
 *         Enum: "STRING_VALUE",
 *         EnumList: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   LastUpdateReason: "STRING_VALUE",
 * };
 * const command = new UpdateSecurityControlCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSecurityControlCommandInput - {@link UpdateSecurityControlCommandInput}
 * @returns {@link UpdateSecurityControlCommandOutput}
 * @see {@link UpdateSecurityControlCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityControlCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform the action specified in the request.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link InvalidAccessException} (client fault)
 *
 * The account doesn't have permission to perform this action.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because you supplied an invalid or out-of-range value for an input parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account or throttling limits. The error code describes the limit exceeded.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The request was rejected because it conflicts with the resource's availability. For example, you tried to update a security control that's currently in the `UPDATING` state.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because we can't find the specified resource.
 *
 * @throws {@link SecurityHubServiceException}
 *
 * Base exception class for all service exceptions from SecurityHub service.
 *
 * @example To update security control properties
 * ```javascript
 * // The following example updates the specified security control. Specifically, this example updates control parameters.
 * const input = {
 *   LastUpdateReason: "Comply with internal requirements",
 *   Parameters: {
 *     maxCredentialUsageAge: {
 *       Value: {
 *         Integer: 15
 *       },
 *       ValueType: "CUSTOM"
 *     }
 *   },
 *   SecurityControlId: "ACM.1"
 * };
 * const command = new UpdateSecurityControlCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateSecurityControlCommand extends command<UpdateSecurityControlCommandInput, UpdateSecurityControlCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSecurityControl",
  UpdateSecurityControl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSecurityControlRequest;
      output: {};
    };
    sdk: {
      input: UpdateSecurityControlCommandInput;
      output: UpdateSecurityControlCommandOutput;
    };
  };
}
