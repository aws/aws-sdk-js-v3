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
import { GetRoomSkillParameterRequest, GetRoomSkillParameterResponse } from "../models/models_0";
import { de_GetRoomSkillParameterCommand, se_GetRoomSkillParameterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRoomSkillParameterCommand}.
 */
export interface GetRoomSkillParameterCommandInput extends GetRoomSkillParameterRequest {}
/**
 * @public
 *
 * The output of {@link GetRoomSkillParameterCommand}.
 */
export interface GetRoomSkillParameterCommandOutput extends GetRoomSkillParameterResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Gets room skill parameter details by room, skill, and parameter key ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetRoomSkillParameterCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetRoomSkillParameterCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // GetRoomSkillParameterRequest
 *   RoomArn: "STRING_VALUE",
 *   SkillId: "STRING_VALUE", // required
 *   ParameterKey: "STRING_VALUE", // required
 * };
 * const command = new GetRoomSkillParameterCommand(input);
 * const response = await client.send(command);
 * // { // GetRoomSkillParameterResponse
 * //   RoomSkillParameter: { // RoomSkillParameter
 * //     ParameterKey: "STRING_VALUE", // required
 * //     ParameterValue: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRoomSkillParameterCommandInput - {@link GetRoomSkillParameterCommandInput}
 * @returns {@link GetRoomSkillParameterCommandOutput}
 * @see {@link GetRoomSkillParameterCommandInput} for command's `input` shape.
 * @see {@link GetRoomSkillParameterCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class GetRoomSkillParameterCommand extends $Command<
  GetRoomSkillParameterCommandInput,
  GetRoomSkillParameterCommandOutput,
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
  constructor(readonly input: GetRoomSkillParameterCommandInput) {
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
  ): Handler<GetRoomSkillParameterCommandInput, GetRoomSkillParameterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRoomSkillParameterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "GetRoomSkillParameterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "GetRoomSkillParameter",
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
  private serialize(input: GetRoomSkillParameterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRoomSkillParameterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRoomSkillParameterCommandOutput> {
    return de_GetRoomSkillParameterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
