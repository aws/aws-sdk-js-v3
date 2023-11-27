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
  BatchGetConfigurationPolicyAssociationsRequest,
  BatchGetConfigurationPolicyAssociationsResponse,
} from "../models/models_2";
import {
  de_BatchGetConfigurationPolicyAssociationsCommand,
  se_BatchGetConfigurationPolicyAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetConfigurationPolicyAssociationsCommand}.
 */
export interface BatchGetConfigurationPolicyAssociationsCommandInput
  extends BatchGetConfigurationPolicyAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetConfigurationPolicyAssociationsCommand}.
 */
export interface BatchGetConfigurationPolicyAssociationsCommandOutput
  extends BatchGetConfigurationPolicyAssociationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *             Returns associations between an Security Hub configuration and a batch of target accounts, organizational units, or the root.
 *             Only the Security Hub delegated administrator can invoke this operation from the home Region. A configuration
 *             can refer to a configuration policy or to a self-managed configuration.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchGetConfigurationPolicyAssociationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchGetConfigurationPolicyAssociationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // BatchGetConfigurationPolicyAssociationsRequest
 *   ConfigurationPolicyAssociationIdentifiers: [ // ConfigurationPolicyAssociationsList // required
 *     { // ConfigurationPolicyAssociation
 *       Target: { // Target Union: only one key present
 *         AccountId: "STRING_VALUE",
 *         OrganizationalUnitId: "STRING_VALUE",
 *         RootId: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchGetConfigurationPolicyAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetConfigurationPolicyAssociationsResponse
 * //   ConfigurationPolicyAssociations: [ // ConfigurationPolicyAssociationList
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
 * //   UnprocessedConfigurationPolicyAssociations: [ // UnprocessedConfigurationPolicyAssociationList
 * //     { // UnprocessedConfigurationPolicyAssociation
 * //       ConfigurationPolicyAssociationIdentifiers: { // ConfigurationPolicyAssociation
 * //         Target: { // Target Union: only one key present
 * //           AccountId: "STRING_VALUE",
 * //           OrganizationalUnitId: "STRING_VALUE",
 * //           RootId: "STRING_VALUE",
 * //         },
 * //       },
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetConfigurationPolicyAssociationsCommandInput - {@link BatchGetConfigurationPolicyAssociationsCommandInput}
 * @returns {@link BatchGetConfigurationPolicyAssociationsCommandOutput}
 * @see {@link BatchGetConfigurationPolicyAssociationsCommandInput} for command's `input` shape.
 * @see {@link BatchGetConfigurationPolicyAssociationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 */
export class BatchGetConfigurationPolicyAssociationsCommand extends $Command<
  BatchGetConfigurationPolicyAssociationsCommandInput,
  BatchGetConfigurationPolicyAssociationsCommandOutput,
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
  constructor(readonly input: BatchGetConfigurationPolicyAssociationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchGetConfigurationPolicyAssociationsCommandInput,
    BatchGetConfigurationPolicyAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        BatchGetConfigurationPolicyAssociationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "BatchGetConfigurationPolicyAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "BatchGetConfigurationPolicyAssociations",
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
    input: BatchGetConfigurationPolicyAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchGetConfigurationPolicyAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetConfigurationPolicyAssociationsCommandOutput> {
    return de_BatchGetConfigurationPolicyAssociationsCommand(output, context);
  }
}
