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
import { ListScheduledAuditsRequest, ListScheduledAuditsResponse } from "../models/models_2";
import { de_ListScheduledAuditsCommand, se_ListScheduledAuditsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListScheduledAuditsCommand}.
 */
export interface ListScheduledAuditsCommandInput extends ListScheduledAuditsRequest {}
/**
 * @public
 *
 * The output of {@link ListScheduledAuditsCommand}.
 */
export interface ListScheduledAuditsCommandOutput extends ListScheduledAuditsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all of your scheduled audits.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListScheduledAudits</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListScheduledAuditsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListScheduledAuditsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListScheduledAuditsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListScheduledAuditsCommand(input);
 * const response = await client.send(command);
 * // { // ListScheduledAuditsResponse
 * //   scheduledAudits: [ // ScheduledAuditMetadataList
 * //     { // ScheduledAuditMetadata
 * //       scheduledAuditName: "STRING_VALUE",
 * //       scheduledAuditArn: "STRING_VALUE",
 * //       frequency: "DAILY" || "WEEKLY" || "BIWEEKLY" || "MONTHLY",
 * //       dayOfMonth: "STRING_VALUE",
 * //       dayOfWeek: "SUN" || "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListScheduledAuditsCommandInput - {@link ListScheduledAuditsCommandInput}
 * @returns {@link ListScheduledAuditsCommandOutput}
 * @see {@link ListScheduledAuditsCommandInput} for command's `input` shape.
 * @see {@link ListScheduledAuditsCommandOutput} for command's `response` shape.
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
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class ListScheduledAuditsCommand extends $Command<
  ListScheduledAuditsCommandInput,
  ListScheduledAuditsCommandOutput,
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
  constructor(readonly input: ListScheduledAuditsCommandInput) {
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
  ): Handler<ListScheduledAuditsCommandInput, ListScheduledAuditsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListScheduledAuditsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListScheduledAuditsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "ListScheduledAudits",
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
  private serialize(input: ListScheduledAuditsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListScheduledAuditsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListScheduledAuditsCommandOutput> {
    return de_ListScheduledAuditsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
