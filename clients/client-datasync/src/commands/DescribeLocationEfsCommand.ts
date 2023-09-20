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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeLocationEfsRequest, DescribeLocationEfsResponse } from "../models/models_0";
import { de_DescribeLocationEfsCommand, se_DescribeLocationEfsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationEfsCommand}.
 */
export interface DescribeLocationEfsCommandInput extends DescribeLocationEfsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationEfsCommand}.
 */
export interface DescribeLocationEfsCommandOutput extends DescribeLocationEfsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns metadata about your DataSync location for an Amazon EFS
 *       file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationEfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationEfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationEfsRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationEfsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationEfsResponse
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   Ec2Config: { // Ec2Config
 * //     SubnetArn: "STRING_VALUE", // required
 * //     SecurityGroupArns: [ // Ec2SecurityGroupArnList // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   AccessPointArn: "STRING_VALUE",
 * //   FileSystemAccessRoleArn: "STRING_VALUE",
 * //   InTransitEncryption: "NONE" || "TLS1_2",
 * // };
 *
 * ```
 *
 * @param DescribeLocationEfsCommandInput - {@link DescribeLocationEfsCommandInput}
 * @returns {@link DescribeLocationEfsCommandOutput}
 * @see {@link DescribeLocationEfsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationEfsCommandOutput} for command's `response` shape.
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
export class DescribeLocationEfsCommand extends $Command<
  DescribeLocationEfsCommandInput,
  DescribeLocationEfsCommandOutput,
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
  constructor(readonly input: DescribeLocationEfsCommandInput) {
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
  ): Handler<DescribeLocationEfsCommandInput, DescribeLocationEfsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLocationEfsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeLocationEfsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FmrsService",
        operation: "DescribeLocationEfs",
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
  private serialize(input: DescribeLocationEfsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLocationEfsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLocationEfsCommandOutput> {
    return de_DescribeLocationEfsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
