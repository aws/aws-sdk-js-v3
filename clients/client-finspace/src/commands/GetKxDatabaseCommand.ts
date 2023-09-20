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

import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { GetKxDatabaseRequest, GetKxDatabaseResponse } from "../models/models_0";
import { de_GetKxDatabaseCommand, se_GetKxDatabaseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetKxDatabaseCommand}.
 */
export interface GetKxDatabaseCommandInput extends GetKxDatabaseRequest {}
/**
 * @public
 *
 * The output of {@link GetKxDatabaseCommand}.
 */
export interface GetKxDatabaseCommandOutput extends GetKxDatabaseResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns database information for the specified environment ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, GetKxDatabaseCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, GetKxDatabaseCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // GetKxDatabaseRequest
 *   environmentId: "STRING_VALUE", // required
 *   databaseName: "STRING_VALUE", // required
 * };
 * const command = new GetKxDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // GetKxDatabaseResponse
 * //   databaseName: "STRING_VALUE",
 * //   databaseArn: "STRING_VALUE",
 * //   environmentId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //   lastCompletedChangesetId: "STRING_VALUE",
 * //   numBytes: Number("long"),
 * //   numChangesets: Number("int"),
 * //   numFiles: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetKxDatabaseCommandInput - {@link GetKxDatabaseCommandInput}
 * @returns {@link GetKxDatabaseCommandOutput}
 * @see {@link GetKxDatabaseCommandInput} for command's `input` shape.
 * @see {@link GetKxDatabaseCommandOutput} for command's `response` shape.
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
export class GetKxDatabaseCommand extends $Command<
  GetKxDatabaseCommandInput,
  GetKxDatabaseCommandOutput,
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
  constructor(readonly input: GetKxDatabaseCommandInput) {
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
  ): Handler<GetKxDatabaseCommandInput, GetKxDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetKxDatabaseCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceClient";
    const commandName = "GetKxDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHabaneroManagementService",
        operation: "GetKxDatabase",
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
  private serialize(input: GetKxDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetKxDatabaseCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetKxDatabaseCommandOutput> {
    return de_GetKxDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
