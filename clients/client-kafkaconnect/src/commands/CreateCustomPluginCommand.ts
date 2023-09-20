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

import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import { CreateCustomPluginRequest, CreateCustomPluginResponse } from "../models/models_0";
import { de_CreateCustomPluginCommand, se_CreateCustomPluginCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomPluginCommand}.
 */
export interface CreateCustomPluginCommandInput extends CreateCustomPluginRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomPluginCommand}.
 */
export interface CreateCustomPluginCommandOutput extends CreateCustomPluginResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a custom plugin using the specified properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, CreateCustomPluginCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, CreateCustomPluginCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * const client = new KafkaConnectClient(config);
 * const input = { // CreateCustomPluginRequest
 *   contentType: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   location: { // CustomPluginLocation
 *     s3Location: { // S3Location
 *       bucketArn: "STRING_VALUE", // required
 *       fileKey: "STRING_VALUE", // required
 *       objectVersion: "STRING_VALUE",
 *     },
 *   },
 *   name: "STRING_VALUE", // required
 * };
 * const command = new CreateCustomPluginCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomPluginResponse
 * //   customPluginArn: "STRING_VALUE",
 * //   customPluginState: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   revision: Number("long"),
 * // };
 *
 * ```
 *
 * @param CreateCustomPluginCommandInput - {@link CreateCustomPluginCommandInput}
 * @returns {@link CreateCustomPluginCommandOutput}
 * @see {@link CreateCustomPluginCommandInput} for command's `input` shape.
 * @see {@link CreateCustomPluginCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for KafkaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then
 *          retry it.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>HTTP Status Code 409: Conflict. A resource with this name already exists. Retry your
 *          request with another name.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your
 *          request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>HTTP Status Code 500: Unexpected internal server error. Retrying your request might
 *          resolve the issue.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>HTTP Status Code 404: Resource not found due to incorrect input. Correct your request
 *          and then retry it.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>HTTP Status Code 503: Service Unavailable. Retrying your request in some time might
 *          resolve the issue.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>HTTP Status Code 429: Limit exceeded. Resource limit reached.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>HTTP Status Code 401: Unauthorized request. The provided credentials couldn't be
 *          validated.</p>
 *
 * @throws {@link KafkaConnectServiceException}
 * <p>Base exception class for all service exceptions from KafkaConnect service.</p>
 *
 */
export class CreateCustomPluginCommand extends $Command<
  CreateCustomPluginCommandInput,
  CreateCustomPluginCommandOutput,
  KafkaConnectClientResolvedConfig
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
  constructor(readonly input: CreateCustomPluginCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCustomPluginCommandInput, CreateCustomPluginCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCustomPluginCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaConnectClient";
    const commandName = "CreateCustomPluginCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "KafkaConnect",
        operation: "CreateCustomPlugin",
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
  private serialize(input: CreateCustomPluginCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCustomPluginCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCustomPluginCommandOutput> {
    return de_CreateCustomPluginCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
