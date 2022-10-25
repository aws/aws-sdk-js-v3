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
  UpdateResourceShareRequest,
  UpdateResourceShareRequestFilterSensitiveLog,
  UpdateResourceShareResponse,
  UpdateResourceShareResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateResourceShareCommand,
  serializeAws_restJson1UpdateResourceShareCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

export interface UpdateResourceShareCommandInput extends UpdateResourceShareRequest {}
export interface UpdateResourceShareCommandOutput extends UpdateResourceShareResponse, __MetadataBearer {}

/**
 * <p>Modifies some of the properties of the specified resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, UpdateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, UpdateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new UpdateResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceShareCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 */
export class UpdateResourceShareCommand extends $Command<
  UpdateResourceShareCommandInput,
  UpdateResourceShareCommandOutput,
  RAMClientResolvedConfig
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

  constructor(readonly input: UpdateResourceShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateResourceShareCommandInput, UpdateResourceShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateResourceShareCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "UpdateResourceShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateResourceShareRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateResourceShareResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateResourceShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateResourceShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResourceShareCommandOutput> {
    return deserializeAws_restJson1UpdateResourceShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
