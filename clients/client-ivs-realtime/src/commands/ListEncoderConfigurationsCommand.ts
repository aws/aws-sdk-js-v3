// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEncoderConfigurationsRequest, ListEncoderConfigurationsResponse } from "../models/models_0";
import { ListEncoderConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEncoderConfigurationsCommand}.
 */
export interface ListEncoderConfigurationsCommandInput extends ListEncoderConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListEncoderConfigurationsCommand}.
 */
export interface ListEncoderConfigurationsCommandOutput extends ListEncoderConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Gets summary information about all EncoderConfigurations in your account, in the AWS region where the API request is processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, ListEncoderConfigurationsCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, ListEncoderConfigurationsCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // ListEncoderConfigurationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEncoderConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListEncoderConfigurationsResponse
 * //   encoderConfigurations: [ // EncoderConfigurationSummaryList // required
 * //     { // EncoderConfigurationSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEncoderConfigurationsCommandInput - {@link ListEncoderConfigurationsCommandInput}
 * @returns {@link ListEncoderConfigurationsCommandOutput}
 * @see {@link ListEncoderConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListEncoderConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 *
 * @public
 */
export class ListEncoderConfigurationsCommand extends command<ListEncoderConfigurationsCommandInput, ListEncoderConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListEncoderConfigurations",
  ListEncoderConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEncoderConfigurationsRequest;
      output: ListEncoderConfigurationsResponse;
    };
    sdk: {
      input: ListEncoderConfigurationsCommandInput;
      output: ListEncoderConfigurationsCommandOutput;
    };
  };
}
