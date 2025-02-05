// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { ListIngestConfigurationsRequest, ListIngestConfigurationsResponse } from "../models/models_0";
import { de_ListIngestConfigurationsCommand, se_ListIngestConfigurationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIngestConfigurationsCommand}.
 */
export interface ListIngestConfigurationsCommandInput extends ListIngestConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListIngestConfigurationsCommand}.
 */
export interface ListIngestConfigurationsCommandOutput extends ListIngestConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Lists all IngestConfigurations in your account, in the AWS region where the API request is processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, ListIngestConfigurationsCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, ListIngestConfigurationsCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IVSRealTimeClient(config);
 * const input = { // ListIngestConfigurationsRequest
 *   filterByStageArn: "STRING_VALUE",
 *   filterByState: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIngestConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListIngestConfigurationsResponse
 * //   ingestConfigurations: [ // IngestConfigurationList // required
 * //     { // IngestConfigurationSummary
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE", // required
 * //       ingestProtocol: "RTMP" || "RTMPS", // required
 * //       stageArn: "STRING_VALUE", // required
 * //       participantId: "STRING_VALUE", // required
 * //       state: "STRING_VALUE", // required
 * //       userId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIngestConfigurationsCommandInput - {@link ListIngestConfigurationsCommandInput}
 * @returns {@link ListIngestConfigurationsCommandOutput}
 * @see {@link ListIngestConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListIngestConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 * @public
 */
export class ListIngestConfigurationsCommand extends $Command
  .classBuilder<
    ListIngestConfigurationsCommandInput,
    ListIngestConfigurationsCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "ListIngestConfigurations", {})
  .n("IVSRealTimeClient", "ListIngestConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListIngestConfigurationsCommand)
  .de(de_ListIngestConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIngestConfigurationsRequest;
      output: ListIngestConfigurationsResponse;
    };
    sdk: {
      input: ListIngestConfigurationsCommandInput;
      output: ListIngestConfigurationsCommandOutput;
    };
  };
}
