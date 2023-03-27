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
import { UpdateRoutingProfileConcurrencyRequest } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommand,
  serializeAws_restJson1UpdateRoutingProfileConcurrencyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateRoutingProfileConcurrencyCommand}.
 */
export interface UpdateRoutingProfileConcurrencyCommandInput extends UpdateRoutingProfileConcurrencyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoutingProfileConcurrencyCommand}.
 */
export interface UpdateRoutingProfileConcurrencyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates the channels that agents can handle in the Contact Control Panel (CCP) for a routing
 *    profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRoutingProfileConcurrencyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRoutingProfileConcurrencyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateRoutingProfileConcurrencyRequest
 *   InstanceId: "STRING_VALUE", // required
 *   RoutingProfileId: "STRING_VALUE", // required
 *   MediaConcurrencies: [ // MediaConcurrencies // required
 *     { // MediaConcurrency
 *       Channel: "VOICE" || "CHAT" || "TASK", // required
 *       Concurrency: Number("int"), // required
 *     },
 *   ],
 * };
 * const command = new UpdateRoutingProfileConcurrencyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateRoutingProfileConcurrencyCommandInput - {@link UpdateRoutingProfileConcurrencyCommandInput}
 * @returns {@link UpdateRoutingProfileConcurrencyCommandOutput}
 * @see {@link UpdateRoutingProfileConcurrencyCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingProfileConcurrencyCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
export class UpdateRoutingProfileConcurrencyCommand extends $Command<
  UpdateRoutingProfileConcurrencyCommandInput,
  UpdateRoutingProfileConcurrencyCommandOutput,
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
  constructor(readonly input: UpdateRoutingProfileConcurrencyCommandInput) {
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
  ): Handler<UpdateRoutingProfileConcurrencyCommandInput, UpdateRoutingProfileConcurrencyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRoutingProfileConcurrencyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateRoutingProfileConcurrencyCommand";
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
  private serialize(
    input: UpdateRoutingProfileConcurrencyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRoutingProfileConcurrencyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRoutingProfileConcurrencyCommandOutput> {
    return deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
