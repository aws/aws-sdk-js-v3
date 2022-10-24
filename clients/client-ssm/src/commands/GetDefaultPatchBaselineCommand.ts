// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  GetDefaultPatchBaselineRequest,
  GetDefaultPatchBaselineRequestFilterSensitiveLog,
  GetDefaultPatchBaselineResult,
  GetDefaultPatchBaselineResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetDefaultPatchBaselineCommand,
  serializeAws_json1_1GetDefaultPatchBaselineCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface GetDefaultPatchBaselineCommandInput extends GetDefaultPatchBaselineRequest {}
export interface GetDefaultPatchBaselineCommandOutput extends GetDefaultPatchBaselineResult, __MetadataBearer {}

/**
 * <p>Retrieves the default patch baseline. Amazon Web Services Systems Manager supports creating multiple default patch
 *    baselines. For example, you can create a default patch baseline for each operating system.</p>
 *          <p>If you don't specify an operating system value, the default patch baseline for Windows is
 *    returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetDefaultPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetDefaultPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetDefaultPatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDefaultPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link GetDefaultPatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class GetDefaultPatchBaselineCommand extends $Command<
  GetDefaultPatchBaselineCommandInput,
  GetDefaultPatchBaselineCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: GetDefaultPatchBaselineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDefaultPatchBaselineCommandInput, GetDefaultPatchBaselineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDefaultPatchBaselineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetDefaultPatchBaselineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDefaultPatchBaselineRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDefaultPatchBaselineResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDefaultPatchBaselineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDefaultPatchBaselineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDefaultPatchBaselineCommandOutput> {
    return deserializeAws_json1_1GetDefaultPatchBaselineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
