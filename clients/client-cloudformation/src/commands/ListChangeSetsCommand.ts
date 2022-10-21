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
  ListChangeSetsInput,
  ListChangeSetsInputFilterSensitiveLog,
  ListChangeSetsOutput,
  ListChangeSetsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListChangeSetsCommand,
  serializeAws_queryListChangeSetsCommand,
} from "../protocols/Aws_query";

export interface ListChangeSetsCommandInput extends ListChangeSetsInput {}
export interface ListChangeSetsCommandOutput extends ListChangeSetsOutput, __MetadataBearer {}

/**
 * <p>Returns the ID and status of each active change set for a stack. For example, CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or
 *             <code>CREATE_PENDING</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListChangeSetsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListChangeSetsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListChangeSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChangeSetsCommandInput} for command's `input` shape.
 * @see {@link ListChangeSetsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class ListChangeSetsCommand extends $Command<
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput,
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

  constructor(readonly input: ListChangeSetsCommandInput) {
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
  ): Handler<ListChangeSetsCommandInput, ListChangeSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListChangeSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListChangeSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChangeSetsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListChangeSetsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListChangeSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListChangeSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListChangeSetsCommandOutput> {
    return deserializeAws_queryListChangeSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
