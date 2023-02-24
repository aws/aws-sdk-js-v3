// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import {
  GetEnrollmentStatusesForOrganizationRequest,
  GetEnrollmentStatusesForOrganizationRequestFilterSensitiveLog,
  GetEnrollmentStatusesForOrganizationResponse,
  GetEnrollmentStatusesForOrganizationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetEnrollmentStatusesForOrganizationCommand,
  serializeAws_json1_0GetEnrollmentStatusesForOrganizationCommand,
} from "../protocols/Aws_json1_0";

export interface GetEnrollmentStatusesForOrganizationCommandInput extends GetEnrollmentStatusesForOrganizationRequest {}
export interface GetEnrollmentStatusesForOrganizationCommandOutput
  extends GetEnrollmentStatusesForOrganizationResponse,
    __MetadataBearer {}

/**
 * <p>Returns the Compute Optimizer enrollment (opt-in) status of organization member
 *             accounts, if your account is an organization management account.</p>
 *          <p>To get the enrollment status of standalone accounts, use the <a>GetEnrollmentStatus</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEnrollmentStatusesForOrganizationCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEnrollmentStatusesForOrganizationCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetEnrollmentStatusesForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEnrollmentStatusesForOrganizationCommandInput} for command's `input` shape.
 * @see {@link GetEnrollmentStatusesForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for ComputeOptimizerClient's `config` shape.
 *
 */
export class GetEnrollmentStatusesForOrganizationCommand extends $Command<
  GetEnrollmentStatusesForOrganizationCommandInput,
  GetEnrollmentStatusesForOrganizationCommandOutput,
  ComputeOptimizerClientResolvedConfig
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

  constructor(readonly input: GetEnrollmentStatusesForOrganizationCommandInput) {
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
  ): Handler<GetEnrollmentStatusesForOrganizationCommandInput, GetEnrollmentStatusesForOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEnrollmentStatusesForOrganizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "GetEnrollmentStatusesForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEnrollmentStatusesForOrganizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetEnrollmentStatusesForOrganizationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetEnrollmentStatusesForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0GetEnrollmentStatusesForOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEnrollmentStatusesForOrganizationCommandOutput> {
    return deserializeAws_json1_0GetEnrollmentStatusesForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
