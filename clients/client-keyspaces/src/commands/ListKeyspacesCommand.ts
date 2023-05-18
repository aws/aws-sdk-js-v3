// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import { ListKeyspacesRequest, ListKeyspacesResponse } from "../models/models_0";
import { de_ListKeyspacesCommand, se_ListKeyspacesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link ListKeyspacesCommand}.
 */
export interface ListKeyspacesCommandInput extends ListKeyspacesRequest {}
/**
 * @public
 *
 * The output of {@link ListKeyspacesCommand}.
 */
export interface ListKeyspacesCommandOutput extends ListKeyspacesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of keyspaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, ListKeyspacesCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, ListKeyspacesCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * const client = new KeyspacesClient(config);
 * const input = { // ListKeyspacesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListKeyspacesCommand(input);
 * const response = await client.send(command);
 * // { // ListKeyspacesResponse
 * //   nextToken: "STRING_VALUE",
 * //   keyspaces: [ // KeyspaceSummaryList // required
 * //     { // KeyspaceSummary
 * //       keyspaceName: "STRING_VALUE", // required
 * //       resourceArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListKeyspacesRequest - {@link ListKeyspacesRequest}
 * @returns {@link ListKeyspacesResponse}
 * @see {@link ListKeyspacesCommandInput} for command's `input` shape.
 * @see {@link ListKeyspacesCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Keyspaces was unable to fully process this request because of an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a keyspace or table that doesn't exist. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The operation exceeded the service quota for this resource.  For more information on service quotas, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/quotas.html">Quotas</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed due to an invalid or malformed request.</p>
 *
 * @throws {@link KeyspacesServiceException}
 * <p>Base exception class for all service exceptions from Keyspaces service.</p>
 *
 */
export class ListKeyspacesCommand extends $Command<
  ListKeyspacesCommandInput,
  ListKeyspacesCommandOutput,
  KeyspacesClientResolvedConfig
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
  constructor(readonly input: ListKeyspacesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KeyspacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListKeyspacesCommandInput, ListKeyspacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListKeyspacesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KeyspacesClient";
    const commandName = "ListKeyspacesCommand";
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
  private serialize(input: ListKeyspacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListKeyspacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListKeyspacesCommandOutput> {
    return de_ListKeyspacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
