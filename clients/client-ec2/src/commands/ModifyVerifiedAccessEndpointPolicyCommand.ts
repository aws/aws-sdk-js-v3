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
import {
  ModifyVerifiedAccessEndpointPolicyRequest,
  ModifyVerifiedAccessEndpointPolicyResult,
} from "../models/models_6";
import {
  de_ModifyVerifiedAccessEndpointPolicyCommand,
  se_ModifyVerifiedAccessEndpointPolicyCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyVerifiedAccessEndpointPolicyCommand}.
 */
export interface ModifyVerifiedAccessEndpointPolicyCommandInput extends ModifyVerifiedAccessEndpointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVerifiedAccessEndpointPolicyCommand}.
 */
export interface ModifyVerifiedAccessEndpointPolicyCommandOutput
  extends ModifyVerifiedAccessEndpointPolicyResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the specified Amazon Web Services Verified Access endpoint policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVerifiedAccessEndpointPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVerifiedAccessEndpointPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyVerifiedAccessEndpointPolicyRequest
 *   VerifiedAccessEndpointId: "STRING_VALUE", // required
 *   PolicyEnabled: true || false,
 *   PolicyDocument: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   SseSpecification: { // VerifiedAccessSseSpecificationRequest
 *     CustomerManagedKeyEnabled: true || false,
 *     KmsKeyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new ModifyVerifiedAccessEndpointPolicyCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVerifiedAccessEndpointPolicyResult
 * //   PolicyEnabled: true || false,
 * //   PolicyDocument: "STRING_VALUE",
 * //   SseSpecification: { // VerifiedAccessSseSpecificationResponse
 * //     CustomerManagedKeyEnabled: true || false,
 * //     KmsKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyVerifiedAccessEndpointPolicyCommandInput - {@link ModifyVerifiedAccessEndpointPolicyCommandInput}
 * @returns {@link ModifyVerifiedAccessEndpointPolicyCommandOutput}
 * @see {@link ModifyVerifiedAccessEndpointPolicyCommandInput} for command's `input` shape.
 * @see {@link ModifyVerifiedAccessEndpointPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyVerifiedAccessEndpointPolicyCommand extends $Command<
  ModifyVerifiedAccessEndpointPolicyCommandInput,
  ModifyVerifiedAccessEndpointPolicyCommandOutput,
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
  constructor(readonly input: ModifyVerifiedAccessEndpointPolicyCommandInput) {
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
  ): Handler<ModifyVerifiedAccessEndpointPolicyCommandInput, ModifyVerifiedAccessEndpointPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVerifiedAccessEndpointPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVerifiedAccessEndpointPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyVerifiedAccessEndpointPolicy",
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
    input: ModifyVerifiedAccessEndpointPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyVerifiedAccessEndpointPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVerifiedAccessEndpointPolicyCommandOutput> {
    return de_ModifyVerifiedAccessEndpointPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
