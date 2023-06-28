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
} from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { CreatePresignedNotebookUrlRequest, CreatePresignedNotebookUrlResponse } from "../models/models_0";
import { de_CreatePresignedNotebookUrlCommand, se_CreatePresignedNotebookUrlCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePresignedNotebookUrlCommand}.
 */
export interface CreatePresignedNotebookUrlCommandInput extends CreatePresignedNotebookUrlRequest {}
/**
 * @public
 *
 * The output of {@link CreatePresignedNotebookUrlCommand}.
 */
export interface CreatePresignedNotebookUrlCommandOutput extends CreatePresignedNotebookUrlResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets an authentication token and the URL at which the notebook can be accessed. During
 *             programmatic access, <code>CreatePresignedNotebookUrl</code> must be called every 10
 *             minutes to refresh the authentication token. For information about granting programmatic
 *             access, see <a href="https://docs.aws.amazon.com/athena/latest/ug/setting-up.html#setting-up-grant-programmatic-access">Grant
 *                 programmatic access</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreatePresignedNotebookUrlCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreatePresignedNotebookUrlCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // CreatePresignedNotebookUrlRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new CreatePresignedNotebookUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreatePresignedNotebookUrlResponse
 * //   NotebookUrl: "STRING_VALUE", // required
 * //   AuthToken: "STRING_VALUE", // required
 * //   AuthTokenExpirationTime: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param CreatePresignedNotebookUrlCommandInput - {@link CreatePresignedNotebookUrlCommandInput}
 * @returns {@link CreatePresignedNotebookUrlCommandOutput}
 * @see {@link CreatePresignedNotebookUrlCommandInput} for command's `input` shape.
 * @see {@link CreatePresignedNotebookUrlCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class CreatePresignedNotebookUrlCommand extends $Command<
  CreatePresignedNotebookUrlCommandInput,
  CreatePresignedNotebookUrlCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: CreatePresignedNotebookUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePresignedNotebookUrlCommandInput, CreatePresignedNotebookUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePresignedNotebookUrlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "CreatePresignedNotebookUrlCommand";
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
  private serialize(input: CreatePresignedNotebookUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreatePresignedNotebookUrlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePresignedNotebookUrlCommandOutput> {
    return de_CreatePresignedNotebookUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
