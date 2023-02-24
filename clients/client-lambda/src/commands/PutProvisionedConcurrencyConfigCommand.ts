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
  PutProvisionedConcurrencyConfigRequest,
  PutProvisionedConcurrencyConfigRequestFilterSensitiveLog,
  PutProvisionedConcurrencyConfigResponse,
  PutProvisionedConcurrencyConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutProvisionedConcurrencyConfigCommand,
  serializeAws_restJson1PutProvisionedConcurrencyConfigCommand,
} from "../protocols/Aws_restJson1";

export interface PutProvisionedConcurrencyConfigCommandInput extends PutProvisionedConcurrencyConfigRequest {}
export interface PutProvisionedConcurrencyConfigCommandOutput
  extends PutProvisionedConcurrencyConfigResponse,
    __MetadataBearer {}

/**
 * <p>Adds a provisioned concurrency configuration to a function's alias or version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutProvisionedConcurrencyConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutProvisionedConcurrencyConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new PutProvisionedConcurrencyConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutProvisionedConcurrencyConfigCommandInput} for command's `input` shape.
 * @see {@link PutProvisionedConcurrencyConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class PutProvisionedConcurrencyConfigCommand extends $Command<
  PutProvisionedConcurrencyConfigCommandInput,
  PutProvisionedConcurrencyConfigCommandOutput,
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

  constructor(readonly input: PutProvisionedConcurrencyConfigCommandInput) {
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
  ): Handler<PutProvisionedConcurrencyConfigCommandInput, PutProvisionedConcurrencyConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutProvisionedConcurrencyConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "PutProvisionedConcurrencyConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutProvisionedConcurrencyConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutProvisionedConcurrencyConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutProvisionedConcurrencyConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutProvisionedConcurrencyConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutProvisionedConcurrencyConfigCommandOutput> {
    return deserializeAws_restJson1PutProvisionedConcurrencyConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
