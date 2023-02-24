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
  CheckDomainTransferabilityRequest,
  CheckDomainTransferabilityRequestFilterSensitiveLog,
  CheckDomainTransferabilityResponse,
  CheckDomainTransferabilityResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CheckDomainTransferabilityCommand,
  serializeAws_json1_1CheckDomainTransferabilityCommand,
} from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

export interface CheckDomainTransferabilityCommandInput extends CheckDomainTransferabilityRequest {}
export interface CheckDomainTransferabilityCommandOutput extends CheckDomainTransferabilityResponse, __MetadataBearer {}

/**
 * <p>Checks whether a domain name can be transferred to Amazon Route 53. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, CheckDomainTransferabilityCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, CheckDomainTransferabilityCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new CheckDomainTransferabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckDomainTransferabilityCommandInput} for command's `input` shape.
 * @see {@link CheckDomainTransferabilityCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 */
export class CheckDomainTransferabilityCommand extends $Command<
  CheckDomainTransferabilityCommandInput,
  CheckDomainTransferabilityCommandOutput,
  Route53DomainsClientResolvedConfig
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

  constructor(readonly input: CheckDomainTransferabilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CheckDomainTransferabilityCommandInput, CheckDomainTransferabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CheckDomainTransferabilityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "CheckDomainTransferabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CheckDomainTransferabilityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CheckDomainTransferabilityResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CheckDomainTransferabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CheckDomainTransferabilityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CheckDomainTransferabilityCommandOutput> {
    return deserializeAws_json1_1CheckDomainTransferabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
