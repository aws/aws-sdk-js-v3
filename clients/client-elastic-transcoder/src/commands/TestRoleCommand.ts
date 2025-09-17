// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { TestRoleRequest, TestRoleResponse } from "../models/models_0";
import { de_TestRoleCommand, se_TestRoleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestRoleCommand}.
 */
export interface TestRoleCommandInput extends TestRoleRequest {}
/**
 * @public
 *
 * The output of {@link TestRoleCommand}.
 */
export interface TestRoleCommandOutput extends TestRoleResponse, __MetadataBearer {}

/**
 * <p>The TestRole operation tests the IAM role used to create the pipeline.</p>
 *         <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using
 *             has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding
 *             process. The action attempts to assume the specified IAM role, checks read access to the
 *             input and output buckets, and tries to send a test notification to Amazon SNS topics
 *             that you specify.</p>
 *
 * @deprecated
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, TestRoleCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, TestRoleCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * // import type { ElasticTranscoderClientConfig } from "@aws-sdk/client-elastic-transcoder";
 * const config = {}; // type is ElasticTranscoderClientConfig
 * const client = new ElasticTranscoderClient(config);
 * const input = { // TestRoleRequest
 *   Role: "STRING_VALUE", // required
 *   InputBucket: "STRING_VALUE", // required
 *   OutputBucket: "STRING_VALUE", // required
 *   Topics: [ // SnsTopics // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new TestRoleCommand(input);
 * const response = await client.send(command);
 * // { // TestRoleResponse
 * //   Success: "STRING_VALUE",
 * //   Messages: [ // ExceptionMessages
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param TestRoleCommandInput - {@link TestRoleCommandInput}
 * @returns {@link TestRoleCommandOutput}
 * @see {@link TestRoleCommandInput} for command's `input` shape.
 * @see {@link TestRoleCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for ElasticTranscoderClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>General authentication failure. The request was not signed correctly.</p>
 *
 * @throws {@link IncompatibleVersionException} (client fault)
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist or is not available. For example, the pipeline
 *             to which you're trying to add a job doesn't exist or is still being created.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more required parameter values were not provided in the request.</p>
 *
 * @throws {@link ElasticTranscoderServiceException}
 * <p>Base exception class for all service exceptions from ElasticTranscoder service.</p>
 *
 *
 * @public
 */
export class TestRoleCommand extends $Command
  .classBuilder<
    TestRoleCommandInput,
    TestRoleCommandOutput,
    ElasticTranscoderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticTranscoderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EtsCustomerService", "TestRole", {})
  .n("ElasticTranscoderClient", "TestRoleCommand")
  .f(void 0, void 0)
  .ser(se_TestRoleCommand)
  .de(de_TestRoleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestRoleRequest;
      output: TestRoleResponse;
    };
    sdk: {
      input: TestRoleCommandInput;
      output: TestRoleCommandOutput;
    };
  };
}
