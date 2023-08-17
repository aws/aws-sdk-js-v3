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

import {
  AddResourcePermissionsRequest,
  AddResourcePermissionsRequestFilterSensitiveLog,
  AddResourcePermissionsResponse,
  AddResourcePermissionsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_AddResourcePermissionsCommand, se_AddResourcePermissionsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddResourcePermissionsCommand}.
 */
export interface AddResourcePermissionsCommandInput extends AddResourcePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link AddResourcePermissionsCommand}.
 */
export interface AddResourcePermissionsCommandOutput extends AddResourcePermissionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a set of permissions for the specified folder or document. The resource
 *             permissions are overwritten if the principals already have different
 *             permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, AddResourcePermissionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, AddResourcePermissionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const input = { // AddResourcePermissionsRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   ResourceId: "STRING_VALUE", // required
 *   Principals: [ // SharePrincipalList // required
 *     { // SharePrincipal
 *       Id: "STRING_VALUE", // required
 *       Type: "USER" || "GROUP" || "INVITE" || "ANONYMOUS" || "ORGANIZATION", // required
 *       Role: "VIEWER" || "CONTRIBUTOR" || "OWNER" || "COOWNER", // required
 *     },
 *   ],
 *   NotificationOptions: { // NotificationOptions
 *     SendEmail: true || false,
 *     EmailMessage: "STRING_VALUE",
 *   },
 * };
 * const command = new AddResourcePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // AddResourcePermissionsResponse
 * //   ShareResults: [ // ShareResultsList
 * //     { // ShareResult
 * //       PrincipalId: "STRING_VALUE",
 * //       InviteePrincipalId: "STRING_VALUE",
 * //       Role: "VIEWER" || "CONTRIBUTOR" || "OWNER" || "COOWNER",
 * //       Status: "SUCCESS" || "FAILURE",
 * //       ShareId: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddResourcePermissionsCommandInput - {@link AddResourcePermissionsCommandInput}
 * @returns {@link AddResourcePermissionsCommandOutput}
 * @see {@link AddResourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link AddResourcePermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *  <p>The specified document version is not in the INITIALIZED state.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>The operation is not permitted.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 * @throws {@link WorkDocsServiceException}
 * <p>Base exception class for all service exceptions from WorkDocs service.</p>
 *
 */
export class AddResourcePermissionsCommand extends $Command<
  AddResourcePermissionsCommandInput,
  AddResourcePermissionsCommandOutput,
  WorkDocsClientResolvedConfig
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
  constructor(readonly input: AddResourcePermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddResourcePermissionsCommandInput, AddResourcePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddResourcePermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "AddResourcePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddResourcePermissionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AddResourcePermissionsResponseFilterSensitiveLog,
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
  private serialize(input: AddResourcePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddResourcePermissionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddResourcePermissionsCommandOutput> {
    return de_AddResourcePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
