// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GenerateQueryRequest, GenerateQueryResponse } from "../models/models_0";
import { de_GenerateQueryCommand, se_GenerateQueryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateQueryCommand}.
 */
export interface GenerateQueryCommandInput extends GenerateQueryRequest {}
/**
 * @public
 *
 * The output of {@link GenerateQueryCommand}.
 */
export interface GenerateQueryCommandOutput extends GenerateQueryResponse, __MetadataBearer {}

/**
 * <p>
 *          Generates a query from a natural language prompt. This operation uses generative artificial intelligence
 *          (generative AI) to produce a ready-to-use SQL query from the prompt.
 *       </p>
 *          <p>The prompt can be a question or a statement about the event data
 *          in your event data store. For example, you can enter prompts like "What are my
 *          top errors in the past month?" and “Give me a list of users that used SNS.”</p>
 *          <p>The prompt must be in English. For information about limitations, permissions, and supported Regions, see
 *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-query-generator.html">Create CloudTrail Lake queries from natural language prompts</a>
 *          in the <i>CloudTrail </i> user guide.</p>
 *          <note>
 *             <p>Do not include any personally identifying, confidential, or sensitive information
 *             in your prompts.</p>
 *             <p>This feature uses generative AI large language models (LLMs); we recommend double-checking the
 *             LLM response.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GenerateQueryCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GenerateQueryCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // GenerateQueryRequest
 *   EventDataStores: [ // EventDataStoreList // required
 *     "STRING_VALUE",
 *   ],
 *   Prompt: "STRING_VALUE", // required
 * };
 * const command = new GenerateQueryCommand(input);
 * const response = await client.send(command);
 * // { // GenerateQueryResponse
 * //   QueryStatement: "STRING_VALUE",
 * //   QueryAlias: "STRING_VALUE",
 * //   EventDataStoreOwnerAccountId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GenerateQueryCommandInput - {@link GenerateQueryCommandInput}
 * @returns {@link GenerateQueryCommandOutput}
 * @see {@link GenerateQueryCommandInput} for command's `input` shape.
 * @see {@link GenerateQueryCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *  <p>The specified event data store ARN is not valid or does not map to an event data store
 *          in your account.</p>
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *  <p>The specified event data store was not found.</p>
 *
 * @throws {@link GenerateResponseException} (client fault)
 *  <p>
 *          This exception is thrown when a valid query could not be generated for the provided prompt.
 *       </p>
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *  <p>The event data store is inactive.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class GenerateQueryCommand extends $Command
  .classBuilder<
    GenerateQueryCommandInput,
    GenerateQueryCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudTrail_20131101", "GenerateQuery", {})
  .n("CloudTrailClient", "GenerateQueryCommand")
  .f(void 0, void 0)
  .ser(se_GenerateQueryCommand)
  .de(de_GenerateQueryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateQueryRequest;
      output: GenerateQueryResponse;
    };
    sdk: {
      input: GenerateQueryCommandInput;
      output: GenerateQueryCommandOutput;
    };
  };
}
