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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetGroupCertificateAuthorityRequest, GetGroupCertificateAuthorityResponse } from "../models/models_0";
import {
  de_GetGroupCertificateAuthorityCommand,
  se_GetGroupCertificateAuthorityCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetGroupCertificateAuthorityCommand}.
 */
export interface GetGroupCertificateAuthorityCommandInput extends GetGroupCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link GetGroupCertificateAuthorityCommand}.
 */
export interface GetGroupCertificateAuthorityCommandOutput
  extends GetGroupCertificateAuthorityResponse,
    __MetadataBearer {}

/**
 * @public
 * Retreives the CA associated with a group. Returns the public key of the CA.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetGroupCertificateAuthorityCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetGroupCertificateAuthorityCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetGroupCertificateAuthorityRequest
 *   CertificateAuthorityId: "STRING_VALUE", // required
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new GetGroupCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupCertificateAuthorityResponse
 * //   GroupCertificateAuthorityArn: "STRING_VALUE",
 * //   GroupCertificateAuthorityId: "STRING_VALUE",
 * //   PemEncodedCertificate: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGroupCertificateAuthorityCommandInput - {@link GetGroupCertificateAuthorityCommandInput}
 * @returns {@link GetGroupCertificateAuthorityCommandOutput}
 * @see {@link GetGroupCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link GetGroupCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class GetGroupCertificateAuthorityCommand extends $Command<
  GetGroupCertificateAuthorityCommandInput,
  GetGroupCertificateAuthorityCommandOutput,
  GreengrassClientResolvedConfig
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
  constructor(readonly input: GetGroupCertificateAuthorityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGroupCertificateAuthorityCommandInput, GetGroupCertificateAuthorityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetGroupCertificateAuthorityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetGroupCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Greengrass",
        operation: "GetGroupCertificateAuthority",
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
  private serialize(input: GetGroupCertificateAuthorityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetGroupCertificateAuthorityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetGroupCertificateAuthorityCommandOutput> {
    return de_GetGroupCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
