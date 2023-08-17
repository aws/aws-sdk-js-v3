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
} from "@smithy/types";

import {
  ListStackInstancesForProvisionedProductInput,
  ListStackInstancesForProvisionedProductOutput,
} from "../models/models_0";
import {
  de_ListStackInstancesForProvisionedProductCommand,
  se_ListStackInstancesForProvisionedProductCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListStackInstancesForProvisionedProductCommand}.
 */
export interface ListStackInstancesForProvisionedProductCommandInput
  extends ListStackInstancesForProvisionedProductInput {}
/**
 * @public
 *
 * The output of {@link ListStackInstancesForProvisionedProductCommand}.
 */
export interface ListStackInstancesForProvisionedProductCommandOutput
  extends ListStackInstancesForProvisionedProductOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListStackInstancesForProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListStackInstancesForProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListStackInstancesForProvisionedProductInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProvisionedProductId: "STRING_VALUE", // required
 *   PageToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListStackInstancesForProvisionedProductCommand(input);
 * const response = await client.send(command);
 * // { // ListStackInstancesForProvisionedProductOutput
 * //   StackInstances: [ // StackInstances
 * //     { // StackInstance
 * //       Account: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       StackInstanceStatus: "CURRENT" || "OUTDATED" || "INOPERABLE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStackInstancesForProvisionedProductCommandInput - {@link ListStackInstancesForProvisionedProductCommandInput}
 * @returns {@link ListStackInstancesForProvisionedProductCommandOutput}
 * @see {@link ListStackInstancesForProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link ListStackInstancesForProvisionedProductCommandOutput} for command's `response` shape.
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
export class ListStackInstancesForProvisionedProductCommand extends $Command<
  ListStackInstancesForProvisionedProductCommandInput,
  ListStackInstancesForProvisionedProductCommandOutput,
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
  constructor(readonly input: ListStackInstancesForProvisionedProductCommandInput) {
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
    ListStackInstancesForProvisionedProductCommandInput,
    ListStackInstancesForProvisionedProductCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListStackInstancesForProvisionedProductCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListStackInstancesForProvisionedProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
    input: ListStackInstancesForProvisionedProductCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListStackInstancesForProvisionedProductCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListStackInstancesForProvisionedProductCommandOutput> {
    return de_ListStackInstancesForProvisionedProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
