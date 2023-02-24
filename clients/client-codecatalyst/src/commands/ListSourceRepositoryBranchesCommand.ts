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
  ListSourceRepositoryBranchesRequest,
  ListSourceRepositoryBranchesRequestFilterSensitiveLog,
  ListSourceRepositoryBranchesResponse,
  ListSourceRepositoryBranchesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListSourceRepositoryBranchesCommand,
  serializeAws_restJson1ListSourceRepositoryBranchesCommand,
} from "../protocols/Aws_restJson1";

export interface ListSourceRepositoryBranchesCommandInput extends ListSourceRepositoryBranchesRequest {}
export interface ListSourceRepositoryBranchesCommandOutput
  extends ListSourceRepositoryBranchesResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of branches in a specified source repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, ListSourceRepositoryBranchesCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, ListSourceRepositoryBranchesCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const command = new ListSourceRepositoryBranchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSourceRepositoryBranchesCommandInput} for command's `input` shape.
 * @see {@link ListSourceRepositoryBranchesCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 */
export class ListSourceRepositoryBranchesCommand extends $Command<
  ListSourceRepositoryBranchesCommandInput,
  ListSourceRepositoryBranchesCommandOutput,
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

  constructor(readonly input: ListSourceRepositoryBranchesCommandInput) {
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
  ): Handler<ListSourceRepositoryBranchesCommandInput, ListSourceRepositoryBranchesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSourceRepositoryBranchesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCatalystClient";
    const commandName = "ListSourceRepositoryBranchesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSourceRepositoryBranchesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSourceRepositoryBranchesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSourceRepositoryBranchesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSourceRepositoryBranchesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSourceRepositoryBranchesCommandOutput> {
    return deserializeAws_restJson1ListSourceRepositoryBranchesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
