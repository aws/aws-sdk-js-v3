import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListDeploymentTargetsInput, ListDeploymentTargetsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListDeploymentTargetsCommand,
  serializeAws_json1_1ListDeploymentTargetsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListDeploymentTargetsCommandInput extends ListDeploymentTargetsInput {}
export interface ListDeploymentTargetsCommandOutput extends ListDeploymentTargetsOutput, __MetadataBearer {}

/**
 * <p> Returns an array of target IDs that are associated a deployment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListDeploymentTargetsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListDeploymentTargetsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ListDeploymentTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeploymentTargetsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentTargetsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDeploymentTargetsCommand extends $Command<
  ListDeploymentTargetsCommandInput,
  ListDeploymentTargetsCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDeploymentTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeploymentTargetsCommandInput, ListDeploymentTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "ListDeploymentTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeploymentTargetsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListDeploymentTargetsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeploymentTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDeploymentTargetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeploymentTargetsCommandOutput> {
    return deserializeAws_json1_1ListDeploymentTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
