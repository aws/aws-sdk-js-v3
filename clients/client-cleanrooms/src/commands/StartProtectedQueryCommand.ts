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

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import {
  StartProtectedQueryInput,
  StartProtectedQueryInputFilterSensitiveLog,
  StartProtectedQueryOutput,
  StartProtectedQueryOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_StartProtectedQueryCommand, se_StartProtectedQueryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link StartProtectedQueryCommand}.
 */
export interface StartProtectedQueryCommandInput extends StartProtectedQueryInput {}
/**
 * @public
 *
 * The output of {@link StartProtectedQueryCommand}.
 */
export interface StartProtectedQueryCommandOutput extends StartProtectedQueryOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a protected query that is started by AWS Clean Rooms.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, StartProtectedQueryCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, StartProtectedQueryCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // StartProtectedQueryInput
 *   type: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 *   sqlParameters: { // ProtectedQuerySQLParameters
 *     queryString: "STRING_VALUE", // required
 *   },
 *   resultConfiguration: { // ProtectedQueryResultConfiguration
 *     outputConfiguration: { // ProtectedQueryOutputConfiguration Union: only one key present
 *       s3: { // ProtectedQueryS3OutputConfiguration
 *         resultFormat: "STRING_VALUE", // required
 *         bucket: "STRING_VALUE", // required
 *         keyPrefix: "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new StartProtectedQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartProtectedQueryCommandInput - {@link StartProtectedQueryCommandInput}
 * @returns {@link StartProtectedQueryCommandOutput}
 * @see {@link StartProtectedQueryCommandInput} for command's `input` shape.
 * @see {@link StartProtectedQueryCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request denied because service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 *
 */
export class StartProtectedQueryCommand extends $Command<
  StartProtectedQueryCommandInput,
  StartProtectedQueryCommandOutput,
  CleanRoomsClientResolvedConfig
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
  constructor(readonly input: StartProtectedQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartProtectedQueryCommandInput, StartProtectedQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartProtectedQueryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "StartProtectedQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartProtectedQueryInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartProtectedQueryOutputFilterSensitiveLog,
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
  private serialize(input: StartProtectedQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartProtectedQueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartProtectedQueryCommandOutput> {
    return de_StartProtectedQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
