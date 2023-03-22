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

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetDeleteEventsByEventTypeStatusRequest, GetDeleteEventsByEventTypeStatusResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetDeleteEventsByEventTypeStatusCommand,
  serializeAws_json1_1GetDeleteEventsByEventTypeStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetDeleteEventsByEventTypeStatusCommand}.
 */
export interface GetDeleteEventsByEventTypeStatusCommandInput extends GetDeleteEventsByEventTypeStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetDeleteEventsByEventTypeStatusCommand}.
 */
export interface GetDeleteEventsByEventTypeStatusCommandOutput
  extends GetDeleteEventsByEventTypeStatusResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the status of a <code>DeleteEventsByEventType</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetDeleteEventsByEventTypeStatusCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetDeleteEventsByEventTypeStatusCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetDeleteEventsByEventTypeStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetDeleteEventsByEventTypeStatusCommandInput - {@link GetDeleteEventsByEventTypeStatusCommandInput}
 * @returns {@link GetDeleteEventsByEventTypeStatusCommandOutput}
 * @see {@link GetDeleteEventsByEventTypeStatusCommandInput} for command's `input` shape.
 * @see {@link GetDeleteEventsByEventTypeStatusCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 *
 */
export class GetDeleteEventsByEventTypeStatusCommand extends $Command<
  GetDeleteEventsByEventTypeStatusCommandInput,
  GetDeleteEventsByEventTypeStatusCommandOutput,
  FraudDetectorClientResolvedConfig
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
  constructor(readonly input: GetDeleteEventsByEventTypeStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeleteEventsByEventTypeStatusCommandInput, GetDeleteEventsByEventTypeStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDeleteEventsByEventTypeStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetDeleteEventsByEventTypeStatusCommand";
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
  private serialize(
    input: GetDeleteEventsByEventTypeStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDeleteEventsByEventTypeStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDeleteEventsByEventTypeStatusCommandOutput> {
    return deserializeAws_json1_1GetDeleteEventsByEventTypeStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
