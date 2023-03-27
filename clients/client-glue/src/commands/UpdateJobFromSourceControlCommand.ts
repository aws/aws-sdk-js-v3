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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateJobFromSourceControlRequest, UpdateJobFromSourceControlResponse } from "../models/models_2";
import {
  deserializeAws_json1_1UpdateJobFromSourceControlCommand,
  serializeAws_json1_1UpdateJobFromSourceControlCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateJobFromSourceControlCommand}.
 */
export interface UpdateJobFromSourceControlCommandInput extends UpdateJobFromSourceControlRequest {}
/**
 * @public
 *
 * The output of {@link UpdateJobFromSourceControlCommand}.
 */
export interface UpdateJobFromSourceControlCommandOutput extends UpdateJobFromSourceControlResponse, __MetadataBearer {}

/**
 * @public
 * <p>Synchronizes a job from the source control repository. This operation takes the job artifacts that are located in the remote repository and updates the Glue internal stores with these artifacts.</p>
 *          <p>This API supports optional parameters which take in the repository information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateJobFromSourceControlCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateJobFromSourceControlCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // UpdateJobFromSourceControlRequest
 *   JobName: "STRING_VALUE",
 *   Provider: "GITHUB" || "AWS_CODE_COMMIT",
 *   RepositoryName: "STRING_VALUE",
 *   RepositoryOwner: "STRING_VALUE",
 *   BranchName: "STRING_VALUE",
 *   Folder: "STRING_VALUE",
 *   CommitId: "STRING_VALUE",
 *   AuthStrategy: "PERSONAL_ACCESS_TOKEN" || "AWS_SECRETS_MANAGER",
 *   AuthToken: "STRING_VALUE",
 * };
 * const command = new UpdateJobFromSourceControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateJobFromSourceControlCommandInput - {@link UpdateJobFromSourceControlCommandInput}
 * @returns {@link UpdateJobFromSourceControlCommandOutput}
 * @see {@link UpdateJobFromSourceControlCommandInput} for command's `input` shape.
 * @see {@link UpdateJobFromSourceControlCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 *
 */
export class UpdateJobFromSourceControlCommand extends $Command<
  UpdateJobFromSourceControlCommandInput,
  UpdateJobFromSourceControlCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: UpdateJobFromSourceControlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateJobFromSourceControlCommandInput, UpdateJobFromSourceControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateJobFromSourceControlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateJobFromSourceControlCommand";
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
  private serialize(input: UpdateJobFromSourceControlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateJobFromSourceControlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateJobFromSourceControlCommandOutput> {
    return deserializeAws_json1_1UpdateJobFromSourceControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
