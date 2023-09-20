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
import { CreateWorkerRequest, CreateWorkerResponse } from "../models/models_0";
import { de_CreateWorkerCommand, se_CreateWorkerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkerCommand}.
 */
export interface CreateWorkerCommandInput extends CreateWorkerRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkerCommand}.
 */
export interface CreateWorkerCommandOutput extends CreateWorkerResponse, __MetadataBearer {}

/**
 * @public
 * Grants permission to create a worker
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, CreateWorkerCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, CreateWorkerCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const input = { // CreateWorkerRequest
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   fleet: "STRING_VALUE", // required
 *   additionalTransientProperties: "STRING_VALUE",
 *   additionalFixedProperties: "STRING_VALUE",
 *   vendorProperties: { // VendorProperties
 *     vendorWorkerId: "STRING_VALUE", // required
 *     vendorWorkerIpAddress: "STRING_VALUE",
 *     vendorAdditionalTransientProperties: "STRING_VALUE",
 *     vendorAdditionalFixedProperties: "STRING_VALUE",
 *   },
 *   position: { // PositionCoordinates Union: only one key present
 *     cartesianCoordinates: { // CartesianCoordinates
 *       x: Number("double"), // required
 *       y: Number("double"), // required
 *       z: Number("double"),
 *     },
 *   },
 *   orientation: { // Orientation Union: only one key present
 *     degrees: Number("double"),
 *   },
 * };
 * const command = new CreateWorkerCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkerResponse
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   site: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateWorkerCommandInput - {@link CreateWorkerCommandInput}
 * @returns {@link CreateWorkerCommandOutput}
 * @see {@link CreateWorkerCommandInput} for command's `input` shape.
 * @see {@link CreateWorkerCommandOutput} for command's `response` shape.
 * @see {@link IoTRoboRunnerClientResolvedConfig | config} for IoTRoboRunnerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *   User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Exception thrown if a resource in a create request already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Exception thrown if something goes wrong within the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Exception thrown if a resource referenced in the request doesn't exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  Exception thrown if the user's AWS account has reached a service limit and the operation cannot proceed.
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
export class CreateWorkerCommand extends $Command<
  CreateWorkerCommandInput,
  CreateWorkerCommandOutput,
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
  constructor(readonly input: CreateWorkerCommandInput) {
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
  ): Handler<CreateWorkerCommandInput, CreateWorkerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateWorkerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTRoboRunnerClient";
    const commandName = "CreateWorkerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoTRoboRunner",
        operation: "CreateWorker",
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
  private serialize(input: CreateWorkerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateWorkerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkerCommandOutput> {
    return de_CreateWorkerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
