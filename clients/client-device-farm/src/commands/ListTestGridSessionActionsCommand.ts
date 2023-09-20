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
import { ListTestGridSessionActionsRequest, ListTestGridSessionActionsResult } from "../models/models_0";
import { de_ListTestGridSessionActionsCommand, se_ListTestGridSessionActionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTestGridSessionActionsCommand}.
 */
export interface ListTestGridSessionActionsCommandInput extends ListTestGridSessionActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestGridSessionActionsCommand}.
 */
export interface ListTestGridSessionActionsCommandOutput extends ListTestGridSessionActionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the actions taken in a <a>TestGridSession</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestGridSessionActionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListTestGridSessionActionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListTestGridSessionActionsRequest
 *   sessionArn: "STRING_VALUE", // required
 *   maxResult: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestGridSessionActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestGridSessionActionsResult
 * //   actions: [ // TestGridSessionActions
 * //     { // TestGridSessionAction
 * //       action: "STRING_VALUE",
 * //       started: new Date("TIMESTAMP"),
 * //       duration: Number("long"),
 * //       statusCode: "STRING_VALUE",
 * //       requestMethod: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestGridSessionActionsCommandInput - {@link ListTestGridSessionActionsCommandInput}
 * @returns {@link ListTestGridSessionActionsCommandOutput}
 * @see {@link ListTestGridSessionActionsCommandInput} for command's `input` shape.
 * @see {@link ListTestGridSessionActionsCommandOutput} for command's `response` shape.
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
export class ListTestGridSessionActionsCommand extends $Command<
  ListTestGridSessionActionsCommandInput,
  ListTestGridSessionActionsCommandOutput,
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
  constructor(readonly input: ListTestGridSessionActionsCommandInput) {
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
  ): Handler<ListTestGridSessionActionsCommandInput, ListTestGridSessionActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTestGridSessionActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListTestGridSessionActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DeviceFarm_20150623",
        operation: "ListTestGridSessionActions",
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
  private serialize(input: ListTestGridSessionActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTestGridSessionActionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTestGridSessionActionsCommandOutput> {
    return de_ListTestGridSessionActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
