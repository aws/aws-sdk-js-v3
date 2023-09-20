// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import { GetKeyspaceRequest, GetKeyspaceResponse } from "../models/models_0";
import { de_GetKeyspaceCommand, se_GetKeyspaceCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetKeyspaceCommand}.
 */
export interface GetKeyspaceCommandInput extends GetKeyspaceRequest {}
/**
 * @public
 *
 * The output of {@link GetKeyspaceCommand}.
 */
export interface GetKeyspaceCommandOutput extends GetKeyspaceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the name and the Amazon Resource Name (ARN) of the specified table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, GetKeyspaceCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, GetKeyspaceCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * const client = new KeyspacesClient(config);
 * const input = { // GetKeyspaceRequest
 *   keyspaceName: "STRING_VALUE", // required
 * };
 * const command = new GetKeyspaceCommand(input);
 * const response = await client.send(command);
 * // { // GetKeyspaceResponse
 * //   keyspaceName: "STRING_VALUE", // required
 * //   resourceArn: "STRING_VALUE", // required
 * //   replicationStrategy: "STRING_VALUE", // required
 * //   replicationRegions: [ // RegionList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetKeyspaceCommandInput - {@link GetKeyspaceCommandInput}
 * @returns {@link GetKeyspaceCommandOutput}
 * @see {@link GetKeyspaceCommandInput} for command's `input` shape.
 * @see {@link GetKeyspaceCommandOutput} for command's `response` shape.
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
export class GetKeyspaceCommand extends $Command<
  GetKeyspaceCommandInput,
  GetKeyspaceCommandOutput,
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
  constructor(readonly input: GetKeyspaceCommandInput) {
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
  ): Handler<GetKeyspaceCommandInput, GetKeyspaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetKeyspaceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KeyspacesClient";
    const commandName = "GetKeyspaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "KeyspacesService",
        operation: "GetKeyspace",
      },
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
  private serialize(input: GetKeyspaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetKeyspaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetKeyspaceCommandOutput> {
    return de_GetKeyspaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
