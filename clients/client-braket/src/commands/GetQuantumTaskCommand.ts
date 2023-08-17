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

import { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { GetQuantumTaskRequest, GetQuantumTaskResponse } from "../models/models_0";
import { de_GetQuantumTaskCommand, se_GetQuantumTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetQuantumTaskCommand}.
 */
export interface GetQuantumTaskCommandInput extends GetQuantumTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetQuantumTaskCommand}.
 */
export interface GetQuantumTaskCommandOutput extends GetQuantumTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the specified quantum task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, GetQuantumTaskCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, GetQuantumTaskCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const input = { // GetQuantumTaskRequest
 *   quantumTaskArn: "STRING_VALUE", // required
 * };
 * const command = new GetQuantumTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetQuantumTaskResponse
 * //   quantumTaskArn: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   failureReason: "STRING_VALUE",
 * //   deviceArn: "STRING_VALUE", // required
 * //   deviceParameters: "STRING_VALUE", // required
 * //   shots: Number("long"), // required
 * //   outputS3Bucket: "STRING_VALUE", // required
 * //   outputS3Directory: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   endedAt: new Date("TIMESTAMP"),
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   jobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQuantumTaskCommandInput - {@link GetQuantumTaskCommandInput}
 * @returns {@link GetQuantumTaskCommandOutput}
 * @see {@link GetQuantumTaskCommandInput} for command's `input` shape.
 * @see {@link GetQuantumTaskCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
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
export class GetQuantumTaskCommand extends $Command<
  GetQuantumTaskCommandInput,
  GetQuantumTaskCommandOutput,
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
  constructor(readonly input: GetQuantumTaskCommandInput) {
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
  ): Handler<GetQuantumTaskCommandInput, GetQuantumTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetQuantumTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BraketClient";
    const commandName = "GetQuantumTaskCommand";
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
  private serialize(input: GetQuantumTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetQuantumTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetQuantumTaskCommandOutput> {
    return de_GetQuantumTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
