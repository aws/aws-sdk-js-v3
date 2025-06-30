// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartZonalShiftRequest, ZonalShift } from "../models/models_0";
import { de_StartZonalShiftCommand, se_StartZonalShiftCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartZonalShiftCommand}.
 */
export interface StartZonalShiftCommandInput extends StartZonalShiftRequest {}
/**
 * @public
 *
 * The output of {@link StartZonalShiftCommand}.
 */
export interface StartZonalShiftCommandOutput extends ZonalShift, __MetadataBearer {}

/**
 * <p>You start a zonal shift to temporarily move load balancer traffic away from an Availability Zone in an Amazon Web Services Region, to help your application recover immediately, for example, from a developer's bad code deployment or from an Amazon Web Services infrastructure failure in a single Availability Zone. You can start a zonal shift in ARC only for managed resources in your Amazon Web Services account in an Amazon Web Services Region. Resources are automatically registered with ARC by Amazon Web Services services.</p> <p>Amazon Application Recovery Controller currently supports enabling the following resources for zonal shift and zonal autoshift:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.ec2-auto-scaling-groups.html">Amazon EC2 Auto Scaling groups</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.eks.html">Amazon Elastic Kubernetes Service</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.app-load-balancers.html">Application Load Balancer</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.resource-types.network-load-balancers.html">Network Load Balancer</a> </p> </li> </ul> <p>When you start a zonal shift, traffic for the resource is no longer routed to the Availability Zone. The zonal shift is created immediately in ARC. However, it can take a short time, typically up to a few minutes, for existing, in-progress connections in the Availability Zone to complete.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.html">Zonal shift</a> in the Amazon Application Recovery Controller Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, StartZonalShiftCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, StartZonalShiftCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * const client = new ARCZonalShiftClient(config);
 * const input = { // StartZonalShiftRequest
 *   resourceIdentifier: "STRING_VALUE", // required
 *   awayFrom: "STRING_VALUE", // required
 *   expiresIn: "STRING_VALUE", // required
 *   comment: "STRING_VALUE", // required
 * };
 * const command = new StartZonalShiftCommand(input);
 * const response = await client.send(command);
 * // { // ZonalShift
 * //   zonalShiftId: "STRING_VALUE", // required
 * //   resourceIdentifier: "STRING_VALUE", // required
 * //   awayFrom: "STRING_VALUE", // required
 * //   expiryTime: new Date("TIMESTAMP"), // required
 * //   startTime: new Date("TIMESTAMP"), // required
 * //   status: "ACTIVE" || "EXPIRED" || "CANCELED", // required
 * //   comment: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartZonalShiftCommandInput - {@link StartZonalShiftCommandInput}
 * @returns {@link StartZonalShiftCommandOutput}
 * @see {@link StartZonalShiftCommandInput} for command's `input` shape.
 * @see {@link StartZonalShiftCommandOutput} for command's `response` shape.
 * @see {@link ARCZonalShiftClientResolvedConfig | config} for ARCZonalShiftClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The input requested a resource that was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ARCZonalShiftServiceException}
 * <p>Base exception class for all service exceptions from ARCZonalShift service.</p>
 *
 *
 * @public
 */
export class StartZonalShiftCommand extends $Command
  .classBuilder<
    StartZonalShiftCommandInput,
    StartZonalShiftCommandOutput,
    ARCZonalShiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ARCZonalShiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PercDataPlane", "StartZonalShift", {})
  .n("ARCZonalShiftClient", "StartZonalShiftCommand")
  .f(void 0, void 0)
  .ser(se_StartZonalShiftCommand)
  .de(de_StartZonalShiftCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartZonalShiftRequest;
      output: ZonalShift;
    };
    sdk: {
      input: StartZonalShiftCommandInput;
      output: StartZonalShiftCommandOutput;
    };
  };
}
