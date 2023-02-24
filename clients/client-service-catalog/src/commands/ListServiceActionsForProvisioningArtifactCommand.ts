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
  ListServiceActionsForProvisioningArtifactInput,
  ListServiceActionsForProvisioningArtifactInputFilterSensitiveLog,
  ListServiceActionsForProvisioningArtifactOutput,
  ListServiceActionsForProvisioningArtifactOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand,
  serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface ListServiceActionsForProvisioningArtifactCommandInput
  extends ListServiceActionsForProvisioningArtifactInput {}
export interface ListServiceActionsForProvisioningArtifactCommandOutput
  extends ListServiceActionsForProvisioningArtifactOutput,
    __MetadataBearer {}

/**
 * <p>Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListServiceActionsForProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListServiceActionsForProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListServiceActionsForProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceActionsForProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link ListServiceActionsForProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class ListServiceActionsForProvisioningArtifactCommand extends $Command<
  ListServiceActionsForProvisioningArtifactCommandInput,
  ListServiceActionsForProvisioningArtifactCommandOutput,
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

  constructor(readonly input: ListServiceActionsForProvisioningArtifactCommandInput) {
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
    ListServiceActionsForProvisioningArtifactCommandInput,
    ListServiceActionsForProvisioningArtifactCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListServiceActionsForProvisioningArtifactCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListServiceActionsForProvisioningArtifactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServiceActionsForProvisioningArtifactInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListServiceActionsForProvisioningArtifactOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListServiceActionsForProvisioningArtifactCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListServiceActionsForProvisioningArtifactCommandOutput> {
    return deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
