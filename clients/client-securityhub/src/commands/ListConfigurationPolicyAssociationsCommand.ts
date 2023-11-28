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

import {
  ListConfigurationPolicyAssociationsRequest,
  ListConfigurationPolicyAssociationsResponse,
} from "../models/models_2";
import {
  de_ListConfigurationPolicyAssociationsCommand,
  se_ListConfigurationPolicyAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListConfigurationPolicyAssociationsCommand}.
 */
export interface ListConfigurationPolicyAssociationsCommandInput extends ListConfigurationPolicyAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationPolicyAssociationsCommand}.
 */
export interface ListConfigurationPolicyAssociationsCommandOutput
  extends ListConfigurationPolicyAssociationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *             Provides information about the associations for your configuration policies and self-managed behavior. Only the
 *             Security Hub delegated administrator can invoke this operation from the home Region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListConfigurationPolicyAssociationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListConfigurationPolicyAssociationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // ListConfigurationPolicyAssociationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: { // AssociationFilters
 *     ConfigurationPolicyId: "STRING_VALUE",
 *     AssociationType: "INHERITED" || "APPLIED",
 *     AssociationStatus: "PENDING" || "SUCCESS" || "FAILED",
 *   },
 * };
 * const command = new ListConfigurationPolicyAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationPolicyAssociationsResponse
 * //   ConfigurationPolicyAssociationSummaries: [ // ConfigurationPolicyAssociationSummaryList
 * //     { // ConfigurationPolicyAssociationSummary
 * //       ConfigurationPolicyId: "STRING_VALUE",
 * //       TargetId: "STRING_VALUE",
 * //       TargetType: "ACCOUNT" || "ORGANIZATIONAL_UNIT",
 * //       AssociationType: "INHERITED" || "APPLIED",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       AssociationStatus: "PENDING" || "SUCCESS" || "FAILED",
 * //       AssociationStatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationPolicyAssociationsCommandInput - {@link ListConfigurationPolicyAssociationsCommandInput}
 * @returns {@link ListConfigurationPolicyAssociationsCommandOutput}
 * @see {@link ListConfigurationPolicyAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationPolicyAssociationsCommandOutput} for command's `response` shape.
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
 * @example To list configuration associations
 * ```javascript
 * // This operation lists all of the associations between targets and configuration policies or self-managed behavior. Targets can include accounts, organizational units, or the root.
 * const input = {
 *   "Filters": {
 *     "AssociationType": "APPLIED"
 *   },
 *   "MaxResults": 1,
 *   "NextToken": "U1FsdGVkX19nBV2zoh+Gou9NgnulLJHWpn9xnG4hqSOhvw3o2JqjI86QDxdf"
 * };
 * const command = new ListConfigurationPolicyAssociationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ConfigurationPolicyAssociationSummaries": [
 *     {
 *       "AssociationStatus": "PENDING",
 *       "AssociationType": "APPLIED",
 *       "ConfigurationPolicyId": "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       "TargetId": "123456789012",
 *       "TargetType": "ACCOUNT",
 *       "UpdatedAt": "2023-01-11T06:17:17.154Z"
 *     }
 *   ],
 *   "NextToken": "U1FsdGVkX19nBV2zoh+Gou9NgnulLJHWpn9xnG4hqSOfvw3o2JqjI86QDxef"
 * }
 * *\/
 * // example id: to-list-configuration-associations-1695177309791
 * ```
 *
 */
export class ListConfigurationPolicyAssociationsCommand extends $Command<
  ListConfigurationPolicyAssociationsCommandInput,
  ListConfigurationPolicyAssociationsCommandOutput,
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
  constructor(readonly input: ListConfigurationPolicyAssociationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConfigurationPolicyAssociationsCommandInput, ListConfigurationPolicyAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConfigurationPolicyAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "ListConfigurationPolicyAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "ListConfigurationPolicyAssociations",
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
    input: ListConfigurationPolicyAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListConfigurationPolicyAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListConfigurationPolicyAssociationsCommandOutput> {
    return de_ListConfigurationPolicyAssociationsCommand(output, context);
  }
}
