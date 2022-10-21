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
  DeleteStackInstancesInput,
  DeleteStackInstancesInputFilterSensitiveLog,
  DeleteStackInstancesOutput,
  DeleteStackInstancesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteStackInstancesCommand,
  serializeAws_queryDeleteStackInstancesCommand,
} from "../protocols/Aws_query";

export interface DeleteStackInstancesCommandInput extends DeleteStackInstancesInput {}
export interface DeleteStackInstancesCommandOutput extends DeleteStackInstancesOutput, __MetadataBearer {}

/**
 * <p>Deletes stack instances for the specified accounts, in the specified Amazon Web Services Regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeleteStackInstancesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeleteStackInstancesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DeleteStackInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStackInstancesCommandInput} for command's `input` shape.
 * @see {@link DeleteStackInstancesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class DeleteStackInstancesCommand extends $Command<
  DeleteStackInstancesCommandInput,
  DeleteStackInstancesCommandOutput,
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

  constructor(readonly input: DeleteStackInstancesCommandInput) {
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
  ): Handler<DeleteStackInstancesCommandInput, DeleteStackInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteStackInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DeleteStackInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteStackInstancesInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteStackInstancesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteStackInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteStackInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteStackInstancesCommandOutput> {
    return deserializeAws_queryDeleteStackInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
