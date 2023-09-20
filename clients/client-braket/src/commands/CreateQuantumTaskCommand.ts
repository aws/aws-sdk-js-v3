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

import { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { CreateQuantumTaskRequest, CreateQuantumTaskResponse } from "../models/models_0";
import { de_CreateQuantumTaskCommand, se_CreateQuantumTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateQuantumTaskCommand}.
 */
export interface CreateQuantumTaskCommandInput extends CreateQuantumTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateQuantumTaskCommand}.
 */
export interface CreateQuantumTaskCommandOutput extends CreateQuantumTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a quantum task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, CreateQuantumTaskCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, CreateQuantumTaskCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const input = { // CreateQuantumTaskRequest
 *   clientToken: "STRING_VALUE", // required
 *   deviceArn: "STRING_VALUE", // required
 *   deviceParameters: "STRING_VALUE",
 *   shots: Number("long"), // required
 *   outputS3Bucket: "STRING_VALUE", // required
 *   outputS3KeyPrefix: "STRING_VALUE", // required
 *   action: "STRING_VALUE", // required
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   jobToken: "STRING_VALUE",
 * };
 * const command = new CreateQuantumTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateQuantumTaskResponse
 * //   quantumTaskArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateQuantumTaskCommandInput - {@link CreateQuantumTaskCommandInput}
 * @returns {@link CreateQuantumTaskCommandOutput}
 * @see {@link CreateQuantumTaskCommandInput} for command's `input` shape.
 * @see {@link CreateQuantumTaskCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link DeviceOfflineException} (client fault)
 *  <p>The specified device is currently offline.</p>
 *
 * @throws {@link DeviceRetiredException} (client fault)
 *  <p>The specified device has been retired.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because a service quota is exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling rate limit is met.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link BraketServiceException}
 * <p>Base exception class for all service exceptions from Braket service.</p>
 *
 */
export class CreateQuantumTaskCommand extends $Command<
  CreateQuantumTaskCommandInput,
  CreateQuantumTaskCommandOutput,
  BraketClientResolvedConfig
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
  constructor(readonly input: CreateQuantumTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BraketClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateQuantumTaskCommandInput, CreateQuantumTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateQuantumTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BraketClient";
    const commandName = "CreateQuantumTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Braket",
        operation: "CreateQuantumTask",
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
  private serialize(input: CreateQuantumTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateQuantumTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateQuantumTaskCommandOutput> {
    return de_CreateQuantumTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
