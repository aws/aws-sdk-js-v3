// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DescribeProvisionedProductInput, DescribeProvisionedProductOutput } from "../models/models_0";
import { de_DescribeProvisionedProductCommand, se_DescribeProvisionedProductCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeProvisionedProductCommand}.
 */
export interface DescribeProvisionedProductCommandInput extends DescribeProvisionedProductInput {}
/**
 * @public
 *
 * The output of {@link DescribeProvisionedProductCommand}.
 */
export interface DescribeProvisionedProductCommandOutput extends DescribeProvisionedProductOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the specified provisioned product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeProvisionedProductInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Id: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 * };
 * const command = new DescribeProvisionedProductCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProvisionedProductOutput
 * //   ProvisionedProductDetail: { // ProvisionedProductDetail
 * //     Name: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Type: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Status: "AVAILABLE" || "UNDER_CHANGE" || "TAINTED" || "ERROR" || "PLAN_IN_PROGRESS",
 * //     StatusMessage: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     IdempotencyToken: "STRING_VALUE",
 * //     LastRecordId: "STRING_VALUE",
 * //     LastProvisioningRecordId: "STRING_VALUE",
 * //     LastSuccessfulProvisioningRecordId: "STRING_VALUE",
 * //     ProductId: "STRING_VALUE",
 * //     ProvisioningArtifactId: "STRING_VALUE",
 * //     LaunchRoleArn: "STRING_VALUE",
 * //   },
 * //   CloudWatchDashboards: [ // CloudWatchDashboards
 * //     { // CloudWatchDashboard
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeProvisionedProductCommandInput - {@link DescribeProvisionedProductCommandInput}
 * @returns {@link DescribeProvisionedProductCommandOutput}
 * @see {@link DescribeProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisionedProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class DescribeProvisionedProductCommand extends $Command<
  DescribeProvisionedProductCommandInput,
  DescribeProvisionedProductCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DescribeProvisionedProductCommandInput) {
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
  ): Handler<DescribeProvisionedProductCommandInput, DescribeProvisionedProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeProvisionedProductCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribeProvisionedProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "DescribeProvisionedProduct",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeProvisionedProductCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeProvisionedProductCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeProvisionedProductCommandOutput> {
    return de_DescribeProvisionedProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
