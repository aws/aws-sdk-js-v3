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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  ListDataCellsFilterRequest,
  ListDataCellsFilterRequestFilterSensitiveLog,
  ListDataCellsFilterResponse,
  ListDataCellsFilterResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListDataCellsFilterCommand,
  serializeAws_restJson1ListDataCellsFilterCommand,
} from "../protocols/Aws_restJson1";

export interface ListDataCellsFilterCommandInput extends ListDataCellsFilterRequest {}
export interface ListDataCellsFilterCommandOutput extends ListDataCellsFilterResponse, __MetadataBearer {}

/**
 * <p>Lists all the data cell filters on a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListDataCellsFilterCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListDataCellsFilterCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new ListDataCellsFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataCellsFilterCommandInput} for command's `input` shape.
 * @see {@link ListDataCellsFilterCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 */
export class ListDataCellsFilterCommand extends $Command<
  ListDataCellsFilterCommandInput,
  ListDataCellsFilterCommandOutput,
  LakeFormationClientResolvedConfig
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

  constructor(readonly input: ListDataCellsFilterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataCellsFilterCommandInput, ListDataCellsFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDataCellsFilterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "ListDataCellsFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDataCellsFilterRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDataCellsFilterResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDataCellsFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDataCellsFilterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataCellsFilterCommandOutput> {
    return deserializeAws_restJson1ListDataCellsFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
