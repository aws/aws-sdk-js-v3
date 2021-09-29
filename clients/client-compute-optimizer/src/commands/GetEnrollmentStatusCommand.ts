import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetEnrollmentStatusRequest, GetEnrollmentStatusResponse } from "../models/models_0";
import {
  deserializeAws_json1_0GetEnrollmentStatusCommand,
  serializeAws_json1_0GetEnrollmentStatusCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetEnrollmentStatusCommandInput extends GetEnrollmentStatusRequest {}
export interface GetEnrollmentStatusCommandOutput extends GetEnrollmentStatusResponse, __MetadataBearer {}

/**
 * <p>Returns the enrollment (opt in) status of an account to the Compute Optimizer
 *             service.</p>
 *
 *         <p>If the account is the management account of an organization, this action also confirms
 *             the enrollment status of member accounts of the organization. Use the <a>GetEnrollmentStatusesForOrganization</a> action to get detailed information
 *             about the enrollment status of member accounts of an organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEnrollmentStatusCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEnrollmentStatusCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetEnrollmentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEnrollmentStatusCommandInput} for command's `input` shape.
 * @see {@link GetEnrollmentStatusCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetEnrollmentStatusCommand extends $Command<
  GetEnrollmentStatusCommandInput,
  GetEnrollmentStatusCommandOutput,
  ComputeOptimizerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEnrollmentStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEnrollmentStatusCommandInput, GetEnrollmentStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "GetEnrollmentStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEnrollmentStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEnrollmentStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEnrollmentStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetEnrollmentStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEnrollmentStatusCommandOutput> {
    return deserializeAws_json1_0GetEnrollmentStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
