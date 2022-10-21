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
  ListStackSetOperationsInput,
  ListStackSetOperationsInputFilterSensitiveLog,
  ListStackSetOperationsOutput,
  ListStackSetOperationsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListStackSetOperationsCommand,
  serializeAws_queryListStackSetOperationsCommand,
} from "../protocols/Aws_query";

export interface ListStackSetOperationsCommandInput extends ListStackSetOperationsInput {}
export interface ListStackSetOperationsCommandOutput extends ListStackSetOperationsOutput, __MetadataBearer {}

/**
 * <p>Returns summary information about operations performed on a stack set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackSetOperationsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackSetOperationsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListStackSetOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStackSetOperationsCommandInput} for command's `input` shape.
 * @see {@link ListStackSetOperationsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class ListStackSetOperationsCommand extends $Command<
  ListStackSetOperationsCommandInput,
  ListStackSetOperationsCommandOutput,
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

  constructor(readonly input: ListStackSetOperationsCommandInput) {
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
  ): Handler<ListStackSetOperationsCommandInput, ListStackSetOperationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStackSetOperationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListStackSetOperationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStackSetOperationsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListStackSetOperationsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStackSetOperationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListStackSetOperationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStackSetOperationsCommandOutput> {
    return deserializeAws_queryListStackSetOperationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
