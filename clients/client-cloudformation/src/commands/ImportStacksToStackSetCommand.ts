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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import {
  ImportStacksToStackSetInput,
  ImportStacksToStackSetInputFilterSensitiveLog,
  ImportStacksToStackSetOutput,
  ImportStacksToStackSetOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryImportStacksToStackSetCommand,
  serializeAws_queryImportStacksToStackSetCommand,
} from "../protocols/Aws_query";

export interface ImportStacksToStackSetCommandInput extends ImportStacksToStackSetInput {}
export interface ImportStacksToStackSetCommandOutput extends ImportStacksToStackSetOutput, __MetadataBearer {}

/**
 * <p>Import existing stacks into a new stack sets. Use the stack import operation to import
 *          up to 10 stacks into a new stack set in the same account as the source stack or in a
 *          different administrator account and Region, by specifying the stack ID of the stack you
 *          intend to import.</p>
 *          <note>
 *             <p>
 *                <code>ImportStacksToStackSet</code> is only supported by self-managed
 *             permissions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ImportStacksToStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ImportStacksToStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ImportStacksToStackSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportStacksToStackSetCommandInput} for command's `input` shape.
 * @see {@link ImportStacksToStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class ImportStacksToStackSetCommand extends $Command<
  ImportStacksToStackSetCommandInput,
  ImportStacksToStackSetCommandOutput,
  CloudFormationClientResolvedConfig
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

  constructor(readonly input: ImportStacksToStackSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportStacksToStackSetCommandInput, ImportStacksToStackSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportStacksToStackSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ImportStacksToStackSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportStacksToStackSetInputFilterSensitiveLog,
      outputFilterSensitiveLog: ImportStacksToStackSetOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportStacksToStackSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryImportStacksToStackSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportStacksToStackSetCommandOutput> {
    return deserializeAws_queryImportStacksToStackSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
