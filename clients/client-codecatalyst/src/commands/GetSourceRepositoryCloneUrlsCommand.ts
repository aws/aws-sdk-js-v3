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

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import {
  GetSourceRepositoryCloneUrlsRequest,
  GetSourceRepositoryCloneUrlsRequestFilterSensitiveLog,
  GetSourceRepositoryCloneUrlsResponse,
  GetSourceRepositoryCloneUrlsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSourceRepositoryCloneUrlsCommand,
  serializeAws_restJson1GetSourceRepositoryCloneUrlsCommand,
} from "../protocols/Aws_restJson1";

export interface GetSourceRepositoryCloneUrlsCommandInput extends GetSourceRepositoryCloneUrlsRequest {}
export interface GetSourceRepositoryCloneUrlsCommandOutput
  extends GetSourceRepositoryCloneUrlsResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the URLs that can be used with a Git client to clone a source
 *       repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, GetSourceRepositoryCloneUrlsCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, GetSourceRepositoryCloneUrlsCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const command = new GetSourceRepositoryCloneUrlsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSourceRepositoryCloneUrlsCommandInput} for command's `input` shape.
 * @see {@link GetSourceRepositoryCloneUrlsCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 */
export class GetSourceRepositoryCloneUrlsCommand extends $Command<
  GetSourceRepositoryCloneUrlsCommandInput,
  GetSourceRepositoryCloneUrlsCommandOutput,
  CodeCatalystClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  constructor(readonly input: GetSourceRepositoryCloneUrlsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCatalystClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSourceRepositoryCloneUrlsCommandInput, GetSourceRepositoryCloneUrlsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSourceRepositoryCloneUrlsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCatalystClient";
    const commandName = "GetSourceRepositoryCloneUrlsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSourceRepositoryCloneUrlsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSourceRepositoryCloneUrlsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSourceRepositoryCloneUrlsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSourceRepositoryCloneUrlsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSourceRepositoryCloneUrlsCommandOutput> {
    return deserializeAws_restJson1GetSourceRepositoryCloneUrlsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
