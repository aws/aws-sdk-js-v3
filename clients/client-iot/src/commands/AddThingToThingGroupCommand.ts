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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { AddThingToThingGroupRequest, AddThingToThingGroupResponse } from "../models/models_0";
import { de_AddThingToThingGroupCommand, se_AddThingToThingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddThingToThingGroupCommand}.
 */
export interface AddThingToThingGroupCommandInput extends AddThingToThingGroupRequest {}
/**
 * @public
 *
 * The output of {@link AddThingToThingGroupCommand}.
 */
export interface AddThingToThingGroupCommandOutput extends AddThingToThingGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds a thing to a thing group.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AddThingToThingGroup</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AddThingToThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AddThingToThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // AddThingToThingGroupRequest
 *   thingGroupName: "STRING_VALUE",
 *   thingGroupArn: "STRING_VALUE",
 *   thingName: "STRING_VALUE",
 *   thingArn: "STRING_VALUE",
 *   overrideDynamicGroups: true || false,
 * };
 * const command = new AddThingToThingGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddThingToThingGroupCommandInput - {@link AddThingToThingGroupCommandInput}
 * @returns {@link AddThingToThingGroupCommandOutput}
 * @see {@link AddThingToThingGroupCommandInput} for command's `input` shape.
 * @see {@link AddThingToThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class AddThingToThingGroupCommand extends $Command<
  AddThingToThingGroupCommandInput,
  AddThingToThingGroupCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: AddThingToThingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddThingToThingGroupCommandInput, AddThingToThingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddThingToThingGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "AddThingToThingGroupCommand";
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
  private serialize(input: AddThingToThingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddThingToThingGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddThingToThingGroupCommandOutput> {
    return de_AddThingToThingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
