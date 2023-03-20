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
import { DeleteMitigationActionRequest, DeleteMitigationActionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteMitigationActionCommand,
  serializeAws_restJson1DeleteMitigationActionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DeleteMitigationActionCommand}.
 */
export interface DeleteMitigationActionCommandInput extends DeleteMitigationActionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMitigationActionCommand}.
 */
export interface DeleteMitigationActionCommandOutput extends DeleteMitigationActionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a defined mitigation action from your Amazon Web Services accounts.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteMitigationAction</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteMitigationActionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteMitigationActionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteMitigationActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteMitigationActionCommandInput - {@link DeleteMitigationActionCommandInput}
 * @returns {@link DeleteMitigationActionCommandOutput}
 * @see {@link DeleteMitigationActionCommandInput} for command's `input` shape.
 * @see {@link DeleteMitigationActionCommandOutput} for command's `response` shape.
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
 *
 */
export class DeleteMitigationActionCommand extends $Command<
  DeleteMitigationActionCommandInput,
  DeleteMitigationActionCommandOutput,
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
  constructor(readonly input: DeleteMitigationActionCommandInput) {
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
  ): Handler<DeleteMitigationActionCommandInput, DeleteMitigationActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteMitigationActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeleteMitigationActionCommand";
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
  private serialize(input: DeleteMitigationActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteMitigationActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMitigationActionCommandOutput> {
    return deserializeAws_restJson1DeleteMitigationActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
