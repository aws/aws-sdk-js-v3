// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RecordHandlerProgressInput, RecordHandlerProgressOutput } from "../models/models_0";
import { RecordHandlerProgress$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Reports progress of a resource handler to CloudFormation.
 *
 * Reserved for use by the [CloudFormation CLI](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html). Don't use this API in your code.
 *
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
 *
 * Error reserved for use by the [CloudFormation CLI](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html). CloudFormation doesn't return this error to users.
 *
 * @throws {@link OperationStatusCheckFailedException} (client fault)
 *
 * Error reserved for use by the [CloudFormation CLI](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html). CloudFormation doesn't return this error to users.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class RecordHandlerProgressCommand extends command<RecordHandlerProgressCommandInput, RecordHandlerProgressCommandOutput>(
  _ep0,
  _mw0,
  "RecordHandlerProgress",
  RecordHandlerProgress$
) {
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
