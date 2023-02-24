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

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import {
  ListDeploymentInstancesInput,
  ListDeploymentInstancesInputFilterSensitiveLog,
  ListDeploymentInstancesOutput,
  ListDeploymentInstancesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListDeploymentInstancesCommand,
  serializeAws_json1_1ListDeploymentInstancesCommand,
} from "../protocols/Aws_json1_1";

export interface ListDeploymentInstancesCommandInput extends ListDeploymentInstancesInput {}
export interface ListDeploymentInstancesCommandOutput extends ListDeploymentInstancesOutput, __MetadataBearer {}

/**
 * @deprecated
 *
 * <note>
 *             <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because
 *                 it works with all compute types. <code>ListDeploymentInstances</code> throws an
 *                 exception if it is used with a compute platform other than EC2/On-premises or
 *                     Lambda. </p>
 *         </note>
 *         <p> Lists the instance for a deployment associated with the IAM user or
 *                 Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListDeploymentInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListDeploymentInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ListDeploymentInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeploymentInstancesCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentInstancesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 */
export class ListDeploymentInstancesCommand extends $Command<
  ListDeploymentInstancesCommandInput,
  ListDeploymentInstancesCommandOutput,
  CodeDeployClientResolvedConfig
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

  constructor(readonly input: ListDeploymentInstancesCommandInput) {
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
  ): Handler<ListDeploymentInstancesCommandInput, ListDeploymentInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDeploymentInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "ListDeploymentInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeploymentInstancesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListDeploymentInstancesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeploymentInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDeploymentInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeploymentInstancesCommandOutput> {
    return deserializeAws_json1_1ListDeploymentInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
