// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetS3TableIntegrationInput, GetS3TableIntegrationOutput } from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { GetS3TableIntegration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetS3TableIntegrationCommand}.
 */
export interface GetS3TableIntegrationCommandInput extends GetS3TableIntegrationInput {}
/**
 * @public
 *
 * The output of {@link GetS3TableIntegrationCommand}.
 */
export interface GetS3TableIntegrationCommandOutput extends GetS3TableIntegrationOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific S3 Table integration, including its configuration, status, and metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, GetS3TableIntegrationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, GetS3TableIntegrationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // GetS3TableIntegrationInput
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetS3TableIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // GetS3TableIntegrationOutput
 * //   Arn: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   Status: "ACTIVE" || "DELETING",
 * //   Encryption: { // Encryption
 * //     SseAlgorithm: "aws:kms" || "AES256", // required
 * //     KmsKeyArn: "STRING_VALUE",
 * //   },
 * //   DestinationTableBucketArn: "STRING_VALUE",
 * //   CreatedTimeStamp: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetS3TableIntegrationCommandInput - {@link GetS3TableIntegrationCommandInput}
 * @returns {@link GetS3TableIntegrationCommandOutput}
 * @see {@link GetS3TableIntegrationCommandInput} for command's `input` shape.
 * @see {@link GetS3TableIntegrationCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Indicates the request has failed to process because of an unknown server error, exception, or failure. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified resource (such as a telemetry rule) could not be found. </p>
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
export class GetS3TableIntegrationCommand extends $Command
  .classBuilder<
    GetS3TableIntegrationCommandInput,
    GetS3TableIntegrationCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "GetS3TableIntegration", {})
  .n("ObservabilityAdminClient", "GetS3TableIntegrationCommand")
  .sc(GetS3TableIntegration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetS3TableIntegrationInput;
      output: GetS3TableIntegrationOutput;
    };
    sdk: {
      input: GetS3TableIntegrationCommandInput;
      output: GetS3TableIntegrationCommandOutput;
    };
  };
}
