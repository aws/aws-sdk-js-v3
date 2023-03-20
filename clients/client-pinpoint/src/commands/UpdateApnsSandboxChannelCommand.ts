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

import { UpdateApnsSandboxChannelRequest, UpdateApnsSandboxChannelResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  deserializeAws_restJson1UpdateApnsSandboxChannelCommand,
  serializeAws_restJson1UpdateApnsSandboxChannelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateApnsSandboxChannelCommand}.
 */
export interface UpdateApnsSandboxChannelCommandInput extends UpdateApnsSandboxChannelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApnsSandboxChannelCommand}.
 */
export interface UpdateApnsSandboxChannelCommandOutput extends UpdateApnsSandboxChannelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Enables the APNs sandbox channel for an application or updates the status and settings of the APNs sandbox channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateApnsSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateApnsSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateApnsSandboxChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateApnsSandboxChannelCommandInput - {@link UpdateApnsSandboxChannelCommandInput}
 * @returns {@link UpdateApnsSandboxChannelCommandOutput}
 * @see {@link UpdateApnsSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateApnsSandboxChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 *
 */
export class UpdateApnsSandboxChannelCommand extends $Command<
  UpdateApnsSandboxChannelCommandInput,
  UpdateApnsSandboxChannelCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: UpdateApnsSandboxChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateApnsSandboxChannelCommandInput, UpdateApnsSandboxChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateApnsSandboxChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateApnsSandboxChannelCommand";
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
  private serialize(input: UpdateApnsSandboxChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateApnsSandboxChannelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateApnsSandboxChannelCommandOutput> {
    return deserializeAws_restJson1UpdateApnsSandboxChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
