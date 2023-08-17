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

import { PutDedicatedIpInPoolRequest, PutDedicatedIpInPoolResponse } from "../models/models_0";
import { de_PutDedicatedIpInPoolCommand, se_PutDedicatedIpInPoolCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutDedicatedIpInPoolCommand}.
 */
export interface PutDedicatedIpInPoolCommandInput extends PutDedicatedIpInPoolRequest {}
/**
 * @public
 *
 * The output of {@link PutDedicatedIpInPoolCommand}.
 */
export interface PutDedicatedIpInPoolCommandOutput extends PutDedicatedIpInPoolResponse, __MetadataBearer {}

/**
 * @public
 * <p>Move a dedicated IP address to an existing dedicated IP pool.</p>
 *          <note>
 *             <p>The dedicated IP address that you specify must already exist, and must be
 *                 associated with your Amazon Web Services account.
 *
 *             </p>
 *             <p>The dedicated IP pool you specify must already exist. You can create a new pool by
 *                 using the <code>CreateDedicatedIpPool</code> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutDedicatedIpInPoolCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutDedicatedIpInPoolCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // PutDedicatedIpInPoolRequest
 *   Ip: "STRING_VALUE", // required
 *   DestinationPoolName: "STRING_VALUE", // required
 * };
 * const command = new PutDedicatedIpInPoolCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDedicatedIpInPoolCommandInput - {@link PutDedicatedIpInPoolCommandInput}
 * @returns {@link PutDedicatedIpInPoolCommandOutput}
 * @see {@link PutDedicatedIpInPoolCommandInput} for command's `input` shape.
 * @see {@link PutDedicatedIpInPoolCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 */
export class PutDedicatedIpInPoolCommand extends $Command<
  PutDedicatedIpInPoolCommandInput,
  PutDedicatedIpInPoolCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: PutDedicatedIpInPoolCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDedicatedIpInPoolCommandInput, PutDedicatedIpInPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutDedicatedIpInPoolCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "PutDedicatedIpInPoolCommand";
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
  private serialize(input: PutDedicatedIpInPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutDedicatedIpInPoolCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutDedicatedIpInPoolCommandOutput> {
    return de_PutDedicatedIpInPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
