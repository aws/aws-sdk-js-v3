import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { AliasConfiguration, CreateAliasRequest } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAliasCommand,
  serializeAws_restJson1CreateAliasCommand,
} from "../protocols/Aws_restJson1";
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

export interface CreateAliasCommandInput extends CreateAliasRequest {}
export interface CreateAliasCommandOutput extends AliasConfiguration, __MetadataBearer {}

/**
 * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a> for a
 *       Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a
 *       different version.</p>
 *          <p>You can also map an alias to split invocation requests between two versions. Use the
 *         <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that
 *       it receives.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, CreateAliasCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, CreateAliasCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new CreateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAliasCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateAliasCommand extends $Command<
  CreateAliasCommandInput,
  CreateAliasCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAliasCommandInput) {
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
  ): Handler<CreateAliasCommandInput, CreateAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "CreateAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AliasConfiguration.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAliasCommandOutput> {
    return deserializeAws_restJson1CreateAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
