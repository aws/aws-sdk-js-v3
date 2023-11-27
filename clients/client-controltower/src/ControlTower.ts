// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateLandingZoneCommand,
  CreateLandingZoneCommandInput,
  CreateLandingZoneCommandOutput,
} from "./commands/CreateLandingZoneCommand";
import {
  DeleteLandingZoneCommand,
  DeleteLandingZoneCommandInput,
  DeleteLandingZoneCommandOutput,
} from "./commands/DeleteLandingZoneCommand";
import {
  DisableControlCommand,
  DisableControlCommandInput,
  DisableControlCommandOutput,
} from "./commands/DisableControlCommand";
import {
  EnableControlCommand,
  EnableControlCommandInput,
  EnableControlCommandOutput,
} from "./commands/EnableControlCommand";
import {
  GetControlOperationCommand,
  GetControlOperationCommandInput,
  GetControlOperationCommandOutput,
} from "./commands/GetControlOperationCommand";
import {
  GetEnabledControlCommand,
  GetEnabledControlCommandInput,
  GetEnabledControlCommandOutput,
} from "./commands/GetEnabledControlCommand";
import {
  GetLandingZoneCommand,
  GetLandingZoneCommandInput,
  GetLandingZoneCommandOutput,
} from "./commands/GetLandingZoneCommand";
import {
  GetLandingZoneOperationCommand,
  GetLandingZoneOperationCommandInput,
  GetLandingZoneOperationCommandOutput,
} from "./commands/GetLandingZoneOperationCommand";
import {
  ListEnabledControlsCommand,
  ListEnabledControlsCommandInput,
  ListEnabledControlsCommandOutput,
} from "./commands/ListEnabledControlsCommand";
import {
  ListLandingZonesCommand,
  ListLandingZonesCommandInput,
  ListLandingZonesCommandOutput,
} from "./commands/ListLandingZonesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ResetLandingZoneCommand,
  ResetLandingZoneCommandInput,
  ResetLandingZoneCommandOutput,
} from "./commands/ResetLandingZoneCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateEnabledControlCommand,
  UpdateEnabledControlCommandInput,
  UpdateEnabledControlCommandOutput,
} from "./commands/UpdateEnabledControlCommand";
import {
  UpdateLandingZoneCommand,
  UpdateLandingZoneCommandInput,
  UpdateLandingZoneCommandOutput,
} from "./commands/UpdateLandingZoneCommand";
import { ControlTowerClient, ControlTowerClientConfig } from "./ControlTowerClient";

const commands = {
  CreateLandingZoneCommand,
  DeleteLandingZoneCommand,
  DisableControlCommand,
  EnableControlCommand,
  GetControlOperationCommand,
  GetEnabledControlCommand,
  GetLandingZoneCommand,
  GetLandingZoneOperationCommand,
  ListEnabledControlsCommand,
  ListLandingZonesCommand,
  ListTagsForResourceCommand,
  ResetLandingZoneCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateEnabledControlCommand,
  UpdateLandingZoneCommand,
};

