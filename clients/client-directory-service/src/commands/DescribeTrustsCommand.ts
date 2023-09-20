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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeTrustsRequest, DescribeTrustsResult } from "../models/models_0";
import { de_DescribeTrustsCommand, se_DescribeTrustsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrustsCommand}.
 */
export interface DescribeTrustsCommandInput extends DescribeTrustsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrustsCommand}.
 */
export interface DescribeTrustsCommandOutput extends DescribeTrustsResult, __MetadataBearer {}

/**
 * @public
 * <p>Obtains information about the trust relationships for this account.</p>
 *          <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request
 *       describes all the trust relationships belonging to the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeTrustsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeTrustsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeTrustsRequest
 *   DirectoryId: "STRING_VALUE",
 *   TrustIds: [ // TrustIds
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeTrustsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrustsResult
 * //   Trusts: [ // Trusts
 * //     { // Trust
 * //       DirectoryId: "STRING_VALUE",
 * //       TrustId: "STRING_VALUE",
 * //       RemoteDomainName: "STRING_VALUE",
 * //       TrustType: "Forest" || "External",
 * //       TrustDirection: "One-Way: Outgoing" || "One-Way: Incoming" || "Two-Way",
 * //       TrustState: "Creating" || "Created" || "Verifying" || "VerifyFailed" || "Verified" || "Updating" || "UpdateFailed" || "Updated" || "Deleting" || "Deleted" || "Failed",
 * //       CreatedDateTime: new Date("TIMESTAMP"),
 * //       LastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       StateLastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       TrustStateReason: "STRING_VALUE",
 * //       SelectiveAuth: "Enabled" || "Disabled",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTrustsCommandInput - {@link DescribeTrustsCommandInput}
 * @returns {@link DescribeTrustsCommandOutput}
 * @see {@link DescribeTrustsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 */
export class DescribeTrustsCommand extends $Command<
  DescribeTrustsCommandInput,
  DescribeTrustsCommandOutput,
  DirectoryServiceClientResolvedConfig
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
  constructor(readonly input: DescribeTrustsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTrustsCommandInput, DescribeTrustsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTrustsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeTrustsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DirectoryService_20150416",
        operation: "DescribeTrusts",
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
  private serialize(input: DescribeTrustsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTrustsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTrustsCommandOutput> {
    return de_DescribeTrustsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
