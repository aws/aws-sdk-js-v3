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
import { AssociateCreatedArtifactRequest, AssociateCreatedArtifactResult } from "../models/models_0";
import { de_AssociateCreatedArtifactCommand, se_AssociateCreatedArtifactCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateCreatedArtifactCommand}.
 */
export interface AssociateCreatedArtifactCommandInput extends AssociateCreatedArtifactRequest {}
/**
 * @public
 *
 * The output of {@link AssociateCreatedArtifactCommand}.
 */
export interface AssociateCreatedArtifactCommandOutput extends AssociateCreatedArtifactResult, __MetadataBearer {}

/**
 * @public
 * <p>Associates a created artifact of an AWS cloud resource, the target receiving the
 *          migration, with the migration task performed by a migration tool. This API has the
 *          following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to
 *                indicate which AWS artifact is associated with a migration task.</p>
 *             </li>
 *             <li>
 *                <p>The created artifact name must be provided in ARN (Amazon Resource Name) format
 *                which will contain information about type and region; for example:
 *                   <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p>
 *             </li>
 *             <li>
 *                <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance,
 *                or DMS endpoint, etc.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, AssociateCreatedArtifactCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, AssociateCreatedArtifactCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const input = { // AssociateCreatedArtifactRequest
 *   ProgressUpdateStream: "STRING_VALUE", // required
 *   MigrationTaskName: "STRING_VALUE", // required
 *   CreatedArtifact: { // CreatedArtifact
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *   },
 *   DryRun: true || false,
 * };
 * const command = new AssociateCreatedArtifactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateCreatedArtifactCommandInput - {@link AssociateCreatedArtifactCommandInput}
 * @returns {@link AssociateCreatedArtifactCommandOutput}
 * @see {@link AssociateCreatedArtifactCommandInput} for command's `input` shape.
 * @see {@link AssociateCreatedArtifactCommandOutput} for command's `response` shape.
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
export class AssociateCreatedArtifactCommand extends $Command<
  AssociateCreatedArtifactCommandInput,
  AssociateCreatedArtifactCommandOutput,
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
  constructor(readonly input: AssociateCreatedArtifactCommandInput) {
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
  ): Handler<AssociateCreatedArtifactCommandInput, AssociateCreatedArtifactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateCreatedArtifactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "AssociateCreatedArtifactCommand";
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
  private serialize(input: AssociateCreatedArtifactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateCreatedArtifactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateCreatedArtifactCommandOutput> {
    return de_AssociateCreatedArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
