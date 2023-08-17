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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetVerifiedAccessGroupPolicyRequest, GetVerifiedAccessGroupPolicyResult } from "../models/models_5";
import { de_GetVerifiedAccessGroupPolicyCommand, se_GetVerifiedAccessGroupPolicyCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetVerifiedAccessGroupPolicyCommand}.
 */
export interface GetVerifiedAccessGroupPolicyCommandInput extends GetVerifiedAccessGroupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetVerifiedAccessGroupPolicyCommand}.
 */
export interface GetVerifiedAccessGroupPolicyCommandOutput
  extends GetVerifiedAccessGroupPolicyResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Shows the contents of the Verified Access policy associated with the group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetVerifiedAccessGroupPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetVerifiedAccessGroupPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetVerifiedAccessGroupPolicyRequest
 *   VerifiedAccessGroupId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetVerifiedAccessGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetVerifiedAccessGroupPolicyResult
 * //   PolicyEnabled: true || false,
 * //   PolicyDocument: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVerifiedAccessGroupPolicyCommandInput - {@link GetVerifiedAccessGroupPolicyCommandInput}
 * @returns {@link GetVerifiedAccessGroupPolicyCommandOutput}
 * @see {@link GetVerifiedAccessGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link GetVerifiedAccessGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetVerifiedAccessGroupPolicyCommand extends $Command<
  GetVerifiedAccessGroupPolicyCommandInput,
  GetVerifiedAccessGroupPolicyCommandOutput,
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
  constructor(readonly input: GetVerifiedAccessGroupPolicyCommandInput) {
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
  ): Handler<GetVerifiedAccessGroupPolicyCommandInput, GetVerifiedAccessGroupPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetVerifiedAccessGroupPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetVerifiedAccessGroupPolicyCommand";
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
  private serialize(input: GetVerifiedAccessGroupPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetVerifiedAccessGroupPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetVerifiedAccessGroupPolicyCommandOutput> {
    return de_GetVerifiedAccessGroupPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
