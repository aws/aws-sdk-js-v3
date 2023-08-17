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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetSessionRequest, GetSessionResponse } from "../models/models_0";
import { de_GetSessionCommand, se_GetSessionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSessionCommand}.
 */
export interface GetSessionCommandInput extends GetSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionCommand}.
 */
export interface GetSessionCommandOutput extends GetSessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the full details of a previously created session, including the session status
 *             and configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetSessionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetSessionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // GetSessionRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionResponse
 * //   SessionId: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   WorkGroup: "STRING_VALUE",
 * //   EngineVersion: "STRING_VALUE",
 * //   EngineConfiguration: { // EngineConfiguration
 * //     CoordinatorDpuSize: Number("int"),
 * //     MaxConcurrentDpus: Number("int"), // required
 * //     DefaultExecutorDpuSize: Number("int"),
 * //     AdditionalConfigs: { // ParametersMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     SparkProperties: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   NotebookVersion: "STRING_VALUE",
 * //   SessionConfiguration: { // SessionConfiguration
 * //     ExecutionRole: "STRING_VALUE",
 * //     WorkingDirectory: "STRING_VALUE",
 * //     IdleTimeoutSeconds: Number("long"),
 * //     EncryptionConfiguration: { // EncryptionConfiguration
 * //       EncryptionOption: "SSE_S3" || "SSE_KMS" || "CSE_KMS", // required
 * //       KmsKey: "STRING_VALUE",
 * //     },
 * //   },
 * //   Status: { // SessionStatus
 * //     StartDateTime: new Date("TIMESTAMP"),
 * //     LastModifiedDateTime: new Date("TIMESTAMP"),
 * //     EndDateTime: new Date("TIMESTAMP"),
 * //     IdleSinceDateTime: new Date("TIMESTAMP"),
 * //     State: "CREATING" || "CREATED" || "IDLE" || "BUSY" || "TERMINATING" || "TERMINATED" || "DEGRADED" || "FAILED",
 * //     StateChangeReason: "STRING_VALUE",
 * //   },
 * //   Statistics: { // SessionStatistics
 * //     DpuExecutionInMillis: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSessionCommandInput - {@link GetSessionCommandInput}
 * @returns {@link GetSessionCommandOutput}
 * @see {@link GetSessionCommandInput} for command's `input` shape.
 * @see {@link GetSessionCommandOutput} for command's `response` shape.
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
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class GetSessionCommand extends $Command<
  GetSessionCommandInput,
  GetSessionCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: GetSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSessionCommandInput, GetSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSessionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "GetSessionCommand";
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
  private serialize(input: GetSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSessionCommandOutput> {
    return de_GetSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
