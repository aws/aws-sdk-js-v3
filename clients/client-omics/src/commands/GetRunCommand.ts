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

import { GetRunRequest, GetRunResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetRunCommand, se_GetRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRunCommand}.
 */
export interface GetRunCommandInput extends GetRunRequest {}
/**
 * @public
 *
 * The output of {@link GetRunCommand}.
 */
export interface GetRunCommandOutput extends GetRunResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a workflow run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetRunCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetRunCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // GetRunRequest
 *   id: "STRING_VALUE", // required
 *   export: [ // RunExportList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetRunCommand(input);
 * const response = await client.send(command);
 * // { // GetRunResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   workflowId: "STRING_VALUE",
 * //   workflowType: "STRING_VALUE",
 * //   runId: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   runGroupId: "STRING_VALUE",
 * //   priority: Number("int"),
 * //   definition: "STRING_VALUE",
 * //   digest: "STRING_VALUE",
 * //   parameters: "DOCUMENT_VALUE",
 * //   storageCapacity: Number("int"),
 * //   outputUri: "STRING_VALUE",
 * //   logLevel: "STRING_VALUE",
 * //   resourceDigests: { // RunResourceDigests
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   startedBy: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"),
 * //   startTime: new Date("TIMESTAMP"),
 * //   stopTime: new Date("TIMESTAMP"),
 * //   statusMessage: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   accelerators: "STRING_VALUE",
 * //   retentionMode: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRunCommandInput - {@link GetRunCommandInput}
 * @returns {@link GetRunCommandOutput}
 * @see {@link GetRunCommandInput} for command's `input` shape.
 * @see {@link GetRunCommandOutput} for command's `response` shape.
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
export class GetRunCommand extends $Command<GetRunCommandInput, GetRunCommandOutput, OmicsClientResolvedConfig> {
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
  constructor(readonly input: GetRunCommandInput) {
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
  ): Handler<GetRunCommandInput, GetRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "GetRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Omics",
        operation: "GetRun",
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
  private serialize(input: GetRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRunCommandOutput> {
    return de_GetRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
