import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { GetOnPremisesInstanceInput, GetOnPremisesInstanceOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetOnPremisesInstanceCommand,
  serializeAws_json1_1GetOnPremisesInstanceCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetOnPremisesInstanceCommandInput extends GetOnPremisesInstanceInput {}
export interface GetOnPremisesInstanceCommandOutput extends GetOnPremisesInstanceOutput, __MetadataBearer {}

/**
 * <p> Gets information about an on-premises instance. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetOnPremisesInstanceCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetOnPremisesInstanceCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new GetOnPremisesInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOnPremisesInstanceCommandInput} for command's `input` shape.
 * @see {@link GetOnPremisesInstanceCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetOnPremisesInstanceCommand extends $Command<
  GetOnPremisesInstanceCommandInput,
  GetOnPremisesInstanceCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOnPremisesInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOnPremisesInstanceCommandInput, GetOnPremisesInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "GetOnPremisesInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOnPremisesInstanceInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetOnPremisesInstanceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOnPremisesInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetOnPremisesInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOnPremisesInstanceCommandOutput> {
    return deserializeAws_json1_1GetOnPremisesInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
