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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  GetServiceLinkedRoleDeletionStatusRequest,
  GetServiceLinkedRoleDeletionStatusResponse,
} from "../models/models_0";
import {
  de_GetServiceLinkedRoleDeletionStatusCommand,
  se_GetServiceLinkedRoleDeletionStatusCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetServiceLinkedRoleDeletionStatusCommand}.
 */
export interface GetServiceLinkedRoleDeletionStatusCommandInput extends GetServiceLinkedRoleDeletionStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceLinkedRoleDeletionStatusCommand}.
 */
export interface GetServiceLinkedRoleDeletionStatusCommandOutput
  extends GetServiceLinkedRoleDeletionStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion,
 *             you can use the <code>DeletionTaskId</code> parameter in
 *                 <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion.
 *             If the deletion fails, this operation returns the reason that it failed, if that
 *             information is returned by the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetServiceLinkedRoleDeletionStatusCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetServiceLinkedRoleDeletionStatusCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetServiceLinkedRoleDeletionStatusRequest
 *   DeletionTaskId: "STRING_VALUE", // required
 * };
 * const command = new GetServiceLinkedRoleDeletionStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceLinkedRoleDeletionStatusResponse
 * //   Status: "SUCCEEDED" || "IN_PROGRESS" || "FAILED" || "NOT_STARTED", // required
 * //   Reason: { // DeletionTaskFailureReasonType
 * //     Reason: "STRING_VALUE",
 * //     RoleUsageList: [ // RoleUsageListType
 * //       { // RoleUsageType
 * //         Region: "STRING_VALUE",
 * //         Resources: [ // ArnListType
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceLinkedRoleDeletionStatusCommandInput - {@link GetServiceLinkedRoleDeletionStatusCommandInput}
 * @returns {@link GetServiceLinkedRoleDeletionStatusCommandOutput}
 * @see {@link GetServiceLinkedRoleDeletionStatusCommandInput} for command's `input` shape.
 * @see {@link GetServiceLinkedRoleDeletionStatusCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
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
export class GetServiceLinkedRoleDeletionStatusCommand extends $Command<
  GetServiceLinkedRoleDeletionStatusCommandInput,
  GetServiceLinkedRoleDeletionStatusCommandOutput,
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
  constructor(readonly input: GetServiceLinkedRoleDeletionStatusCommandInput) {
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
  ): Handler<GetServiceLinkedRoleDeletionStatusCommandInput, GetServiceLinkedRoleDeletionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetServiceLinkedRoleDeletionStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetServiceLinkedRoleDeletionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "GetServiceLinkedRoleDeletionStatus",
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
  private serialize(
    input: GetServiceLinkedRoleDeletionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetServiceLinkedRoleDeletionStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetServiceLinkedRoleDeletionStatusCommandOutput> {
    return de_GetServiceLinkedRoleDeletionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
