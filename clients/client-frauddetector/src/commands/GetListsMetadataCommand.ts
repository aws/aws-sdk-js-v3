// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetListsMetadataRequest, GetListsMetadataResult } from "../models/models_0";
import { GetListsMetadata } from "../schemas/schemas_9_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetListsMetadataCommand}.
 */
export interface GetListsMetadataCommandInput extends GetListsMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetListsMetadataCommand}.
 */
export interface GetListsMetadataCommandOutput extends GetListsMetadataResult, __MetadataBearer {}

/**
 * <p>
 *            Gets the metadata of either all the lists under the account or the specified list.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetListsMetadataCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetListsMetadataCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // GetListsMetadataRequest
 *   name: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetListsMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetListsMetadataResult
 * //   lists: [ // AllowDenyLists
 * //     { // AllowDenyList
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       variableType: "STRING_VALUE",
 * //       createdTime: "STRING_VALUE",
 * //       updatedTime: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetListsMetadataCommandInput - {@link GetListsMetadataCommandInput}
 * @returns {@link GetListsMetadataCommandOutput}
 * @see {@link GetListsMetadataCommandInput} for command's `input` shape.
 * @see {@link GetListsMetadataCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 *
 * @public
 */
export class GetListsMetadataCommand extends $Command
  .classBuilder<
    GetListsMetadataCommandInput,
    GetListsMetadataCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "GetListsMetadata", {})
  .n("FraudDetectorClient", "GetListsMetadataCommand")
  .sc(GetListsMetadata)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetListsMetadataRequest;
      output: GetListsMetadataResult;
    };
    sdk: {
      input: GetListsMetadataCommandInput;
      output: GetListsMetadataCommandOutput;
    };
  };
}
