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
  GetParameterHistoryRequest,
  GetParameterHistoryRequestFilterSensitiveLog,
  GetParameterHistoryResult,
  GetParameterHistoryResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetParameterHistoryCommand,
  serializeAws_json1_1GetParameterHistoryCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface GetParameterHistoryCommandInput extends GetParameterHistoryRequest {}
export interface GetParameterHistoryCommandOutput extends GetParameterHistoryResult, __MetadataBearer {}

/**
 * <p>Retrieves the history of all changes to a parameter.</p>
 *          <important>
 *             <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must
 *     also update the key alias the parameter uses to reference KMS. Otherwise,
 *      <code>GetParameterHistory</code> retrieves whatever the original key alias was
 *     referencing.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParameterHistoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParameterHistoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetParameterHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetParameterHistoryCommandInput} for command's `input` shape.
 * @see {@link GetParameterHistoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class GetParameterHistoryCommand extends $Command<
  GetParameterHistoryCommandInput,
  GetParameterHistoryCommandOutput,
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

  constructor(readonly input: GetParameterHistoryCommandInput) {
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
  ): Handler<GetParameterHistoryCommandInput, GetParameterHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetParameterHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetParameterHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetParameterHistoryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetParameterHistoryResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetParameterHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetParameterHistoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetParameterHistoryCommandOutput> {
    return deserializeAws_json1_1GetParameterHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
