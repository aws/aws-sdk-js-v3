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

import { UpdateEndpointsBatchRequest, UpdateEndpointsBatchResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  deserializeAws_restJson1UpdateEndpointsBatchCommand,
  serializeAws_restJson1UpdateEndpointsBatchCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateEndpointsBatchCommand}.
 */
export interface UpdateEndpointsBatchCommandInput extends UpdateEndpointsBatchRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEndpointsBatchCommand}.
 */
export interface UpdateEndpointsBatchCommandOutput extends UpdateEndpointsBatchResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateEndpointsBatchCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateEndpointsBatchCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateEndpointsBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateEndpointsBatchCommandInput - {@link UpdateEndpointsBatchCommandInput}
 * @returns {@link UpdateEndpointsBatchCommandOutput}
 * @see {@link UpdateEndpointsBatchCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointsBatchCommandOutput} for command's `response` shape.
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
export class UpdateEndpointsBatchCommand extends $Command<
  UpdateEndpointsBatchCommandInput,
  UpdateEndpointsBatchCommandOutput,
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
  constructor(readonly input: UpdateEndpointsBatchCommandInput) {
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
  ): Handler<UpdateEndpointsBatchCommandInput, UpdateEndpointsBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEndpointsBatchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateEndpointsBatchCommand";
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
  private serialize(input: UpdateEndpointsBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateEndpointsBatchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEndpointsBatchCommandOutput> {
    return deserializeAws_restJson1UpdateEndpointsBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
