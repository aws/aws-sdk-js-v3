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

import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import { UpdateWorkerFleetRequest, UpdateWorkerFleetResponse } from "../models/models_0";
import { de_UpdateWorkerFleetCommand, se_UpdateWorkerFleetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkerFleetCommand}.
 */
export interface UpdateWorkerFleetCommandInput extends UpdateWorkerFleetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkerFleetCommand}.
 */
export interface UpdateWorkerFleetCommandOutput extends UpdateWorkerFleetResponse, __MetadataBearer {}

/**
 * @public
 * Grants permission to update a worker fleet
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, UpdateWorkerFleetCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, UpdateWorkerFleetCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const input = { // UpdateWorkerFleetRequest
 *   id: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   additionalFixedProperties: "STRING_VALUE",
 * };
 * const command = new UpdateWorkerFleetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkerFleetResponse
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   additionalFixedProperties: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateWorkerFleetCommandInput - {@link UpdateWorkerFleetCommandInput}
 * @returns {@link UpdateWorkerFleetCommandOutput}
 * @see {@link UpdateWorkerFleetCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkerFleetCommandOutput} for command's `response` shape.
 * @see {@link IoTRoboRunnerClientResolvedConfig | config} for IoTRoboRunnerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *   User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Exception thrown if something goes wrong within the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Exception thrown if a resource referenced in the request doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Exception thrown if the api has been called too quickly be the client.
 *
 * @throws {@link ValidationException} (client fault)
 *  Exception thrown if an invalid parameter is provided to an API.
 *
 * @throws {@link IoTRoboRunnerServiceException}
 * <p>Base exception class for all service exceptions from IoTRoboRunner service.</p>
 *
 */
export class UpdateWorkerFleetCommand extends $Command<
  UpdateWorkerFleetCommandInput,
  UpdateWorkerFleetCommandOutput,
  IoTRoboRunnerClientResolvedConfig
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
  constructor(readonly input: UpdateWorkerFleetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTRoboRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWorkerFleetCommandInput, UpdateWorkerFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateWorkerFleetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTRoboRunnerClient";
    const commandName = "UpdateWorkerFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoTRoboRunner",
        operation: "UpdateWorkerFleet",
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
  private serialize(input: UpdateWorkerFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateWorkerFleetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWorkerFleetCommandOutput> {
    return de_UpdateWorkerFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
