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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListTestGridSessionsRequest, ListTestGridSessionsResult } from "../models/models_0";
import { de_ListTestGridSessionsCommand, se_ListTestGridSessionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTestGridSessionsCommand}.
 */
export interface ListTestGridSessionsCommandInput extends ListTestGridSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestGridSessionsCommand}.
 */
export interface ListTestGridSessionsCommandOutput extends ListTestGridSessionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of sessions for a <a>TestGridProject</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestGridSessionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListTestGridSessionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListTestGridSessionsRequest
 *   projectArn: "STRING_VALUE", // required
 *   status: "ACTIVE" || "CLOSED" || "ERRORED",
 *   creationTimeAfter: new Date("TIMESTAMP"),
 *   creationTimeBefore: new Date("TIMESTAMP"),
 *   endTimeAfter: new Date("TIMESTAMP"),
 *   endTimeBefore: new Date("TIMESTAMP"),
 *   maxResult: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestGridSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestGridSessionsResult
 * //   testGridSessions: [ // TestGridSessions
 * //     { // TestGridSession
 * //       arn: "STRING_VALUE",
 * //       status: "ACTIVE" || "CLOSED" || "ERRORED",
 * //       created: new Date("TIMESTAMP"),
 * //       ended: new Date("TIMESTAMP"),
 * //       billingMinutes: Number("double"),
 * //       seleniumProperties: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestGridSessionsCommandInput - {@link ListTestGridSessionsCommandInput}
 * @returns {@link ListTestGridSessionsCommandOutput}
 * @see {@link ListTestGridSessionsCommandInput} for command's `input` shape.
 * @see {@link ListTestGridSessionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal exception was raised in the service. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you see this
 *          error. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 */
export class ListTestGridSessionsCommand extends $Command<
  ListTestGridSessionsCommandInput,
  ListTestGridSessionsCommandOutput,
  DeviceFarmClientResolvedConfig
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
  constructor(readonly input: ListTestGridSessionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTestGridSessionsCommandInput, ListTestGridSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTestGridSessionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListTestGridSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DeviceFarm_20150623",
        operation: "ListTestGridSessions",
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
  private serialize(input: ListTestGridSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTestGridSessionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTestGridSessionsCommandOutput> {
    return de_ListTestGridSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
