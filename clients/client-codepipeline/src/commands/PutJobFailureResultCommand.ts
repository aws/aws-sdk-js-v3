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

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutJobFailureResultInput } from "../models/models_0";
import { de_PutJobFailureResultCommand, se_PutJobFailureResultCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutJobFailureResultCommand}.
 */
export interface PutJobFailureResultCommandInput extends PutJobFailureResultInput {}
/**
 * @public
 *
 * The output of {@link PutJobFailureResultCommand}.
 */
export interface PutJobFailureResultCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Represents the failure of a job as returned to the pipeline by a job worker. Used
 *             for custom actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutJobFailureResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutJobFailureResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // PutJobFailureResultInput
 *   jobId: "STRING_VALUE", // required
 *   failureDetails: { // FailureDetails
 *     type: "JobFailed" || "ConfigurationError" || "PermissionError" || "RevisionOutOfSync" || "RevisionUnavailable" || "SystemUnavailable", // required
 *     message: "STRING_VALUE", // required
 *     externalExecutionId: "STRING_VALUE",
 *   },
 * };
 * const command = new PutJobFailureResultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutJobFailureResultCommandInput - {@link PutJobFailureResultCommandInput}
 * @returns {@link PutJobFailureResultCommandOutput}
 * @see {@link PutJobFailureResultCommandInput} for command's `input` shape.
 * @see {@link PutJobFailureResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The job state was specified in an invalid format.</p>
 *
 * @throws {@link JobNotFoundException} (client fault)
 *  <p>The job was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 */
export class PutJobFailureResultCommand extends $Command<
  PutJobFailureResultCommandInput,
  PutJobFailureResultCommandOutput,
  CodePipelineClientResolvedConfig
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
  constructor(readonly input: PutJobFailureResultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutJobFailureResultCommandInput, PutJobFailureResultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutJobFailureResultCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "PutJobFailureResultCommand";
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
  private serialize(input: PutJobFailureResultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutJobFailureResultCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutJobFailureResultCommandOutput> {
    return de_PutJobFailureResultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
