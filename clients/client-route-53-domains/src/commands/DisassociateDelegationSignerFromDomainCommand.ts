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
  DisassociateDelegationSignerFromDomainRequest,
  DisassociateDelegationSignerFromDomainRequestFilterSensitiveLog,
  DisassociateDelegationSignerFromDomainResponse,
  DisassociateDelegationSignerFromDomainResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateDelegationSignerFromDomainCommand,
  serializeAws_json1_1DisassociateDelegationSignerFromDomainCommand,
} from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * The input for {@link DisassociateDelegationSignerFromDomainCommand}.
 */
export interface DisassociateDelegationSignerFromDomainCommandInput
  extends DisassociateDelegationSignerFromDomainRequest {}
/**
 * The output of {@link DisassociateDelegationSignerFromDomainCommand}.
 */
export interface DisassociateDelegationSignerFromDomainCommandOutput
  extends DisassociateDelegationSignerFromDomainResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a delegation signer (DS) record in the registry zone for this domain
 * 			name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, DisassociateDelegationSignerFromDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, DisassociateDelegationSignerFromDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new DisassociateDelegationSignerFromDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDelegationSignerFromDomainCommandInput} for command's `input` shape.
 * @see {@link DisassociateDelegationSignerFromDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 */
export class DisassociateDelegationSignerFromDomainCommand extends $Command<
  DisassociateDelegationSignerFromDomainCommandInput,
  DisassociateDelegationSignerFromDomainCommandOutput,
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

  constructor(readonly input: DisassociateDelegationSignerFromDomainCommandInput) {
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
  ): Handler<DisassociateDelegationSignerFromDomainCommandInput, DisassociateDelegationSignerFromDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateDelegationSignerFromDomainCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "DisassociateDelegationSignerFromDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateDelegationSignerFromDomainRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateDelegationSignerFromDomainResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateDelegationSignerFromDomainCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateDelegationSignerFromDomainCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateDelegationSignerFromDomainCommandOutput> {
    return deserializeAws_json1_1DisassociateDelegationSignerFromDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
