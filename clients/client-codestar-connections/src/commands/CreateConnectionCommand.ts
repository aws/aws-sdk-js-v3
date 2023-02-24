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
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import {
  CreateConnectionInput,
  CreateConnectionInputFilterSensitiveLog,
  CreateConnectionOutput,
  CreateConnectionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0CreateConnectionCommand,
  serializeAws_json1_0CreateConnectionCommand,
} from "../protocols/Aws_json1_0";

export interface CreateConnectionCommandInput extends CreateConnectionInput {}
export interface CreateConnectionCommandOutput extends CreateConnectionOutput, __MetadataBearer {}

/**
 * <p>Creates a connection that can then be given to other AWS services like CodePipeline so
 *       that it can access third-party code repositories. The connection is in pending status until
 *       the third-party connection handshake is completed from the console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, CreateConnectionCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, CreateConnectionCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new CreateConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
 *
 */
export class CreateConnectionCommand extends $Command<
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput,
  CodeStarConnectionsClientResolvedConfig
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

  constructor(readonly input: CreateConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarConnectionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConnectionCommandInput, CreateConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarConnectionsClient";
    const commandName = "CreateConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConnectionInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateConnectionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateConnectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConnectionCommandOutput> {
    return deserializeAws_json1_0CreateConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
