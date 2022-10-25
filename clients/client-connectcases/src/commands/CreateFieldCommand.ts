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
  CreateFieldRequest,
  CreateFieldRequestFilterSensitiveLog,
  CreateFieldResponse,
  CreateFieldResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateFieldCommand,
  serializeAws_restJson1CreateFieldCommand,
} from "../protocols/Aws_restJson1";

export interface CreateFieldCommandInput extends CreateFieldRequest {}
export interface CreateFieldCommandOutput extends CreateFieldResponse, __MetadataBearer {}

/**
 * <p>Creates a field in the Cases domain. This field is used to define the case object
 *       model (that is, defines what data can be captured on cases) in a Cases domain. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, CreateFieldCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, CreateFieldCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const command = new CreateFieldCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFieldCommandInput} for command's `input` shape.
 * @see {@link CreateFieldCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 */
export class CreateFieldCommand extends $Command<
  CreateFieldCommandInput,
  CreateFieldCommandOutput,
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

  constructor(readonly input: CreateFieldCommandInput) {
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
  ): Handler<CreateFieldCommandInput, CreateFieldCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateFieldCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCasesClient";
    const commandName = "CreateFieldCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFieldRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateFieldResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFieldCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateFieldCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFieldCommandOutput> {
    return deserializeAws_restJson1CreateFieldCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
