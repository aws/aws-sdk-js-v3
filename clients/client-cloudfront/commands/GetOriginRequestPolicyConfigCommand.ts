import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetOriginRequestPolicyConfigRequest, GetOriginRequestPolicyConfigResult } from "../models/models_0";
import {
  deserializeAws_restXmlGetOriginRequestPolicyConfigCommand,
  serializeAws_restXmlGetOriginRequestPolicyConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetOriginRequestPolicyConfigCommandInput = GetOriginRequestPolicyConfigRequest;
export type GetOriginRequestPolicyConfigCommandOutput = GetOriginRequestPolicyConfigResult & __MetadataBearer;

/**
 * <p>Gets an origin request policy configuration.</p>
 * 		       <p>To get an origin request policy configuration, you must provide the policy’s identifier. If
 * 			the origin request policy is attached to a distribution’s cache behavior, you can get
 * 			the policy’s identifier using <code>ListDistributions</code> or
 * 			<code>GetDistribution</code>. If the origin request policy is not attached to a cache
 * 			behavior, you can get the identifier using
 * 			<code>ListOriginRequestPolicies</code>.</p>
 */
export class GetOriginRequestPolicyConfigCommand extends $Command<
  GetOriginRequestPolicyConfigCommandInput,
  GetOriginRequestPolicyConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOriginRequestPolicyConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOriginRequestPolicyConfigCommandInput, GetOriginRequestPolicyConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetOriginRequestPolicyConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOriginRequestPolicyConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetOriginRequestPolicyConfigResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOriginRequestPolicyConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetOriginRequestPolicyConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOriginRequestPolicyConfigCommandOutput> {
    return deserializeAws_restXmlGetOriginRequestPolicyConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
