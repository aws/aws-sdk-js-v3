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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import {
  CreateGraphqlApiRequest,
  CreateGraphqlApiRequestFilterSensitiveLog,
  CreateGraphqlApiResponse,
  CreateGraphqlApiResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateGraphqlApiCommand,
  serializeAws_restJson1CreateGraphqlApiCommand,
} from "../protocols/Aws_restJson1";

export interface CreateGraphqlApiCommandInput extends CreateGraphqlApiRequest {}
export interface CreateGraphqlApiCommandOutput extends CreateGraphqlApiResponse, __MetadataBearer {}

/**
 * <p>Creates a <code>GraphqlApi</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateGraphqlApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateGraphqlApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new CreateGraphqlApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGraphqlApiCommandInput} for command's `input` shape.
 * @see {@link CreateGraphqlApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 */
export class CreateGraphqlApiCommand extends $Command<
  CreateGraphqlApiCommandInput,
  CreateGraphqlApiCommandOutput,
  AppSyncClientResolvedConfig
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

  constructor(readonly input: CreateGraphqlApiCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateGraphqlApiCommandInput, CreateGraphqlApiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateGraphqlApiCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "CreateGraphqlApiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGraphqlApiRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateGraphqlApiResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGraphqlApiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateGraphqlApiCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGraphqlApiCommandOutput> {
    return deserializeAws_restJson1CreateGraphqlApiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
