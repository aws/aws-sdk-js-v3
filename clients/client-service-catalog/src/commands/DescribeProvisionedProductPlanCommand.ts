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

import { DescribeProvisionedProductPlanInput, DescribeProvisionedProductPlanOutput } from "../models/models_0";
import {
  de_DescribeProvisionedProductPlanCommand,
  se_DescribeProvisionedProductPlanCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeProvisionedProductPlanCommand}.
 */
export interface DescribeProvisionedProductPlanCommandInput extends DescribeProvisionedProductPlanInput {}
/**
 * @public
 *
 * The output of {@link DescribeProvisionedProductPlanCommand}.
 */
export interface DescribeProvisionedProductPlanCommandOutput
  extends DescribeProvisionedProductPlanOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the resource changes for the specified plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProvisionedProductPlanCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProvisionedProductPlanCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeProvisionedProductPlanInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PlanId: "STRING_VALUE", // required
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new DescribeProvisionedProductPlanCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProvisionedProductPlanOutput
 * //   ProvisionedProductPlanDetails: { // ProvisionedProductPlanDetails
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     PathId: "STRING_VALUE",
 * //     ProductId: "STRING_VALUE",
 * //     PlanName: "STRING_VALUE",
 * //     PlanId: "STRING_VALUE",
 * //     ProvisionProductId: "STRING_VALUE",
 * //     ProvisionProductName: "STRING_VALUE",
 * //     PlanType: "CLOUDFORMATION",
 * //     ProvisioningArtifactId: "STRING_VALUE",
 * //     Status: "CREATE_IN_PROGRESS" || "CREATE_SUCCESS" || "CREATE_FAILED" || "EXECUTE_IN_PROGRESS" || "EXECUTE_SUCCESS" || "EXECUTE_FAILED",
 * //     UpdatedTime: new Date("TIMESTAMP"),
 * //     NotificationArns: [ // NotificationArns
 * //       "STRING_VALUE",
 * //     ],
 * //     ProvisioningParameters: [ // UpdateProvisioningParameters
 * //       { // UpdateProvisioningParameter
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //         UsePreviousValue: true || false,
 * //       },
 * //     ],
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     StatusMessage: "STRING_VALUE",
 * //   },
 * //   ResourceChanges: [ // ResourceChanges
 * //     { // ResourceChange
 * //       Action: "ADD" || "MODIFY" || "REMOVE",
 * //       LogicalResourceId: "STRING_VALUE",
 * //       PhysicalResourceId: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       Replacement: "TRUE" || "FALSE" || "CONDITIONAL",
 * //       Scope: [ // Scope
 * //         "PROPERTIES" || "METADATA" || "CREATIONPOLICY" || "UPDATEPOLICY" || "DELETIONPOLICY" || "TAGS",
 * //       ],
 * //       Details: [ // ResourceChangeDetails
 * //         { // ResourceChangeDetail
 * //           Target: { // ResourceTargetDefinition
 * //             Attribute: "PROPERTIES" || "METADATA" || "CREATIONPOLICY" || "UPDATEPOLICY" || "DELETIONPOLICY" || "TAGS",
 * //             Name: "STRING_VALUE",
 * //             RequiresRecreation: "NEVER" || "CONDITIONALLY" || "ALWAYS",
 * //           },
 * //           Evaluation: "STATIC" || "DYNAMIC",
 * //           CausingEntity: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeProvisionedProductPlanCommandInput - {@link DescribeProvisionedProductPlanCommandInput}
 * @returns {@link DescribeProvisionedProductPlanCommandOutput}
 * @see {@link DescribeProvisionedProductPlanCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisionedProductPlanCommandOutput} for command's `response` shape.
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
export class DescribeProvisionedProductPlanCommand extends $Command<
  DescribeProvisionedProductPlanCommandInput,
  DescribeProvisionedProductPlanCommandOutput,
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
  constructor(readonly input: DescribeProvisionedProductPlanCommandInput) {
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
  ): Handler<DescribeProvisionedProductPlanCommandInput, DescribeProvisionedProductPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeProvisionedProductPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribeProvisionedProductPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "DescribeProvisionedProductPlan",
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
  private serialize(
    input: DescribeProvisionedProductPlanCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeProvisionedProductPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeProvisionedProductPlanCommandOutput> {
    return de_DescribeProvisionedProductPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
