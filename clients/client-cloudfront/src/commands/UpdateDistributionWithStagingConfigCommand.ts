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
  UpdateDistributionWithStagingConfigRequest,
  UpdateDistributionWithStagingConfigRequestFilterSensitiveLog,
  UpdateDistributionWithStagingConfigResult,
  UpdateDistributionWithStagingConfigResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlUpdateDistributionWithStagingConfigCommand,
  serializeAws_restXmlUpdateDistributionWithStagingConfigCommand,
} from "../protocols/Aws_restXml";

export interface UpdateDistributionWithStagingConfigCommandInput extends UpdateDistributionWithStagingConfigRequest {}
export interface UpdateDistributionWithStagingConfigCommandOutput
  extends UpdateDistributionWithStagingConfigResult,
    __MetadataBearer {}

/**
 * <p>Copies the staging distribution's configuration to its corresponding primary
 * 			distribution. The primary distribution retains its <code>Aliases</code> (also known as
 * 			alternate domain names or CNAMEs) and <code>ContinuousDeploymentPolicyId</code> value,
 * 			but otherwise its configuration is overwritten to match the staging distribution.</p>
 *          <p>You can use this operation in a continuous deployment workflow after you have tested
 * 			configuration changes on the staging distribution. After using a continuous deployment
 * 			policy to move a portion of your domain name's traffic to the staging distribution and
 * 			verifying that it works as intended, you can use this operation to copy the staging
 * 			distribution's configuration to the primary distribution. This action will disable the
 * 			continuous deployment policy and move your domain's traffic back to the primary distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateDistributionWithStagingConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateDistributionWithStagingConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateDistributionWithStagingConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDistributionWithStagingConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionWithStagingConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class UpdateDistributionWithStagingConfigCommand extends $Command<
  UpdateDistributionWithStagingConfigCommandInput,
  UpdateDistributionWithStagingConfigCommandOutput,
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

  constructor(readonly input: UpdateDistributionWithStagingConfigCommandInput) {
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
  ): Handler<UpdateDistributionWithStagingConfigCommandInput, UpdateDistributionWithStagingConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDistributionWithStagingConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateDistributionWithStagingConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDistributionWithStagingConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDistributionWithStagingConfigResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateDistributionWithStagingConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateDistributionWithStagingConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDistributionWithStagingConfigCommandOutput> {
    return deserializeAws_restXmlUpdateDistributionWithStagingConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
