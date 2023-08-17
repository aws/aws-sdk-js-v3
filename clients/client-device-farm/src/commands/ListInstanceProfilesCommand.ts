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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListInstanceProfilesRequest, ListInstanceProfilesResult } from "../models/models_0";
import { de_ListInstanceProfilesCommand, se_ListInstanceProfilesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInstanceProfilesCommand}.
 */
export interface ListInstanceProfilesCommandInput extends ListInstanceProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListInstanceProfilesCommand}.
 */
export interface ListInstanceProfilesCommandOutput extends ListInstanceProfilesResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about all the instance profiles in an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListInstanceProfilesCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListInstanceProfilesCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListInstanceProfilesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListInstanceProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListInstanceProfilesResult
 * //   instanceProfiles: [ // InstanceProfiles
 * //     { // InstanceProfile
 * //       arn: "STRING_VALUE",
 * //       packageCleanup: true || false,
 * //       excludeAppPackagesFromCleanup: [ // PackageIds
 * //         "STRING_VALUE",
 * //       ],
 * //       rebootAfterUse: true || false,
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstanceProfilesCommandInput - {@link ListInstanceProfilesCommandInput}
 * @returns {@link ListInstanceProfilesCommandOutput}
 * @see {@link ListInstanceProfilesCommandInput} for command's `input` shape.
 * @see {@link ListInstanceProfilesCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 */
export class ListInstanceProfilesCommand extends $Command<
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
  DeviceFarmClientResolvedConfig
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
  constructor(readonly input: ListInstanceProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInstanceProfilesCommandInput, ListInstanceProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInstanceProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListInstanceProfilesCommand";
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
  private serialize(input: ListInstanceProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInstanceProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstanceProfilesCommandOutput> {
    return de_ListInstanceProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
