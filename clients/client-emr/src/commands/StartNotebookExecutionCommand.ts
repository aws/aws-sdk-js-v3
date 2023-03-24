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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { StartNotebookExecutionInput, StartNotebookExecutionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StartNotebookExecutionCommand,
  serializeAws_json1_1StartNotebookExecutionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link StartNotebookExecutionCommand}.
 */
export interface StartNotebookExecutionCommandInput extends StartNotebookExecutionInput {}
/**
 * @public
 *
 * The output of {@link StartNotebookExecutionCommand}.
 */
export interface StartNotebookExecutionCommandOutput extends StartNotebookExecutionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Starts a notebook execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, StartNotebookExecutionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, StartNotebookExecutionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = {
 *   EditorId: "STRING_VALUE", // required
 *   RelativePath: "STRING_VALUE", // required
 *   NotebookExecutionName: "STRING_VALUE",
 *   NotebookParams: "STRING_VALUE",
 *   ExecutionEngine: {
 *     Id: "STRING_VALUE", // required
 *     Type: "EMR",
 *     MasterInstanceSecurityGroupId: "STRING_VALUE",
 *   },
 *   ServiceRole: "STRING_VALUE", // required
 *   NotebookInstanceSecurityGroupId: "STRING_VALUE",
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartNotebookExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartNotebookExecutionCommandInput - {@link StartNotebookExecutionCommandInput}
 * @returns {@link StartNotebookExecutionCommandOutput}
 * @see {@link StartNotebookExecutionCommandInput} for command's `input` shape.
 * @see {@link StartNotebookExecutionCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 *
 */
export class StartNotebookExecutionCommand extends $Command<
  StartNotebookExecutionCommandInput,
  StartNotebookExecutionCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: StartNotebookExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartNotebookExecutionCommandInput, StartNotebookExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartNotebookExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "StartNotebookExecutionCommand";
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
  private serialize(input: StartNotebookExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartNotebookExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartNotebookExecutionCommandOutput> {
    return deserializeAws_json1_1StartNotebookExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
