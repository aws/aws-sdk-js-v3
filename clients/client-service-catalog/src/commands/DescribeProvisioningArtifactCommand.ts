import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeProvisioningArtifactInput, DescribeProvisioningArtifactOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeProvisioningArtifactCommand,
  serializeAws_json1_1DescribeProvisioningArtifactCommand,
} from "../protocols/Aws_json1_1";
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

export interface DescribeProvisioningArtifactCommandInput extends DescribeProvisioningArtifactInput {}
export interface DescribeProvisioningArtifactCommandOutput
  extends DescribeProvisioningArtifactOutput,
    __MetadataBearer {}

/**
 * <p>Gets information about the specified provisioning artifact (also known as a version) for the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeProvisioningArtifactCommand extends $Command<
  DescribeProvisioningArtifactCommandInput,
  DescribeProvisioningArtifactCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeProvisioningArtifactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeProvisioningArtifactCommandInput, DescribeProvisioningArtifactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribeProvisioningArtifactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeProvisioningArtifactInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeProvisioningArtifactOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeProvisioningArtifactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeProvisioningArtifactCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeProvisioningArtifactCommandOutput> {
    return deserializeAws_json1_1DescribeProvisioningArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
