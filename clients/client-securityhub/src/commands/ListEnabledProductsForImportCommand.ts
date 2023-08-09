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

import { ListEnabledProductsForImportRequest, ListEnabledProductsForImportResponse } from "../models/models_2";
import {
  de_ListEnabledProductsForImportCommand,
  se_ListEnabledProductsForImportCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEnabledProductsForImportCommand}.
 */
export interface ListEnabledProductsForImportCommandInput extends ListEnabledProductsForImportRequest {}
/**
 * @public
 *
 * The output of {@link ListEnabledProductsForImportCommand}.
 */
export interface ListEnabledProductsForImportCommandOutput
  extends ListEnabledProductsForImportResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists all findings-generating solutions (products) that you are subscribed to receive
 *          findings from in Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListEnabledProductsForImportCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListEnabledProductsForImportCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // ListEnabledProductsForImportRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEnabledProductsForImportCommand(input);
 * const response = await client.send(command);
 * // { // ListEnabledProductsForImportResponse
 * //   ProductSubscriptions: [ // ProductSubscriptionArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnabledProductsForImportCommandInput - {@link ListEnabledProductsForImportCommandInput}
 * @returns {@link ListEnabledProductsForImportCommandOutput}
 * @see {@link ListEnabledProductsForImportCommandInput} for command's `input` shape.
 * @see {@link ListEnabledProductsForImportCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To list ARNs for enabled integrations
 * ```javascript
 * // The following example returns a list of subscription Amazon Resource Names (ARNs) for the product integrations that you have currently enabled in Security Hub.
 * const input = undefined;
 * const command = new ListEnabledProductsForImportCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ProductSubscriptions": [
 *     "arn:aws:securityhub:us-east-1:517716713836:product-subscription/crowdstrike/crowdstrike-falcon",
 *     "arn:aws:securityhub:us-east-1::product/3coresec/3coresec"
 *   ]
 * }
 * *\/
 * // example id: to-list-arns-for-enabled-integrations-1678294870020
 * ```
 *
 */
export class ListEnabledProductsForImportCommand extends $Command<
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: ListEnabledProductsForImportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEnabledProductsForImportCommandInput, ListEnabledProductsForImportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEnabledProductsForImportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "ListEnabledProductsForImportCommand";
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
  private serialize(input: ListEnabledProductsForImportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEnabledProductsForImportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEnabledProductsForImportCommandOutput> {
    return de_ListEnabledProductsForImportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
