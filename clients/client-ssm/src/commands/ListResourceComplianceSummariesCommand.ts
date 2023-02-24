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
  ListResourceComplianceSummariesRequest,
  ListResourceComplianceSummariesRequestFilterSensitiveLog,
  ListResourceComplianceSummariesResult,
  ListResourceComplianceSummariesResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1ListResourceComplianceSummariesCommand,
  serializeAws_json1_1ListResourceComplianceSummariesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface ListResourceComplianceSummariesCommandInput extends ListResourceComplianceSummariesRequest {}
export interface ListResourceComplianceSummariesCommandOutput
  extends ListResourceComplianceSummariesResult,
    __MetadataBearer {}

/**
 * <p>Returns a resource-level summary count. The summary includes information about compliant and
 *    non-compliant statuses and detailed compliance-item severity counts, according to the filter
 *    criteria you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListResourceComplianceSummariesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListResourceComplianceSummariesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListResourceComplianceSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceComplianceSummariesCommandInput} for command's `input` shape.
 * @see {@link ListResourceComplianceSummariesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class ListResourceComplianceSummariesCommand extends $Command<
  ListResourceComplianceSummariesCommandInput,
  ListResourceComplianceSummariesCommandOutput,
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

  constructor(readonly input: ListResourceComplianceSummariesCommandInput) {
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
  ): Handler<ListResourceComplianceSummariesCommandInput, ListResourceComplianceSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResourceComplianceSummariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListResourceComplianceSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResourceComplianceSummariesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListResourceComplianceSummariesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListResourceComplianceSummariesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListResourceComplianceSummariesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResourceComplianceSummariesCommandOutput> {
    return deserializeAws_json1_1ListResourceComplianceSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
