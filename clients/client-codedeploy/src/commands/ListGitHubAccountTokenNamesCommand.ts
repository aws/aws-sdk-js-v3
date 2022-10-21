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
  ListGitHubAccountTokenNamesInput,
  ListGitHubAccountTokenNamesInputFilterSensitiveLog,
  ListGitHubAccountTokenNamesOutput,
  ListGitHubAccountTokenNamesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListGitHubAccountTokenNamesCommand,
  serializeAws_json1_1ListGitHubAccountTokenNamesCommand,
} from "../protocols/Aws_json1_1";

export interface ListGitHubAccountTokenNamesCommandInput extends ListGitHubAccountTokenNamesInput {}
export interface ListGitHubAccountTokenNamesCommandOutput extends ListGitHubAccountTokenNamesOutput, __MetadataBearer {}

/**
 * <p>Lists the names of stored connections to GitHub accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListGitHubAccountTokenNamesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListGitHubAccountTokenNamesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ListGitHubAccountTokenNamesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGitHubAccountTokenNamesCommandInput} for command's `input` shape.
 * @see {@link ListGitHubAccountTokenNamesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 */
export class ListGitHubAccountTokenNamesCommand extends $Command<
  ListGitHubAccountTokenNamesCommandInput,
  ListGitHubAccountTokenNamesCommandOutput,
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

  constructor(readonly input: ListGitHubAccountTokenNamesCommandInput) {
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
  ): Handler<ListGitHubAccountTokenNamesCommandInput, ListGitHubAccountTokenNamesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListGitHubAccountTokenNamesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "ListGitHubAccountTokenNamesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGitHubAccountTokenNamesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListGitHubAccountTokenNamesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGitHubAccountTokenNamesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListGitHubAccountTokenNamesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListGitHubAccountTokenNamesCommandOutput> {
    return deserializeAws_json1_1ListGitHubAccountTokenNamesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
