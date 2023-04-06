// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { GetIdentityResolutionJobRequest, GetIdentityResolutionJobResponse } from "../models/models_0";
import { de_GetIdentityResolutionJobCommand, se_GetIdentityResolutionJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetIdentityResolutionJobCommand}.
 */
export interface GetIdentityResolutionJobCommandInput extends GetIdentityResolutionJobRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentityResolutionJobCommand}.
 */
export interface GetIdentityResolutionJobCommandOutput extends GetIdentityResolutionJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about an Identity Resolution Job in a specific domain. </p>
 *          <p>Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/use-identity-resolution.html">Use
 *             Identity Resolution to consolidate similar profiles</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetIdentityResolutionJobCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetIdentityResolutionJobCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetIdentityResolutionJobRequest
 *   DomainName: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetIdentityResolutionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetIdentityResolutionJobCommandInput - {@link GetIdentityResolutionJobCommandInput}
 * @returns {@link GetIdentityResolutionJobCommandOutput}
 * @see {@link GetIdentityResolutionJobCommandInput} for command's `input` shape.
 * @see {@link GetIdentityResolutionJobCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 *
 */
export class GetIdentityResolutionJobCommand extends $Command<
  GetIdentityResolutionJobCommandInput,
  GetIdentityResolutionJobCommandOutput,
  CustomerProfilesClientResolvedConfig
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
  constructor(readonly input: GetIdentityResolutionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIdentityResolutionJobCommandInput, GetIdentityResolutionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIdentityResolutionJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "GetIdentityResolutionJobCommand";
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
  private serialize(input: GetIdentityResolutionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIdentityResolutionJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIdentityResolutionJobCommandOutput> {
    return de_GetIdentityResolutionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
