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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DescribeAccountPreferencesRequest, DescribeAccountPreferencesResponse } from "../models/models_0";
import { de_DescribeAccountPreferencesCommand, se_DescribeAccountPreferencesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountPreferencesCommand}.
 */
export interface DescribeAccountPreferencesCommandInput extends DescribeAccountPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountPreferencesCommand}.
 */
export interface DescribeAccountPreferencesCommandOutput extends DescribeAccountPreferencesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the account preferences settings for the Amazon Web Services account associated with the user making the request, in the current Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeAccountPreferencesCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeAccountPreferencesCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // DescribeAccountPreferencesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeAccountPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountPreferencesResponse
 * //   ResourceIdPreference: { // ResourceIdPreference
 * //     ResourceIdType: "LONG_ID" || "SHORT_ID",
 * //     Resources: [ // Resources
 * //       "FILE_SYSTEM" || "MOUNT_TARGET",
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAccountPreferencesCommandInput - {@link DescribeAccountPreferencesCommandInput}
 * @returns {@link DescribeAccountPreferencesCommandOutput}
 * @see {@link DescribeAccountPreferencesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountPreferencesCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 */
export class DescribeAccountPreferencesCommand extends $Command<
  DescribeAccountPreferencesCommandInput,
  DescribeAccountPreferencesCommandOutput,
  EFSClientResolvedConfig
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
  constructor(readonly input: DescribeAccountPreferencesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccountPreferencesCommandInput, DescribeAccountPreferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAccountPreferencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeAccountPreferencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MagnolioAPIService_v20150201",
        operation: "DescribeAccountPreferences",
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
  private serialize(input: DescribeAccountPreferencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAccountPreferencesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountPreferencesCommandOutput> {
    return de_DescribeAccountPreferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
