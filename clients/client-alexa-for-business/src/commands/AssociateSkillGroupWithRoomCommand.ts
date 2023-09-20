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
import { AssociateSkillGroupWithRoomRequest, AssociateSkillGroupWithRoomResponse } from "../models/models_0";
import { de_AssociateSkillGroupWithRoomCommand, se_AssociateSkillGroupWithRoomCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateSkillGroupWithRoomCommand}.
 */
export interface AssociateSkillGroupWithRoomCommandInput extends AssociateSkillGroupWithRoomRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSkillGroupWithRoomCommand}.
 */
export interface AssociateSkillGroupWithRoomCommandOutput
  extends AssociateSkillGroupWithRoomResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Associates a skill group with a given room. This enables all skills in the associated
 *          skill group on all devices in the room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateSkillGroupWithRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateSkillGroupWithRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // AssociateSkillGroupWithRoomRequest
 *   SkillGroupArn: "STRING_VALUE",
 *   RoomArn: "STRING_VALUE",
 * };
 * const command = new AssociateSkillGroupWithRoomCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateSkillGroupWithRoomCommandInput - {@link AssociateSkillGroupWithRoomCommandInput}
 * @returns {@link AssociateSkillGroupWithRoomCommandOutput}
 * @see {@link AssociateSkillGroupWithRoomCommandInput} for command's `input` shape.
 * @see {@link AssociateSkillGroupWithRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class AssociateSkillGroupWithRoomCommand extends $Command<
  AssociateSkillGroupWithRoomCommandInput,
  AssociateSkillGroupWithRoomCommandOutput,
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
  constructor(readonly input: AssociateSkillGroupWithRoomCommandInput) {
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
  ): Handler<AssociateSkillGroupWithRoomCommandInput, AssociateSkillGroupWithRoomCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateSkillGroupWithRoomCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "AssociateSkillGroupWithRoomCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "AssociateSkillGroupWithRoom",
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
  private serialize(input: AssociateSkillGroupWithRoomCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateSkillGroupWithRoomCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateSkillGroupWithRoomCommandOutput> {
    return de_AssociateSkillGroupWithRoomCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
