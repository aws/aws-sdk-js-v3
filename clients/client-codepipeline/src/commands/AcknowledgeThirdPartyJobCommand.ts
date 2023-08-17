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
import { AcknowledgeThirdPartyJobInput, AcknowledgeThirdPartyJobOutput } from "../models/models_0";
import { de_AcknowledgeThirdPartyJobCommand, se_AcknowledgeThirdPartyJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AcknowledgeThirdPartyJobCommand}.
 */
export interface AcknowledgeThirdPartyJobCommandInput extends AcknowledgeThirdPartyJobInput {}
/**
 * @public
 *
 * The output of {@link AcknowledgeThirdPartyJobCommand}.
 */
export interface AcknowledgeThirdPartyJobCommandOutput extends AcknowledgeThirdPartyJobOutput, __MetadataBearer {}

/**
 * @public
 * <p>Confirms a job worker has received the specified job. Used for partner actions
 *             only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, AcknowledgeThirdPartyJobCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, AcknowledgeThirdPartyJobCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // AcknowledgeThirdPartyJobInput
 *   jobId: "STRING_VALUE", // required
 *   nonce: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new AcknowledgeThirdPartyJobCommand(input);
 * const response = await client.send(command);
 * // { // AcknowledgeThirdPartyJobOutput
 * //   status: "Created" || "Queued" || "Dispatched" || "InProgress" || "TimedOut" || "Succeeded" || "Failed",
 * // };
 *
 * ```
 *
 * @param AcknowledgeThirdPartyJobCommandInput - {@link AcknowledgeThirdPartyJobCommandInput}
 * @returns {@link AcknowledgeThirdPartyJobCommandOutput}
 * @see {@link AcknowledgeThirdPartyJobCommandInput} for command's `input` shape.
 * @see {@link AcknowledgeThirdPartyJobCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The client token was specified in an invalid format</p>
 *
 * @throws {@link InvalidNonceException} (client fault)
 *  <p>The nonce was specified in an invalid format.</p>
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
export class AcknowledgeThirdPartyJobCommand extends $Command<
  AcknowledgeThirdPartyJobCommandInput,
  AcknowledgeThirdPartyJobCommandOutput,
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
  constructor(readonly input: AcknowledgeThirdPartyJobCommandInput) {
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
  ): Handler<AcknowledgeThirdPartyJobCommandInput, AcknowledgeThirdPartyJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcknowledgeThirdPartyJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "AcknowledgeThirdPartyJobCommand";
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
  private serialize(input: AcknowledgeThirdPartyJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AcknowledgeThirdPartyJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcknowledgeThirdPartyJobCommandOutput> {
    return de_AcknowledgeThirdPartyJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
