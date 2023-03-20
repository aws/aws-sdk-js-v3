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

import { ListLensSharesInput, ListLensSharesOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListLensSharesCommand,
  serializeAws_restJson1ListLensSharesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 *
 * The input for {@link ListLensSharesCommand}.
 */
export interface ListLensSharesCommandInput extends ListLensSharesInput {}
/**
 * @public
 *
 * The output of {@link ListLensSharesCommand}.
 */
export interface ListLensSharesCommandOutput extends ListLensSharesOutput, __MetadataBearer {}

/**
 * @public
 * <p>List the lens shares associated with the lens.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListLensSharesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListLensSharesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListLensSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListLensSharesCommandInput - {@link ListLensSharesCommandInput}
 * @returns {@link ListLensSharesCommandOutput}
 * @see {@link ListLensSharesCommandInput} for command's `input` shape.
 * @see {@link ListLensSharesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 *
 */
export class ListLensSharesCommand extends $Command<
  ListLensSharesCommandInput,
  ListLensSharesCommandOutput,
  WellArchitectedClientResolvedConfig
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
  constructor(readonly input: ListLensSharesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLensSharesCommandInput, ListLensSharesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLensSharesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "ListLensSharesCommand";
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
  private serialize(input: ListLensSharesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListLensSharesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLensSharesCommandOutput> {
    return deserializeAws_restJson1ListLensSharesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
