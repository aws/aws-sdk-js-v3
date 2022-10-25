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
  DeleteDedicatedIpPoolRequest,
  DeleteDedicatedIpPoolRequestFilterSensitiveLog,
  DeleteDedicatedIpPoolResponse,
  DeleteDedicatedIpPoolResponseFilterSensitiveLog,
} from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  deserializeAws_restJson1DeleteDedicatedIpPoolCommand,
  serializeAws_restJson1DeleteDedicatedIpPoolCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteDedicatedIpPoolCommandInput extends DeleteDedicatedIpPoolRequest {}
export interface DeleteDedicatedIpPoolCommandOutput extends DeleteDedicatedIpPoolResponse, __MetadataBearer {}

/**
 * <p>Delete a dedicated IP pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, DeleteDedicatedIpPoolCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, DeleteDedicatedIpPoolCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new DeleteDedicatedIpPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDedicatedIpPoolCommandInput} for command's `input` shape.
 * @see {@link DeleteDedicatedIpPoolCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 */
export class DeleteDedicatedIpPoolCommand extends $Command<
  DeleteDedicatedIpPoolCommandInput,
  DeleteDedicatedIpPoolCommandOutput,
  PinpointEmailClientResolvedConfig
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

  constructor(readonly input: DeleteDedicatedIpPoolCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDedicatedIpPoolCommandInput, DeleteDedicatedIpPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDedicatedIpPoolCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "DeleteDedicatedIpPoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDedicatedIpPoolRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteDedicatedIpPoolResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDedicatedIpPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteDedicatedIpPoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDedicatedIpPoolCommandOutput> {
    return deserializeAws_restJson1DeleteDedicatedIpPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
