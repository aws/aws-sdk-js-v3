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

import { DeleteActionTargetRequest, DeleteActionTargetResponse } from "../models/models_2";
import { de_DeleteActionTargetCommand, se_DeleteActionTargetCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteActionTargetCommand}.
 */
export interface DeleteActionTargetCommandInput extends DeleteActionTargetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteActionTargetCommand}.
 */
export interface DeleteActionTargetCommandOutput extends DeleteActionTargetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a custom action target from Security Hub.</p>
 *          <p>Deleting a custom action target does not affect any findings or insights that were
 *          already sent to Amazon CloudWatch Events using the custom action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteActionTargetCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteActionTargetCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // DeleteActionTargetRequest
 *   ActionTargetArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteActionTargetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteActionTargetResponse
 * //   ActionTargetArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteActionTargetCommandInput - {@link DeleteActionTargetCommandInput}
 * @returns {@link DeleteActionTargetCommandOutput}
 * @see {@link DeleteActionTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteActionTargetCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To delete a custom action target
 * ```javascript
 * // The following example deletes a custom action target that triggers target actions in Amazon CloudWatch Events. Deleting a custom action target doesn't affect findings or insights that were already sent to CloudWatch Events based on the custom action.
 * const input = {
 *   "ActionTargetArn": "arn:aws:securityhub:us-west-1:123456789012:action/custom/Remediation"
 * };
 * const command = new DeleteActionTargetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ActionTargetArn": "arn:aws:securityhub:us-west-1:123456789012:action/custom/Remediation"
 * }
 * *\/
 * // example id: to-delete-a-custom-action-target-1675449272793
 * ```
 *
 */
export class DeleteActionTargetCommand extends $Command<
  DeleteActionTargetCommandInput,
  DeleteActionTargetCommandOutput,
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
  constructor(readonly input: DeleteActionTargetCommandInput) {
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
  ): Handler<DeleteActionTargetCommandInput, DeleteActionTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteActionTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DeleteActionTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "DeleteActionTarget",
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
  private serialize(input: DeleteActionTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteActionTargetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteActionTargetCommandOutput> {
    return de_DeleteActionTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
