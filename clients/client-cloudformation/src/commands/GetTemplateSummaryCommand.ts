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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import {
  GetTemplateSummaryInput,
  GetTemplateSummaryInputFilterSensitiveLog,
  GetTemplateSummaryOutput,
  GetTemplateSummaryOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGetTemplateSummaryCommand,
  serializeAws_queryGetTemplateSummaryCommand,
} from "../protocols/Aws_query";

export interface GetTemplateSummaryCommandInput extends GetTemplateSummaryInput {}
export interface GetTemplateSummaryCommandOutput extends GetTemplateSummaryOutput, __MetadataBearer {}

/**
 * <p>Returns information about a new or existing template. The
 *             <code>GetTemplateSummary</code> action is useful for viewing parameter information, such
 *          as default parameter values and parameter types, before you create or update a stack or
 *          stack set.</p>
 *          <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or
 *          you can get template information for a stack set, or a running or deleted stack.</p>
 *          <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information for
 *          up to 90 days after the stack has been deleted. If the template doesn't exist, a
 *             <code>ValidationError</code> is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, GetTemplateSummaryCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, GetTemplateSummaryCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new GetTemplateSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTemplateSummaryCommandInput} for command's `input` shape.
 * @see {@link GetTemplateSummaryCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class GetTemplateSummaryCommand extends $Command<
  GetTemplateSummaryCommandInput,
  GetTemplateSummaryCommandOutput,
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

  constructor(readonly input: GetTemplateSummaryCommandInput) {
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
  ): Handler<GetTemplateSummaryCommandInput, GetTemplateSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTemplateSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "GetTemplateSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTemplateSummaryInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetTemplateSummaryOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTemplateSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetTemplateSummaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTemplateSummaryCommandOutput> {
    return deserializeAws_queryGetTemplateSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
