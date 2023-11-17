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
import { GetResourceSyncStatusInput, GetResourceSyncStatusOutput } from "../models/models_0";
import { de_GetResourceSyncStatusCommand, se_GetResourceSyncStatusCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetResourceSyncStatusCommand}.
 */
export interface GetResourceSyncStatusCommandInput extends GetResourceSyncStatusInput {}
/**
 * @public
 *
 * The output of {@link GetResourceSyncStatusCommand}.
 */
export interface GetResourceSyncStatusCommandOutput extends GetResourceSyncStatusOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the status of the sync with the Git repository for a specific Amazon Web Services
 *       resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, GetResourceSyncStatusCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, GetResourceSyncStatusCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // GetResourceSyncStatusInput
 *   ResourceName: "STRING_VALUE", // required
 *   SyncType: "CFN_STACK_SYNC", // required
 * };
 * const command = new GetResourceSyncStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceSyncStatusOutput
 * //   DesiredState: { // Revision
 * //     Branch: "STRING_VALUE", // required
 * //     Directory: "STRING_VALUE", // required
 * //     OwnerId: "STRING_VALUE", // required
 * //     RepositoryName: "STRING_VALUE", // required
 * //     ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab", // required
 * //     Sha: "STRING_VALUE", // required
 * //   },
 * //   LatestSuccessfulSync: { // ResourceSyncAttempt
 * //     Events: [ // ResourceSyncEventList // required
 * //       { // ResourceSyncEvent
 * //         Event: "STRING_VALUE", // required
 * //         ExternalId: "STRING_VALUE",
 * //         Time: new Date("TIMESTAMP"), // required
 * //         Type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     InitialRevision: {
 * //       Branch: "STRING_VALUE", // required
 * //       Directory: "STRING_VALUE", // required
 * //       OwnerId: "STRING_VALUE", // required
 * //       RepositoryName: "STRING_VALUE", // required
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab", // required
 * //       Sha: "STRING_VALUE", // required
 * //     },
 * //     StartedAt: new Date("TIMESTAMP"), // required
 * //     Status: "FAILED" || "INITIATED" || "IN_PROGRESS" || "SUCCEEDED", // required
 * //     TargetRevision: {
 * //       Branch: "STRING_VALUE", // required
 * //       Directory: "STRING_VALUE", // required
 * //       OwnerId: "STRING_VALUE", // required
 * //       RepositoryName: "STRING_VALUE", // required
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab", // required
 * //       Sha: "STRING_VALUE", // required
 * //     },
 * //     Target: "STRING_VALUE", // required
 * //   },
 * //   LatestSync: {
 * //     Events: [ // required
 * //       {
 * //         Event: "STRING_VALUE", // required
 * //         ExternalId: "STRING_VALUE",
 * //         Time: new Date("TIMESTAMP"), // required
 * //         Type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     InitialRevision: {
 * //       Branch: "STRING_VALUE", // required
 * //       Directory: "STRING_VALUE", // required
 * //       OwnerId: "STRING_VALUE", // required
 * //       RepositoryName: "STRING_VALUE", // required
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab", // required
 * //       Sha: "STRING_VALUE", // required
 * //     },
 * //     StartedAt: new Date("TIMESTAMP"), // required
 * //     Status: "FAILED" || "INITIATED" || "IN_PROGRESS" || "SUCCEEDED", // required
 * //     TargetRevision: {
 * //       Branch: "STRING_VALUE", // required
 * //       Directory: "STRING_VALUE", // required
 * //       OwnerId: "STRING_VALUE", // required
 * //       RepositoryName: "STRING_VALUE", // required
 * //       ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab", // required
 * //       Sha: "STRING_VALUE", // required
 * //     },
 * //     Target: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourceSyncStatusCommandInput - {@link GetResourceSyncStatusCommandInput}
 * @returns {@link GetResourceSyncStatusCommandOutput}
 * @see {@link GetResourceSyncStatusCommandInput} for command's `input` shape.
 * @see {@link GetResourceSyncStatusCommandOutput} for command's `response` shape.
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
export class GetResourceSyncStatusCommand extends $Command<
  GetResourceSyncStatusCommandInput,
  GetResourceSyncStatusCommandOutput,
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
  constructor(readonly input: GetResourceSyncStatusCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarConnectionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceSyncStatusCommandInput, GetResourceSyncStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceSyncStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarConnectionsClient";
    const commandName = "GetResourceSyncStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeStar_connections_20191201",
        operation: "GetResourceSyncStatus",
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
  private serialize(input: GetResourceSyncStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetResourceSyncStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceSyncStatusCommandOutput> {
    return de_GetResourceSyncStatusCommand(output, context);
  }
}
