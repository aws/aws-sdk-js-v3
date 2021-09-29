import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CreateProvisionedProductPlanInput, CreateProvisionedProductPlanOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateProvisionedProductPlanCommand,
  serializeAws_json1_1CreateProvisionedProductPlanCommand,
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

export interface CreateProvisionedProductPlanCommandInput extends CreateProvisionedProductPlanInput {}
export interface CreateProvisionedProductPlanCommandOutput
  extends CreateProvisionedProductPlanOutput,
    __MetadataBearer {}

/**
 * <p>Creates a plan. A plan includes the list of resources to be
 *          created (when provisioning a new product) or modified (when updating a provisioned product)
 *          when the plan is executed.</p>
 *          <p>You can create one plan per provisioned product. To create a plan for an existing
 *          provisioned product, the product status must be AVAILBLE or TAINTED.</p>
 *          <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>.
 *          To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateProvisionedProductPlanCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateProvisionedProductPlanCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreateProvisionedProductPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProvisionedProductPlanCommandInput} for command's `input` shape.
 * @see {@link CreateProvisionedProductPlanCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateProvisionedProductPlanCommand extends $Command<
  CreateProvisionedProductPlanCommandInput,
  CreateProvisionedProductPlanCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateProvisionedProductPlanCommandInput) {
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
  ): Handler<CreateProvisionedProductPlanCommandInput, CreateProvisionedProductPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "CreateProvisionedProductPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateProvisionedProductPlanInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateProvisionedProductPlanOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateProvisionedProductPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateProvisionedProductPlanCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateProvisionedProductPlanCommandOutput> {
    return deserializeAws_json1_1CreateProvisionedProductPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
