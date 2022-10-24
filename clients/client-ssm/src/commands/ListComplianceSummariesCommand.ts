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

import {
  ListComplianceSummariesRequest,
  ListComplianceSummariesRequestFilterSensitiveLog,
  ListComplianceSummariesResult,
  ListComplianceSummariesResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1ListComplianceSummariesCommand,
  serializeAws_json1_1ListComplianceSummariesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface ListComplianceSummariesCommandInput extends ListComplianceSummariesRequest {}
export interface ListComplianceSummariesCommandOutput extends ListComplianceSummariesResult, __MetadataBearer {}

/**
 * <p>Returns a summary count of compliant and non-compliant resources for a compliance type. For
 *    example, this call can return State Manager associations, patches, or custom compliance types
 *    according to the filter criteria that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListComplianceSummariesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListComplianceSummariesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListComplianceSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComplianceSummariesCommandInput} for command's `input` shape.
 * @see {@link ListComplianceSummariesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class ListComplianceSummariesCommand extends $Command<
  ListComplianceSummariesCommandInput,
  ListComplianceSummariesCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: ListComplianceSummariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListComplianceSummariesCommandInput, ListComplianceSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListComplianceSummariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListComplianceSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListComplianceSummariesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListComplianceSummariesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListComplianceSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListComplianceSummariesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListComplianceSummariesCommandOutput> {
    return deserializeAws_json1_1ListComplianceSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
