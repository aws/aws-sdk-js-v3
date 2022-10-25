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
  UpdateGraphqlApiRequest,
  UpdateGraphqlApiRequestFilterSensitiveLog,
  UpdateGraphqlApiResponse,
  UpdateGraphqlApiResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateGraphqlApiCommand,
  serializeAws_restJson1UpdateGraphqlApiCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateGraphqlApiCommandInput extends UpdateGraphqlApiRequest {}
export interface UpdateGraphqlApiCommandOutput extends UpdateGraphqlApiResponse, __MetadataBearer {}

/**
 * <p>Updates a <code>GraphqlApi</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateGraphqlApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateGraphqlApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new UpdateGraphqlApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGraphqlApiCommandInput} for command's `input` shape.
 * @see {@link UpdateGraphqlApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 */
export class UpdateGraphqlApiCommand extends $Command<
  UpdateGraphqlApiCommandInput,
  UpdateGraphqlApiCommandOutput,
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

  constructor(readonly input: UpdateGraphqlApiCommandInput) {
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
  ): Handler<UpdateGraphqlApiCommandInput, UpdateGraphqlApiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateGraphqlApiCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "UpdateGraphqlApiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGraphqlApiRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateGraphqlApiResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGraphqlApiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateGraphqlApiCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGraphqlApiCommandOutput> {
    return deserializeAws_restJson1UpdateGraphqlApiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
