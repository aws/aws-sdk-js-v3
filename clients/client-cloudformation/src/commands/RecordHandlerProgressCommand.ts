// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { RecordHandlerProgressInput, RecordHandlerProgressOutput } from "../models/models_0";
import { de_RecordHandlerProgressCommand, se_RecordHandlerProgressCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Reports progress of a resource handler to CloudFormation.</p>
 *          <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. Don't
 *    use this API in your code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, RecordHandlerProgressCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, RecordHandlerProgressCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
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
 *  <p>Error reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
 *     CloudFormation doesn't return this error to users.</p>
 *
 * @throws {@link OperationStatusCheckFailedException} (client fault)
 *  <p>Error reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
 *     CloudFormation doesn't return this error to users.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class RecordHandlerProgressCommand extends $Command<
  RecordHandlerProgressCommandInput,
  RecordHandlerProgressCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: RecordHandlerProgressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RecordHandlerProgressCommandInput, RecordHandlerProgressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RecordHandlerProgressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "RecordHandlerProgressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "RecordHandlerProgress",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: RecordHandlerProgressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RecordHandlerProgressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RecordHandlerProgressCommandOutput> {
    return de_RecordHandlerProgressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
