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

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { ListBackendEnvironmentsRequest, ListBackendEnvironmentsResult } from "../models/models_0";
import {
  deserializeAws_restJson1ListBackendEnvironmentsCommand,
  serializeAws_restJson1ListBackendEnvironmentsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListBackendEnvironmentsCommand}.
 */
export interface ListBackendEnvironmentsCommandInput extends ListBackendEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListBackendEnvironmentsCommand}.
 */
export interface ListBackendEnvironmentsCommandOutput extends ListBackendEnvironmentsResult, __MetadataBearer {}

/**
 * @public
 * <p> Lists the backend environments for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListBackendEnvironmentsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, ListBackendEnvironmentsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new ListBackendEnvironmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListBackendEnvironmentsCommandInput - {@link ListBackendEnvironmentsCommandInput}
 * @returns {@link ListBackendEnvironmentsCommandOutput}
 * @see {@link ListBackendEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListBackendEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p> A request contains unexpected data. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p> The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p> An operation failed due to a lack of access. </p>
 *
 *
 */
export class ListBackendEnvironmentsCommand extends $Command<
  ListBackendEnvironmentsCommandInput,
  ListBackendEnvironmentsCommandOutput,
  AmplifyClientResolvedConfig
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
  constructor(readonly input: ListBackendEnvironmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBackendEnvironmentsCommandInput, ListBackendEnvironmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBackendEnvironmentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "ListBackendEnvironmentsCommand";
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
  private serialize(input: ListBackendEnvironmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBackendEnvironmentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackendEnvironmentsCommandOutput> {
    return deserializeAws_restJson1ListBackendEnvironmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
