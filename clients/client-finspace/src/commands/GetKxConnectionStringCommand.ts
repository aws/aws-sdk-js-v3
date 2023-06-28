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

import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import {
  GetKxConnectionStringRequest,
  GetKxConnectionStringResponse,
  GetKxConnectionStringResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetKxConnectionStringCommand, se_GetKxConnectionStringCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetKxConnectionStringCommand}.
 */
export interface GetKxConnectionStringCommandInput extends GetKxConnectionStringRequest {}
/**
 * @public
 *
 * The output of {@link GetKxConnectionStringCommand}.
 */
export interface GetKxConnectionStringCommandOutput extends GetKxConnectionStringResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a connection string for a user to connect to a kdb cluster. You must call this API using the same role that you have defined while creating a user. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, GetKxConnectionStringCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, GetKxConnectionStringCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // GetKxConnectionStringRequest
 *   userArn: "STRING_VALUE", // required
 *   environmentId: "STRING_VALUE", // required
 *   clusterName: "STRING_VALUE", // required
 * };
 * const command = new GetKxConnectionStringCommand(input);
 * const response = await client.send(command);
 * // { // GetKxConnectionStringResponse
 * //   signedConnectionString: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetKxConnectionStringCommandInput - {@link GetKxConnectionStringCommandInput}
 * @returns {@link GetKxConnectionStringCommandOutput}
 * @see {@link GetKxConnectionStringCommandInput} for command's `input` shape.
 * @see {@link GetKxConnectionStringCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 */
export class GetKxConnectionStringCommand extends $Command<
  GetKxConnectionStringCommandInput,
  GetKxConnectionStringCommandOutput,
  FinspaceClientResolvedConfig
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
  constructor(readonly input: GetKxConnectionStringCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetKxConnectionStringCommandInput, GetKxConnectionStringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetKxConnectionStringCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceClient";
    const commandName = "GetKxConnectionStringCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetKxConnectionStringResponseFilterSensitiveLog,
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
  private serialize(input: GetKxConnectionStringCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetKxConnectionStringCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetKxConnectionStringCommandOutput> {
    return de_GetKxConnectionStringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
