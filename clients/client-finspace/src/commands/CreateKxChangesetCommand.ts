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
import { CreateKxChangesetRequest, CreateKxChangesetResponse } from "../models/models_0";
import { de_CreateKxChangesetCommand, se_CreateKxChangesetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateKxChangesetCommand}.
 */
export interface CreateKxChangesetCommandInput extends CreateKxChangesetRequest {}
/**
 * @public
 *
 * The output of {@link CreateKxChangesetCommand}.
 */
export interface CreateKxChangesetCommandOutput extends CreateKxChangesetResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *    Creates a changeset for a kdb database. A changeset allows you to add and delete existing files by using an ordered list of change requests.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, CreateKxChangesetCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, CreateKxChangesetCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // CreateKxChangesetRequest
 *   environmentId: "STRING_VALUE", // required
 *   databaseName: "STRING_VALUE", // required
 *   changeRequests: [ // ChangeRequests // required
 *     { // ChangeRequest
 *       changeType: "PUT" || "DELETE", // required
 *       s3Path: "STRING_VALUE",
 *       dbPath: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new CreateKxChangesetCommand(input);
 * const response = await client.send(command);
 * // { // CreateKxChangesetResponse
 * //   changesetId: "STRING_VALUE",
 * //   databaseName: "STRING_VALUE",
 * //   environmentId: "STRING_VALUE",
 * //   changeRequests: [ // ChangeRequests
 * //     { // ChangeRequest
 * //       changeType: "PUT" || "DELETE", // required
 * //       s3Path: "STRING_VALUE",
 * //       dbPath: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //   status: "PENDING" || "PROCESSING" || "FAILED" || "COMPLETED",
 * //   errorInfo: { // ErrorInfo
 * //     errorMessage: "STRING_VALUE",
 * //     errorType: "The inputs to this request are invalid." || "Service limits have been exceeded." || "Missing required permission to perform this request." || "One or more inputs to this request were not found." || "The system temporarily lacks sufficient resources to process the request." || "An internal error has occurred." || "Cancelled" || "A user recoverable error has occurred",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateKxChangesetCommandInput - {@link CreateKxChangesetCommandInput}
 * @returns {@link CreateKxChangesetCommandOutput}
 * @see {@link CreateKxChangesetCommandInput} for command's `input` shape.
 * @see {@link CreateKxChangesetCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
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
export class CreateKxChangesetCommand extends $Command<
  CreateKxChangesetCommandInput,
  CreateKxChangesetCommandOutput,
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
  constructor(readonly input: CreateKxChangesetCommandInput) {
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
  ): Handler<CreateKxChangesetCommandInput, CreateKxChangesetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateKxChangesetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceClient";
    const commandName = "CreateKxChangesetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHabaneroManagementService",
        operation: "CreateKxChangeset",
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
  private serialize(input: CreateKxChangesetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateKxChangesetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateKxChangesetCommandOutput> {
    return de_CreateKxChangesetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
