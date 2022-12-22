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
  CreateSourceRepositoryBranchRequest,
  CreateSourceRepositoryBranchRequestFilterSensitiveLog,
  CreateSourceRepositoryBranchResponse,
  CreateSourceRepositoryBranchResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateSourceRepositoryBranchCommand,
  serializeAws_restJson1CreateSourceRepositoryBranchCommand,
} from "../protocols/Aws_restJson1";

export interface CreateSourceRepositoryBranchCommandInput extends CreateSourceRepositoryBranchRequest {}
export interface CreateSourceRepositoryBranchCommandOutput
  extends CreateSourceRepositoryBranchResponse,
    __MetadataBearer {}

/**
 * <p>Creates a branch in a specified source repository in Amazon CodeCatalyst. </p>
 *          <note>
 *             <p>This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, CreateSourceRepositoryBranchCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, CreateSourceRepositoryBranchCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const command = new CreateSourceRepositoryBranchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSourceRepositoryBranchCommandInput} for command's `input` shape.
 * @see {@link CreateSourceRepositoryBranchCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 */
export class CreateSourceRepositoryBranchCommand extends $Command<
  CreateSourceRepositoryBranchCommandInput,
  CreateSourceRepositoryBranchCommandOutput,
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

  constructor(readonly input: CreateSourceRepositoryBranchCommandInput) {
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
  ): Handler<CreateSourceRepositoryBranchCommandInput, CreateSourceRepositoryBranchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSourceRepositoryBranchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCatalystClient";
    const commandName = "CreateSourceRepositoryBranchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSourceRepositoryBranchRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSourceRepositoryBranchResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSourceRepositoryBranchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSourceRepositoryBranchCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSourceRepositoryBranchCommandOutput> {
    return deserializeAws_restJson1CreateSourceRepositoryBranchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
