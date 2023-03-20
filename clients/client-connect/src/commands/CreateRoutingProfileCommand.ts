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
import { CreateRoutingProfileRequest, CreateRoutingProfileResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateRoutingProfileCommand,
  serializeAws_restJson1CreateRoutingProfileCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateRoutingProfileCommand}.
 */
export interface CreateRoutingProfileCommandInput extends CreateRoutingProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateRoutingProfileCommand}.
 */
export interface CreateRoutingProfileCommandOutput extends CreateRoutingProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateRoutingProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateRoutingProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateRoutingProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateRoutingProfileCommandInput - {@link CreateRoutingProfileCommandInput}
 * @returns {@link CreateRoutingProfileCommandOutput}
 * @see {@link CreateRoutingProfileCommandInput} for command's `input` shape.
 * @see {@link CreateRoutingProfileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 *
 */
export class CreateRoutingProfileCommand extends $Command<
  CreateRoutingProfileCommandInput,
  CreateRoutingProfileCommandOutput,
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
  constructor(readonly input: CreateRoutingProfileCommandInput) {
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
  ): Handler<CreateRoutingProfileCommandInput, CreateRoutingProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRoutingProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreateRoutingProfileCommand";
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
  private serialize(input: CreateRoutingProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRoutingProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRoutingProfileCommandOutput> {
    return deserializeAws_restJson1CreateRoutingProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
