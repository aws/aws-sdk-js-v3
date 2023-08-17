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

import { GetSoftwareUpdatesRequest, GetSoftwareUpdatesResult } from "../models/models_0";
import { de_GetSoftwareUpdatesCommand, se_GetSoftwareUpdatesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSoftwareUpdatesCommand}.
 */
export interface GetSoftwareUpdatesCommandInput extends GetSoftwareUpdatesRequest {}
/**
 * @public
 *
 * The output of {@link GetSoftwareUpdatesCommand}.
 */
export interface GetSoftwareUpdatesCommandOutput extends GetSoftwareUpdatesResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns an Amazon S3 presigned URL for an update file associated with a specified
 *         <code>JobId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetSoftwareUpdatesCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetSoftwareUpdatesCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // GetSoftwareUpdatesRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetSoftwareUpdatesCommand(input);
 * const response = await client.send(command);
 * // { // GetSoftwareUpdatesResult
 * //   UpdatesURI: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSoftwareUpdatesCommandInput - {@link GetSoftwareUpdatesCommandInput}
 * @returns {@link GetSoftwareUpdatesCommandOutput}
 * @see {@link GetSoftwareUpdatesCommandInput} for command's `input` shape.
 * @see {@link GetSoftwareUpdatesCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 */
export class GetSoftwareUpdatesCommand extends $Command<
  GetSoftwareUpdatesCommandInput,
  GetSoftwareUpdatesCommandOutput,
  SnowballClientResolvedConfig
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
  constructor(readonly input: GetSoftwareUpdatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSoftwareUpdatesCommandInput, GetSoftwareUpdatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSoftwareUpdatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "GetSoftwareUpdatesCommand";
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
  private serialize(input: GetSoftwareUpdatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSoftwareUpdatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSoftwareUpdatesCommandOutput> {
    return de_GetSoftwareUpdatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
