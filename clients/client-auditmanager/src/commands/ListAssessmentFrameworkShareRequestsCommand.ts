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
  ListAssessmentFrameworkShareRequestsRequest,
  ListAssessmentFrameworkShareRequestsRequestFilterSensitiveLog,
  ListAssessmentFrameworkShareRequestsResponse,
  ListAssessmentFrameworkShareRequestsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAssessmentFrameworkShareRequestsCommand,
  serializeAws_restJson1ListAssessmentFrameworkShareRequestsCommand,
} from "../protocols/Aws_restJson1";

export interface ListAssessmentFrameworkShareRequestsCommandInput extends ListAssessmentFrameworkShareRequestsRequest {}
export interface ListAssessmentFrameworkShareRequestsCommandOutput
  extends ListAssessmentFrameworkShareRequestsResponse,
    __MetadataBearer {}

/**
 * <p> Returns a list of sent or received share requests for custom frameworks in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListAssessmentFrameworkShareRequestsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListAssessmentFrameworkShareRequestsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new ListAssessmentFrameworkShareRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssessmentFrameworkShareRequestsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentFrameworkShareRequestsCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 */
export class ListAssessmentFrameworkShareRequestsCommand extends $Command<
  ListAssessmentFrameworkShareRequestsCommandInput,
  ListAssessmentFrameworkShareRequestsCommandOutput,
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

  constructor(readonly input: ListAssessmentFrameworkShareRequestsCommandInput) {
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
  ): Handler<ListAssessmentFrameworkShareRequestsCommandInput, ListAssessmentFrameworkShareRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssessmentFrameworkShareRequestsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "ListAssessmentFrameworkShareRequestsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssessmentFrameworkShareRequestsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAssessmentFrameworkShareRequestsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAssessmentFrameworkShareRequestsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAssessmentFrameworkShareRequestsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAssessmentFrameworkShareRequestsCommandOutput> {
    return deserializeAws_restJson1ListAssessmentFrameworkShareRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
