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

import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { CreateProgressUpdateStreamRequest, CreateProgressUpdateStreamResult } from "../models/models_0";
import { de_CreateProgressUpdateStreamCommand, se_CreateProgressUpdateStreamCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateProgressUpdateStreamCommand}.
 */
export interface CreateProgressUpdateStreamCommandInput extends CreateProgressUpdateStreamRequest {}
/**
 * @public
 *
 * The output of {@link CreateProgressUpdateStreamCommand}.
 */
export interface CreateProgressUpdateStreamCommandOutput extends CreateProgressUpdateStreamResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a progress update stream which is an AWS resource used for access control as
 *          well as a namespace for migration task names that is implicitly linked to your AWS account.
 *          It must uniquely identify the migration tool as it is used for all updates made by the
 *          tool; however, it does not need to be unique for each AWS account because it is scoped to
 *          the AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, CreateProgressUpdateStreamCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, CreateProgressUpdateStreamCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const input = { // CreateProgressUpdateStreamRequest
 *   ProgressUpdateStreamName: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new CreateProgressUpdateStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateProgressUpdateStreamCommandInput - {@link CreateProgressUpdateStreamCommandInput}
 * @returns {@link CreateProgressUpdateStreamCommandOutput}
 * @see {@link CreateProgressUpdateStreamCommandInput} for command's `input` shape.
 * @see {@link CreateProgressUpdateStreamCommandOutput} for command's `response` shape.
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
export class CreateProgressUpdateStreamCommand extends $Command<
  CreateProgressUpdateStreamCommandInput,
  CreateProgressUpdateStreamCommandOutput,
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
  constructor(readonly input: CreateProgressUpdateStreamCommandInput) {
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
  ): Handler<CreateProgressUpdateStreamCommandInput, CreateProgressUpdateStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateProgressUpdateStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "CreateProgressUpdateStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMigrationHub",
        operation: "CreateProgressUpdateStream",
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
  private serialize(input: CreateProgressUpdateStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateProgressUpdateStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateProgressUpdateStreamCommandOutput> {
    return de_CreateProgressUpdateStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
