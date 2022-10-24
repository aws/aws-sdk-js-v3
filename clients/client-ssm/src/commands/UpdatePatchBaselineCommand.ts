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
  UpdatePatchBaselineRequest,
  UpdatePatchBaselineRequestFilterSensitiveLog,
  UpdatePatchBaselineResult,
  UpdatePatchBaselineResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1UpdatePatchBaselineCommand,
  serializeAws_json1_1UpdatePatchBaselineCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface UpdatePatchBaselineCommandInput extends UpdatePatchBaselineRequest {}
export interface UpdatePatchBaselineCommandOutput extends UpdatePatchBaselineResult, __MetadataBearer {}

/**
 * <p>Modifies an existing patch baseline. Fields not specified in the request are left
 *    unchanged.</p>
 *          <note>
 *             <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported
 *     operating system type, see <a>PatchFilter</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdatePatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdatePatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdatePatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePatchBaselineCommandInput} for command's `input` shape.
 * @see {@link UpdatePatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class UpdatePatchBaselineCommand extends $Command<
  UpdatePatchBaselineCommandInput,
  UpdatePatchBaselineCommandOutput,
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

  constructor(readonly input: UpdatePatchBaselineCommandInput) {
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
  ): Handler<UpdatePatchBaselineCommandInput, UpdatePatchBaselineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePatchBaselineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdatePatchBaselineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePatchBaselineRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdatePatchBaselineResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePatchBaselineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePatchBaselineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePatchBaselineCommandOutput> {
    return deserializeAws_json1_1UpdatePatchBaselineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
