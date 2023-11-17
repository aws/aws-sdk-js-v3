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

import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { GetRepositorySyncStatusInput, GetRepositorySyncStatusOutput } from "../models/models_0";
import { de_GetRepositorySyncStatusCommand, se_GetRepositorySyncStatusCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRepositorySyncStatusCommand}.
 */
export interface GetRepositorySyncStatusCommandInput extends GetRepositorySyncStatusInput {}
/**
 * @public
 *
 * The output of {@link GetRepositorySyncStatusCommand}.
 */
export interface GetRepositorySyncStatusCommandOutput extends GetRepositorySyncStatusOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns details about the sync status for a repository. A repository sync uses Git sync
 *       to push and pull changes from your remote repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, GetRepositorySyncStatusCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, GetRepositorySyncStatusCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // GetRepositorySyncStatusInput
 *   Branch: "STRING_VALUE", // required
 *   RepositoryLinkId: "STRING_VALUE", // required
 *   SyncType: "CFN_STACK_SYNC", // required
 * };
 * const command = new GetRepositorySyncStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetRepositorySyncStatusOutput
 * //   LatestSync: { // RepositorySyncAttempt
 * //     StartedAt: new Date("TIMESTAMP"), // required
 * //     Status: "FAILED" || "INITIATED" || "IN_PROGRESS" || "SUCCEEDED" || "QUEUED", // required
 * //     Events: [ // RepositorySyncEventList // required
 * //       { // RepositorySyncEvent
 * //         Event: "STRING_VALUE", // required
 * //         ExternalId: "STRING_VALUE",
 * //         Time: new Date("TIMESTAMP"), // required
 * //         Type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRepositorySyncStatusCommandInput - {@link GetRepositorySyncStatusCommandInput}
 * @returns {@link GetRepositorySyncStatusCommandOutput}
 * @see {@link GetRepositorySyncStatusCommandInput} for command's `input` shape.
 * @see {@link GetRepositorySyncStatusCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Received an internal server exception. Try again later.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input is not valid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found. Verify the connection resource ARN and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 */
export class GetRepositorySyncStatusCommand extends $Command<
  GetRepositorySyncStatusCommandInput,
  GetRepositorySyncStatusCommandOutput,
  CodeStarConnectionsClientResolvedConfig
> {
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
  constructor(readonly input: GetRepositorySyncStatusCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarConnectionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRepositorySyncStatusCommandInput, GetRepositorySyncStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRepositorySyncStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarConnectionsClient";
    const commandName = "GetRepositorySyncStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeStar_connections_20191201",
        operation: "GetRepositorySyncStatus",
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
  private serialize(input: GetRepositorySyncStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRepositorySyncStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRepositorySyncStatusCommandOutput> {
    return de_GetRepositorySyncStatusCommand(output, context);
  }
}
