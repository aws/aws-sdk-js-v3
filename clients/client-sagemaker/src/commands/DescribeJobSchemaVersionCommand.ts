// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeJobSchemaVersionRequest, DescribeJobSchemaVersionResponse } from "../models/models_3";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeJobSchemaVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobSchemaVersionCommand}.
 */
export interface DescribeJobSchemaVersionCommandInput extends DescribeJobSchemaVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobSchemaVersionCommand}.
 */
export interface DescribeJobSchemaVersionCommandOutput extends DescribeJobSchemaVersionResponse, __MetadataBearer {}

/**
 * <p>Returns the JSON schema for a specified job category and schema version. Use this schema to validate your <code>JobConfigDocument</code> before calling <code>CreateJob</code>. If you don't specify a schema version, the latest version is returned. The schema defines required fields, allowed values, and constraints for the job configuration.</p> <p>The following operations are related to <code>DescribeJobSchemaVersion</code>:</p> <ul> <li> <p> <code>ListJobSchemaVersions</code> </p> </li> <li> <p> <code>CreateJob</code> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeJobSchemaVersionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeJobSchemaVersionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeJobSchemaVersionRequest
 *   JobCategory: "AgentRFT" || "AgentRFTEvaluation", // required
 *   JobConfigSchemaVersion: "STRING_VALUE",
 * };
 * const command = new DescribeJobSchemaVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobSchemaVersionResponse
 * //   JobCategory: "AgentRFT" || "AgentRFTEvaluation", // required
 * //   JobConfigSchemaVersion: "STRING_VALUE", // required
 * //   JobConfigSchema: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DescribeJobSchemaVersionCommandInput - {@link DescribeJobSchemaVersionCommandInput}
 * @returns {@link DescribeJobSchemaVersionCommandOutput}
 * @see {@link DescribeJobSchemaVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeJobSchemaVersionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeJobSchemaVersionCommand extends $Command
  .classBuilder<
    DescribeJobSchemaVersionCommandInput,
    DescribeJobSchemaVersionCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DescribeJobSchemaVersion", {})
  .n("SageMakerClient", "DescribeJobSchemaVersionCommand")
  .sc(DescribeJobSchemaVersion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeJobSchemaVersionRequest;
      output: DescribeJobSchemaVersionResponse;
    };
    sdk: {
      input: DescribeJobSchemaVersionCommandInput;
      output: DescribeJobSchemaVersionCommandOutput;
    };
  };
}
