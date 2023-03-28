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

import { DeleteResourceShareRequest, DeleteResourceShareResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteResourceShareCommand,
  serializeAws_restJson1DeleteResourceShareCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 *
 * The input for {@link DeleteResourceShareCommand}.
 */
export interface DeleteResourceShareCommandInput extends DeleteResourceShareRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourceShareCommand}.
 */
export interface DeleteResourceShareCommandOutput extends DeleteResourceShareResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified resource share. This doesn't delete any of the resources that were
 *             associated with the resource share; it only stops the sharing of those resources outside of the
 *             Amazon Web Services account that created them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, DeleteResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, DeleteResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // DeleteResourceShareRequest
 *   resourceShareArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteResourceShareCommandInput - {@link DeleteResourceShareCommandInput}
 * @returns {@link DeleteResourceShareCommandOutput}
 * @see {@link DeleteResourceShareCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceShareCommandOutput} for command's `response` shape.
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
export class DeleteResourceShareCommand extends $Command<
  DeleteResourceShareCommandInput,
  DeleteResourceShareCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DeleteResourceShareCommandInput) {
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
  ): Handler<DeleteResourceShareCommandInput, DeleteResourceShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteResourceShareCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "DeleteResourceShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteResourceShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteResourceShareCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteResourceShareCommandOutput> {
    return deserializeAws_restJson1DeleteResourceShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
