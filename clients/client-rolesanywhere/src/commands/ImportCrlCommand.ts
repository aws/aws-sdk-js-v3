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

import { CrlDetailResponse, ImportCrlRequest, ImportCrlRequestFilterSensitiveLog } from "../models/models_0";
import { de_ImportCrlCommand, se_ImportCrlCommand } from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ImportCrlCommand}.
 */
export interface ImportCrlCommandInput extends ImportCrlRequest {}
/**
 * @public
 *
 * The output of {@link ImportCrlCommand}.
 */
export interface ImportCrlCommandOutput extends CrlDetailResponse, __MetadataBearer {}

/**
 * @public
 * <p>Imports the certificate revocation list (CRL). A CRL is a list of certificates that have
 *          been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere
 *          validates against the CRL before issuing credentials. </p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:ImportCrl</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, ImportCrlCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, ImportCrlCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * const client = new RolesAnywhereClient(config);
 * const input = { // ImportCrlRequest
 *   name: "STRING_VALUE", // required
 *   crlData: "BLOB_VALUE", // required
 *   enabled: true || false,
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   trustAnchorArn: "STRING_VALUE", // required
 * };
 * const command = new ImportCrlCommand(input);
 * const response = await client.send(command);
 * // { // CrlDetailResponse
 * //   crl: { // CrlDetail
 * //     crlId: "STRING_VALUE",
 * //     crlArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     enabled: true || false,
 * //     crlData: "BLOB_VALUE",
 * //     trustAnchorArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ImportCrlCommandInput - {@link ImportCrlCommandInput}
 * @returns {@link ImportCrlCommandOutput}
 * @see {@link ImportCrlCommandInput} for command's `input` shape.
 * @see {@link ImportCrlCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link RolesAnywhereServiceException}
 * <p>Base exception class for all service exceptions from RolesAnywhere service.</p>
 *
 */
export class ImportCrlCommand extends $Command<
  ImportCrlCommandInput,
  ImportCrlCommandOutput,
  RolesAnywhereClientResolvedConfig
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
  constructor(readonly input: ImportCrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RolesAnywhereClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportCrlCommandInput, ImportCrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ImportCrlCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RolesAnywhereClient";
    const commandName = "ImportCrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportCrlRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RolesAnywhere",
        operation: "ImportCrl",
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
  private serialize(input: ImportCrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ImportCrlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportCrlCommandOutput> {
    return de_ImportCrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
