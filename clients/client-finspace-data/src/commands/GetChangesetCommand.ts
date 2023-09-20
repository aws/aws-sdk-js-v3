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

import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { GetChangesetRequest, GetChangesetResponse } from "../models/models_0";
import { de_GetChangesetCommand, se_GetChangesetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetChangesetCommand}.
 */
export interface GetChangesetCommandInput extends GetChangesetRequest {}
/**
 * @public
 *
 * The output of {@link GetChangesetCommand}.
 */
export interface GetChangesetCommandOutput extends GetChangesetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get information about a Changeset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetChangesetCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetChangesetCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // GetChangesetRequest
 *   datasetId: "STRING_VALUE", // required
 *   changesetId: "STRING_VALUE", // required
 * };
 * const command = new GetChangesetCommand(input);
 * const response = await client.send(command);
 * // { // GetChangesetResponse
 * //   changesetId: "STRING_VALUE",
 * //   changesetArn: "STRING_VALUE",
 * //   datasetId: "STRING_VALUE",
 * //   changeType: "REPLACE" || "APPEND" || "MODIFY",
 * //   sourceParams: { // SourceParams
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   formatParams: { // FormatParams
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   createTime: Number("long"),
 * //   status: "PENDING" || "FAILED" || "SUCCESS" || "RUNNING" || "STOP_REQUESTED",
 * //   errorInfo: { // ChangesetErrorInfo
 * //     errorMessage: "STRING_VALUE",
 * //     errorCategory: "VALIDATION" || "SERVICE_QUOTA_EXCEEDED" || "ACCESS_DENIED" || "RESOURCE_NOT_FOUND" || "THROTTLING" || "INTERNAL_SERVICE_EXCEPTION" || "CANCELLED" || "USER_RECOVERABLE",
 * //   },
 * //   activeUntilTimestamp: Number("long"),
 * //   activeFromTimestamp: Number("long"),
 * //   updatesChangesetId: "STRING_VALUE",
 * //   updatedByChangesetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetChangesetCommandInput - {@link GetChangesetCommandInput}
 * @returns {@link GetChangesetCommandOutput}
 * @see {@link GetChangesetCommandInput} for command's `input` shape.
 * @see {@link GetChangesetCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
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
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 */
export class GetChangesetCommand extends $Command<
  GetChangesetCommandInput,
  GetChangesetCommandOutput,
  FinspaceDataClientResolvedConfig
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
  constructor(readonly input: GetChangesetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetChangesetCommandInput, GetChangesetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetChangesetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "GetChangesetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHabaneroPublicAPI",
        operation: "GetChangeset",
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
  private serialize(input: GetChangesetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetChangesetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetChangesetCommandOutput> {
    return de_GetChangesetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
