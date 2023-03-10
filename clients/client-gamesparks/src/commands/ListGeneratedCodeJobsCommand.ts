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

import { GameSparksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameSparksClient";
import {
  ListGeneratedCodeJobsRequest,
  ListGeneratedCodeJobsRequestFilterSensitiveLog,
  ListGeneratedCodeJobsResult,
  ListGeneratedCodeJobsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListGeneratedCodeJobsCommand,
  serializeAws_restJson1ListGeneratedCodeJobsCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ListGeneratedCodeJobsCommand}.
 */
export interface ListGeneratedCodeJobsCommandInput extends ListGeneratedCodeJobsRequest {}
/**
 * The output of {@link ListGeneratedCodeJobsCommand}.
 */
export interface ListGeneratedCodeJobsCommandOutput extends ListGeneratedCodeJobsResult, __MetadataBearer {}

/**
 * <p>Gets a paginated list of code generation jobs for a snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, ListGeneratedCodeJobsCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, ListGeneratedCodeJobsCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const command = new ListGeneratedCodeJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGeneratedCodeJobsCommandInput} for command's `input` shape.
 * @see {@link ListGeneratedCodeJobsCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 *
 */
export class ListGeneratedCodeJobsCommand extends $Command<
  ListGeneratedCodeJobsCommandInput,
  ListGeneratedCodeJobsCommandOutput,
  GameSparksClientResolvedConfig
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

  constructor(readonly input: ListGeneratedCodeJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameSparksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGeneratedCodeJobsCommandInput, ListGeneratedCodeJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListGeneratedCodeJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "ListGeneratedCodeJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGeneratedCodeJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListGeneratedCodeJobsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGeneratedCodeJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListGeneratedCodeJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGeneratedCodeJobsCommandOutput> {
    return deserializeAws_restJson1ListGeneratedCodeJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
