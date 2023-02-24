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
  ListProvisioningArtifactsForServiceActionInput,
  ListProvisioningArtifactsForServiceActionInputFilterSensitiveLog,
  ListProvisioningArtifactsForServiceActionOutput,
  ListProvisioningArtifactsForServiceActionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand,
  serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface ListProvisioningArtifactsForServiceActionCommandInput
  extends ListProvisioningArtifactsForServiceActionInput {}
export interface ListProvisioningArtifactsForServiceActionCommandOutput
  extends ListProvisioningArtifactsForServiceActionOutput,
    __MetadataBearer {}

/**
 * <p>Lists all provisioning artifacts (also known as versions) for the specified self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListProvisioningArtifactsForServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListProvisioningArtifactsForServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListProvisioningArtifactsForServiceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisioningArtifactsForServiceActionCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningArtifactsForServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class ListProvisioningArtifactsForServiceActionCommand extends $Command<
  ListProvisioningArtifactsForServiceActionCommandInput,
  ListProvisioningArtifactsForServiceActionCommandOutput,
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

  constructor(readonly input: ListProvisioningArtifactsForServiceActionCommandInput) {
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
    ListProvisioningArtifactsForServiceActionCommandInput,
    ListProvisioningArtifactsForServiceActionCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListProvisioningArtifactsForServiceActionCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListProvisioningArtifactsForServiceActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProvisioningArtifactsForServiceActionInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListProvisioningArtifactsForServiceActionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListProvisioningArtifactsForServiceActionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProvisioningArtifactsForServiceActionCommandOutput> {
    return deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
