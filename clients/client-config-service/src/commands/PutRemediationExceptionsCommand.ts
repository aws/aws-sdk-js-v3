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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  PutRemediationExceptionsRequest,
  PutRemediationExceptionsRequestFilterSensitiveLog,
  PutRemediationExceptionsResponse,
  PutRemediationExceptionsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1PutRemediationExceptionsCommand,
  serializeAws_json1_1PutRemediationExceptionsCommand,
} from "../protocols/Aws_json1_1";

export interface PutRemediationExceptionsCommandInput extends PutRemediationExceptionsRequest {}
export interface PutRemediationExceptionsCommandOutput extends PutRemediationExceptionsResponse, __MetadataBearer {}

/**
 * <p>A remediation exception is when a specific resource is no longer considered for auto-remediation.
 * 			This API adds a new exception or updates an existing exception for a specific resource with a specific Config rule. </p>
 * 		       <note>
 *             <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource.
 * 			Remediation exceptions blocks auto-remediation until the exception is cleared.</p>
 *          </note>
 * 		       <note>
 *             <p>To place an exception on an Amazon Web Services resource, ensure remediation is set as manual remediation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRemediationExceptionsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutRemediationExceptionsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutRemediationExceptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRemediationExceptionsCommandInput} for command's `input` shape.
 * @see {@link PutRemediationExceptionsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class PutRemediationExceptionsCommand extends $Command<
  PutRemediationExceptionsCommandInput,
  PutRemediationExceptionsCommandOutput,
  ConfigServiceClientResolvedConfig
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

  constructor(readonly input: PutRemediationExceptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRemediationExceptionsCommandInput, PutRemediationExceptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRemediationExceptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutRemediationExceptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRemediationExceptionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutRemediationExceptionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRemediationExceptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutRemediationExceptionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRemediationExceptionsCommandOutput> {
    return deserializeAws_json1_1PutRemediationExceptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
