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

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import {
  ListRepositoriesInDomainRequest,
  ListRepositoriesInDomainRequestFilterSensitiveLog,
  ListRepositoriesInDomainResult,
  ListRepositoriesInDomainResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListRepositoriesInDomainCommand,
  serializeAws_restJson1ListRepositoriesInDomainCommand,
} from "../protocols/Aws_restJson1";

export interface ListRepositoriesInDomainCommandInput extends ListRepositoriesInDomainRequest {}
export interface ListRepositoriesInDomainCommandOutput extends ListRepositoriesInDomainResult, __MetadataBearer {}

/**
 * <p>
 *        Returns a list of
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a>
 *        objects. Each <code>RepositorySummary</code> contains information about a repository in the specified domain and that matches the input
 *        parameters.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListRepositoriesInDomainCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListRepositoriesInDomainCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new ListRepositoriesInDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRepositoriesInDomainCommandInput} for command's `input` shape.
 * @see {@link ListRepositoriesInDomainCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 */
export class ListRepositoriesInDomainCommand extends $Command<
  ListRepositoriesInDomainCommandInput,
  ListRepositoriesInDomainCommandOutput,
  CodeartifactClientResolvedConfig
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

  constructor(readonly input: ListRepositoriesInDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRepositoriesInDomainCommandInput, ListRepositoriesInDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRepositoriesInDomainCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "ListRepositoriesInDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRepositoriesInDomainRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRepositoriesInDomainResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRepositoriesInDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRepositoriesInDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRepositoriesInDomainCommandOutput> {
    return deserializeAws_restJson1ListRepositoriesInDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
