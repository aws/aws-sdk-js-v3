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

import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { CreateDetectorModelRequest, CreateDetectorModelResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDetectorModelCommand,
  serializeAws_restJson1CreateDetectorModelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateDetectorModelCommand}.
 */
export interface CreateDetectorModelCommandInput extends CreateDetectorModelRequest {}
/**
 * @public
 *
 * The output of {@link CreateDetectorModelCommand}.
 */
export interface CreateDetectorModelCommandOutput extends CreateDetectorModelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a detector model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, CreateDetectorModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, CreateDetectorModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new CreateDetectorModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateDetectorModelCommandInput - {@link CreateDetectorModelCommandInput}
 * @returns {@link CreateDetectorModelCommandOutput}
 * @see {@link CreateDetectorModelCommandInput} for command's `input` shape.
 * @see {@link CreateDetectorModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is in use.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 *
 */
export class CreateDetectorModelCommand extends $Command<
  CreateDetectorModelCommandInput,
  CreateDetectorModelCommandOutput,
  IoTEventsClientResolvedConfig
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
  constructor(readonly input: CreateDetectorModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDetectorModelCommandInput, CreateDetectorModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDetectorModelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "CreateDetectorModelCommand";
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
  private serialize(input: CreateDetectorModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDetectorModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDetectorModelCommandOutput> {
    return deserializeAws_restJson1CreateDetectorModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
