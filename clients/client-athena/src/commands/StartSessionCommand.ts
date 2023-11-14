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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { StartSessionRequest, StartSessionResponse } from "../models/models_0";
import { de_StartSessionCommand, se_StartSessionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartSessionCommand}.
 */
export interface StartSessionCommandInput extends StartSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartSessionCommand}.
 */
export interface StartSessionCommandOutput extends StartSessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a session for running calculations within a workgroup. The session is ready
 *             when it reaches an <code>IDLE</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, StartSessionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, StartSessionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // StartSessionRequest
 *   Description: "STRING_VALUE",
 *   WorkGroup: "STRING_VALUE", // required
 *   EngineConfiguration: { // EngineConfiguration
 *     CoordinatorDpuSize: Number("int"),
 *     MaxConcurrentDpus: Number("int"), // required
 *     DefaultExecutorDpuSize: Number("int"),
 *     AdditionalConfigs: { // ParametersMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     SparkProperties: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   NotebookVersion: "STRING_VALUE",
 *   SessionIdleTimeoutInMinutes: Number("int"),
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new StartSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartSessionResponse
 * //   SessionId: "STRING_VALUE",
 * //   State: "CREATING" || "CREATED" || "IDLE" || "BUSY" || "TERMINATING" || "TERMINATED" || "DEGRADED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param StartSessionCommandInput - {@link StartSessionCommandInput}
 * @returns {@link StartSessionCommandOutput}
 * @see {@link StartSessionCommandInput} for command's `input` shape.
 * @see {@link StartSessionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link SessionAlreadyExistsException} (client fault)
 *  <p>The specified session already exists.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class StartSessionCommand extends $Command<
  StartSessionCommandInput,
  StartSessionCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: StartSessionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSessionCommandInput, StartSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartSessionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "StartSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAthena",
        operation: "StartSession",
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
  private serialize(input: StartSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSessionCommandOutput> {
    return de_StartSessionCommand(output, context);
  }
}
