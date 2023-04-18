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
import { ListJobExecutionsForJobRequest, ListJobExecutionsForJobResponse } from "../models/models_1";
import { de_ListJobExecutionsForJobCommand, se_ListJobExecutionsForJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListJobExecutionsForJobCommand}.
 */
export interface ListJobExecutionsForJobCommandInput extends ListJobExecutionsForJobRequest {}
/**
 * @public
 *
 * The output of {@link ListJobExecutionsForJobCommand}.
 */
export interface ListJobExecutionsForJobCommandOutput extends ListJobExecutionsForJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the job executions for a job.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForJob</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListJobExecutionsForJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListJobExecutionsForJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListJobExecutionsForJobRequest
 *   jobId: "STRING_VALUE", // required
 *   status: "QUEUED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "REJECTED" || "REMOVED" || "CANCELED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListJobExecutionsForJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListJobExecutionsForJobCommandInput - {@link ListJobExecutionsForJobCommandInput}
 * @returns {@link ListJobExecutionsForJobCommandOutput}
 * @see {@link ListJobExecutionsForJobCommandInput} for command's `input` shape.
 * @see {@link ListJobExecutionsForJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 *
 */
export class ListJobExecutionsForJobCommand extends $Command<
  ListJobExecutionsForJobCommandInput,
  ListJobExecutionsForJobCommandOutput,
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
  constructor(readonly input: ListJobExecutionsForJobCommandInput) {
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
  ): Handler<ListJobExecutionsForJobCommandInput, ListJobExecutionsForJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListJobExecutionsForJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListJobExecutionsForJobCommand";
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
  private serialize(input: ListJobExecutionsForJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListJobExecutionsForJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListJobExecutionsForJobCommandOutput> {
    return de_ListJobExecutionsForJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
