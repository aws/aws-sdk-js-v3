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
  ListComponentsInput,
  ListComponentsInputFilterSensitiveLog,
  ListComponentsOutput,
  ListComponentsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListComponentsCommand,
  serializeAws_restJson1ListComponentsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

export interface ListComponentsCommandInput extends ListComponentsInput {}
export interface ListComponentsCommandOutput extends ListComponentsOutput, __MetadataBearer {}

/**
 * <p>Lists all the components registered with AWS Systems Manager for SAP.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, ListComponentsCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, ListComponentsCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * const client = new SsmSapClient(config);
 * const command = new ListComponentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComponentsCommandInput} for command's `input` shape.
 * @see {@link ListComponentsCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 */
export class ListComponentsCommand extends $Command<
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
  SsmSapClientResolvedConfig
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

  constructor(readonly input: ListComponentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SsmSapClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListComponentsCommandInput, ListComponentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListComponentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SsmSapClient";
    const commandName = "ListComponentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListComponentsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListComponentsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListComponentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListComponentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListComponentsCommandOutput> {
    return deserializeAws_restJson1ListComponentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
