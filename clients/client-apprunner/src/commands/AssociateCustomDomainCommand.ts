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

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import {
  AssociateCustomDomainRequest,
  AssociateCustomDomainRequestFilterSensitiveLog,
  AssociateCustomDomainResponse,
  AssociateCustomDomainResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0AssociateCustomDomainCommand,
  serializeAws_json1_0AssociateCustomDomainCommand,
} from "../protocols/Aws_json1_0";

export interface AssociateCustomDomainCommandInput extends AssociateCustomDomainRequest {}
export interface AssociateCustomDomainCommandOutput extends AssociateCustomDomainResponse, __MetadataBearer {}

/**
 * <p>Associate your own domain name with the App Runner subdomain URL of your App Runner service.</p>
 *          <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record
 *       that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or
 *       more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks
 *       domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, AssociateCustomDomainCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, AssociateCustomDomainCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new AssociateCustomDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateCustomDomainCommandInput} for command's `input` shape.
 * @see {@link AssociateCustomDomainCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 */
export class AssociateCustomDomainCommand extends $Command<
  AssociateCustomDomainCommandInput,
  AssociateCustomDomainCommandOutput,
  AppRunnerClientResolvedConfig
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

  constructor(readonly input: AssociateCustomDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateCustomDomainCommandInput, AssociateCustomDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateCustomDomainCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "AssociateCustomDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateCustomDomainRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateCustomDomainResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateCustomDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0AssociateCustomDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateCustomDomainCommandOutput> {
    return deserializeAws_json1_0AssociateCustomDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
