// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSystemTableConfigurationInput, UpdateSystemTableConfigurationOutput } from "../models/models_0";
import { UpdateSystemTableConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSystemTableConfigurationCommand}.
 */
export interface UpdateSystemTableConfigurationCommandInput extends UpdateSystemTableConfigurationInput {}
/**
 * @public
 *
 * The output of {@link UpdateSystemTableConfigurationCommand}.
 */
export interface UpdateSystemTableConfigurationCommandOutput extends UpdateSystemTableConfigurationOutput, __MetadataBearer {}

/**
 * <p>Updates the account-level system tables configuration. If no configuration exists, use
 *             <a>CreateSystemTableConfiguration</a> to create one. Fields that you omit
 *             retain their current values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdateSystemTableConfigurationCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdateSystemTableConfigurationCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // UpdateSystemTableConfigurationInput
 *   TableName: "ALL", // required
 *   KmsKeyArn: "STRING_VALUE",
 * };
 * const command = new UpdateSystemTableConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSystemTableConfigurationOutput
 * //   TableName: "ALL",
 * //   KmsKeyArn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastModifiedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateSystemTableConfigurationCommandInput - {@link UpdateSystemTableConfigurationCommandInput}
 * @returns {@link UpdateSystemTableConfigurationCommandOutput}
 * @see {@link UpdateSystemTableConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateSystemTableConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class UpdateSystemTableConfigurationCommand extends command<UpdateSystemTableConfigurationCommandInput, UpdateSystemTableConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSystemTableConfiguration",
  UpdateSystemTableConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSystemTableConfigurationInput;
      output: UpdateSystemTableConfigurationOutput;
    };
    sdk: {
      input: UpdateSystemTableConfigurationCommandInput;
      output: UpdateSystemTableConfigurationCommandOutput;
    };
  };
}
