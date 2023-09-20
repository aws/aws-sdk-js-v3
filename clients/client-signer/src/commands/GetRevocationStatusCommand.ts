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

import { GetRevocationStatusRequest, GetRevocationStatusResponse } from "../models/models_0";
import { de_GetRevocationStatusCommand, se_GetRevocationStatusCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRevocationStatusCommand}.
 */
export interface GetRevocationStatusCommandInput extends GetRevocationStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetRevocationStatusCommand}.
 */
export interface GetRevocationStatusCommandOutput extends GetRevocationStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the
 * 			revocation status of one or more of the signing profile, signing job, and signing
 * 			certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, GetRevocationStatusCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, GetRevocationStatusCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const input = { // GetRevocationStatusRequest
 *   signatureTimestamp: new Date("TIMESTAMP"), // required
 *   platformId: "STRING_VALUE", // required
 *   profileVersionArn: "STRING_VALUE", // required
 *   jobArn: "STRING_VALUE", // required
 *   certificateHashes: [ // CertificateHashes // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetRevocationStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetRevocationStatusResponse
 * //   revokedEntities: [ // RevokedEntities
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRevocationStatusCommandInput - {@link GetRevocationStatusCommandInput}
 * @returns {@link GetRevocationStatusCommandOutput}
 * @see {@link GetRevocationStatusCommandInput} for command's `input` shape.
 * @see {@link GetRevocationStatusCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The allowed number of job-signing requests has been exceeded.</p>
 * 		       <p>This error supersedes the error <code>ThrottlingException</code>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You signing certificate could not be validated.</p>
 *
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 */
export class GetRevocationStatusCommand extends $Command<
  GetRevocationStatusCommandInput,
  GetRevocationStatusCommandOutput,
  SignerClientResolvedConfig
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
  constructor(readonly input: GetRevocationStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SignerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRevocationStatusCommandInput, GetRevocationStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRevocationStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "GetRevocationStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WallabyService",
        operation: "GetRevocationStatus",
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
  private serialize(input: GetRevocationStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRevocationStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRevocationStatusCommandOutput> {
    return de_GetRevocationStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
