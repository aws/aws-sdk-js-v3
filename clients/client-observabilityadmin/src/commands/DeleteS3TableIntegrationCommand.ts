// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteS3TableIntegrationInput } from "../models/models_0";
import type {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { DeleteS3TableIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteS3TableIntegrationCommand}.
 */
export interface DeleteS3TableIntegrationCommandInput extends DeleteS3TableIntegrationInput {}
/**
 * @public
 *
 * The output of {@link DeleteS3TableIntegrationCommand}.
 */
export interface DeleteS3TableIntegrationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an S3 Table integration and its associated data. This operation removes the connection between CloudWatch Observability Admin and S3 Tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, DeleteS3TableIntegrationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, DeleteS3TableIntegrationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // DeleteS3TableIntegrationInput
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteS3TableIntegrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteS3TableIntegrationCommandInput - {@link DeleteS3TableIntegrationCommandInput}
 * @returns {@link DeleteS3TableIntegrationCommandOutput}
 * @see {@link DeleteS3TableIntegrationCommandInput} for command's `input` shape.
 * @see {@link DeleteS3TableIntegrationCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Indicates the request has failed to process because of an unknown server error, exception, or failure. </p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p> The requested operation cannot be completed on the specified resource in the current state. </p>
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
export class DeleteS3TableIntegrationCommand extends $Command
  .classBuilder<
    DeleteS3TableIntegrationCommandInput,
    DeleteS3TableIntegrationCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "DeleteS3TableIntegration", {})
  .n("ObservabilityAdminClient", "DeleteS3TableIntegrationCommand")
  .sc(DeleteS3TableIntegration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteS3TableIntegrationInput;
      output: {};
    };
    sdk: {
      input: DeleteS3TableIntegrationCommandInput;
      output: DeleteS3TableIntegrationCommandOutput;
    };
  };
}
