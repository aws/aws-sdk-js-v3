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

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import {
  DescribePullRequestEventsInput,
  DescribePullRequestEventsInputFilterSensitiveLog,
  DescribePullRequestEventsOutput,
  DescribePullRequestEventsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribePullRequestEventsCommand,
  serializeAws_json1_1DescribePullRequestEventsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribePullRequestEventsCommandInput extends DescribePullRequestEventsInput {}
export interface DescribePullRequestEventsCommandOutput extends DescribePullRequestEventsOutput, __MetadataBearer {}

/**
 * <p>Returns information about one or more pull request events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DescribePullRequestEventsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DescribePullRequestEventsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DescribePullRequestEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePullRequestEventsCommandInput} for command's `input` shape.
 * @see {@link DescribePullRequestEventsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class DescribePullRequestEventsCommand extends $Command<
  DescribePullRequestEventsCommandInput,
  DescribePullRequestEventsCommandOutput,
  CodeCommitClientResolvedConfig
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

  constructor(readonly input: DescribePullRequestEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePullRequestEventsCommandInput, DescribePullRequestEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePullRequestEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "DescribePullRequestEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePullRequestEventsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePullRequestEventsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePullRequestEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePullRequestEventsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePullRequestEventsCommandOutput> {
    return deserializeAws_json1_1DescribePullRequestEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
