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

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DescribeNamespaceRequest, DescribeNamespaceResponse } from "../models/models_0";
import { de_DescribeNamespaceCommand, se_DescribeNamespaceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeNamespaceCommand}.
 */
export interface DescribeNamespaceCommandInput extends DescribeNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNamespaceCommand}.
 */
export interface DescribeNamespaceCommandOutput extends DescribeNamespaceResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Gets the latest version of the user's namespace and the public version that it is tracking.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DescribeNamespaceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DescribeNamespaceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // DescribeNamespaceRequest
 *   namespaceName: "STRING_VALUE",
 * };
 * const command = new DescribeNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNamespaceResponse
 * //   namespaceArn: "STRING_VALUE",
 * //   namespaceName: "STRING_VALUE",
 * //   trackingNamespaceName: "STRING_VALUE",
 * //   trackingNamespaceVersion: Number("long"),
 * //   namespaceVersion: Number("long"),
 * // };
 *
 * ```
 *
 * @param DescribeNamespaceCommandInput - {@link DescribeNamespaceCommandInput}
 * @returns {@link DescribeNamespaceCommandOutput}
 * @see {@link DescribeNamespaceCommandInput} for command's `input` shape.
 * @see {@link DescribeNamespaceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 */
export class DescribeNamespaceCommand extends $Command<
  DescribeNamespaceCommandInput,
  DescribeNamespaceCommandOutput,
  IoTThingsGraphClientResolvedConfig
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
  constructor(readonly input: DescribeNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNamespaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "DescribeNamespaceCommand";
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
  private serialize(input: DescribeNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeNamespaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeNamespaceCommandOutput> {
    return de_DescribeNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
