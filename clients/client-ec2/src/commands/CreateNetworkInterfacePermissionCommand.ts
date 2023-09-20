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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNetworkInterfacePermissionRequest, CreateNetworkInterfacePermissionResult } from "../models/models_1";
import {
  de_CreateNetworkInterfacePermissionCommand,
  se_CreateNetworkInterfacePermissionCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkInterfacePermissionCommand}.
 */
export interface CreateNetworkInterfacePermissionCommandInput extends CreateNetworkInterfacePermissionRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkInterfacePermissionCommand}.
 */
export interface CreateNetworkInterfacePermissionCommandOutput
  extends CreateNetworkInterfacePermissionResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Grants an Amazon Web Services-authorized account permission to attach the specified network interface to
 *             an instance in their account.</p>
 *          <p>You can grant permission to a single Amazon Web Services account only, and only one account at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkInterfacePermissionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkInterfacePermissionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateNetworkInterfacePermissionRequest
 *   NetworkInterfaceId: "STRING_VALUE", // required
 *   AwsAccountId: "STRING_VALUE",
 *   AwsService: "STRING_VALUE",
 *   Permission: "INSTANCE-ATTACH" || "EIP-ASSOCIATE", // required
 *   DryRun: true || false,
 * };
 * const command = new CreateNetworkInterfacePermissionCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkInterfacePermissionResult
 * //   InterfacePermission: { // NetworkInterfacePermission
 * //     NetworkInterfacePermissionId: "STRING_VALUE",
 * //     NetworkInterfaceId: "STRING_VALUE",
 * //     AwsAccountId: "STRING_VALUE",
 * //     AwsService: "STRING_VALUE",
 * //     Permission: "INSTANCE-ATTACH" || "EIP-ASSOCIATE",
 * //     PermissionState: { // NetworkInterfacePermissionState
 * //       State: "pending" || "granted" || "revoking" || "revoked",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateNetworkInterfacePermissionCommandInput - {@link CreateNetworkInterfacePermissionCommandInput}
 * @returns {@link CreateNetworkInterfacePermissionCommandOutput}
 * @see {@link CreateNetworkInterfacePermissionCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkInterfacePermissionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class CreateNetworkInterfacePermissionCommand extends $Command<
  CreateNetworkInterfacePermissionCommandInput,
  CreateNetworkInterfacePermissionCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: CreateNetworkInterfacePermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNetworkInterfacePermissionCommandInput, CreateNetworkInterfacePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNetworkInterfacePermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateNetworkInterfacePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "CreateNetworkInterfacePermission",
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
    input: CreateNetworkInterfacePermissionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateNetworkInterfacePermissionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateNetworkInterfacePermissionCommandOutput> {
    return de_CreateNetworkInterfacePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
