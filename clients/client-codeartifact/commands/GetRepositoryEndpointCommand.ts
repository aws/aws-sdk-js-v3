import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { GetRepositoryEndpointRequest, GetRepositoryEndpointResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetRepositoryEndpointCommand,
  serializeAws_restJson1GetRepositoryEndpointCommand,
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

export type GetRepositoryEndpointCommandInput = GetRepositoryEndpointRequest;
export type GetRepositoryEndpointCommandOutput = GetRepositoryEndpointResult & __MetadataBearer;

/**
 * <p>
 *       Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each
 *       package format:
 *     </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>npm</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>pypi</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>maven</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>nuget</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export class GetRepositoryEndpointCommand extends $Command<
  GetRepositoryEndpointCommandInput,
  GetRepositoryEndpointCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRepositoryEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRepositoryEndpointCommandInput, GetRepositoryEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "GetRepositoryEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRepositoryEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRepositoryEndpointResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRepositoryEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRepositoryEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRepositoryEndpointCommandOutput> {
    return deserializeAws_restJson1GetRepositoryEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
