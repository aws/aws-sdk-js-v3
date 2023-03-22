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
  AssociateResourceShareRequest,
  AssociateResourceShareRequestFilterSensitiveLog,
  AssociateResourceShareResponse,
  AssociateResourceShareResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateResourceShareCommand,
  serializeAws_restJson1AssociateResourceShareCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 *
 * The input for {@link AssociateResourceShareCommand}.
 */
export interface AssociateResourceShareCommandInput extends AssociateResourceShareRequest {}
/**
 * @public
 *
 * The output of {@link AssociateResourceShareCommand}.
 */
export interface AssociateResourceShareCommandOutput extends AssociateResourceShareResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds the specified list of principals and list of resources to a resource share. Principals that
 *             already have access to this resource share immediately receive access to the added resources.
 *             Newly added principals immediately receive access to the resources shared in this resource share. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, AssociateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, AssociateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new AssociateResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AssociateResourceShareCommandInput - {@link AssociateResourceShareCommandInput}
 * @returns {@link AssociateResourceShareCommandOutput}
 * @see {@link AssociateResourceShareCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceShareCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the rate at which you are allowed to perform this operation. Please try
 *             again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>A specified resource was not found.</p>
 *
 *
 */
export class AssociateResourceShareCommand extends $Command<
  AssociateResourceShareCommandInput,
  AssociateResourceShareCommandOutput,
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
  constructor(readonly input: AssociateResourceShareCommandInput) {
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
  ): Handler<AssociateResourceShareCommandInput, AssociateResourceShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateResourceShareCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "AssociateResourceShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateResourceShareRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateResourceShareResponseFilterSensitiveLog,
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
  private serialize(input: AssociateResourceShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateResourceShareCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateResourceShareCommandOutput> {
    return deserializeAws_restJson1AssociateResourceShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
