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
  BatchDisassociateServiceActionFromProvisioningArtifactInput,
  BatchDisassociateServiceActionFromProvisioningArtifactInputFilterSensitiveLog,
  BatchDisassociateServiceActionFromProvisioningArtifactOutput,
  BatchDisassociateServiceActionFromProvisioningArtifactOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand,
  serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface BatchDisassociateServiceActionFromProvisioningArtifactCommandInput
  extends BatchDisassociateServiceActionFromProvisioningArtifactInput {}
export interface BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput
  extends BatchDisassociateServiceActionFromProvisioningArtifactOutput,
    __MetadataBearer {}

/**
 * <p>Disassociates a batch of self-service actions from the specified provisioning artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, BatchDisassociateServiceActionFromProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, BatchDisassociateServiceActionFromProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new BatchDisassociateServiceActionFromProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisassociateServiceActionFromProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class BatchDisassociateServiceActionFromProvisioningArtifactCommand extends $Command<
  BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
  BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput,
  ServiceCatalogClientResolvedConfig
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

  constructor(readonly input: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput) {
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
  ): Handler<
    BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
    BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        BatchDisassociateServiceActionFromProvisioningArtifactCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "BatchDisassociateServiceActionFromProvisioningArtifactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDisassociateServiceActionFromProvisioningArtifactInputFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDisassociateServiceActionFromProvisioningArtifactOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput> {
    return deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
