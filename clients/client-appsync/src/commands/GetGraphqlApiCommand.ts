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
  GetGraphqlApiRequest,
  GetGraphqlApiRequestFilterSensitiveLog,
  GetGraphqlApiResponse,
  GetGraphqlApiResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetGraphqlApiCommand,
  serializeAws_restJson1GetGraphqlApiCommand,
} from "../protocols/Aws_restJson1";

export interface GetGraphqlApiCommandInput extends GetGraphqlApiRequest {}
export interface GetGraphqlApiCommandOutput extends GetGraphqlApiResponse, __MetadataBearer {}

/**
 * <p>Retrieves a <code>GraphqlApi</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetGraphqlApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetGraphqlApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new GetGraphqlApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGraphqlApiCommandInput} for command's `input` shape.
 * @see {@link GetGraphqlApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 */
export class GetGraphqlApiCommand extends $Command<
  GetGraphqlApiCommandInput,
  GetGraphqlApiCommandOutput,
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

  constructor(readonly input: GetGraphqlApiCommandInput) {
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
  ): Handler<GetGraphqlApiCommandInput, GetGraphqlApiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetGraphqlApiCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "GetGraphqlApiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGraphqlApiRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetGraphqlApiResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetGraphqlApiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetGraphqlApiCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGraphqlApiCommandOutput> {
    return deserializeAws_restJson1GetGraphqlApiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
