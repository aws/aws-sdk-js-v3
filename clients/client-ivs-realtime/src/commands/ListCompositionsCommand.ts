// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { ListCompositionsRequest, ListCompositionsResponse } from "../models/models_0";
import { de_ListCompositionsCommand, se_ListCompositionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCompositionsCommand}.
 */
export interface ListCompositionsCommandInput extends ListCompositionsRequest {}
/**
 * @public
 *
 * The output of {@link ListCompositionsCommand}.
 */
export interface ListCompositionsCommandOutput extends ListCompositionsResponse, __MetadataBearer {}

/**
 * <p>Gets summary information about all Compositions in your account, in the AWS region
 *          where the API request is processed. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, ListCompositionsCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, ListCompositionsCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * const client = new IVSRealTimeClient(config);
 * const input = { // ListCompositionsRequest
 *   filterByStageArn: "STRING_VALUE",
 *   filterByEncoderConfigurationArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCompositionsCommand(input);
 * const response = await client.send(command);
 * // { // ListCompositionsResponse
 * //   compositions: [ // CompositionSummaryList // required
 * //     { // CompositionSummary
 * //       arn: "STRING_VALUE", // required
 * //       stageArn: "STRING_VALUE", // required
 * //       destinations: [ // DestinationSummaryList // required
 * //         { // DestinationSummary
 * //           id: "STRING_VALUE", // required
 * //           state: "STRING_VALUE", // required
 * //           startTime: new Date("TIMESTAMP"),
 * //           endTime: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       state: "STRING_VALUE", // required
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCompositionsCommandInput - {@link ListCompositionsCommandInput}
 * @returns {@link ListCompositionsCommandOutput}
 * @see {@link ListCompositionsCommandInput} for command's `input` shape.
 * @see {@link ListCompositionsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListCompositionsCommand extends $Command
  .classBuilder<
    ListCompositionsCommandInput,
    ListCompositionsCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "ListCompositions", {})
  .n("IVSRealTimeClient", "ListCompositionsCommand")
  .f(void 0, void 0)
  .ser(se_ListCompositionsCommand)
  .de(de_ListCompositionsCommand)
  .build() {}
