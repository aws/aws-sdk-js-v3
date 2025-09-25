// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RecordHandlerProgressInput, RecordHandlerProgressOutput } from "../models/models_1";
import { RecordHandlerProgress } from "../schemas/schemas_28_";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RecordHandlerProgressCommand}.
 */
export interface RecordHandlerProgressCommandInput extends RecordHandlerProgressInput {}
/**
 * @public
 *
 * The output of {@link RecordHandlerProgressCommand}.
 */
export interface RecordHandlerProgressCommandOutput extends RecordHandlerProgressOutput, __MetadataBearer {}

/**
 * <p>Reports progress of a resource handler to CloudFormation.</p>
 *          <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation
 *         CLI</a>. Don't use this API in your code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, RecordHandlerProgressCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, RecordHandlerProgressCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // RecordHandlerProgressInput
 *   BearerToken: "STRING_VALUE", // required
 *   OperationStatus: "PENDING" || "IN_PROGRESS" || "SUCCESS" || "FAILED", // required
 *   CurrentOperationStatus: "PENDING" || "IN_PROGRESS" || "SUCCESS" || "FAILED",
 *   StatusMessage: "STRING_VALUE",
 *   ErrorCode: "NotUpdatable" || "InvalidRequest" || "AccessDenied" || "InvalidCredentials" || "AlreadyExists" || "NotFound" || "ResourceConflict" || "Throttling" || "ServiceLimitExceeded" || "NotStabilized" || "GeneralServiceException" || "ServiceInternalError" || "NetworkFailure" || "InternalFailure" || "InvalidTypeConfiguration" || "HandlerInternalFailure" || "NonCompliant" || "Unknown" || "UnsupportedTarget",
 *   ResourceModel: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new RecordHandlerProgressCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RecordHandlerProgressCommandInput - {@link RecordHandlerProgressCommandInput}
 * @returns {@link RecordHandlerProgressCommandOutput}
 * @see {@link RecordHandlerProgressCommandInput} for command's `input` shape.
 * @see {@link RecordHandlerProgressCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link InvalidStateTransitionException} (client fault)
 *  <p>Error reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. CloudFormation doesn't
 *    return this error to users.</p>
 *
 * @throws {@link OperationStatusCheckFailedException} (client fault)
 *  <p>Error reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. CloudFormation doesn't
 *    return this error to users.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class RecordHandlerProgressCommand extends $Command
  .classBuilder<
    RecordHandlerProgressCommandInput,
    RecordHandlerProgressCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "RecordHandlerProgress", {})
  .n("CloudFormationClient", "RecordHandlerProgressCommand")
  .sc(RecordHandlerProgress)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RecordHandlerProgressInput;
      output: {};
    };
    sdk: {
      input: RecordHandlerProgressCommandInput;
      output: RecordHandlerProgressCommandOutput;
    };
  };
}
