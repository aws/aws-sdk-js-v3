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

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  GetServicesInScopeRequest,
  GetServicesInScopeRequestFilterSensitiveLog,
  GetServicesInScopeResponse,
  GetServicesInScopeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetServicesInScopeCommand,
  serializeAws_restJson1GetServicesInScopeCommand,
} from "../protocols/Aws_restJson1";

export interface GetServicesInScopeCommandInput extends GetServicesInScopeRequest {}
export interface GetServicesInScopeCommandOutput extends GetServicesInScopeResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all of the Amazon Web Services that you can choose to include
 *          in your assessment. When you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessment.html">create an assessment</a>, specify which of these services you want to include to
 *          narrow the assessment's <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Scope.html">scope</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetServicesInScopeCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetServicesInScopeCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetServicesInScopeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServicesInScopeCommandInput} for command's `input` shape.
 * @see {@link GetServicesInScopeCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 */
export class GetServicesInScopeCommand extends $Command<
  GetServicesInScopeCommandInput,
  GetServicesInScopeCommandOutput,
  AuditManagerClientResolvedConfig
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

  constructor(readonly input: GetServicesInScopeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetServicesInScopeCommandInput, GetServicesInScopeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetServicesInScopeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetServicesInScopeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServicesInScopeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetServicesInScopeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetServicesInScopeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetServicesInScopeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServicesInScopeCommandOutput> {
    return deserializeAws_restJson1GetServicesInScopeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
