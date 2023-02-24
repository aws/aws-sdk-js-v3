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
  UpdateCompanyNetworkConfigurationRequest,
  UpdateCompanyNetworkConfigurationRequestFilterSensitiveLog,
  UpdateCompanyNetworkConfigurationResponse,
  UpdateCompanyNetworkConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateCompanyNetworkConfigurationCommand,
  serializeAws_restJson1UpdateCompanyNetworkConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

export interface UpdateCompanyNetworkConfigurationCommandInput extends UpdateCompanyNetworkConfigurationRequest {}
export interface UpdateCompanyNetworkConfigurationCommandOutput
  extends UpdateCompanyNetworkConfigurationResponse,
    __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Updates the company network configuration for the fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, UpdateCompanyNetworkConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, UpdateCompanyNetworkConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new UpdateCompanyNetworkConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCompanyNetworkConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateCompanyNetworkConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 */
export class UpdateCompanyNetworkConfigurationCommand extends $Command<
  UpdateCompanyNetworkConfigurationCommandInput,
  UpdateCompanyNetworkConfigurationCommandOutput,
  WorkLinkClientResolvedConfig
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

  constructor(readonly input: UpdateCompanyNetworkConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCompanyNetworkConfigurationCommandInput, UpdateCompanyNetworkConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCompanyNetworkConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "UpdateCompanyNetworkConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCompanyNetworkConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateCompanyNetworkConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateCompanyNetworkConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateCompanyNetworkConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCompanyNetworkConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateCompanyNetworkConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
