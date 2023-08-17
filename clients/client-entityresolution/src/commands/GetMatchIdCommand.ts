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

import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { GetMatchIdInput, GetMatchIdInputFilterSensitiveLog, GetMatchIdOutput } from "../models/models_0";
import { de_GetMatchIdCommand, se_GetMatchIdCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMatchIdCommand}.
 */
export interface GetMatchIdCommandInput extends GetMatchIdInput {}
/**
 * @public
 *
 * The output of {@link GetMatchIdCommand}.
 */
export interface GetMatchIdCommandOutput extends GetMatchIdOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the corresponding Match ID of a customer record if the record has been processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GetMatchIdCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GetMatchIdCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // GetMatchIdInput
 *   workflowName: "STRING_VALUE", // required
 *   record: { // RecordAttributeMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetMatchIdCommand(input);
 * const response = await client.send(command);
 * // { // GetMatchIdOutput
 * //   matchId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMatchIdCommandInput - {@link GetMatchIdCommandInput}
 * @returns {@link GetMatchIdCommandOutput}
 * @see {@link GetMatchIdCommandInput} for command's `input` shape.
 * @see {@link GetMatchIdCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. <code>HTTP Status Code: 403</code>
 *          </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the AWS Entity Resolution service. <code>HTTP Status Code: 500</code>
 *          </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found. <code>HTTP Status Code: 404</code>
 *          </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. <code>HTTP Status Code: 429</code>
 *          </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by AWS Entity Resolution. <code>HTTP Status Code: 400</code>
 *          </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 */
export class GetMatchIdCommand extends $Command<
  GetMatchIdCommandInput,
  GetMatchIdCommandOutput,
  EntityResolutionClientResolvedConfig
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
  constructor(readonly input: GetMatchIdCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EntityResolutionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMatchIdCommandInput, GetMatchIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetMatchIdCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EntityResolutionClient";
    const commandName = "GetMatchIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMatchIdInputFilterSensitiveLog,
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
  private serialize(input: GetMatchIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMatchIdCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMatchIdCommandOutput> {
    return de_GetMatchIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
