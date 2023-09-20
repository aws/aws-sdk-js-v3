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
import {
  ListTestGridSessionArtifactsRequest,
  ListTestGridSessionArtifactsResult,
  ListTestGridSessionArtifactsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListTestGridSessionArtifactsCommand,
  se_ListTestGridSessionArtifactsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTestGridSessionArtifactsCommand}.
 */
export interface ListTestGridSessionArtifactsCommandInput extends ListTestGridSessionArtifactsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestGridSessionArtifactsCommand}.
 */
export interface ListTestGridSessionArtifactsCommandOutput
  extends ListTestGridSessionArtifactsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of artifacts created during the session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestGridSessionArtifactsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListTestGridSessionArtifactsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListTestGridSessionArtifactsRequest
 *   sessionArn: "STRING_VALUE", // required
 *   type: "VIDEO" || "LOG",
 *   maxResult: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestGridSessionArtifactsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestGridSessionArtifactsResult
 * //   artifacts: [ // TestGridSessionArtifacts
 * //     { // TestGridSessionArtifact
 * //       filename: "STRING_VALUE",
 * //       type: "UNKNOWN" || "VIDEO" || "SELENIUM_LOG",
 * //       url: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestGridSessionArtifactsCommandInput - {@link ListTestGridSessionArtifactsCommandInput}
 * @returns {@link ListTestGridSessionArtifactsCommandOutput}
 * @see {@link ListTestGridSessionArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListTestGridSessionArtifactsCommandOutput} for command's `response` shape.
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
export class ListTestGridSessionArtifactsCommand extends $Command<
  ListTestGridSessionArtifactsCommandInput,
  ListTestGridSessionArtifactsCommandOutput,
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
  constructor(readonly input: ListTestGridSessionArtifactsCommandInput) {
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
  ): Handler<ListTestGridSessionArtifactsCommandInput, ListTestGridSessionArtifactsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTestGridSessionArtifactsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListTestGridSessionArtifactsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListTestGridSessionArtifactsResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DeviceFarm_20150623",
        operation: "ListTestGridSessionArtifacts",
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
  private serialize(input: ListTestGridSessionArtifactsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTestGridSessionArtifactsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTestGridSessionArtifactsCommandOutput> {
    return de_ListTestGridSessionArtifactsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
