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

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import {
  ListScramSecretsRequest,
  ListScramSecretsRequestFilterSensitiveLog,
  ListScramSecretsResponse,
  ListScramSecretsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListScramSecretsCommand,
  serializeAws_restJson1ListScramSecretsCommand,
} from "../protocols/Aws_restJson1";

export interface ListScramSecretsCommandInput extends ListScramSecretsRequest {}
export interface ListScramSecretsCommandOutput extends ListScramSecretsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the Scram Secrets associated with an Amazon MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListScramSecretsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListScramSecretsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new ListScramSecretsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListScramSecretsCommandInput} for command's `input` shape.
 * @see {@link ListScramSecretsCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 */
export class ListScramSecretsCommand extends $Command<
  ListScramSecretsCommandInput,
  ListScramSecretsCommandOutput,
  KafkaClientResolvedConfig
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

  constructor(readonly input: ListScramSecretsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListScramSecretsCommandInput, ListScramSecretsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListScramSecretsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "ListScramSecretsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListScramSecretsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListScramSecretsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListScramSecretsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListScramSecretsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListScramSecretsCommandOutput> {
    return deserializeAws_restJson1ListScramSecretsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
