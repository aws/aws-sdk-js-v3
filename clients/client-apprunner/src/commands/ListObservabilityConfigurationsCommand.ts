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

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import {
  ListObservabilityConfigurationsRequest,
  ListObservabilityConfigurationsRequestFilterSensitiveLog,
  ListObservabilityConfigurationsResponse,
  ListObservabilityConfigurationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListObservabilityConfigurationsCommand,
  serializeAws_json1_0ListObservabilityConfigurationsCommand,
} from "../protocols/Aws_json1_0";

export interface ListObservabilityConfigurationsCommandInput extends ListObservabilityConfigurationsRequest {}
export interface ListObservabilityConfigurationsCommandOutput
  extends ListObservabilityConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific
 *       configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested
 *       name.</p>
 *          <p>To retrieve a full description of a particular configuration revision, call  and provide one
 *       of the ARNs returned by <code>ListObservabilityConfigurations</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListObservabilityConfigurationsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListObservabilityConfigurationsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new ListObservabilityConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListObservabilityConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListObservabilityConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 */
export class ListObservabilityConfigurationsCommand extends $Command<
  ListObservabilityConfigurationsCommandInput,
  ListObservabilityConfigurationsCommandOutput,
  AppRunnerClientResolvedConfig
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

  constructor(readonly input: ListObservabilityConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListObservabilityConfigurationsCommandInput, ListObservabilityConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListObservabilityConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "ListObservabilityConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListObservabilityConfigurationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListObservabilityConfigurationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListObservabilityConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0ListObservabilityConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListObservabilityConfigurationsCommandOutput> {
    return deserializeAws_json1_0ListObservabilityConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
