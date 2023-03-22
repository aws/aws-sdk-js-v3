// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { DeleteRuleGroupsNamespaceRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRuleGroupsNamespaceCommand,
  serializeAws_restJson1DeleteRuleGroupsNamespaceCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DeleteRuleGroupsNamespaceCommand}.
 */
export interface DeleteRuleGroupsNamespaceCommandInput extends DeleteRuleGroupsNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRuleGroupsNamespaceCommand}.
 */
export interface DeleteRuleGroupsNamespaceCommandOutput extends __MetadataBearer {}

/**
 * @public
 * Delete a rule groups namespace.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DeleteRuleGroupsNamespaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DeleteRuleGroupsNamespaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const command = new DeleteRuleGroupsNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteRuleGroupsNamespaceCommandInput - {@link DeleteRuleGroupsNamespaceCommandInput}
 * @returns {@link DeleteRuleGroupsNamespaceCommandOutput}
 * @see {@link DeleteRuleGroupsNamespaceCommandInput} for command's `input` shape.
 * @see {@link DeleteRuleGroupsNamespaceCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 *
 */
export class DeleteRuleGroupsNamespaceCommand extends $Command<
  DeleteRuleGroupsNamespaceCommandInput,
  DeleteRuleGroupsNamespaceCommandOutput,
  AmpClientResolvedConfig
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
  constructor(readonly input: DeleteRuleGroupsNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRuleGroupsNamespaceCommandInput, DeleteRuleGroupsNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteRuleGroupsNamespaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "DeleteRuleGroupsNamespaceCommand";
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
  private serialize(input: DeleteRuleGroupsNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteRuleGroupsNamespaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteRuleGroupsNamespaceCommandOutput> {
    return deserializeAws_restJson1DeleteRuleGroupsNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
