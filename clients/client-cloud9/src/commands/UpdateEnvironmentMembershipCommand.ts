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

import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { UpdateEnvironmentMembershipRequest, UpdateEnvironmentMembershipResult } from "../models/models_0";
import { de_UpdateEnvironmentMembershipCommand, se_UpdateEnvironmentMembershipCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateEnvironmentMembershipCommand}.
 */
export interface UpdateEnvironmentMembershipCommandInput extends UpdateEnvironmentMembershipRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentMembershipCommand}.
 */
export interface UpdateEnvironmentMembershipCommandOutput extends UpdateEnvironmentMembershipResult, __MetadataBearer {}

/**
 * @public
 * <p>Changes the settings of an existing environment member for an Cloud9 development
 *       environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, UpdateEnvironmentMembershipCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, UpdateEnvironmentMembershipCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const input = { // UpdateEnvironmentMembershipRequest
 *   environmentId: "STRING_VALUE", // required
 *   userArn: "STRING_VALUE", // required
 *   permissions: "read-write" || "read-only", // required
 * };
 * const command = new UpdateEnvironmentMembershipCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentMembershipResult
 * //   membership: { // EnvironmentMember
 * //     permissions: "owner" || "read-write" || "read-only", // required
 * //     userId: "STRING_VALUE", // required
 * //     userArn: "STRING_VALUE", // required
 * //     environmentId: "STRING_VALUE", // required
 * //     lastAccess: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateEnvironmentMembershipCommandInput - {@link UpdateEnvironmentMembershipCommandInput}
 * @returns {@link UpdateEnvironmentMembershipCommandOutput}
 * @see {@link UpdateEnvironmentMembershipCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentMembershipCommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for Cloud9Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The target request is invalid.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>An access permissions issue occurred.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The target resource cannot be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many service requests were made over the given time period.</p>
 *
 * @throws {@link Cloud9ServiceException}
 * <p>Base exception class for all service exceptions from Cloud9 service.</p>
 *
 * @example UpdateEnvironmentMembership
 * ```javascript
 * //
 * const input = {
 *   "environmentId": "8d9967e2f0624182b74e7690ad69ebEX",
 *   "permissions": "read-only",
 *   "userArn": "arn:aws:iam::123456789012:user/AnotherDemoUser"
 * };
 * const command = new UpdateEnvironmentMembershipCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "membership": {
 *     "environmentId": "8d9967e2f0624182b74e7690ad69eb31",
 *     "permissions": "read-only",
 *     "userArn": "arn:aws:iam::123456789012:user/AnotherDemoUser",
 *     "userId": "AIDAJ3BA6O2FMJWCWXHEX"
 *   }
 * }
 * *\/
 * // example id: updateenvironmentmembership-1516823876645
 * ```
 *
 */
export class UpdateEnvironmentMembershipCommand extends $Command<
  UpdateEnvironmentMembershipCommandInput,
  UpdateEnvironmentMembershipCommandOutput,
  Cloud9ClientResolvedConfig
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
  constructor(readonly input: UpdateEnvironmentMembershipCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Cloud9ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEnvironmentMembershipCommandInput, UpdateEnvironmentMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEnvironmentMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Cloud9Client";
    const commandName = "UpdateEnvironmentMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCloud9WorkspaceManagementService",
        operation: "UpdateEnvironmentMembership",
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
  private serialize(input: UpdateEnvironmentMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateEnvironmentMembershipCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateEnvironmentMembershipCommandOutput> {
    return de_UpdateEnvironmentMembershipCommand(output, context);
  }
}
