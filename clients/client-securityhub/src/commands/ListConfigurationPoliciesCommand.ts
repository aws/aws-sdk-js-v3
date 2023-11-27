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

import { ListConfigurationPoliciesRequest, ListConfigurationPoliciesResponse } from "../models/models_2";
import { de_ListConfigurationPoliciesCommand, se_ListConfigurationPoliciesCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListConfigurationPoliciesCommand}.
 */
export interface ListConfigurationPoliciesCommandInput extends ListConfigurationPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationPoliciesCommand}.
 */
export interface ListConfigurationPoliciesCommandOutput extends ListConfigurationPoliciesResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             Lists the configuration policies that the Security Hub delegated administrator has created for your
 *             organization. Only the delegated administrator can invoke this operation from the home Region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListConfigurationPoliciesCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListConfigurationPoliciesCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // ListConfigurationPoliciesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListConfigurationPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationPoliciesResponse
 * //   ConfigurationPolicySummaries: [ // ConfigurationPolicySummaryList
 * //     { // ConfigurationPolicySummary
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       ServiceEnabled: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationPoliciesCommandInput - {@link ListConfigurationPoliciesCommandInput}
 * @returns {@link ListConfigurationPoliciesCommandOutput}
 * @see {@link ListConfigurationPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationPoliciesCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 */
export class ListConfigurationPoliciesCommand extends $Command<
  ListConfigurationPoliciesCommandInput,
  ListConfigurationPoliciesCommandOutput,
  SecurityHubClientResolvedConfig
> {
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
  constructor(readonly input: ListConfigurationPoliciesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConfigurationPoliciesCommandInput, ListConfigurationPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConfigurationPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "ListConfigurationPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "ListConfigurationPolicies",
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
  private serialize(input: ListConfigurationPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListConfigurationPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListConfigurationPoliciesCommandOutput> {
    return de_ListConfigurationPoliciesCommand(output, context);
  }
}