export interface ControlTower {
  /**
   * @see {@link CreateLandingZoneCommand}
   */
  createLandingZone(
    args: CreateLandingZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLandingZoneCommandOutput>;
  createLandingZone(
    args: CreateLandingZoneCommandInput,
    cb: (err: any, data?: CreateLandingZoneCommandOutput) => void
  ): void;
  createLandingZone(
    args: CreateLandingZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLandingZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLandingZoneCommand}
   */
  deleteLandingZone(
    args: DeleteLandingZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLandingZoneCommandOutput>;
  deleteLandingZone(
    args: DeleteLandingZoneCommandInput,
    cb: (err: any, data?: DeleteLandingZoneCommandOutput) => void
  ): void;
  deleteLandingZone(
    args: DeleteLandingZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLandingZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableControlCommand}
   */
  disableControl(
    args: DisableControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableControlCommandOutput>;
  disableControl(args: DisableControlCommandInput, cb: (err: any, data?: DisableControlCommandOutput) => void): void;
  disableControl(
    args: DisableControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableControlCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableControlCommand}
   */
  enableControl(args: EnableControlCommandInput, options?: __HttpHandlerOptions): Promise<EnableControlCommandOutput>;
  enableControl(args: EnableControlCommandInput, cb: (err: any, data?: EnableControlCommandOutput) => void): void;
  enableControl(
    args: EnableControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableControlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetControlOperationCommand}
   */
  getControlOperation(
    args: GetControlOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetControlOperationCommandOutput>;
  getControlOperation(
    args: GetControlOperationCommandInput,
    cb: (err: any, data?: GetControlOperationCommandOutput) => void
  ): void;
  getControlOperation(
    args: GetControlOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetControlOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnabledControlCommand}
   */
  getEnabledControl(
    args: GetEnabledControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnabledControlCommandOutput>;
  getEnabledControl(
    args: GetEnabledControlCommandInput,
    cb: (err: any, data?: GetEnabledControlCommandOutput) => void
  ): void;
  getEnabledControl(
    args: GetEnabledControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnabledControlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLandingZoneCommand}
   */
  getLandingZone(
    args: GetLandingZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLandingZoneCommandOutput>;
  getLandingZone(args: GetLandingZoneCommandInput, cb: (err: any, data?: GetLandingZoneCommandOutput) => void): void;
  getLandingZone(
    args: GetLandingZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLandingZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLandingZoneOperationCommand}
   */
  getLandingZoneOperation(
    args: GetLandingZoneOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLandingZoneOperationCommandOutput>;
  getLandingZoneOperation(
    args: GetLandingZoneOperationCommandInput,
    cb: (err: any, data?: GetLandingZoneOperationCommandOutput) => void
  ): void;
  getLandingZoneOperation(
    args: GetLandingZoneOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLandingZoneOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnabledControlsCommand}
   */
  listEnabledControls(
    args: ListEnabledControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnabledControlsCommandOutput>;
  listEnabledControls(
    args: ListEnabledControlsCommandInput,
    cb: (err: any, data?: ListEnabledControlsCommandOutput) => void
  ): void;
  listEnabledControls(
    args: ListEnabledControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnabledControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLandingZonesCommand}
   */
  listLandingZones(
    args: ListLandingZonesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLandingZonesCommandOutput>;
  listLandingZones(
    args: ListLandingZonesCommandInput,
    cb: (err: any, data?: ListLandingZonesCommandOutput) => void
  ): void;
  listLandingZones(
    args: ListLandingZonesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLandingZonesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetLandingZoneCommand}
   */
  resetLandingZone(
    args: ResetLandingZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetLandingZoneCommandOutput>;
  resetLandingZone(
    args: ResetLandingZoneCommandInput,
    cb: (err: any, data?: ResetLandingZoneCommandOutput) => void
  ): void;
  resetLandingZone(
    args: ResetLandingZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetLandingZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnabledControlCommand}
   */
  updateEnabledControl(
    args: UpdateEnabledControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnabledControlCommandOutput>;
  updateEnabledControl(
    args: UpdateEnabledControlCommandInput,
    cb: (err: any, data?: UpdateEnabledControlCommandOutput) => void
  ): void;
  updateEnabledControl(
    args: UpdateEnabledControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnabledControlCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLandingZoneCommand}
   */
  updateLandingZone(
    args: UpdateLandingZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLandingZoneCommandOutput>;
  updateLandingZone(
    args: UpdateLandingZoneCommandInput,
    cb: (err: any, data?: UpdateLandingZoneCommandOutput) => void
  ): void;
  updateLandingZone(
    args: UpdateLandingZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLandingZoneCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>These interfaces allow you to apply the  Amazon Web Services library of pre-defined
 *          <i>controls</i> to your organizational units, programmatically. In  Amazon Web Services Control Tower, the terms "control" and "guardrail" are synonyms.</p>
 *          <p>To call these APIs, you'll need to know:</p>
 *          <ul>
 *             <li>
 *                <p>the <code>controlIdentifier</code> for the control--or guardrail--you are targeting.</p>
 *             </li>
 *             <li>
 *                <p>the ARN associated with the target organizational unit (OU), which we call the <code>targetIdentifier</code>.</p>
 *             </li>
 *             <li>
 *                <p>the ARN associated with a resource that you wish to tag or untag.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>To get the <code>controlIdentifier</code> for your Amazon Web Services Control Tower
 *          control:</b>
 *          </p>
 *          <p>The <code>controlIdentifier</code> is an ARN that is specified for each
 *          control. You can view the <code>controlIdentifier</code> in the console on the <b>Control details</b> page, as well as in the documentation.</p>
 *          <p>The <code>controlIdentifier</code> is unique in each Amazon Web Services Region for each control. You can
 *          find the <code>controlIdentifier</code> for each Region and control in the <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-metadata-tables.html">Tables of control metadata</a> in the <i>Amazon Web Services Control Tower User Guide.</i>
 *          </p>
 *          <p>A quick-reference list of control identifers for the Amazon Web Services Control Tower legacy <i>Strongly recommended</i> and
 *          <i>Elective</i> controls is given in <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-identifiers.html.html">Resource identifiers for
 *             APIs and controls</a> in the <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-identifiers.html">Controls reference guide section</a>
 *          of the <i>Amazon Web Services Control Tower User Guide</i>. Remember that <i>Mandatory</i> controls
 *          cannot be added or removed.</p>
 *          <note>
 *             <p>
 *                <b>ARN format:</b>
 *                <code>arn:aws:controltower:\{REGION\}::control/\{CONTROL_NAME\}</code>
 *             </p>
 *             <p>
 *                <b>Example:</b>
 *             </p>
 *             <p>
 *                <code>arn:aws:controltower:us-west-2::control/AWS-GR_AUTOSCALING_LAUNCH_CONFIG_PUBLIC_IP_DISABLED</code>
 *             </p>
 *          </note>
 *          <p>
 *             <b>To get the <code>targetIdentifier</code>:</b>
 *          </p>
 *          <p>The <code>targetIdentifier</code> is the ARN for an OU.</p>
 *          <p>In the Amazon Web Services Organizations console, you can find the ARN for the OU on the <b>Organizational unit details</b> page associated with that OU.</p>
 *          <note>
 *             <p>
 *                <b>OU ARN format:</b>
 *             </p>
 *             <p>
 *                <code>arn:$\{Partition\}:organizations::$\{MasterAccountId\}:ou/o-$\{OrganizationId\}/ou-$\{OrganizationalUnitId\}</code>
 *             </p>
 *          </note>
 *          <p class="title">
 *             <b>Details and examples</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-api-examples-short.html">Control API input and output examples with CLI</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controltower/latest/userguide/enable-controls.html">Enable controls with CloudFormation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-metadata-tables.html">Control metadata tables</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-identifiers.html">List of identifiers for legacy controls</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controltower/latest/userguide/controls.html">Controls reference guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controltower/latest/userguide/controls-reference.html">Controls library groupings</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controltower/latest/userguide/creating-resources-with-cloudformation.html">Creating Amazon Web Services Control Tower resources with Amazon Web Services CloudFormation</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>To view the open source resource repository on GitHub, see <a href="https://github.com/aws-cloudformation/aws-cloudformation-resource-providers-controltower">aws-cloudformation/aws-cloudformation-resource-providers-controltower</a>
 *          </p>
 *          <p>
 *             <b>Recording API Requests</b>
 *          </p>
 *          <p>Amazon Web Services Control Tower supports Amazon Web Services CloudTrail, a service that records Amazon Web Services API calls for your
 *          Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected by
 *          CloudTrail, you can determine which requests the Amazon Web Services Control Tower service received, who made
 *          the request and when, and so on. For more about Amazon Web Services Control Tower and its support for
 *          CloudTrail, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/logging-using-cloudtrail.html">Logging Amazon Web Services Control Tower
 *             Actions with Amazon Web Services CloudTrail</a> in the Amazon Web Services Control Tower User Guide. To learn more about
 *          CloudTrail, including how to turn it on and find your log files, see the Amazon Web Services CloudTrail User
 *          Guide.</p>
 */
export class ControlTower extends ControlTowerClient implements ControlTower {}
createAggregatedClient(commands, ControlTower);
