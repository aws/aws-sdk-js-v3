// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFailoverSlateConfigurationRequest, GetFailoverSlateConfigurationResponse } from "../models/models_0";
import { GetFailoverSlateConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetFailoverSlateConfigurationCommand}.
 */
export interface GetFailoverSlateConfigurationCommandInput extends GetFailoverSlateConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetFailoverSlateConfigurationCommand}.
 */
export interface GetFailoverSlateConfigurationCommandOutput extends GetFailoverSlateConfigurationResponse, __MetadataBearer {}

/**
 * <p>Gets the failover slate configuration for the specified ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetFailoverSlateConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetFailoverSlateConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // GetFailoverSlateConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetFailoverSlateConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetFailoverSlateConfigurationResponse
 * //   failoverSlateConfiguration: { // FailoverSlateConfiguration
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     activationThresholdSeconds: Number("int"),
 * //     minSlateDisplaySeconds: Number("int"),
 * //     maxSlateDisplaySeconds: Number("int"),
 * //     state: "STRING_VALUE", // required
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFailoverSlateConfigurationCommandInput - {@link GetFailoverSlateConfigurationCommandInput}
 * @returns {@link GetFailoverSlateConfigurationCommandOutput}
 * @see {@link GetFailoverSlateConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetFailoverSlateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class GetFailoverSlateConfigurationCommand extends command<GetFailoverSlateConfigurationCommandInput, GetFailoverSlateConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetFailoverSlateConfiguration",
  GetFailoverSlateConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFailoverSlateConfigurationRequest;
      output: GetFailoverSlateConfigurationResponse;
    };
    sdk: {
      input: GetFailoverSlateConfigurationCommandInput;
      output: GetFailoverSlateConfigurationCommandOutput;
    };
  };
}
