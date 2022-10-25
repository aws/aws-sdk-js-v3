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

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import {
  DeleteRecipeVersionRequest,
  DeleteRecipeVersionRequestFilterSensitiveLog,
  DeleteRecipeVersionResponse,
  DeleteRecipeVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRecipeVersionCommand,
  serializeAws_restJson1DeleteRecipeVersionCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteRecipeVersionCommandInput extends DeleteRecipeVersionRequest {}
export interface DeleteRecipeVersionCommandOutput extends DeleteRecipeVersionResponse, __MetadataBearer {}

/**
 * <p>Deletes a single version of a DataBrew recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DeleteRecipeVersionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DeleteRecipeVersionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new DeleteRecipeVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRecipeVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteRecipeVersionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 */
export class DeleteRecipeVersionCommand extends $Command<
  DeleteRecipeVersionCommandInput,
  DeleteRecipeVersionCommandOutput,
  DataBrewClientResolvedConfig
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

  constructor(readonly input: DeleteRecipeVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRecipeVersionCommandInput, DeleteRecipeVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteRecipeVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "DeleteRecipeVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRecipeVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteRecipeVersionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRecipeVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteRecipeVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRecipeVersionCommandOutput> {
    return deserializeAws_restJson1DeleteRecipeVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
