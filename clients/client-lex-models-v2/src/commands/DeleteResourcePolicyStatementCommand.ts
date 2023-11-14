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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteResourcePolicyStatementRequest, DeleteResourcePolicyStatementResponse } from "../models/models_0";
import {
  de_DeleteResourcePolicyStatementCommand,
  se_DeleteResourcePolicyStatementCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourcePolicyStatementCommand}.
 */
export interface DeleteResourcePolicyStatementCommandInput extends DeleteResourcePolicyStatementRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourcePolicyStatementCommand}.
 */
export interface DeleteResourcePolicyStatementCommandOutput
  extends DeleteResourcePolicyStatementResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes a policy statement from a resource policy. If you delete the
 *          last statement from a policy, the policy is deleted. If you specify a
 *          statement ID that doesn't exist in the policy, or if the bot or bot
 *          alias doesn't have a policy attached, Amazon Lex returns an
 *          exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteResourcePolicyStatementCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteResourcePolicyStatementCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // DeleteResourcePolicyStatementRequest
 *   resourceArn: "STRING_VALUE", // required
 *   statementId: "STRING_VALUE", // required
 *   expectedRevisionId: "STRING_VALUE",
 * };
 * const command = new DeleteResourcePolicyStatementCommand(input);
 * const response = await client.send(command);
 * // { // DeleteResourcePolicyStatementResponse
 * //   resourceArn: "STRING_VALUE",
 * //   revisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteResourcePolicyStatementCommandInput - {@link DeleteResourcePolicyStatementCommandInput}
 * @returns {@link DeleteResourcePolicyStatementCommandOutput}
 * @see {@link DeleteResourcePolicyStatementCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePolicyStatementCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 */
export class DeleteResourcePolicyStatementCommand extends $Command<
  DeleteResourcePolicyStatementCommandInput,
  DeleteResourcePolicyStatementCommandOutput,
  LexModelsV2ClientResolvedConfig
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
  constructor(readonly input: DeleteResourcePolicyStatementCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteResourcePolicyStatementCommandInput, DeleteResourcePolicyStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteResourcePolicyStatementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "DeleteResourcePolicyStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LexModelBuildingServiceV2",
        operation: "DeleteResourcePolicyStatement",
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
  private serialize(input: DeleteResourcePolicyStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteResourcePolicyStatementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteResourcePolicyStatementCommandOutput> {
    return de_DeleteResourcePolicyStatementCommand(output, context);
  }
}
