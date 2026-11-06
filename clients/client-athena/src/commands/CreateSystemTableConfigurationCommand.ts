// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSystemTableConfigurationInput, CreateSystemTableConfigurationOutput } from "../models/models_0";
import { CreateSystemTableConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSystemTableConfigurationCommand}.
 */
export interface CreateSystemTableConfigurationCommandInput extends CreateSystemTableConfigurationInput {}
/**
 * @public
 *
 * The output of {@link CreateSystemTableConfigurationCommand}.
 */
export interface CreateSystemTableConfigurationCommandOutput extends CreateSystemTableConfigurationOutput, __MetadataBearer {}

/**
 * <p>Enables system tables for the current account. System tables are enabled or disabled for
 *             the entire account: creating this configuration enables them. If a configuration
 *             already exists, use <a>UpdateSystemTableConfiguration</a> to update it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreateSystemTableConfigurationCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreateSystemTableConfigurationCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // CreateSystemTableConfigurationInput
 *   ClientRequestToken: "STRING_VALUE",
 *   TableName: "ALL", // required
 *   KmsKeyArn: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateSystemTableConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSystemTableConfigurationOutput
 * //   TableName: "ALL",
 * //   KmsKeyArn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastModifiedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateSystemTableConfigurationCommandInput - {@link CreateSystemTableConfigurationCommandInput}
 * @returns {@link CreateSystemTableConfigurationCommandOutput}
 * @see {@link CreateSystemTableConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateSystemTableConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class CreateSystemTableConfigurationCommand extends command<CreateSystemTableConfigurationCommandInput, CreateSystemTableConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateSystemTableConfiguration",
  CreateSystemTableConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSystemTableConfigurationInput;
      output: CreateSystemTableConfigurationOutput;
    };
    sdk: {
      input: CreateSystemTableConfigurationCommandInput;
      output: CreateSystemTableConfigurationCommandOutput;
    };
  };
}
