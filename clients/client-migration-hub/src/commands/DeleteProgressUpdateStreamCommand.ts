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

import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DeleteProgressUpdateStreamRequest, DeleteProgressUpdateStreamResult } from "../models/models_0";
import { de_DeleteProgressUpdateStreamCommand, se_DeleteProgressUpdateStreamCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteProgressUpdateStreamCommand}.
 */
export interface DeleteProgressUpdateStreamCommandInput extends DeleteProgressUpdateStreamRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProgressUpdateStreamCommand}.
 */
export interface DeleteProgressUpdateStreamCommandOutput extends DeleteProgressUpdateStreamResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a progress update stream, including all of its tasks, which was previously
 *          created as an AWS resource used for access control. This API has the following
 *          traits:</p>
 *          <ul>
 *             <li>
 *                <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the
 *                stream name (same as a <code>CreateProgressUpdateStream</code> call).</p>
 *             </li>
 *             <li>
 *                <p>The call will return, and a background process will asynchronously delete the
 *                stream and all of its resources (tasks, associated resources, resource attributes,
 *                created artifacts).</p>
 *             </li>
 *             <li>
 *                <p>If the stream takes time to be deleted, it might still show up on a
 *                   <code>ListProgressUpdateStreams</code> call.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>,
 *                   <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs related to the
 *                tasks belonging to the stream will throw "InvalidInputException" if the stream of the
 *                same name is in the process of being deleted.</p>
 *             </li>
 *             <li>
 *                <p>Once the stream and all of its resources are deleted,
 *                   <code>CreateProgressUpdateStream</code> for a stream of the same name will
 *                succeed, and that stream will be an entirely new logical resource (without any
 *                resources associated with the old stream).</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, DeleteProgressUpdateStreamCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, DeleteProgressUpdateStreamCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const input = { // DeleteProgressUpdateStreamRequest
 *   ProgressUpdateStreamName: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteProgressUpdateStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProgressUpdateStreamCommandInput - {@link DeleteProgressUpdateStreamCommandInput}
 * @returns {@link DeleteProgressUpdateStreamCommandOutput}
 * @see {@link DeleteProgressUpdateStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteProgressUpdateStreamCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link DryRunOperation} (client fault)
 *  <p>Exception raised to indicate a successfully authorized action when the
 *             <code>DryRun</code> flag is set to "true".</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home region is not set. Set the home region to continue.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Exception raised when an internal, configuration, or dependency error is
 *          encountered.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Exception raised when the provided input violates a policy constraint or is entered in
 *          the wrong format or data type.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception raised when the request references a resource (Application Discovery Service
 *          configuration, update stream, migration task, etc.) that does not exist in Application
 *          Discovery Service (Application Discovery Service) or in Migration Hub's repository.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Exception raised when there is an internal, configuration, or dependency error
 *          encountered.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code>
 *          flag is set to "true".</p>
 *
 * @throws {@link MigrationHubServiceException}
 * <p>Base exception class for all service exceptions from MigrationHub service.</p>
 *
 */
export class DeleteProgressUpdateStreamCommand extends $Command<
  DeleteProgressUpdateStreamCommandInput,
  DeleteProgressUpdateStreamCommandOutput,
  MigrationHubClientResolvedConfig
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
  constructor(readonly input: DeleteProgressUpdateStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteProgressUpdateStreamCommandInput, DeleteProgressUpdateStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteProgressUpdateStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "DeleteProgressUpdateStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DeleteProgressUpdateStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteProgressUpdateStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteProgressUpdateStreamCommandOutput> {
    return de_DeleteProgressUpdateStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
