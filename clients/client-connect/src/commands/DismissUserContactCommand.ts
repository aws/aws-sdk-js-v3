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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  DismissUserContactRequest,
  DismissUserContactRequestFilterSensitiveLog,
  DismissUserContactResponse,
  DismissUserContactResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DismissUserContactCommand,
  serializeAws_restJson1DismissUserContactCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DismissUserContactCommand}.
 */
export interface DismissUserContactCommandInput extends DismissUserContactRequest {}
/**
 * @public
 *
 * The output of {@link DismissUserContactCommand}.
 */
export interface DismissUserContactCommandOutput extends DismissUserContactResponse, __MetadataBearer {}

/**
 * @public
 * <p>Dismisses contacts from an agent’s CCP and returns the agent to an available state, which
 *    allows the agent to receive a new routed contact. Contacts can only be dismissed if they are in a
 *     <code>MISSED</code>, <code>ERROR</code>, <code>ENDED</code>, or <code>REJECTED</code> state in
 *    the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">Agent
 *     Event Stream</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DismissUserContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DismissUserContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DismissUserContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DismissUserContactCommandInput - {@link DismissUserContactCommandInput}
 * @returns {@link DismissUserContactCommandOutput}
 * @see {@link DismissUserContactCommandInput} for command's `input` shape.
 * @see {@link DismissUserContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 *
 */
export class DismissUserContactCommand extends $Command<
  DismissUserContactCommandInput,
  DismissUserContactCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: DismissUserContactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DismissUserContactCommandInput, DismissUserContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DismissUserContactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DismissUserContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DismissUserContactRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DismissUserContactResponseFilterSensitiveLog,
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
  private serialize(input: DismissUserContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DismissUserContactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DismissUserContactCommandOutput> {
    return deserializeAws_restJson1DismissUserContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
