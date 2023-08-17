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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import {
  CreateLocationFsxWindowsRequest,
  CreateLocationFsxWindowsRequestFilterSensitiveLog,
  CreateLocationFsxWindowsResponse,
} from "../models/models_0";
import { de_CreateLocationFsxWindowsCommand, se_CreateLocationFsxWindowsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLocationFsxWindowsCommand}.
 */
export interface CreateLocationFsxWindowsCommandInput extends CreateLocationFsxWindowsRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocationFsxWindowsCommand}.
 */
export interface CreateLocationFsxWindowsCommandOutput extends CreateLocationFsxWindowsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an endpoint for an Amazon FSx for Windows File Server file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationFsxWindowsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationFsxWindowsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // CreateLocationFsxWindowsRequest
 *   Subdirectory: "STRING_VALUE",
 *   FsxFilesystemArn: "STRING_VALUE", // required
 *   SecurityGroupArns: [ // Ec2SecurityGroupArnList // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   User: "STRING_VALUE", // required
 *   Domain: "STRING_VALUE",
 *   Password: "STRING_VALUE", // required
 * };
 * const command = new CreateLocationFsxWindowsCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocationFsxWindowsResponse
 * //   LocationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLocationFsxWindowsCommandInput - {@link CreateLocationFsxWindowsCommandInput}
 * @returns {@link CreateLocationFsxWindowsCommandOutput}
 * @see {@link CreateLocationFsxWindowsCommandInput} for command's `input` shape.
 * @see {@link CreateLocationFsxWindowsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 */
export class CreateLocationFsxWindowsCommand extends $Command<
  CreateLocationFsxWindowsCommandInput,
  CreateLocationFsxWindowsCommandOutput,
  DataSyncClientResolvedConfig
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
  constructor(readonly input: CreateLocationFsxWindowsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLocationFsxWindowsCommandInput, CreateLocationFsxWindowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLocationFsxWindowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateLocationFsxWindowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLocationFsxWindowsRequestFilterSensitiveLog,
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
  private serialize(input: CreateLocationFsxWindowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLocationFsxWindowsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLocationFsxWindowsCommandOutput> {
    return de_CreateLocationFsxWindowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
