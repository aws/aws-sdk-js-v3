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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeletePolicyVersionRequest } from "../models/models_0";
import { de_DeletePolicyVersionCommand, se_DeletePolicyVersionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeletePolicyVersionCommand}.
 */
export interface DeletePolicyVersionCommandInput extends DeletePolicyVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeletePolicyVersionCommand}.
 */
export interface DeletePolicyVersionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified version from the specified managed policy.</p>
 *          <p>You cannot delete the default version from a policy using this operation. To delete
 *             the default version from a policy, use <a>DeletePolicy</a>. To find out which
 *             version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p>
 *          <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeletePolicyVersionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeletePolicyVersionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // DeletePolicyVersionRequest
 *   PolicyArn: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE", // required
 * };
 * const command = new DeletePolicyVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePolicyVersionCommandInput - {@link DeletePolicyVersionCommandInput}
 * @returns {@link DeletePolicyVersionCommandOutput}
 * @see {@link DeletePolicyVersionCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link DeleteConflictException} (client fault)
 *  <p>The request was rejected because it attempted to delete a resource that has attached
 *       subordinate entities. The error message describes these entities.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 */
export class DeletePolicyVersionCommand extends $Command<
  DeletePolicyVersionCommandInput,
  DeletePolicyVersionCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: DeletePolicyVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePolicyVersionCommandInput, DeletePolicyVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeletePolicyVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeletePolicyVersionCommand";
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
  private serialize(input: DeletePolicyVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeletePolicyVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePolicyVersionCommandOutput> {
    return de_DeletePolicyVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
