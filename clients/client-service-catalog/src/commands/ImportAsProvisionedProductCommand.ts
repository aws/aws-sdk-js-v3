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
  ImportAsProvisionedProductInput,
  ImportAsProvisionedProductInputFilterSensitiveLog,
  ImportAsProvisionedProductOutput,
  ImportAsProvisionedProductOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ImportAsProvisionedProductCommand,
  serializeAws_json1_1ImportAsProvisionedProductCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface ImportAsProvisionedProductCommandInput extends ImportAsProvisionedProductInput {}
export interface ImportAsProvisionedProductCommandOutput extends ImportAsProvisionedProductOutput, __MetadataBearer {}

/**
 * <p>Requests the import of a resource as an Service Catalog provisioned product that is
 *          associated to an Service Catalog product and provisioning artifact. Once imported, all
 *          supported Service Catalog governance actions are supported on the provisioned
 *          product.</p>
 *          <p>Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets and
 *          non-root nested stacks are not supported.</p>
 *          <p>The CloudFormation stack must have one of the following statuses to be imported:
 *          <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>,
 *          <code>IMPORT_ROLLBACK_COMPLETE</code>.</p>
 *          <p>Import of the resource requires that the CloudFormation stack template matches the
 *          associated Service Catalog product provisioning artifact. </p>
 *
 *          <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code>
 *          and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ImportAsProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ImportAsProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ImportAsProvisionedProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportAsProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link ImportAsProvisionedProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class ImportAsProvisionedProductCommand extends $Command<
  ImportAsProvisionedProductCommandInput,
  ImportAsProvisionedProductCommandOutput,
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

  constructor(readonly input: ImportAsProvisionedProductCommandInput) {
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
  ): Handler<ImportAsProvisionedProductCommandInput, ImportAsProvisionedProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportAsProvisionedProductCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ImportAsProvisionedProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportAsProvisionedProductInputFilterSensitiveLog,
      outputFilterSensitiveLog: ImportAsProvisionedProductOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportAsProvisionedProductCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportAsProvisionedProductCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ImportAsProvisionedProductCommandOutput> {
    return deserializeAws_json1_1ImportAsProvisionedProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
