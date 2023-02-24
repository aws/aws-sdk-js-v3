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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  GetUserDefinedFunctionRequest,
  GetUserDefinedFunctionRequestFilterSensitiveLog,
  GetUserDefinedFunctionResponse,
  GetUserDefinedFunctionResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetUserDefinedFunctionCommand,
  serializeAws_json1_1GetUserDefinedFunctionCommand,
} from "../protocols/Aws_json1_1";

export interface GetUserDefinedFunctionCommandInput extends GetUserDefinedFunctionRequest {}
export interface GetUserDefinedFunctionCommandOutput extends GetUserDefinedFunctionResponse, __MetadataBearer {}

/**
 * <p>Retrieves a specified function definition from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUserDefinedFunctionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUserDefinedFunctionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetUserDefinedFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserDefinedFunctionCommandInput} for command's `input` shape.
 * @see {@link GetUserDefinedFunctionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetUserDefinedFunctionCommand extends $Command<
  GetUserDefinedFunctionCommandInput,
  GetUserDefinedFunctionCommandOutput,
  GlueClientResolvedConfig
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

  constructor(readonly input: GetUserDefinedFunctionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUserDefinedFunctionCommandInput, GetUserDefinedFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUserDefinedFunctionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetUserDefinedFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUserDefinedFunctionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetUserDefinedFunctionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUserDefinedFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetUserDefinedFunctionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUserDefinedFunctionCommandOutput> {
    return deserializeAws_json1_1GetUserDefinedFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
