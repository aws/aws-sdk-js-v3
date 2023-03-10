// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import {
  TestRepositoryTriggersInput,
  TestRepositoryTriggersInputFilterSensitiveLog,
  TestRepositoryTriggersOutput,
  TestRepositoryTriggersOutputFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1TestRepositoryTriggersCommand,
  serializeAws_json1_1TestRepositoryTriggersCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link TestRepositoryTriggersCommand}.
 */
export interface TestRepositoryTriggersCommandInput extends TestRepositoryTriggersInput {}
/**
 * The output of {@link TestRepositoryTriggersCommand}.
 */
export interface TestRepositoryTriggersCommandOutput extends TestRepositoryTriggersOutput, __MetadataBearer {}

/**
 * <p>Tests the functionality of repository triggers by sending information to the trigger
 *             target. If real data is available in the repository, the test sends data from the last
 *             commit. If no data is available, sample data is generated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, TestRepositoryTriggersCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, TestRepositoryTriggersCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new TestRepositoryTriggersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestRepositoryTriggersCommandInput} for command's `input` shape.
 * @see {@link TestRepositoryTriggersCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link EncryptionIntegrityChecksFailedException} (server fault)
 *  <p>An encryption integrity check failed.</p>
 *
 * @throws {@link EncryptionKeyAccessDeniedException} (client fault)
 *  <p>An encryption key could not be accessed.</p>
 *
 * @throws {@link EncryptionKeyDisabledException} (client fault)
 *  <p>The encryption key is disabled.</p>
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *  <p>No encryption key was found.</p>
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *  <p>The encryption key is not available.</p>
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *
 *         <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link InvalidRepositoryTriggerBranchNameException} (client fault)
 *  <p>One or more branch names specified for the trigger is not valid.</p>
 *
 * @throws {@link InvalidRepositoryTriggerCustomDataException} (client fault)
 *  <p>The custom data provided for the trigger is not valid.</p>
 *
 * @throws {@link InvalidRepositoryTriggerDestinationArnException} (client fault)
 *  <p>The Amazon Resource Name (ARN) for the trigger is not valid for the specified destination. The most common reason for this error is that the ARN does not meet the requirements for the service type.</p>
 *
 * @throws {@link InvalidRepositoryTriggerEventsException} (client fault)
 *  <p>One or more events specified for the trigger is not valid. Check to make sure that all events specified match the requirements for allowed events.</p>
 *
 * @throws {@link InvalidRepositoryTriggerNameException} (client fault)
 *  <p>The name of the trigger is not valid.</p>
 *
 * @throws {@link InvalidRepositoryTriggerRegionException} (client fault)
 *  <p>The AWS Region for the trigger target does not match the AWS Region for the
 *             repository. Triggers must be created in the same Region as the target for the
 *             trigger.</p>
 *
 * @throws {@link MaximumBranchesExceededException} (client fault)
 *  <p>The number of branches for the trigger was exceeded.</p>
 *
 * @throws {@link MaximumRepositoryTriggersExceededException} (client fault)
 *  <p>The number of triggers allowed for the repository was exceeded.</p>
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *  <p>The specified repository does not exist.</p>
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *  <p>A repository name is required, but was not specified.</p>
 *
 * @throws {@link RepositoryTriggerBranchNameListRequiredException} (client fault)
 *  <p>At least one branch name is required, but was not specified in the trigger
 *             configuration.</p>
 *
 * @throws {@link RepositoryTriggerDestinationArnRequiredException} (client fault)
 *  <p>A destination ARN for the target service for the trigger is required, but was not
 *             specified.</p>
 *
 * @throws {@link RepositoryTriggerEventsListRequiredException} (client fault)
 *  <p>At least one event for the trigger is required, but was not specified.</p>
 *
 * @throws {@link RepositoryTriggerNameRequiredException} (client fault)
 *  <p>A name for the trigger is required, but was not specified.</p>
 *
 * @throws {@link RepositoryTriggersListRequiredException} (client fault)
 *  <p>The list of triggers for the repository is required, but was not specified.</p>
 *
 *
 */
export class TestRepositoryTriggersCommand extends $Command<
  TestRepositoryTriggersCommandInput,
  TestRepositoryTriggersCommandOutput,
  CodeCommitClientResolvedConfig
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

  constructor(readonly input: TestRepositoryTriggersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestRepositoryTriggersCommandInput, TestRepositoryTriggersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TestRepositoryTriggersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "TestRepositoryTriggersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestRepositoryTriggersInputFilterSensitiveLog,
      outputFilterSensitiveLog: TestRepositoryTriggersOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestRepositoryTriggersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TestRepositoryTriggersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestRepositoryTriggersCommandOutput> {
    return deserializeAws_json1_1TestRepositoryTriggersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
