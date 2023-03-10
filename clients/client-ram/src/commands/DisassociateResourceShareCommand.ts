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
  DisassociateResourceShareRequest,
  DisassociateResourceShareRequestFilterSensitiveLog,
  DisassociateResourceShareResponse,
  DisassociateResourceShareResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateResourceShareCommand,
  serializeAws_restJson1DisassociateResourceShareCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * The input for {@link DisassociateResourceShareCommand}.
 */
export interface DisassociateResourceShareCommandInput extends DisassociateResourceShareRequest {}
/**
 * The output of {@link DisassociateResourceShareCommand}.
 */
export interface DisassociateResourceShareCommandOutput extends DisassociateResourceShareResponse, __MetadataBearer {}

/**
 * <p>Disassociates the specified principals or resources from the specified resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, DisassociateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, DisassociateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new DisassociateResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateResourceShareCommandInput} for command's `input` shape.
 * @see {@link DisassociateResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The client token input parameter was matched one used with a previous call to the
 *             operation, but at least one of the other input parameters is different from the previous
 *             call.</p>
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The client token is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link InvalidStateTransitionException} (client fault)
 *  <p>The requested state transition is not valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The requested operation is not permitted.</p>
 *
 * @throws {@link ResourceShareLimitExceededException} (client fault)
 *  <p>This request would exceed the limit for resource shares for your account.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The service could not respond to the request due to an internal problem.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is not available.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>A specified resource was not found.</p>
 *
 *
 */
export class DisassociateResourceShareCommand extends $Command<
  DisassociateResourceShareCommandInput,
  DisassociateResourceShareCommandOutput,
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

  constructor(readonly input: DisassociateResourceShareCommandInput) {
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
  ): Handler<DisassociateResourceShareCommandInput, DisassociateResourceShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateResourceShareCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "DisassociateResourceShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateResourceShareRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateResourceShareResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateResourceShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateResourceShareCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateResourceShareCommandOutput> {
    return deserializeAws_restJson1DisassociateResourceShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
