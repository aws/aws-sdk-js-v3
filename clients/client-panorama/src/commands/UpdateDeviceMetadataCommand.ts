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

import { UpdateDeviceMetadataRequest, UpdateDeviceMetadataResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  deserializeAws_restJson1UpdateDeviceMetadataCommand,
  serializeAws_restJson1UpdateDeviceMetadataCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateDeviceMetadataCommand}.
 */
export interface UpdateDeviceMetadataCommandInput extends UpdateDeviceMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDeviceMetadataCommand}.
 */
export interface UpdateDeviceMetadataCommandOutput extends UpdateDeviceMetadataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a device's metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, UpdateDeviceMetadataCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, UpdateDeviceMetadataCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // UpdateDeviceMetadataRequest
 *   DeviceId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateDeviceMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateDeviceMetadataCommandInput - {@link UpdateDeviceMetadataCommandInput}
 * @returns {@link UpdateDeviceMetadataCommandOutput}
 * @see {@link UpdateDeviceMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceMetadataCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 *
 */
export class UpdateDeviceMetadataCommand extends $Command<
  UpdateDeviceMetadataCommandInput,
  UpdateDeviceMetadataCommandOutput,
  PanoramaClientResolvedConfig
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
  constructor(readonly input: UpdateDeviceMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PanoramaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDeviceMetadataCommandInput, UpdateDeviceMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDeviceMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "UpdateDeviceMetadataCommand";
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
  private serialize(input: UpdateDeviceMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDeviceMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDeviceMetadataCommandOutput> {
    return deserializeAws_restJson1UpdateDeviceMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
