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

import {
  CreateFindingAggregatorRequest,
  CreateFindingAggregatorRequestFilterSensitiveLog,
  CreateFindingAggregatorResponse,
  CreateFindingAggregatorResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1CreateFindingAggregatorCommand,
  serializeAws_restJson1CreateFindingAggregatorCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

export interface CreateFindingAggregatorCommandInput extends CreateFindingAggregatorRequest {}
export interface CreateFindingAggregatorCommandOutput extends CreateFindingAggregatorResponse, __MetadataBearer {}

/**
 * <p>Used to enable finding aggregation. Must be called from the aggregation Region.</p>
 *          <p>For more details about cross-Region replication, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-aggregation.html">Configuring finding aggregation</a> in the <i>Security Hub User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateFindingAggregatorCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateFindingAggregatorCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new CreateFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFindingAggregatorCommandInput} for command's `input` shape.
 * @see {@link CreateFindingAggregatorCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 */
export class CreateFindingAggregatorCommand extends $Command<
  CreateFindingAggregatorCommandInput,
  CreateFindingAggregatorCommandOutput,
  SecurityHubClientResolvedConfig
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

  constructor(readonly input: CreateFindingAggregatorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFindingAggregatorCommandInput, CreateFindingAggregatorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFindingAggregatorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "CreateFindingAggregatorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFindingAggregatorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateFindingAggregatorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFindingAggregatorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateFindingAggregatorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFindingAggregatorCommandOutput> {
    return deserializeAws_restJson1CreateFindingAggregatorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
