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

import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { CreateEnvironmentMembershipRequest, CreateEnvironmentMembershipResult } from "../models/models_0";
import { de_CreateEnvironmentMembershipCommand, se_CreateEnvironmentMembershipCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentMembershipCommand}.
 */
export interface CreateEnvironmentMembershipCommandInput extends CreateEnvironmentMembershipRequest {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentMembershipCommand}.
 */
export interface CreateEnvironmentMembershipCommandOutput extends CreateEnvironmentMembershipResult, __MetadataBearer {}

/**
 * @public
 * <p>Adds an environment member to an Cloud9 development environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, CreateEnvironmentMembershipCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, CreateEnvironmentMembershipCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const input = { // CreateEnvironmentMembershipRequest
 *   environmentId: "STRING_VALUE", // required
 *   userArn: "STRING_VALUE", // required
 *   permissions: "read-write" || "read-only", // required
 * };
 * const command = new CreateEnvironmentMembershipCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentMembershipResult
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
 * @param CreateEnvironmentMembershipCommandInput - {@link CreateEnvironmentMembershipCommandInput}
 * @returns {@link CreateEnvironmentMembershipCommandOutput}
 * @see {@link CreateEnvironmentMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentMembershipCommandOutput} for command's `response` shape.
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
 * @example CreateEnvironmentMembership
 * ```javascript
 * //
 * const input = {
 *   "environmentId": "8d9967e2f0624182b74e7690ad69ebEX",
 *   "permissions": "read-write",
 *   "userArn": "arn:aws:iam::123456789012:user/AnotherDemoUser"
 * };
 * const command = new CreateEnvironmentMembershipCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "membership": {
 *     "environmentId": "8d9967e2f0624182b74e7690ad69ebEX",
 *     "permissions": "read-write",
 *     "userArn": "arn:aws:iam::123456789012:user/AnotherDemoUser",
 *     "userId": "AIDAJ3BA6O2FMJWCWXHEX"
 *   }
 * }
 * *\/
 * // example id: createenvironmentmembership-1516822583452
 * ```
 *
 */
export class CreateEnvironmentMembershipCommand extends $Command<
  CreateEnvironmentMembershipCommandInput,
  CreateEnvironmentMembershipCommandOutput,
  Cloud9ClientResolvedConfig
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
  constructor(readonly input: CreateEnvironmentMembershipCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Cloud9ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEnvironmentMembershipCommandInput, CreateEnvironmentMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEnvironmentMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Cloud9Client";
    const commandName = "CreateEnvironmentMembershipCommand";
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
  private serialize(input: CreateEnvironmentMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateEnvironmentMembershipCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateEnvironmentMembershipCommandOutput> {
    return de_CreateEnvironmentMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
