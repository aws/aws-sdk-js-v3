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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  ListProvisionedConcurrencyConfigsRequest,
  ListProvisionedConcurrencyConfigsRequestFilterSensitiveLog,
  ListProvisionedConcurrencyConfigsResponse,
  ListProvisionedConcurrencyConfigsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommand,
  serializeAws_restJson1ListProvisionedConcurrencyConfigsCommand,
} from "../protocols/Aws_restJson1";

export interface ListProvisionedConcurrencyConfigsCommandInput extends ListProvisionedConcurrencyConfigsRequest {}
export interface ListProvisionedConcurrencyConfigsCommandOutput
  extends ListProvisionedConcurrencyConfigsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of provisioned concurrency configurations for a function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListProvisionedConcurrencyConfigsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListProvisionedConcurrencyConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListProvisionedConcurrencyConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisionedConcurrencyConfigsCommandInput} for command's `input` shape.
 * @see {@link ListProvisionedConcurrencyConfigsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class ListProvisionedConcurrencyConfigsCommand extends $Command<
  ListProvisionedConcurrencyConfigsCommandInput,
  ListProvisionedConcurrencyConfigsCommandOutput,
  LambdaClientResolvedConfig
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

  constructor(readonly input: ListProvisionedConcurrencyConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProvisionedConcurrencyConfigsCommandInput, ListProvisionedConcurrencyConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProvisionedConcurrencyConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListProvisionedConcurrencyConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProvisionedConcurrencyConfigsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListProvisionedConcurrencyConfigsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListProvisionedConcurrencyConfigsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProvisionedConcurrencyConfigsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProvisionedConcurrencyConfigsCommandOutput> {
    return deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
