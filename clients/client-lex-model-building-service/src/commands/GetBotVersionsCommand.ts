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
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import {
  GetBotVersionsRequest,
  GetBotVersionsRequestFilterSensitiveLog,
  GetBotVersionsResponse,
  GetBotVersionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetBotVersionsCommand,
  serializeAws_restJson1GetBotVersionsCommand,
} from "../protocols/Aws_restJson1";

export interface GetBotVersionsCommandInput extends GetBotVersionsRequest {}
export interface GetBotVersionsCommandOutput extends GetBotVersionsResponse, __MetadataBearer {}

/**
 * <p>Gets information about all of the versions of a bot.</p>
 *          <p>The <code>GetBotVersions</code> operation returns a
 *         <code>BotMetadata</code> object for each version of a bot. For example,
 *       if a bot has three numbered versions, the <code>GetBotVersions</code>
 *       operation returns four <code>BotMetadata</code> objects in the response,
 *       one for each numbered version and one for the <code>$LATEST</code>
 *       version. </p>
 *          <p>The <code>GetBotVersions</code> operation always returns at least
 *       one version, the <code>$LATEST</code> version.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetBotVersions</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotVersionsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotVersionsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBotVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBotVersionsCommandInput} for command's `input` shape.
 * @see {@link GetBotVersionsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 */
export class GetBotVersionsCommand extends $Command<
  GetBotVersionsCommandInput,
  GetBotVersionsCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
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

  constructor(readonly input: GetBotVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBotVersionsCommandInput, GetBotVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBotVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetBotVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBotVersionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetBotVersionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBotVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBotVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBotVersionsCommandOutput> {
    return deserializeAws_restJson1GetBotVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
