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

import { DeleteConfigurationPolicyRequest, DeleteConfigurationPolicyResponse } from "../models/models_2";
import { de_DeleteConfigurationPolicyCommand, se_DeleteConfigurationPolicyCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfigurationPolicyCommand}.
 */
export interface DeleteConfigurationPolicyCommandInput extends DeleteConfigurationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfigurationPolicyCommand}.
 */
export interface DeleteConfigurationPolicyCommandOutput extends DeleteConfigurationPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             Deletes a configuration policy. Only the Security Hub delegated administrator can invoke this operation
 *             from the home Region. For the deletion to succeed, you must first disassociate a configuration policy from target accounts,
 *             organizational units, or the root by invoking the <code>StartConfigurationPolicyDisassociation</code> operation.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteConfigurationPolicyCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteConfigurationPolicyCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // DeleteConfigurationPolicyRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfigurationPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfigurationPolicyCommandInput - {@link DeleteConfigurationPolicyCommandInput}
 * @returns {@link DeleteConfigurationPolicyCommandOutput}
 * @see {@link DeleteConfigurationPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource specified in the request conflicts with an existing resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 */
export class DeleteConfigurationPolicyCommand extends $Command<
  DeleteConfigurationPolicyCommandInput,
  DeleteConfigurationPolicyCommandOutput,
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
  constructor(readonly input: DeleteConfigurationPolicyCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteConfigurationPolicyCommandInput, DeleteConfigurationPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteConfigurationPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DeleteConfigurationPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "DeleteConfigurationPolicy",
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
  private serialize(input: DeleteConfigurationPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteConfigurationPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteConfigurationPolicyCommandOutput> {
    return de_DeleteConfigurationPolicyCommand(output, context);
  }
}
