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
import {
  DescribeSharedDirectoriesRequest,
  DescribeSharedDirectoriesResult,
  DescribeSharedDirectoriesResultFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeSharedDirectoriesCommand, se_DescribeSharedDirectoriesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSharedDirectoriesCommand}.
 */
export interface DescribeSharedDirectoriesCommandInput extends DescribeSharedDirectoriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSharedDirectoriesCommand}.
 */
export interface DescribeSharedDirectoriesCommandOutput extends DescribeSharedDirectoriesResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns the shared directories in your account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeSharedDirectoriesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeSharedDirectoriesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeSharedDirectoriesRequest
 *   OwnerDirectoryId: "STRING_VALUE", // required
 *   SharedDirectoryIds: [ // DirectoryIds
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeSharedDirectoriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSharedDirectoriesResult
 * //   SharedDirectories: [ // SharedDirectories
 * //     { // SharedDirectory
 * //       OwnerAccountId: "STRING_VALUE",
 * //       OwnerDirectoryId: "STRING_VALUE",
 * //       ShareMethod: "ORGANIZATIONS" || "HANDSHAKE",
 * //       SharedAccountId: "STRING_VALUE",
 * //       SharedDirectoryId: "STRING_VALUE",
 * //       ShareStatus: "Shared" || "PendingAcceptance" || "Rejected" || "Rejecting" || "RejectFailed" || "Sharing" || "ShareFailed" || "Deleted" || "Deleting",
 * //       ShareNotes: "STRING_VALUE",
 * //       CreatedDateTime: new Date("TIMESTAMP"),
 * //       LastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSharedDirectoriesCommandInput - {@link DescribeSharedDirectoriesCommandInput}
 * @returns {@link DescribeSharedDirectoriesCommandOutput}
 * @see {@link DescribeSharedDirectoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeSharedDirectoriesCommandOutput} for command's `response` shape.
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
export class DescribeSharedDirectoriesCommand extends $Command<
  DescribeSharedDirectoriesCommandInput,
  DescribeSharedDirectoriesCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
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
  constructor(readonly input: DescribeSharedDirectoriesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSharedDirectoriesCommandInput, DescribeSharedDirectoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSharedDirectoriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeSharedDirectoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeSharedDirectoriesResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DirectoryService_20150416",
        operation: "DescribeSharedDirectories",
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
  private serialize(input: DescribeSharedDirectoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSharedDirectoriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSharedDirectoriesCommandOutput> {
    return de_DescribeSharedDirectoriesCommand(output, context);
  }
}
