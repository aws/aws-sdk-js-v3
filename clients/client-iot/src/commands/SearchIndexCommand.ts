// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { SearchIndexRequest, SearchIndexResponse } from "../models/models_2";
import { de_SearchIndexCommand, se_SearchIndexCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchIndexCommand}.
 */
export interface SearchIndexCommandInput extends SearchIndexRequest {}
/**
 * @public
 *
 * The output of {@link SearchIndexCommand}.
 */
export interface SearchIndexCommandOutput extends SearchIndexResponse, __MetadataBearer {}

/**
 * <p>The query search index.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SearchIndex</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SearchIndexCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SearchIndexCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // SearchIndexRequest
 *   indexName: "STRING_VALUE",
 *   queryString: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   queryVersion: "STRING_VALUE",
 * };
 * const command = new SearchIndexCommand(input);
 * const response = await client.send(command);
 * // { // SearchIndexResponse
 * //   nextToken: "STRING_VALUE",
 * //   things: [ // ThingDocumentList
 * //     { // ThingDocument
 * //       thingName: "STRING_VALUE",
 * //       thingId: "STRING_VALUE",
 * //       thingTypeName: "STRING_VALUE",
 * //       thingGroupNames: [ // ThingGroupNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       attributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       shadow: "STRING_VALUE",
 * //       deviceDefender: "STRING_VALUE",
 * //       connectivity: { // ThingConnectivity
 * //         connected: true || false,
 * //         timestamp: Number("long"),
 * //         disconnectReason: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   thingGroups: [ // ThingGroupDocumentList
 * //     { // ThingGroupDocument
 * //       thingGroupName: "STRING_VALUE",
 * //       thingGroupId: "STRING_VALUE",
 * //       thingGroupDescription: "STRING_VALUE",
 * //       attributes: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       parentGroupNames: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchIndexCommandInput - {@link SearchIndexCommandInput}
 * @returns {@link SearchIndexCommandOutput}
 * @see {@link SearchIndexCommandInput} for command's `input` shape.
 * @see {@link SearchIndexCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link IndexNotReadyException} (client fault)
 *  <p>The index is not ready.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidQueryException} (client fault)
 *  <p>The query is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class SearchIndexCommand extends $Command
  .classBuilder<
    SearchIndexCommandInput,
    SearchIndexCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "SearchIndex", {})
  .n("IoTClient", "SearchIndexCommand")
  .f(void 0, void 0)
  .ser(se_SearchIndexCommand)
  .de(de_SearchIndexCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchIndexRequest;
      output: SearchIndexResponse;
    };
    sdk: {
      input: SearchIndexCommandInput;
      output: SearchIndexCommandOutput;
    };
  };
}
