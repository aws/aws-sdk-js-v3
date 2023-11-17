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
import { UpdateSyncBlockerInput, UpdateSyncBlockerOutput } from "../models/models_0";
import { de_UpdateSyncBlockerCommand, se_UpdateSyncBlockerCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSyncBlockerCommand}.
 */
export interface UpdateSyncBlockerCommandInput extends UpdateSyncBlockerInput {}
/**
 * @public
 *
 * The output of {@link UpdateSyncBlockerCommand}.
 */
export interface UpdateSyncBlockerCommandOutput extends UpdateSyncBlockerOutput, __MetadataBearer {}

/**
 * @public
 * <p>Allows you to update the status of a sync blocker, resolving the blocker and allowing syncing to continue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, UpdateSyncBlockerCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, UpdateSyncBlockerCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // UpdateSyncBlockerInput
 *   Id: "STRING_VALUE", // required
 *   SyncType: "CFN_STACK_SYNC", // required
 *   ResourceName: "STRING_VALUE", // required
 *   ResolvedReason: "STRING_VALUE", // required
 * };
 * const command = new UpdateSyncBlockerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSyncBlockerOutput
 * //   ResourceName: "STRING_VALUE", // required
 * //   ParentResourceName: "STRING_VALUE",
 * //   SyncBlocker: { // SyncBlocker
 * //     Id: "STRING_VALUE", // required
 * //     Type: "AUTOMATED", // required
 * //     Status: "ACTIVE" || "RESOLVED", // required
 * //     CreatedReason: "STRING_VALUE", // required
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     Contexts: [ // SyncBlockerContextList
 * //       { // SyncBlockerContext
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ResolvedReason: "STRING_VALUE",
 * //     ResolvedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSyncBlockerCommandInput - {@link UpdateSyncBlockerCommandInput}
 * @returns {@link UpdateSyncBlockerCommandOutput}
 * @see {@link UpdateSyncBlockerCommandInput} for command's `input` shape.
 * @see {@link UpdateSyncBlockerCommandOutput} for command's `response` shape.
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
 * @throws {@link RetryLatestCommitFailedException} (server fault)
 *  <p>Retrying the latest commit failed. Try again later.</p>
 *
 * @throws {@link SyncBlockerDoesNotExistException} (client fault)
 *  <p>Unable to continue. The sync blocker does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 */
export class UpdateSyncBlockerCommand extends $Command<
  UpdateSyncBlockerCommandInput,
  UpdateSyncBlockerCommandOutput,
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
  constructor(readonly input: UpdateSyncBlockerCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarConnectionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSyncBlockerCommandInput, UpdateSyncBlockerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSyncBlockerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarConnectionsClient";
    const commandName = "UpdateSyncBlockerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeStar_connections_20191201",
        operation: "UpdateSyncBlocker",
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
  private serialize(input: UpdateSyncBlockerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSyncBlockerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSyncBlockerCommandOutput> {
    return de_UpdateSyncBlockerCommand(output, context);
  }
}
