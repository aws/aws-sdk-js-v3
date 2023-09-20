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

import { CreateActionTargetRequest, CreateActionTargetResponse } from "../models/models_2";
import { de_CreateActionTargetCommand, se_CreateActionTargetCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateActionTargetCommand}.
 */
export interface CreateActionTargetCommandInput extends CreateActionTargetRequest {}
/**
 * @public
 *
 * The output of {@link CreateActionTargetCommand}.
 */
export interface CreateActionTargetCommandOutput extends CreateActionTargetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a custom action target in Security Hub.</p>
 *          <p>You can use custom actions on findings and insights in Security Hub to trigger target actions
 *          in Amazon CloudWatch Events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateActionTargetCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateActionTargetCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // CreateActionTargetRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new CreateActionTargetCommand(input);
 * const response = await client.send(command);
 * // { // CreateActionTargetResponse
 * //   ActionTargetArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateActionTargetCommandInput - {@link CreateActionTargetCommandInput}
 * @returns {@link CreateActionTargetCommandOutput}
 * @see {@link CreateActionTargetCommandInput} for command's `input` shape.
 * @see {@link CreateActionTargetCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource specified in the request conflicts with an existing resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To create a custom action target
 * ```javascript
 * // The following example creates a custom action target in Security Hub. Custom actions on findings and insights automatically trigger actions in Amazon CloudWatch Events.
 * const input = {
 *   "Description": "Action to send the finding for remediation tracking",
 *   "Id": "Remediation",
 *   "Name": "Send to remediation"
 * };
 * const command = new CreateActionTargetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ActionTargetArn": "arn:aws:securityhub:us-west-1:123456789012:action/custom/Remediation"
 * }
 * *\/
 * // example id: to-create-a-custom-action-target-1675184966299
 * ```
 *
 */
export class CreateActionTargetCommand extends $Command<
  CreateActionTargetCommandInput,
  CreateActionTargetCommandOutput,
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
  constructor(readonly input: CreateActionTargetCommandInput) {
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
  ): Handler<CreateActionTargetCommandInput, CreateActionTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateActionTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "CreateActionTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "CreateActionTarget",
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
  private serialize(input: CreateActionTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateActionTargetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateActionTargetCommandOutput> {
    return de_CreateActionTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
