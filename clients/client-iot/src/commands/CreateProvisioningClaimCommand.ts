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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  CreateProvisioningClaimRequest,
  CreateProvisioningClaimRequestFilterSensitiveLog,
  CreateProvisioningClaimResponse,
  CreateProvisioningClaimResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateProvisioningClaimCommand,
  serializeAws_restJson1CreateProvisioningClaimCommand,
} from "../protocols/Aws_restJson1";

export interface CreateProvisioningClaimCommandInput extends CreateProvisioningClaimRequest {}
export interface CreateProvisioningClaimCommandOutput extends CreateProvisioningClaimResponse, __MetadataBearer {}

/**
 * <p>Creates a provisioning claim.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningClaim</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateProvisioningClaimCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateProvisioningClaimCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateProvisioningClaimCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProvisioningClaimCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningClaimCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class CreateProvisioningClaimCommand extends $Command<
  CreateProvisioningClaimCommandInput,
  CreateProvisioningClaimCommandOutput,
  IoTClientResolvedConfig
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

  constructor(readonly input: CreateProvisioningClaimCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateProvisioningClaimCommandInput, CreateProvisioningClaimCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateProvisioningClaimCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateProvisioningClaimCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateProvisioningClaimRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateProvisioningClaimResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateProvisioningClaimCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateProvisioningClaimCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProvisioningClaimCommandOutput> {
    return deserializeAws_restJson1CreateProvisioningClaimCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
