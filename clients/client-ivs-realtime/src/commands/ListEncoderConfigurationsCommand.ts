// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { ListEncoderConfigurationsRequest, ListEncoderConfigurationsResponse } from "../models/models_0";
import { ListEncoderConfigurations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets summary information about all EncoderConfigurations in your account, in the AWS
 *          region where the API request is processed.</p>
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
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 *
 * @public
 */
export class ListEncoderConfigurationsCommand extends $Command
  .classBuilder<
    ListEncoderConfigurationsCommandInput,
    ListEncoderConfigurationsCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "ListEncoderConfigurations", {})
  .n("IVSRealTimeClient", "ListEncoderConfigurationsCommand")
  .sc(ListEncoderConfigurations)
  .build() {
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
