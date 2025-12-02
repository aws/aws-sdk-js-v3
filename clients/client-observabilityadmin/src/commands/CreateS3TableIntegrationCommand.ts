// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateS3TableIntegrationInput, CreateS3TableIntegrationOutput } from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { CreateS3TableIntegration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateS3TableIntegrationCommand}.
 */
export interface CreateS3TableIntegrationCommandInput extends CreateS3TableIntegrationInput {}
/**
 * @public
 *
 * The output of {@link CreateS3TableIntegrationCommand}.
 */
export interface CreateS3TableIntegrationCommandOutput extends CreateS3TableIntegrationOutput, __MetadataBearer {}

/**
 * <p>Creates an integration between CloudWatch and S3 Tables for analytics. This integration enables querying CloudWatch telemetry data using analytics engines like Amazon Athena, Amazon Redshift, and Apache Spark.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, CreateS3TableIntegrationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, CreateS3TableIntegrationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // CreateS3TableIntegrationInput
 *   Encryption: { // Encryption
 *     SseAlgorithm: "aws:kms" || "AES256", // required
 *     KmsKeyArn: "STRING_VALUE",
 *   },
 *   RoleArn: "STRING_VALUE", // required
 *   Tags: { // TagMapInput
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateS3TableIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // CreateS3TableIntegrationOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateS3TableIntegrationCommandInput - {@link CreateS3TableIntegrationCommandInput}
 * @returns {@link CreateS3TableIntegrationCommandOutput}
 * @see {@link CreateS3TableIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateS3TableIntegrationCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The requested operation conflicts with the current state of the specified resource or with another request. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Indicates the request has failed to process because of an unknown server error, exception, or failure. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The requested operation would exceed the allowed quota for the specified resource type. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> The request throughput limit was exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Indicates input validation failed. Check your request parameters and retry the request. </p>
 *
 * @throws {@link ObservabilityAdminServiceException}
 * <p>Base exception class for all service exceptions from ObservabilityAdmin service.</p>
 *
 *
 * @public
 */
export class CreateS3TableIntegrationCommand extends $Command
  .classBuilder<
    CreateS3TableIntegrationCommandInput,
    CreateS3TableIntegrationCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "CreateS3TableIntegration", {})
  .n("ObservabilityAdminClient", "CreateS3TableIntegrationCommand")
  .sc(CreateS3TableIntegration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateS3TableIntegrationInput;
      output: CreateS3TableIntegrationOutput;
    };
    sdk: {
      input: CreateS3TableIntegrationCommandInput;
      output: CreateS3TableIntegrationCommandOutput;
    };
  };
}
