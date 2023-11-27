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
  GetConfigurationPolicyAssociationRequest,
  GetConfigurationPolicyAssociationResponse,
} from "../models/models_2";
import {
  de_GetConfigurationPolicyAssociationCommand,
  se_GetConfigurationPolicyAssociationCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConfigurationPolicyAssociationCommand}.
 */
export interface GetConfigurationPolicyAssociationCommandInput extends GetConfigurationPolicyAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigurationPolicyAssociationCommand}.
 */
export interface GetConfigurationPolicyAssociationCommandOutput
  extends GetConfigurationPolicyAssociationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *             Returns the association between a configuration and a target account, organizational unit, or the root. The
 *             configuration can be a configuration policy or self-managed behavior. Only the Security Hub delegated administrator can
 *             invoke this operation from the home Region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetConfigurationPolicyAssociationCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetConfigurationPolicyAssociationCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // GetConfigurationPolicyAssociationRequest
 *   Target: { // Target Union: only one key present
 *     AccountId: "STRING_VALUE",
 *     OrganizationalUnitId: "STRING_VALUE",
 *     RootId: "STRING_VALUE",
 *   },
 * };
 * const command = new GetConfigurationPolicyAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigurationPolicyAssociationResponse
 * //   ConfigurationPolicyId: "STRING_VALUE",
 * //   TargetId: "STRING_VALUE",
 * //   TargetType: "ACCOUNT" || "ORGANIZATIONAL_UNIT",
 * //   AssociationType: "INHERITED" || "APPLIED",
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   AssociationStatus: "PENDING" || "SUCCESS" || "FAILED",
 * //   AssociationStatusMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConfigurationPolicyAssociationCommandInput - {@link GetConfigurationPolicyAssociationCommandInput}
 * @returns {@link GetConfigurationPolicyAssociationCommandOutput}
 * @see {@link GetConfigurationPolicyAssociationCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationPolicyAssociationCommandOutput} for command's `response` shape.
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
export class GetConfigurationPolicyAssociationCommand extends $Command<
  GetConfigurationPolicyAssociationCommandInput,
  GetConfigurationPolicyAssociationCommandOutput,
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
  constructor(readonly input: GetConfigurationPolicyAssociationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConfigurationPolicyAssociationCommandInput, GetConfigurationPolicyAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConfigurationPolicyAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "GetConfigurationPolicyAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "GetConfigurationPolicyAssociation",
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
    input: GetConfigurationPolicyAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetConfigurationPolicyAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetConfigurationPolicyAssociationCommandOutput> {
    return de_GetConfigurationPolicyAssociationCommand(output, context);
  }
}
