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

import { RegisterAdminInput } from "../models/models_0";
import { de_RegisterAdminCommand, se_RegisterAdminCommand } from "../protocols/Aws_restJson1";
import { RepostspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RepostspaceClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterAdminCommand}.
 */
export interface RegisterAdminCommandInput extends RegisterAdminInput {}
/**
 * @public
 *
 * The output of {@link RegisterAdminCommand}.
 */
export interface RegisterAdminCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Adds a user or group to the list of administrators of the private re:Post.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, RegisterAdminCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, RegisterAdminCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * const client = new RepostspaceClient(config);
 * const input = { // RegisterAdminInput
 *   spaceId: "STRING_VALUE", // required
 *   adminId: "STRING_VALUE", // required
 * };
 * const command = new RegisterAdminCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterAdminCommandInput - {@link RegisterAdminCommandInput}
 * @returns {@link RegisterAdminCommandOutput}
 * @see {@link RegisterAdminCommandInput} for command's `input` shape.
 * @see {@link RegisterAdminCommandOutput} for command's `response` shape.
 * @see {@link RepostspaceClientResolvedConfig | config} for RepostspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RepostspaceServiceException}
 * <p>Base exception class for all service exceptions from Repostspace service.</p>
 *
 */
export class RegisterAdminCommand extends $Command<
  RegisterAdminCommandInput,
  RegisterAdminCommandOutput,
  RepostspaceClientResolvedConfig
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
  constructor(readonly input: RegisterAdminCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RepostspaceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterAdminCommandInput, RegisterAdminCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RegisterAdminCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RepostspaceClient";
    const commandName = "RegisterAdminCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RepostSpace",
        operation: "RegisterAdmin",
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
  private serialize(input: RegisterAdminCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterAdminCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterAdminCommandOutput> {
    return de_RegisterAdminCommand(output, context);
  }
}
