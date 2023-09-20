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
  ListAccountAssociationsInput,
  ListAccountAssociationsOutput,
  ListAccountAssociationsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListAccountAssociationsCommand, se_ListAccountAssociationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAccountAssociationsCommand}.
 */
export interface ListAccountAssociationsCommandInput extends ListAccountAssociationsInput {}
/**
 * @public
 *
 * The output of {@link ListAccountAssociationsCommand}.
 */
export interface ListAccountAssociationsCommandOutput extends ListAccountAssociationsOutput, __MetadataBearer {}

/**
 * @public
 * <p> This is a paginated call to list linked accounts that are linked to the payer account for
 *       the specified time period. If no information is provided, the current billing period is used.
 *       The response will optionally include the billing group that's associated with the linked
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListAccountAssociationsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListAccountAssociationsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const input = { // ListAccountAssociationsInput
 *   BillingPeriod: "STRING_VALUE",
 *   Filters: { // ListAccountAssociationsFilter
 *     Association: "STRING_VALUE",
 *     AccountId: "STRING_VALUE",
 *     AccountIds: [ // AccountIdFilterList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAccountAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountAssociationsOutput
 * //   LinkedAccounts: [ // AccountAssociationsList
 * //     { // AccountAssociationsListElement
 * //       AccountId: "STRING_VALUE",
 * //       BillingGroupArn: "STRING_VALUE",
 * //       AccountName: "STRING_VALUE",
 * //       AccountEmail: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountAssociationsCommandInput - {@link ListAccountAssociationsCommandInput}
 * @returns {@link ListAccountAssociationsCommandOutput}
 * @see {@link ListAccountAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListAccountAssociationsCommandOutput} for command's `response` shape.
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
export class ListAccountAssociationsCommand extends $Command<
  ListAccountAssociationsCommandInput,
  ListAccountAssociationsCommandOutput,
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
  constructor(readonly input: ListAccountAssociationsCommandInput) {
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
  ): Handler<ListAccountAssociationsCommandInput, ListAccountAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAccountAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "ListAccountAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListAccountAssociationsOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBillingConductor",
        operation: "ListAccountAssociations",
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
  private serialize(input: ListAccountAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAccountAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccountAssociationsCommandOutput> {
    return de_ListAccountAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
