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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateSessionRequest, CreateSessionResponse } from "../models/models_1";
import { de_CreateSessionCommand, se_CreateSessionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSessionCommand}.
 */
export interface CreateSessionCommandInput extends CreateSessionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSessionCommand}.
 */
export interface CreateSessionCommandOutput extends CreateSessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateSessionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateSessionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreateSessionRequest
 *   Id: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Role: "STRING_VALUE", // required
 *   Command: { // SessionCommand
 *     Name: "STRING_VALUE",
 *     PythonVersion: "STRING_VALUE",
 *   },
 *   Timeout: Number("int"),
 *   IdleTimeout: Number("int"),
 *   DefaultArguments: { // OrchestrationArgumentsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Connections: { // ConnectionsList
 *     Connections: [ // OrchestrationStringList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   MaxCapacity: Number("double"),
 *   NumberOfWorkers: Number("int"),
 *   WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 *   SecurityConfiguration: "STRING_VALUE",
 *   GlueVersion: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RequestOrigin: "STRING_VALUE",
 * };
 * const command = new CreateSessionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSessionResponse
 * //   Session: { // Session
 * //     Id: "STRING_VALUE",
 * //     CreatedOn: new Date("TIMESTAMP"),
 * //     Status: "PROVISIONING" || "READY" || "FAILED" || "TIMEOUT" || "STOPPING" || "STOPPED",
 * //     ErrorMessage: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Role: "STRING_VALUE",
 * //     Command: { // SessionCommand
 * //       Name: "STRING_VALUE",
 * //       PythonVersion: "STRING_VALUE",
 * //     },
 * //     DefaultArguments: { // OrchestrationArgumentsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Connections: { // ConnectionsList
 * //       Connections: [ // OrchestrationStringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Progress: Number("double"),
 * //     MaxCapacity: Number("double"),
 * //     SecurityConfiguration: "STRING_VALUE",
 * //     GlueVersion: "STRING_VALUE",
 * //     NumberOfWorkers: Number("int"),
 * //     WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 * //     CompletedOn: new Date("TIMESTAMP"),
 * //     ExecutionTime: Number("double"),
 * //     DPUSeconds: Number("double"),
 * //     IdleTimeout: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSessionCommandInput - {@link CreateSessionCommandInput}
 * @returns {@link CreateSessionCommandOutput}
 * @see {@link CreateSessionCommandInput} for command's `input` shape.
 * @see {@link CreateSessionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The same unique identifier was associated with two different records.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class CreateSessionCommand extends $Command<
  CreateSessionCommandInput,
  CreateSessionCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: CreateSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSessionCommandInput, CreateSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateSessionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateSessionCommand";
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
  private serialize(input: CreateSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSessionCommandOutput> {
    return de_CreateSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
