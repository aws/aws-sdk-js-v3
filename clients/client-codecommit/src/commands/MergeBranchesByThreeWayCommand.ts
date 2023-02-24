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

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import {
  MergeBranchesByThreeWayInput,
  MergeBranchesByThreeWayInputFilterSensitiveLog,
  MergeBranchesByThreeWayOutput,
  MergeBranchesByThreeWayOutputFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1MergeBranchesByThreeWayCommand,
  serializeAws_json1_1MergeBranchesByThreeWayCommand,
} from "../protocols/Aws_json1_1";

export interface MergeBranchesByThreeWayCommandInput extends MergeBranchesByThreeWayInput {}
export interface MergeBranchesByThreeWayCommandOutput extends MergeBranchesByThreeWayOutput, __MetadataBearer {}

/**
 * <p>Merges two specified branches using the three-way merge strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergeBranchesByThreeWayCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergeBranchesByThreeWayCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new MergeBranchesByThreeWayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergeBranchesByThreeWayCommandInput} for command's `input` shape.
 * @see {@link MergeBranchesByThreeWayCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class MergeBranchesByThreeWayCommand extends $Command<
  MergeBranchesByThreeWayCommandInput,
  MergeBranchesByThreeWayCommandOutput,
  CodeCommitClientResolvedConfig
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

  constructor(readonly input: MergeBranchesByThreeWayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<MergeBranchesByThreeWayCommandInput, MergeBranchesByThreeWayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, MergeBranchesByThreeWayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "MergeBranchesByThreeWayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MergeBranchesByThreeWayInputFilterSensitiveLog,
      outputFilterSensitiveLog: MergeBranchesByThreeWayOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MergeBranchesByThreeWayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1MergeBranchesByThreeWayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MergeBranchesByThreeWayCommandOutput> {
    return deserializeAws_json1_1MergeBranchesByThreeWayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
