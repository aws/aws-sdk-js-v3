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
import {
  CreatePackageRequest,
  CreatePackageRequestFilterSensitiveLog,
  CreatePackageResponse,
  CreatePackageResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreatePackageCommand, se_CreatePackageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePackageCommand}.
 */
export interface CreatePackageCommandInput extends CreatePackageRequest {}
/**
 * @public
 *
 * The output of {@link CreatePackageCommand}.
 */
export interface CreatePackageCommandOutput extends CreatePackageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an IoT software package that can be deployed to your fleet.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePackage</a> and <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetIndexingConfiguration</a> actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreatePackageCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreatePackageCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreatePackageRequest
 *   packageName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreatePackageCommand(input);
 * const response = await client.send(command);
 * // { // CreatePackageResponse
 * //   packageName: "STRING_VALUE",
 * //   packageArn: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePackageCommandInput - {@link CreatePackageCommandInput}
 * @returns {@link CreatePackageCommandOutput}
 * @see {@link CreatePackageCommandInput} for command's `input` shape.
 * @see {@link CreatePackageCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource with the same name already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class CreatePackageCommand extends $Command<
  CreatePackageCommandInput,
  CreatePackageCommandOutput,
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
  constructor(readonly input: CreatePackageCommandInput) {
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
  ): Handler<CreatePackageCommandInput, CreatePackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreatePackageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreatePackageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePackageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePackageResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "CreatePackage",
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
  private serialize(input: CreatePackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreatePackageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePackageCommandOutput> {
    return de_CreatePackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
