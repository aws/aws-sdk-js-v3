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
  UpdateEnrollmentStatusRequest,
  UpdateEnrollmentStatusRequestFilterSensitiveLog,
  UpdateEnrollmentStatusResponse,
  UpdateEnrollmentStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0UpdateEnrollmentStatusCommand,
  serializeAws_json1_0UpdateEnrollmentStatusCommand,
} from "../protocols/Aws_json1_0";

export interface UpdateEnrollmentStatusCommandInput extends UpdateEnrollmentStatusRequest {}
export interface UpdateEnrollmentStatusCommandOutput extends UpdateEnrollmentStatusResponse, __MetadataBearer {}

/**
 * <p>Updates the enrollment (opt in and opt out) status of an account to the Compute Optimizer service.</p>
 *          <p>If the account is a management account of an organization, this action can also be
 *             used to enroll member accounts of the organization.</p>
 *          <p>You must have the appropriate permissions to opt in to Compute Optimizer, to view its
 *             recommendations, and to opt out. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html">Controlling access with Amazon Web Services Identity and Access Management</a> in the <i>Compute Optimizer User Guide</i>.</p>
 *          <p>When you opt in, Compute Optimizer automatically creates a service-linked role in your
 *             account to access its data. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html">Using
 *                 Service-Linked Roles for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, UpdateEnrollmentStatusCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, UpdateEnrollmentStatusCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new UpdateEnrollmentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEnrollmentStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateEnrollmentStatusCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for ComputeOptimizerClient's `config` shape.
 *
 */
export class UpdateEnrollmentStatusCommand extends $Command<
  UpdateEnrollmentStatusCommandInput,
  UpdateEnrollmentStatusCommandOutput,
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

  constructor(readonly input: UpdateEnrollmentStatusCommandInput) {
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
  ): Handler<UpdateEnrollmentStatusCommandInput, UpdateEnrollmentStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEnrollmentStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "UpdateEnrollmentStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEnrollmentStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateEnrollmentStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateEnrollmentStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateEnrollmentStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEnrollmentStatusCommandOutput> {
    return deserializeAws_json1_0UpdateEnrollmentStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
