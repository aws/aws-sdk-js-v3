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
import { DescribeThingRegistrationTaskRequest, DescribeThingRegistrationTaskResponse } from "../models/models_1";
import {
  de_DescribeThingRegistrationTaskCommand,
  se_DescribeThingRegistrationTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeThingRegistrationTaskCommand}.
 */
export interface DescribeThingRegistrationTaskCommandInput extends DescribeThingRegistrationTaskRequest {}
/**
 * @public
 *
 * The output of {@link DescribeThingRegistrationTaskCommand}.
 */
export interface DescribeThingRegistrationTaskCommandOutput
  extends DescribeThingRegistrationTaskResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes a bulk thing provisioning task.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingRegistrationTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingRegistrationTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingRegistrationTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeThingRegistrationTaskRequest
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new DescribeThingRegistrationTaskCommand(input);
 * const response = await client.send(command);
 * // { // DescribeThingRegistrationTaskResponse
 * //   taskId: "STRING_VALUE",
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * //   templateBody: "STRING_VALUE",
 * //   inputFileBucket: "STRING_VALUE",
 * //   inputFileKey: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   status: "InProgress" || "Completed" || "Failed" || "Cancelled" || "Cancelling",
 * //   message: "STRING_VALUE",
 * //   successCount: Number("int"),
 * //   failureCount: Number("int"),
 * //   percentageProgress: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeThingRegistrationTaskCommandInput - {@link DescribeThingRegistrationTaskCommandInput}
 * @returns {@link DescribeThingRegistrationTaskCommandOutput}
 * @see {@link DescribeThingRegistrationTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeThingRegistrationTaskCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class DescribeThingRegistrationTaskCommand extends $Command<
  DescribeThingRegistrationTaskCommandInput,
  DescribeThingRegistrationTaskCommandOutput,
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
  constructor(readonly input: DescribeThingRegistrationTaskCommandInput) {
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
  ): Handler<DescribeThingRegistrationTaskCommandInput, DescribeThingRegistrationTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeThingRegistrationTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeThingRegistrationTaskCommand";
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
  private serialize(input: DescribeThingRegistrationTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeThingRegistrationTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeThingRegistrationTaskCommandOutput> {
    return de_DescribeThingRegistrationTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
