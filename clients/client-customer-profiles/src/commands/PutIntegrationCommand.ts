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

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import {
  PutIntegrationRequest,
  PutIntegrationRequestFilterSensitiveLog,
  PutIntegrationResponse,
  PutIntegrationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutIntegrationCommand,
  serializeAws_restJson1PutIntegrationCommand,
} from "../protocols/Aws_restJson1";

export interface PutIntegrationCommandInput extends PutIntegrationRequest {}
export interface PutIntegrationCommandOutput extends PutIntegrationResponse, __MetadataBearer {}

/**
 * <p>Adds an integration between the service and a third-party service, which includes
 *          Amazon AppFlow and Amazon Connect.</p>
 *          <p>An integration can belong to only one domain.</p>
 *          <p>To add or remove tags on an existing Integration, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource
 *       </a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">
 *          UntagResource</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, PutIntegrationCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, PutIntegrationCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new PutIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutIntegrationCommandInput} for command's `input` shape.
 * @see {@link PutIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 */
export class PutIntegrationCommand extends $Command<
  PutIntegrationCommandInput,
  PutIntegrationCommandOutput,
  CustomerProfilesClientResolvedConfig
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

  constructor(readonly input: PutIntegrationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutIntegrationCommandInput, PutIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutIntegrationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "PutIntegrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutIntegrationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutIntegrationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutIntegrationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutIntegrationCommandOutput> {
    return deserializeAws_restJson1PutIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
