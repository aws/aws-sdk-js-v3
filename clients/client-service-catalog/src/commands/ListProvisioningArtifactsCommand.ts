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
  ListProvisioningArtifactsInput,
  ListProvisioningArtifactsInputFilterSensitiveLog,
  ListProvisioningArtifactsOutput,
  ListProvisioningArtifactsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListProvisioningArtifactsCommand,
  serializeAws_json1_1ListProvisioningArtifactsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface ListProvisioningArtifactsCommandInput extends ListProvisioningArtifactsInput {}
export interface ListProvisioningArtifactsCommandOutput extends ListProvisioningArtifactsOutput, __MetadataBearer {}

/**
 * <p>Lists all provisioning artifacts (also known as versions) for the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListProvisioningArtifactsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListProvisioningArtifactsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListProvisioningArtifactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisioningArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningArtifactsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class ListProvisioningArtifactsCommand extends $Command<
  ListProvisioningArtifactsCommandInput,
  ListProvisioningArtifactsCommandOutput,
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

  constructor(readonly input: ListProvisioningArtifactsCommandInput) {
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
  ): Handler<ListProvisioningArtifactsCommandInput, ListProvisioningArtifactsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProvisioningArtifactsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListProvisioningArtifactsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProvisioningArtifactsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListProvisioningArtifactsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProvisioningArtifactsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListProvisioningArtifactsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProvisioningArtifactsCommandOutput> {
    return deserializeAws_json1_1ListProvisioningArtifactsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
