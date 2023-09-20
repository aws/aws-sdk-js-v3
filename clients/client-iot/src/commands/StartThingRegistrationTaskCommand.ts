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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { StartThingRegistrationTaskRequest, StartThingRegistrationTaskResponse } from "../models/models_2";
import { de_StartThingRegistrationTaskCommand, se_StartThingRegistrationTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartThingRegistrationTaskCommand}.
 */
export interface StartThingRegistrationTaskCommandInput extends StartThingRegistrationTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartThingRegistrationTaskCommand}.
 */
export interface StartThingRegistrationTaskCommandOutput extends StartThingRegistrationTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a bulk thing provisioning task.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartThingRegistrationTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StartThingRegistrationTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StartThingRegistrationTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // StartThingRegistrationTaskRequest
 *   templateBody: "STRING_VALUE", // required
 *   inputFileBucket: "STRING_VALUE", // required
 *   inputFileKey: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 * };
 * const command = new StartThingRegistrationTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartThingRegistrationTaskResponse
 * //   taskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartThingRegistrationTaskCommandInput - {@link StartThingRegistrationTaskCommandInput}
 * @returns {@link StartThingRegistrationTaskCommandOutput}
 * @see {@link StartThingRegistrationTaskCommandInput} for command's `input` shape.
 * @see {@link StartThingRegistrationTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class StartThingRegistrationTaskCommand extends $Command<
  StartThingRegistrationTaskCommandInput,
  StartThingRegistrationTaskCommandOutput,
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
  constructor(readonly input: StartThingRegistrationTaskCommandInput) {
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
  ): Handler<StartThingRegistrationTaskCommandInput, StartThingRegistrationTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartThingRegistrationTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "StartThingRegistrationTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "StartThingRegistrationTask",
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
  private serialize(input: StartThingRegistrationTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartThingRegistrationTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartThingRegistrationTaskCommandOutput> {
    return de_StartThingRegistrationTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
