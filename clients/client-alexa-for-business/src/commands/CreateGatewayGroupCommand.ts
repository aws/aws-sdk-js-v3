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
} from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { CreateGatewayGroupRequest, CreateGatewayGroupResponse } from "../models/models_0";
import { de_CreateGatewayGroupCommand, se_CreateGatewayGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateGatewayGroupCommand}.
 */
export interface CreateGatewayGroupCommandInput extends CreateGatewayGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateGatewayGroupCommand}.
 */
export interface CreateGatewayGroupCommandOutput extends CreateGatewayGroupResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Creates a gateway group with the specified details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateGatewayGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateGatewayGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // CreateGatewayGroupRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateGatewayGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateGatewayGroupResponse
 * //   GatewayGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGatewayGroupCommandInput - {@link CreateGatewayGroupCommandInput}
 * @returns {@link CreateGatewayGroupCommandOutput}
 * @see {@link CreateGatewayGroupCommandInput} for command's `input` shape.
 * @see {@link CreateGatewayGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource being created already exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You are performing an action that would put you beyond your account's limits.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class CreateGatewayGroupCommand extends $Command<
  CreateGatewayGroupCommandInput,
  CreateGatewayGroupCommandOutput,
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
  constructor(readonly input: CreateGatewayGroupCommandInput) {
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
  ): Handler<CreateGatewayGroupCommandInput, CreateGatewayGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateGatewayGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "CreateGatewayGroupCommand";
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
  private serialize(input: CreateGatewayGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateGatewayGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGatewayGroupCommandOutput> {
    return de_CreateGatewayGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
