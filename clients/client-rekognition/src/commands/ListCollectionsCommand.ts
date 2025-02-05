// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCollectionsRequest, ListCollectionsResponse } from "../models/models_0";
import { de_ListCollectionsCommand, se_ListCollectionsCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCollectionsCommand}.
 */
export interface ListCollectionsCommandInput extends ListCollectionsRequest {}
/**
 * @public
 *
 * The output of {@link ListCollectionsCommand}.
 */
export interface ListCollectionsCommandOutput extends ListCollectionsResponse, __MetadataBearer {}

/**
 * <p>Returns list of collection IDs in your account. If the result is truncated, the
 *       response also provides a <code>NextToken</code> that you can use in the subsequent request to
 *       fetch the next set of collection IDs.</p>
 *          <p>For an example, see Listing collections in the Amazon Rekognition Developer
 *       Guide.</p>
 *          <p>This operation requires permissions to perform the
 *         <code>rekognition:ListCollections</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, ListCollectionsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, ListCollectionsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RekognitionClient(config);
 * const input = { // ListCollectionsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCollectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListCollectionsResponse
 * //   CollectionIds: [ // CollectionIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   FaceModelVersions: [ // FaceModelVersionList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCollectionsCommandInput - {@link ListCollectionsCommandInput}
 * @returns {@link ListCollectionsCommandOutput}
 * @see {@link ListCollectionsCommandInput} for command's `input` shape.
 * @see {@link ListCollectionsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Pagination token in the request is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @public
 * @example To list the collections
 * ```javascript
 * // This operation returns a list of Rekognition collections.
 * const input = {};
 * const command = new ListCollectionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CollectionIds": [
 *     "myphotos"
 *   ]
 * }
 * *\/
 * // example id: to-list-the-collections-1482179199088
 * ```
 *
 */
export class ListCollectionsCommand extends $Command
  .classBuilder<
    ListCollectionsCommandInput,
    ListCollectionsCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RekognitionService", "ListCollections", {})
  .n("RekognitionClient", "ListCollectionsCommand")
  .f(void 0, void 0)
  .ser(se_ListCollectionsCommand)
  .de(de_ListCollectionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCollectionsRequest;
      output: ListCollectionsResponse;
    };
    sdk: {
      input: ListCollectionsCommandInput;
      output: ListCollectionsCommandOutput;
    };
  };
}
