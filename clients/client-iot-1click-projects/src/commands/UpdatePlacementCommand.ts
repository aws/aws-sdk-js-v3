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

import {
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickProjectsClient";
import { UpdatePlacementRequest, UpdatePlacementResponse } from "../models/models_0";
import { de_UpdatePlacementCommand, se_UpdatePlacementCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePlacementCommand}.
 */
export interface UpdatePlacementCommandInput extends UpdatePlacementRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePlacementCommand}.
 */
export interface UpdatePlacementCommandOutput extends UpdatePlacementResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a placement with the given attributes. To clear an attribute, pass an empty value
 *       (i.e., "").</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, UpdatePlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, UpdatePlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const input = { // UpdatePlacementRequest
 *   placementName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 *   attributes: { // PlacementAttributeMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdatePlacementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePlacementCommandInput - {@link UpdatePlacementCommandInput}
 * @returns {@link UpdatePlacementCommandOutput}
 * @see {@link UpdatePlacementCommandInput} for command's `input` shape.
 * @see {@link UpdatePlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for IoT1ClickProjectsClient's `config` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoT1ClickProjectsServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickProjects service.</p>
 *
 */
export class UpdatePlacementCommand extends $Command<
  UpdatePlacementCommandInput,
  UpdatePlacementCommandOutput,
  IoT1ClickProjectsClientResolvedConfig
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
  constructor(readonly input: UpdatePlacementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickProjectsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePlacementCommandInput, UpdatePlacementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePlacementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickProjectsClient";
    const commandName = "UpdatePlacementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoT1ClickProjects",
        operation: "UpdatePlacement",
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
  private serialize(input: UpdatePlacementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePlacementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePlacementCommandOutput> {
    return de_UpdatePlacementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
