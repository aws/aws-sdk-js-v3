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

import { ListTrustStoreCertificatesRequest, ListTrustStoreCertificatesResponse } from "../models/models_0";
import { de_ListTrustStoreCertificatesCommand, se_ListTrustStoreCertificatesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTrustStoreCertificatesCommand}.
 */
export interface ListTrustStoreCertificatesCommandInput extends ListTrustStoreCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link ListTrustStoreCertificatesCommand}.
 */
export interface ListTrustStoreCertificatesCommandOutput extends ListTrustStoreCertificatesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of trust store certificates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListTrustStoreCertificatesCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListTrustStoreCertificatesCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListTrustStoreCertificatesRequest
 *   trustStoreArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTrustStoreCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ListTrustStoreCertificatesResponse
 * //   certificateList: [ // CertificateSummaryList
 * //     { // CertificateSummary
 * //       thumbprint: "STRING_VALUE",
 * //       subject: "STRING_VALUE",
 * //       issuer: "STRING_VALUE",
 * //       notValidBefore: new Date("TIMESTAMP"),
 * //       notValidAfter: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   trustStoreArn: "STRING_VALUE", // required
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTrustStoreCertificatesCommandInput - {@link ListTrustStoreCertificatesCommandInput}
 * @returns {@link ListTrustStoreCertificatesCommandOutput}
 * @see {@link ListTrustStoreCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListTrustStoreCertificatesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 */
export class ListTrustStoreCertificatesCommand extends $Command<
  ListTrustStoreCertificatesCommandInput,
  ListTrustStoreCertificatesCommandOutput,
  WorkSpacesWebClientResolvedConfig
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
  constructor(readonly input: ListTrustStoreCertificatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesWebClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTrustStoreCertificatesCommandInput, ListTrustStoreCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTrustStoreCertificatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "ListTrustStoreCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSErmineControlPlaneService",
        operation: "ListTrustStoreCertificates",
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
  private serialize(input: ListTrustStoreCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTrustStoreCertificatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTrustStoreCertificatesCommandOutput> {
    return de_ListTrustStoreCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
