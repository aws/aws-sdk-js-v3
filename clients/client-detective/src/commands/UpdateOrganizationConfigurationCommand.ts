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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import {
  UpdateOrganizationConfigurationRequest,
  UpdateOrganizationConfigurationRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateOrganizationConfigurationCommand,
  serializeAws_restJson1UpdateOrganizationConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateOrganizationConfigurationCommandInput extends UpdateOrganizationConfigurationRequest {}
export interface UpdateOrganizationConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the configuration for the Organizations integration in the current Region.
 *          Can only be called by the Detective administrator account for the
 *          organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, UpdateOrganizationConfigurationCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, UpdateOrganizationConfigurationCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new UpdateOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateOrganizationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 */
export class UpdateOrganizationConfigurationCommand extends $Command<
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
  DetectiveClientResolvedConfig
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

  constructor(readonly input: UpdateOrganizationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateOrganizationConfigurationCommandInput, UpdateOrganizationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateOrganizationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "UpdateOrganizationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateOrganizationConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateOrganizationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateOrganizationConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateOrganizationConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateOrganizationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
