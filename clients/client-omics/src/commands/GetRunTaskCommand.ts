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

import { GetRunTaskRequest, GetRunTaskResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetRunTaskCommand, se_GetRunTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRunTaskCommand}.
 */
export interface GetRunTaskCommandInput extends GetRunTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetRunTaskCommand}.
 */
export interface GetRunTaskCommandOutput extends GetRunTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a workflow run task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetRunTaskCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetRunTaskCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // GetRunTaskRequest
 *   id: "STRING_VALUE", // required
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new GetRunTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetRunTaskResponse
 * //   taskId: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   cpus: Number("int"),
 * //   memory: Number("int"),
 * //   creationTime: new Date("TIMESTAMP"),
 * //   startTime: new Date("TIMESTAMP"),
 * //   stopTime: new Date("TIMESTAMP"),
 * //   statusMessage: "STRING_VALUE",
 * //   logStream: "STRING_VALUE",
 * //   gpus: Number("int"),
 * //   instanceType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRunTaskCommandInput - {@link GetRunTaskCommandInput}
 * @returns {@link GetRunTaskCommandOutput}
 * @see {@link GetRunTaskCommandInput} for command's `input` shape.
 * @see {@link GetRunTaskCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 */
export class GetRunTaskCommand extends $Command<
  GetRunTaskCommandInput,
  GetRunTaskCommandOutput,
  OmicsClientResolvedConfig
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
  constructor(readonly input: GetRunTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OmicsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRunTaskCommandInput, GetRunTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetRunTaskCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "GetRunTaskCommand";
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
  private serialize(input: GetRunTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRunTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRunTaskCommandOutput> {
    return de_GetRunTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
