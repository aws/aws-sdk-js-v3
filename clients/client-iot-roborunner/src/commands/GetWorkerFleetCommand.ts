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
import { GetWorkerFleetRequest, GetWorkerFleetResponse } from "../models/models_0";
import { de_GetWorkerFleetCommand, se_GetWorkerFleetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWorkerFleetCommand}.
 */
export interface GetWorkerFleetCommandInput extends GetWorkerFleetRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkerFleetCommand}.
 */
export interface GetWorkerFleetCommandOutput extends GetWorkerFleetResponse, __MetadataBearer {}

/**
 * @public
 * Grants permission to get a worker fleet
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, GetWorkerFleetCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, GetWorkerFleetCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const input = { // GetWorkerFleetRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetWorkerFleetCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkerFleetResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   site: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   additionalFixedProperties: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWorkerFleetCommandInput - {@link GetWorkerFleetCommandInput}
 * @returns {@link GetWorkerFleetCommandOutput}
 * @see {@link GetWorkerFleetCommandInput} for command's `input` shape.
 * @see {@link GetWorkerFleetCommandOutput} for command's `response` shape.
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
export class GetWorkerFleetCommand extends $Command<
  GetWorkerFleetCommandInput,
  GetWorkerFleetCommandOutput,
  IoTRoboRunnerClientResolvedConfig
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
  constructor(readonly input: GetWorkerFleetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTRoboRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWorkerFleetCommandInput, GetWorkerFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWorkerFleetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTRoboRunnerClient";
    const commandName = "GetWorkerFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoTRoboRunner",
        operation: "GetWorkerFleet",
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
  private serialize(input: GetWorkerFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetWorkerFleetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorkerFleetCommandOutput> {
    return de_GetWorkerFleetCommand(output, context);
  }
}
