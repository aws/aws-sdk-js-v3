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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateThingGroupRequest, CreateThingGroupResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateThingGroupCommand,
  serializeAws_restJson1CreateThingGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateThingGroupCommand}.
 */
export interface CreateThingGroupCommandInput extends CreateThingGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateThingGroupCommand}.
 */
export interface CreateThingGroupCommandOutput extends CreateThingGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Create a thing group.</p>
 *          <note>
 *             <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for
 * 				information about authorizing control plane actions.</p>
 *          </note>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingGroup</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateThingGroupCommandInput - {@link CreateThingGroupCommandInput}
 * @returns {@link CreateThingGroupCommandOutput}
 * @see {@link CreateThingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 *
 */
export class CreateThingGroupCommand extends $Command<
  CreateThingGroupCommandInput,
  CreateThingGroupCommandOutput,
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
  constructor(readonly input: CreateThingGroupCommandInput) {
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
  ): Handler<CreateThingGroupCommandInput, CreateThingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateThingGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateThingGroupCommand";
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
  private serialize(input: CreateThingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateThingGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateThingGroupCommandOutput> {
    return deserializeAws_restJson1CreateThingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
