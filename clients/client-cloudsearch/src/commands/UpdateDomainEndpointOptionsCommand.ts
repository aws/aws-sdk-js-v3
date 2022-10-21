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

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import {
  UpdateDomainEndpointOptionsRequest,
  UpdateDomainEndpointOptionsRequestFilterSensitiveLog,
  UpdateDomainEndpointOptionsResponse,
  UpdateDomainEndpointOptionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryUpdateDomainEndpointOptionsCommand,
  serializeAws_queryUpdateDomainEndpointOptionsCommand,
} from "../protocols/Aws_query";

export interface UpdateDomainEndpointOptionsCommandInput extends UpdateDomainEndpointOptionsRequest {}
export interface UpdateDomainEndpointOptionsCommandOutput
  extends UpdateDomainEndpointOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, UpdateDomainEndpointOptionsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, UpdateDomainEndpointOptionsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new UpdateDomainEndpointOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainEndpointOptionsCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainEndpointOptionsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 */
export class UpdateDomainEndpointOptionsCommand extends $Command<
  UpdateDomainEndpointOptionsCommandInput,
  UpdateDomainEndpointOptionsCommandOutput,
  CloudSearchClientResolvedConfig
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

  constructor(readonly input: UpdateDomainEndpointOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDomainEndpointOptionsCommandInput, UpdateDomainEndpointOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDomainEndpointOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "UpdateDomainEndpointOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDomainEndpointOptionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDomainEndpointOptionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDomainEndpointOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateDomainEndpointOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDomainEndpointOptionsCommandOutput> {
    return deserializeAws_queryUpdateDomainEndpointOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
