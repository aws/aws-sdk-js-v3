// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSystemTableConfigurationInput, GetSystemTableConfigurationOutput } from "../models/models_0";
import { GetSystemTableConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSystemTableConfigurationCommand}.
 */
export interface GetSystemTableConfigurationCommandInput extends GetSystemTableConfigurationInput {}
/**
 * @public
 *
 * The output of {@link GetSystemTableConfigurationCommand}.
 */
export interface GetSystemTableConfigurationCommandOutput extends GetSystemTableConfigurationOutput, __MetadataBearer {}

/**
 * <p>Returns the account-level system tables configuration. Fails with a
 *             <code>ResourceNotFoundException</code> if system tables are not enabled for the
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetSystemTableConfigurationCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetSystemTableConfigurationCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // GetSystemTableConfigurationInput
 *   TableName: "ALL", // required
 * };
 * const command = new GetSystemTableConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetSystemTableConfigurationOutput
 * //   TableName: "ALL",
 * //   KmsKeyArn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastModifiedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetSystemTableConfigurationCommandInput - {@link GetSystemTableConfigurationCommandInput}
 * @returns {@link GetSystemTableConfigurationCommandOutput}
 * @see {@link GetSystemTableConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetSystemTableConfigurationCommandOutput} for command's `response` shape.
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
export class GetSystemTableConfigurationCommand extends command<GetSystemTableConfigurationCommandInput, GetSystemTableConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetSystemTableConfiguration",
  GetSystemTableConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSystemTableConfigurationInput;
      output: GetSystemTableConfigurationOutput;
    };
    sdk: {
      input: GetSystemTableConfigurationCommandInput;
      output: GetSystemTableConfigurationCommandOutput;
    };
  };
}
