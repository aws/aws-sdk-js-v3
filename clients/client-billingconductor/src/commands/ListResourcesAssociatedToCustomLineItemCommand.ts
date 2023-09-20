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

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import {
  ListResourcesAssociatedToCustomLineItemInput,
  ListResourcesAssociatedToCustomLineItemOutput,
} from "../models/models_0";
import {
  de_ListResourcesAssociatedToCustomLineItemCommand,
  se_ListResourcesAssociatedToCustomLineItemCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListResourcesAssociatedToCustomLineItemCommand}.
 */
export interface ListResourcesAssociatedToCustomLineItemCommandInput
  extends ListResourcesAssociatedToCustomLineItemInput {}
/**
 * @public
 *
 * The output of {@link ListResourcesAssociatedToCustomLineItemCommand}.
 */
export interface ListResourcesAssociatedToCustomLineItemCommandOutput
  extends ListResourcesAssociatedToCustomLineItemOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *       List the resources that are associated to a custom line item.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListResourcesAssociatedToCustomLineItemCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListResourcesAssociatedToCustomLineItemCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const input = { // ListResourcesAssociatedToCustomLineItemInput
 *   BillingPeriod: "STRING_VALUE",
 *   Arn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: { // ListResourcesAssociatedToCustomLineItemFilter
 *     Relationship: "STRING_VALUE",
 *   },
 * };
 * const command = new ListResourcesAssociatedToCustomLineItemCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcesAssociatedToCustomLineItemOutput
 * //   Arn: "STRING_VALUE",
 * //   AssociatedResources: [ // ListResourcesAssociatedToCustomLineItemResponseList
 * //     { // ListResourcesAssociatedToCustomLineItemResponseElement
 * //       Arn: "STRING_VALUE",
 * //       Relationship: "STRING_VALUE",
 * //       EndBillingPeriod: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcesAssociatedToCustomLineItemCommandInput - {@link ListResourcesAssociatedToCustomLineItemCommandInput}
 * @returns {@link ListResourcesAssociatedToCustomLineItemCommandOutput}
 * @see {@link ListResourcesAssociatedToCustomLineItemCommandInput} for command's `input` shape.
 * @see {@link ListResourcesAssociatedToCustomLineItemCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services.</p>
 *
 * @throws {@link BillingconductorServiceException}
 * <p>Base exception class for all service exceptions from Billingconductor service.</p>
 *
 */
export class ListResourcesAssociatedToCustomLineItemCommand extends $Command<
  ListResourcesAssociatedToCustomLineItemCommandInput,
  ListResourcesAssociatedToCustomLineItemCommandOutput,
  BillingconductorClientResolvedConfig
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
  constructor(readonly input: ListResourcesAssociatedToCustomLineItemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BillingconductorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListResourcesAssociatedToCustomLineItemCommandInput,
    ListResourcesAssociatedToCustomLineItemCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListResourcesAssociatedToCustomLineItemCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "ListResourcesAssociatedToCustomLineItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBillingConductor",
        operation: "ListResourcesAssociatedToCustomLineItem",
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
    input: ListResourcesAssociatedToCustomLineItemCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListResourcesAssociatedToCustomLineItemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResourcesAssociatedToCustomLineItemCommandOutput> {
    return de_ListResourcesAssociatedToCustomLineItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
