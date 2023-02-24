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
  GetDeviceRegistrationRequest,
  GetDeviceRegistrationRequestFilterSensitiveLog,
  GetDeviceRegistrationResult,
  GetDeviceRegistrationResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetDeviceRegistrationCommand,
  serializeAws_restJson1GetDeviceRegistrationCommand,
} from "../protocols/Aws_restJson1";
import { SagemakerEdgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SagemakerEdgeClient";

export interface GetDeviceRegistrationCommandInput extends GetDeviceRegistrationRequest {}
export interface GetDeviceRegistrationCommandOutput extends GetDeviceRegistrationResult, __MetadataBearer {}

/**
 * <p>Use to check if a device is registered with SageMaker Edge Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SagemakerEdgeClient, GetDeviceRegistrationCommand } from "@aws-sdk/client-sagemaker-edge"; // ES Modules import
 * // const { SagemakerEdgeClient, GetDeviceRegistrationCommand } = require("@aws-sdk/client-sagemaker-edge"); // CommonJS import
 * const client = new SagemakerEdgeClient(config);
 * const command = new GetDeviceRegistrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceRegistrationCommandInput} for command's `input` shape.
 * @see {@link GetDeviceRegistrationCommandOutput} for command's `response` shape.
 * @see {@link SagemakerEdgeClientResolvedConfig | config} for SagemakerEdgeClient's `config` shape.
 *
 */
export class GetDeviceRegistrationCommand extends $Command<
  GetDeviceRegistrationCommandInput,
  GetDeviceRegistrationCommandOutput,
  SagemakerEdgeClientResolvedConfig
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

  constructor(readonly input: GetDeviceRegistrationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SagemakerEdgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeviceRegistrationCommandInput, GetDeviceRegistrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDeviceRegistrationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SagemakerEdgeClient";
    const commandName = "GetDeviceRegistrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDeviceRegistrationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDeviceRegistrationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDeviceRegistrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDeviceRegistrationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeviceRegistrationCommandOutput> {
    return deserializeAws_restJson1GetDeviceRegistrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
