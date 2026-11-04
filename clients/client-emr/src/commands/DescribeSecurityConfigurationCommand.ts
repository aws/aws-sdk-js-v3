// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSecurityConfigurationInput, DescribeSecurityConfigurationOutput } from "../models/models_0";
import { DescribeSecurityConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeSecurityConfigurationCommand}.
 */
export interface DescribeSecurityConfigurationCommandInput extends DescribeSecurityConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DescribeSecurityConfigurationCommand}.
 */
export interface DescribeSecurityConfigurationCommandOutput extends DescribeSecurityConfigurationOutput, __MetadataBearer {}

/**
 * Provides the details of a security configuration by returning the configuration JSON.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeSecurityConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeSecurityConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // DescribeSecurityConfigurationInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecurityConfigurationOutput
 * //   Name: "STRING_VALUE",
 * //   SecurityConfiguration: "STRING_VALUE",
 * //   CreationDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeSecurityConfigurationCommandInput - {@link DescribeSecurityConfigurationCommandInput}
 * @returns {@link DescribeSecurityConfigurationCommandOutput}
 * @see {@link DescribeSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Amazon EMR service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception occurs when there is something wrong with user input.
 *
 * @throws {@link EMRServiceException}
 *
 * Base exception class for all service exceptions from EMR service.
 *
 * @public
 */
export class DescribeSecurityConfigurationCommand extends command<DescribeSecurityConfigurationCommandInput, DescribeSecurityConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSecurityConfiguration",
  DescribeSecurityConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSecurityConfigurationInput;
      output: DescribeSecurityConfigurationOutput;
    };
    sdk: {
      input: DescribeSecurityConfigurationCommandInput;
      output: DescribeSecurityConfigurationCommandOutput;
    };
  };
}
