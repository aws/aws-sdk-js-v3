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

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { DeleteResourcesByExternalIdInput, DeleteResourcesByExternalIdOutput } from "../models/models_0";
import { de_DeleteResourcesByExternalIdCommand, se_DeleteResourcesByExternalIdCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourcesByExternalIdCommand}.
 */
export interface DeleteResourcesByExternalIdCommandInput extends DeleteResourcesByExternalIdInput {}
/**
 * @public
 *
 * The output of {@link DeleteResourcesByExternalIdCommand}.
 */
export interface DeleteResourcesByExternalIdCommandOutput extends DeleteResourcesByExternalIdOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes resources linked to an external ID. This action only applies if you have
 *             configured blue/green deployments through CloudFormation. </p>
 *          <note>
 *             <p>It is not necessary to call this action directly. CloudFormation calls it
 *                 on your behalf when it needs to delete stack resources. This action is offered
 *                 publicly in case you need to delete resources to comply with General Data Protection
 *                 Regulation (GDPR) requirements.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeleteResourcesByExternalIdCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeleteResourcesByExternalIdCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // DeleteResourcesByExternalIdInput
 *   externalId: "STRING_VALUE",
 * };
 * const command = new DeleteResourcesByExternalIdCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourcesByExternalIdCommandInput - {@link DeleteResourcesByExternalIdCommandInput}
 * @returns {@link DeleteResourcesByExternalIdCommandOutput}
 * @see {@link DeleteResourcesByExternalIdCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcesByExternalIdCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class DeleteResourcesByExternalIdCommand extends $Command<
  DeleteResourcesByExternalIdCommandInput,
  DeleteResourcesByExternalIdCommandOutput,
  CodeDeployClientResolvedConfig
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
  constructor(readonly input: DeleteResourcesByExternalIdCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteResourcesByExternalIdCommandInput, DeleteResourcesByExternalIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteResourcesByExternalIdCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "DeleteResourcesByExternalIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeDeploy_20141006",
        operation: "DeleteResourcesByExternalId",
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
  private serialize(input: DeleteResourcesByExternalIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteResourcesByExternalIdCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteResourcesByExternalIdCommandOutput> {
    return de_DeleteResourcesByExternalIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
