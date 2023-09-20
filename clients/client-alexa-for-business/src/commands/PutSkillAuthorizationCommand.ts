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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import {
  PutSkillAuthorizationRequest,
  PutSkillAuthorizationRequestFilterSensitiveLog,
  PutSkillAuthorizationResponse,
} from "../models/models_0";
import { de_PutSkillAuthorizationCommand, se_PutSkillAuthorizationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutSkillAuthorizationCommand}.
 */
export interface PutSkillAuthorizationCommandInput extends PutSkillAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link PutSkillAuthorizationCommand}.
 */
export interface PutSkillAuthorizationCommandOutput extends PutSkillAuthorizationResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Links a user's account to a third-party skill provider. If this API operation is
 *          called by an assumed IAM role, the skill being linked must be a private skill. Also, the
 *          skill must be owned by the AWS account that assumed the IAM role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, PutSkillAuthorizationCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, PutSkillAuthorizationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // PutSkillAuthorizationRequest
 *   AuthorizationResult: { // AuthorizationResult // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   SkillId: "STRING_VALUE", // required
 *   RoomArn: "STRING_VALUE",
 * };
 * const command = new PutSkillAuthorizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutSkillAuthorizationCommandInput - {@link PutSkillAuthorizationCommandInput}
 * @returns {@link PutSkillAuthorizationCommandOutput}
 * @see {@link PutSkillAuthorizationCommandInput} for command's `input` shape.
 * @see {@link PutSkillAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The caller has no permissions to operate on the resource involved in the API call.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class PutSkillAuthorizationCommand extends $Command<
  PutSkillAuthorizationCommandInput,
  PutSkillAuthorizationCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: PutSkillAuthorizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutSkillAuthorizationCommandInput, PutSkillAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutSkillAuthorizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "PutSkillAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSkillAuthorizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "PutSkillAuthorization",
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
  private serialize(input: PutSkillAuthorizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutSkillAuthorizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSkillAuthorizationCommandOutput> {
    return de_PutSkillAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
