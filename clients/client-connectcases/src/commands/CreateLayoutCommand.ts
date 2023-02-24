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

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import {
  CreateLayoutRequest,
  CreateLayoutRequestFilterSensitiveLog,
  CreateLayoutResponse,
  CreateLayoutResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateLayoutCommand,
  serializeAws_restJson1CreateLayoutCommand,
} from "../protocols/Aws_restJson1";

export interface CreateLayoutCommandInput extends CreateLayoutRequest {}
export interface CreateLayoutCommandOutput extends CreateLayoutResponse, __MetadataBearer {}

/**
 * <p>Creates a layout in the Cases domain. Layouts define the following configuration in
 *       the top section and More Info tab of the Cases user interface:</p>
 *          <ul>
 *             <li>
 *                <p>Fields to display to the users</p>
 *             </li>
 *             <li>
 *                <p>Field ordering</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Title and Status fields cannot be part of layouts since they are not
 *         configurable.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, CreateLayoutCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, CreateLayoutCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const command = new CreateLayoutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLayoutCommandInput} for command's `input` shape.
 * @see {@link CreateLayoutCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 */
export class CreateLayoutCommand extends $Command<
  CreateLayoutCommandInput,
  CreateLayoutCommandOutput,
  ConnectCasesClientResolvedConfig
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

  constructor(readonly input: CreateLayoutCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCasesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLayoutCommandInput, CreateLayoutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateLayoutCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCasesClient";
    const commandName = "CreateLayoutCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLayoutRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLayoutResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLayoutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateLayoutCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLayoutCommandOutput> {
    return deserializeAws_restJson1CreateLayoutCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
