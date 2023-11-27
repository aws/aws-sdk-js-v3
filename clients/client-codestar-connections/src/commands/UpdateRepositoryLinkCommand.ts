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
import { UpdateRepositoryLinkInput, UpdateRepositoryLinkOutput } from "../models/models_0";
import { de_UpdateRepositoryLinkCommand, se_UpdateRepositoryLinkCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRepositoryLinkCommand}.
 */
export interface UpdateRepositoryLinkCommandInput extends UpdateRepositoryLinkInput {}
/**
 * @public
 *
 * The output of {@link UpdateRepositoryLinkCommand}.
 */
export interface UpdateRepositoryLinkCommandOutput extends UpdateRepositoryLinkOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the association between your connection and a specified external Git repository.
 *       A repository link allows Git sync to monitor and sync changes to files in a specified Git
 *       repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, UpdateRepositoryLinkCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, UpdateRepositoryLinkCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // UpdateRepositoryLinkInput
 *   ConnectionArn: "STRING_VALUE",
 *   EncryptionKeyArn: "STRING_VALUE",
 *   RepositoryLinkId: "STRING_VALUE", // required
 * };
 * const command = new UpdateRepositoryLinkCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRepositoryLinkOutput
 * //   RepositoryLinkInfo: { // RepositoryLinkInfo
 * //     ConnectionArn: "STRING_VALUE", // required
 * //     EncryptionKeyArn: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE", // required
 * //     ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab", // required
 * //     RepositoryLinkArn: "STRING_VALUE", // required
 * //     RepositoryLinkId: "STRING_VALUE", // required
 * //     RepositoryName: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRepositoryLinkCommandInput - {@link UpdateRepositoryLinkCommandInput}
 * @returns {@link UpdateRepositoryLinkCommandOutput}
 * @see {@link UpdateRepositoryLinkCommandInput} for command's `input` shape.
 * @see {@link UpdateRepositoryLinkCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConditionalCheckFailedException} (client fault)
 *  <p>The conditional check failed. Try again later.</p>
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
 * @throws {@link UpdateOutOfSyncException} (client fault)
 *  <p>The update is out of sync. Try syncing again.</p>
 *
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 */
export class UpdateRepositoryLinkCommand extends $Command<
  UpdateRepositoryLinkCommandInput,
  UpdateRepositoryLinkCommandOutput,
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
  constructor(readonly input: UpdateRepositoryLinkCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarConnectionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRepositoryLinkCommandInput, UpdateRepositoryLinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRepositoryLinkCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarConnectionsClient";
    const commandName = "UpdateRepositoryLinkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeStar_connections_20191201",
        operation: "UpdateRepositoryLink",
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
  private serialize(input: UpdateRepositoryLinkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRepositoryLinkCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRepositoryLinkCommandOutput> {
    return de_UpdateRepositoryLinkCommand(output, context);
  }
}
