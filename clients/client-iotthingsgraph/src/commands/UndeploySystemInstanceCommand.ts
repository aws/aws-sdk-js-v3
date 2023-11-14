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

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { UndeploySystemInstanceRequest, UndeploySystemInstanceResponse } from "../models/models_0";
import { de_UndeploySystemInstanceCommand, se_UndeploySystemInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UndeploySystemInstanceCommand}.
 */
export interface UndeploySystemInstanceCommandInput extends UndeploySystemInstanceRequest {}
/**
 * @public
 *
 * The output of {@link UndeploySystemInstanceCommand}.
 */
export interface UndeploySystemInstanceCommandOutput extends UndeploySystemInstanceResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Removes a system instance from its target (Cloud or Greengrass).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, UndeploySystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, UndeploySystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // UndeploySystemInstanceRequest
 *   id: "STRING_VALUE",
 * };
 * const command = new UndeploySystemInstanceCommand(input);
 * const response = await client.send(command);
 * // { // UndeploySystemInstanceResponse
 * //   summary: { // SystemInstanceSummary
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "NOT_DEPLOYED" || "BOOTSTRAP" || "DEPLOY_IN_PROGRESS" || "DEPLOYED_IN_TARGET" || "UNDEPLOY_IN_PROGRESS" || "FAILED" || "PENDING_DELETE" || "DELETED_IN_TARGET",
 * //     target: "GREENGRASS" || "CLOUD",
 * //     greengrassGroupName: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     greengrassGroupId: "STRING_VALUE",
 * //     greengrassGroupVersionId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UndeploySystemInstanceCommandInput - {@link UndeploySystemInstanceCommandInput}
 * @returns {@link UndeploySystemInstanceCommandOutput}
 * @see {@link UndeploySystemInstanceCommandInput} for command's `input` shape.
 * @see {@link UndeploySystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceInUseException} (client fault)
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
export class UndeploySystemInstanceCommand extends $Command<
  UndeploySystemInstanceCommandInput,
  UndeploySystemInstanceCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
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
  constructor(readonly input: UndeploySystemInstanceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UndeploySystemInstanceCommandInput, UndeploySystemInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UndeploySystemInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "UndeploySystemInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IotThingsGraphFrontEndService",
        operation: "UndeploySystemInstance",
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
  private serialize(input: UndeploySystemInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UndeploySystemInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UndeploySystemInstanceCommandOutput> {
    return de_UndeploySystemInstanceCommand(output, context);
  }
}
