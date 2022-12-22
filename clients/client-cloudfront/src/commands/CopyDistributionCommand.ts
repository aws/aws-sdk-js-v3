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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  CopyDistributionRequest,
  CopyDistributionRequestFilterSensitiveLog,
  CopyDistributionResult,
  CopyDistributionResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlCopyDistributionCommand,
  serializeAws_restXmlCopyDistributionCommand,
} from "../protocols/Aws_restXml";

export interface CopyDistributionCommandInput extends CopyDistributionRequest {}
export interface CopyDistributionCommandOutput extends CopyDistributionResult, __MetadataBearer {}

/**
 * <p>Creates a staging distribution using the configuration of the provided primary
 * 			distribution. A staging distribution is a copy of an existing distribution (called the
 * 			primary distribution) that you can use in a continuous deployment workflow.</p>
 *          <p>After you create a staging distribution, you can use <code>UpdateDistribution</code>
 * 			to modify the staging distribution's configuration. Then you can use
 * 				<code>CreateContinuousDeploymentPolicy</code> to incrementally move traffic to the
 * 			staging distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CopyDistributionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CopyDistributionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CopyDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyDistributionCommandInput} for command's `input` shape.
 * @see {@link CopyDistributionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class CopyDistributionCommand extends $Command<
  CopyDistributionCommandInput,
  CopyDistributionCommandOutput,
  CloudFrontClientResolvedConfig
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

  constructor(readonly input: CopyDistributionCommandInput) {
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
  ): Handler<CopyDistributionCommandInput, CopyDistributionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CopyDistributionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CopyDistributionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyDistributionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CopyDistributionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopyDistributionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCopyDistributionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyDistributionCommandOutput> {
    return deserializeAws_restXmlCopyDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
