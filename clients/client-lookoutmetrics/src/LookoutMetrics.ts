// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  ActivateAnomalyDetectorCommand,
  ActivateAnomalyDetectorCommandInput,
  ActivateAnomalyDetectorCommandOutput,
} from "./commands/ActivateAnomalyDetectorCommand";
import {
  BackTestAnomalyDetectorCommand,
  BackTestAnomalyDetectorCommandInput,
  BackTestAnomalyDetectorCommandOutput,
} from "./commands/BackTestAnomalyDetectorCommand";
import { CreateAlertCommand, CreateAlertCommandInput, CreateAlertCommandOutput } from "./commands/CreateAlertCommand";
import {
  CreateAnomalyDetectorCommand,
  CreateAnomalyDetectorCommandInput,
  CreateAnomalyDetectorCommandOutput,
} from "./commands/CreateAnomalyDetectorCommand";
import {
  CreateMetricSetCommand,
  CreateMetricSetCommandInput,
  CreateMetricSetCommandOutput,
} from "./commands/CreateMetricSetCommand";
import {
  DeactivateAnomalyDetectorCommand,
  DeactivateAnomalyDetectorCommandInput,
  DeactivateAnomalyDetectorCommandOutput,
} from "./commands/DeactivateAnomalyDetectorCommand";
import { DeleteAlertCommand, DeleteAlertCommandInput, DeleteAlertCommandOutput } from "./commands/DeleteAlertCommand";
import {
  DeleteAnomalyDetectorCommand,
  DeleteAnomalyDetectorCommandInput,
  DeleteAnomalyDetectorCommandOutput,
} from "./commands/DeleteAnomalyDetectorCommand";
import {
  DescribeAlertCommand,
  DescribeAlertCommandInput,
  DescribeAlertCommandOutput,
} from "./commands/DescribeAlertCommand";
import {
  DescribeAnomalyDetectionExecutionsCommand,
  DescribeAnomalyDetectionExecutionsCommandInput,
  DescribeAnomalyDetectionExecutionsCommandOutput,
} from "./commands/DescribeAnomalyDetectionExecutionsCommand";
import {
  DescribeAnomalyDetectorCommand,
  DescribeAnomalyDetectorCommandInput,
  DescribeAnomalyDetectorCommandOutput,
} from "./commands/DescribeAnomalyDetectorCommand";
import {
  DescribeMetricSetCommand,
  DescribeMetricSetCommandInput,
  DescribeMetricSetCommandOutput,
} from "./commands/DescribeMetricSetCommand";
import {
  DetectMetricSetConfigCommand,
  DetectMetricSetConfigCommandInput,
  DetectMetricSetConfigCommandOutput,
} from "./commands/DetectMetricSetConfigCommand";
import {
  GetAnomalyGroupCommand,
  GetAnomalyGroupCommandInput,
  GetAnomalyGroupCommandOutput,
} from "./commands/GetAnomalyGroupCommand";
import {
  GetDataQualityMetricsCommand,
  GetDataQualityMetricsCommandInput,
  GetDataQualityMetricsCommandOutput,
} from "./commands/GetDataQualityMetricsCommand";
import { GetFeedbackCommand, GetFeedbackCommandInput, GetFeedbackCommandOutput } from "./commands/GetFeedbackCommand";
import {
  GetSampleDataCommand,
  GetSampleDataCommandInput,
  GetSampleDataCommandOutput,
} from "./commands/GetSampleDataCommand";
import { ListAlertsCommand, ListAlertsCommandInput, ListAlertsCommandOutput } from "./commands/ListAlertsCommand";
import {
  ListAnomalyDetectorsCommand,
  ListAnomalyDetectorsCommandInput,
  ListAnomalyDetectorsCommandOutput,
} from "./commands/ListAnomalyDetectorsCommand";
import {
  ListAnomalyGroupRelatedMetricsCommand,
  ListAnomalyGroupRelatedMetricsCommandInput,
  ListAnomalyGroupRelatedMetricsCommandOutput,
} from "./commands/ListAnomalyGroupRelatedMetricsCommand";
import {
  ListAnomalyGroupSummariesCommand,
  ListAnomalyGroupSummariesCommandInput,
  ListAnomalyGroupSummariesCommandOutput,
} from "./commands/ListAnomalyGroupSummariesCommand";
import {
  ListAnomalyGroupTimeSeriesCommand,
  ListAnomalyGroupTimeSeriesCommandInput,
  ListAnomalyGroupTimeSeriesCommandOutput,
} from "./commands/ListAnomalyGroupTimeSeriesCommand";
import {
  ListMetricSetsCommand,
  ListMetricSetsCommandInput,
  ListMetricSetsCommandOutput,
} from "./commands/ListMetricSetsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutFeedbackCommand, PutFeedbackCommandInput, PutFeedbackCommandOutput } from "./commands/PutFeedbackCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAlertCommand, UpdateAlertCommandInput, UpdateAlertCommandOutput } from "./commands/UpdateAlertCommand";
import {
  UpdateAnomalyDetectorCommand,
  UpdateAnomalyDetectorCommandInput,
  UpdateAnomalyDetectorCommandOutput,
} from "./commands/UpdateAnomalyDetectorCommand";
import {
  UpdateMetricSetCommand,
  UpdateMetricSetCommandInput,
  UpdateMetricSetCommandOutput,
} from "./commands/UpdateMetricSetCommand";
import { LookoutMetricsClient } from "./LookoutMetricsClient";

/**
 * <p>This is the <i>Amazon Lookout for Metrics API Reference</i>. For an introduction to the service
 *       with tutorials for getting started, visit <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev">Amazon
 *         Lookout for Metrics Developer Guide</a>.</p>
 */
export class LookoutMetrics extends LookoutMetricsClient {
  /**
   * <p>Activates an anomaly detector.</p>
   */
  public activateAnomalyDetector(
    args: ActivateAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateAnomalyDetectorCommandOutput>;
  public activateAnomalyDetector(
    args: ActivateAnomalyDetectorCommandInput,
    cb: (err: any, data?: ActivateAnomalyDetectorCommandOutput) => void
  ): void;
  public activateAnomalyDetector(
    args: ActivateAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateAnomalyDetectorCommandOutput) => void
  ): void;
  public activateAnomalyDetector(
    args: ActivateAnomalyDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ActivateAnomalyDetectorCommandOutput) => void),
    cb?: (err: any, data?: ActivateAnomalyDetectorCommandOutput) => void
  ): Promise<ActivateAnomalyDetectorCommandOutput> | void {
    const command = new ActivateAnomalyDetectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Runs a backtest for anomaly detection for the specified resource.</p>
   */
  public backTestAnomalyDetector(
    args: BackTestAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BackTestAnomalyDetectorCommandOutput>;
  public backTestAnomalyDetector(
    args: BackTestAnomalyDetectorCommandInput,
    cb: (err: any, data?: BackTestAnomalyDetectorCommandOutput) => void
  ): void;
  public backTestAnomalyDetector(
    args: BackTestAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BackTestAnomalyDetectorCommandOutput) => void
  ): void;
  public backTestAnomalyDetector(
    args: BackTestAnomalyDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BackTestAnomalyDetectorCommandOutput) => void),
    cb?: (err: any, data?: BackTestAnomalyDetectorCommandOutput) => void
  ): Promise<BackTestAnomalyDetectorCommandOutput> | void {
    const command = new BackTestAnomalyDetectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an alert for an anomaly detector.</p>
   */
  public createAlert(args: CreateAlertCommandInput, options?: __HttpHandlerOptions): Promise<CreateAlertCommandOutput>;
  public createAlert(args: CreateAlertCommandInput, cb: (err: any, data?: CreateAlertCommandOutput) => void): void;
  public createAlert(
    args: CreateAlertCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAlertCommandOutput) => void
  ): void;
  public createAlert(
    args: CreateAlertCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAlertCommandOutput) => void),
    cb?: (err: any, data?: CreateAlertCommandOutput) => void
  ): Promise<CreateAlertCommandOutput> | void {
    const command = new CreateAlertCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an anomaly detector.</p>
   */
  public createAnomalyDetector(
    args: CreateAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnomalyDetectorCommandOutput>;
  public createAnomalyDetector(
    args: CreateAnomalyDetectorCommandInput,
    cb: (err: any, data?: CreateAnomalyDetectorCommandOutput) => void
  ): void;
  public createAnomalyDetector(
    args: CreateAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnomalyDetectorCommandOutput) => void
  ): void;
  public createAnomalyDetector(
    args: CreateAnomalyDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAnomalyDetectorCommandOutput) => void),
    cb?: (err: any, data?: CreateAnomalyDetectorCommandOutput) => void
  ): Promise<CreateAnomalyDetectorCommandOutput> | void {
    const command = new CreateAnomalyDetectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a dataset.</p>
   */
  public createMetricSet(
    args: CreateMetricSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMetricSetCommandOutput>;
  public createMetricSet(
    args: CreateMetricSetCommandInput,
    cb: (err: any, data?: CreateMetricSetCommandOutput) => void
  ): void;
  public createMetricSet(
    args: CreateMetricSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMetricSetCommandOutput) => void
  ): void;
  public createMetricSet(
    args: CreateMetricSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMetricSetCommandOutput) => void),
    cb?: (err: any, data?: CreateMetricSetCommandOutput) => void
  ): Promise<CreateMetricSetCommandOutput> | void {
    const command = new CreateMetricSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deactivates an anomaly detector.</p>
   */
  public deactivateAnomalyDetector(
    args: DeactivateAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateAnomalyDetectorCommandOutput>;
  public deactivateAnomalyDetector(
    args: DeactivateAnomalyDetectorCommandInput,
    cb: (err: any, data?: DeactivateAnomalyDetectorCommandOutput) => void
  ): void;
  public deactivateAnomalyDetector(
    args: DeactivateAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateAnomalyDetectorCommandOutput) => void
  ): void;
  public deactivateAnomalyDetector(
    args: DeactivateAnomalyDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeactivateAnomalyDetectorCommandOutput) => void),
    cb?: (err: any, data?: DeactivateAnomalyDetectorCommandOutput) => void
  ): Promise<DeactivateAnomalyDetectorCommandOutput> | void {
    const command = new DeactivateAnomalyDetectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an alert.</p>
   */
  public deleteAlert(args: DeleteAlertCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAlertCommandOutput>;
  public deleteAlert(args: DeleteAlertCommandInput, cb: (err: any, data?: DeleteAlertCommandOutput) => void): void;
  public deleteAlert(
    args: DeleteAlertCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAlertCommandOutput) => void
  ): void;
  public deleteAlert(
    args: DeleteAlertCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAlertCommandOutput) => void),
    cb?: (err: any, data?: DeleteAlertCommandOutput) => void
  ): Promise<DeleteAlertCommandOutput> | void {
    const command = new DeleteAlertCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any
   *       configured datasets and alerts.</p>
   */
  public deleteAnomalyDetector(
    args: DeleteAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnomalyDetectorCommandOutput>;
  public deleteAnomalyDetector(
    args: DeleteAnomalyDetectorCommandInput,
    cb: (err: any, data?: DeleteAnomalyDetectorCommandOutput) => void
  ): void;
  public deleteAnomalyDetector(
    args: DeleteAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnomalyDetectorCommandOutput) => void
  ): void;
  public deleteAnomalyDetector(
    args: DeleteAnomalyDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAnomalyDetectorCommandOutput) => void),
    cb?: (err: any, data?: DeleteAnomalyDetectorCommandOutput) => void
  ): Promise<DeleteAnomalyDetectorCommandOutput> | void {
    const command = new DeleteAnomalyDetectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an alert.</p>
   *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
   *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
   */
  public describeAlert(
    args: DescribeAlertCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAlertCommandOutput>;
  public describeAlert(
    args: DescribeAlertCommandInput,
    cb: (err: any, data?: DescribeAlertCommandOutput) => void
  ): void;
  public describeAlert(
    args: DescribeAlertCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlertCommandOutput) => void
  ): void;
  public describeAlert(
    args: DescribeAlertCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAlertCommandOutput) => void),
    cb?: (err: any, data?: DescribeAlertCommandOutput) => void
  ): Promise<DescribeAlertCommandOutput> | void {
    const command = new DescribeAlertCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the status of the specified anomaly detection jobs.</p>
   */
  public describeAnomalyDetectionExecutions(
    args: DescribeAnomalyDetectionExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAnomalyDetectionExecutionsCommandOutput>;
  public describeAnomalyDetectionExecutions(
    args: DescribeAnomalyDetectionExecutionsCommandInput,
    cb: (err: any, data?: DescribeAnomalyDetectionExecutionsCommandOutput) => void
  ): void;
  public describeAnomalyDetectionExecutions(
    args: DescribeAnomalyDetectionExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAnomalyDetectionExecutionsCommandOutput) => void
  ): void;
  public describeAnomalyDetectionExecutions(
    args: DescribeAnomalyDetectionExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAnomalyDetectionExecutionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAnomalyDetectionExecutionsCommandOutput) => void
  ): Promise<DescribeAnomalyDetectionExecutionsCommandOutput> | void {
    const command = new DescribeAnomalyDetectionExecutionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a detector.</p>
   *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
   *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
   */
  public describeAnomalyDetector(
    args: DescribeAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAnomalyDetectorCommandOutput>;
  public describeAnomalyDetector(
    args: DescribeAnomalyDetectorCommandInput,
    cb: (err: any, data?: DescribeAnomalyDetectorCommandOutput) => void
  ): void;
  public describeAnomalyDetector(
    args: DescribeAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAnomalyDetectorCommandOutput) => void
  ): void;
  public describeAnomalyDetector(
    args: DescribeAnomalyDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAnomalyDetectorCommandOutput) => void),
    cb?: (err: any, data?: DescribeAnomalyDetectorCommandOutput) => void
  ): Promise<DescribeAnomalyDetectorCommandOutput> | void {
    const command = new DescribeAnomalyDetectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a dataset.</p>
   *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
   *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
   */
  public describeMetricSet(
    args: DescribeMetricSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMetricSetCommandOutput>;
  public describeMetricSet(
    args: DescribeMetricSetCommandInput,
    cb: (err: any, data?: DescribeMetricSetCommandOutput) => void
  ): void;
  public describeMetricSet(
    args: DescribeMetricSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMetricSetCommandOutput) => void
  ): void;
  public describeMetricSet(
    args: DescribeMetricSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMetricSetCommandOutput) => void),
    cb?: (err: any, data?: DescribeMetricSetCommandOutput) => void
  ): Promise<DescribeMetricSetCommandOutput> | void {
    const command = new DescribeMetricSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detects an Amazon S3 dataset's file format, interval, and offset.</p>
   */
  public detectMetricSetConfig(
    args: DetectMetricSetConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectMetricSetConfigCommandOutput>;
  public detectMetricSetConfig(
    args: DetectMetricSetConfigCommandInput,
    cb: (err: any, data?: DetectMetricSetConfigCommandOutput) => void
  ): void;
  public detectMetricSetConfig(
    args: DetectMetricSetConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectMetricSetConfigCommandOutput) => void
  ): void;
  public detectMetricSetConfig(
    args: DetectMetricSetConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetectMetricSetConfigCommandOutput) => void),
    cb?: (err: any, data?: DetectMetricSetConfigCommandOutput) => void
  ): Promise<DetectMetricSetConfigCommandOutput> | void {
    const command = new DetectMetricSetConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns details about a group of anomalous metrics.</p>
   */
  public getAnomalyGroup(
    args: GetAnomalyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnomalyGroupCommandOutput>;
  public getAnomalyGroup(
    args: GetAnomalyGroupCommandInput,
    cb: (err: any, data?: GetAnomalyGroupCommandOutput) => void
  ): void;
  public getAnomalyGroup(
    args: GetAnomalyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnomalyGroupCommandOutput) => void
  ): void;
  public getAnomalyGroup(
    args: GetAnomalyGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAnomalyGroupCommandOutput) => void),
    cb?: (err: any, data?: GetAnomalyGroupCommandOutput) => void
  ): Promise<GetAnomalyGroupCommandOutput> | void {
    const command = new GetAnomalyGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns details about the requested data quality metrics.</p>
   */
  public getDataQualityMetrics(
    args: GetDataQualityMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataQualityMetricsCommandOutput>;
  public getDataQualityMetrics(
    args: GetDataQualityMetricsCommandInput,
    cb: (err: any, data?: GetDataQualityMetricsCommandOutput) => void
  ): void;
  public getDataQualityMetrics(
    args: GetDataQualityMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataQualityMetricsCommandOutput) => void
  ): void;
  public getDataQualityMetrics(
    args: GetDataQualityMetricsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataQualityMetricsCommandOutput) => void),
    cb?: (err: any, data?: GetDataQualityMetricsCommandOutput) => void
  ): Promise<GetDataQualityMetricsCommandOutput> | void {
    const command = new GetDataQualityMetricsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get feedback for an anomaly group.</p>
   */
  public getFeedback(args: GetFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<GetFeedbackCommandOutput>;
  public getFeedback(args: GetFeedbackCommandInput, cb: (err: any, data?: GetFeedbackCommandOutput) => void): void;
  public getFeedback(
    args: GetFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFeedbackCommandOutput) => void
  ): void;
  public getFeedback(
    args: GetFeedbackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFeedbackCommandOutput) => void),
    cb?: (err: any, data?: GetFeedbackCommandOutput) => void
  ): Promise<GetFeedbackCommandOutput> | void {
    const command = new GetFeedbackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a selection of sample records from an Amazon S3 datasource.</p>
   */
  public getSampleData(
    args: GetSampleDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSampleDataCommandOutput>;
  public getSampleData(
    args: GetSampleDataCommandInput,
    cb: (err: any, data?: GetSampleDataCommandOutput) => void
  ): void;
  public getSampleData(
    args: GetSampleDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSampleDataCommandOutput) => void
  ): void;
  public getSampleData(
    args: GetSampleDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSampleDataCommandOutput) => void),
    cb?: (err: any, data?: GetSampleDataCommandOutput) => void
  ): Promise<GetSampleDataCommandOutput> | void {
    const command = new GetSampleDataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the alerts attached to a detector.</p>
   *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
   *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
   */
  public listAlerts(args: ListAlertsCommandInput, options?: __HttpHandlerOptions): Promise<ListAlertsCommandOutput>;
  public listAlerts(args: ListAlertsCommandInput, cb: (err: any, data?: ListAlertsCommandOutput) => void): void;
  public listAlerts(
    args: ListAlertsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAlertsCommandOutput) => void
  ): void;
  public listAlerts(
    args: ListAlertsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAlertsCommandOutput) => void),
    cb?: (err: any, data?: ListAlertsCommandOutput) => void
  ): Promise<ListAlertsCommandOutput> | void {
    const command = new ListAlertsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the detectors in the current AWS Region.</p>
   *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
   *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
   */
  public listAnomalyDetectors(
    args: ListAnomalyDetectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnomalyDetectorsCommandOutput>;
  public listAnomalyDetectors(
    args: ListAnomalyDetectorsCommandInput,
    cb: (err: any, data?: ListAnomalyDetectorsCommandOutput) => void
  ): void;
  public listAnomalyDetectors(
    args: ListAnomalyDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnomalyDetectorsCommandOutput) => void
  ): void;
  public listAnomalyDetectors(
    args: ListAnomalyDetectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAnomalyDetectorsCommandOutput) => void),
    cb?: (err: any, data?: ListAnomalyDetectorsCommandOutput) => void
  ): Promise<ListAnomalyDetectorsCommandOutput> | void {
    const command = new ListAnomalyDetectorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of measures that are potential causes or effects of an
   *             anomaly group.</p>
   */
  public listAnomalyGroupRelatedMetrics(
    args: ListAnomalyGroupRelatedMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnomalyGroupRelatedMetricsCommandOutput>;
  public listAnomalyGroupRelatedMetrics(
    args: ListAnomalyGroupRelatedMetricsCommandInput,
    cb: (err: any, data?: ListAnomalyGroupRelatedMetricsCommandOutput) => void
  ): void;
  public listAnomalyGroupRelatedMetrics(
    args: ListAnomalyGroupRelatedMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnomalyGroupRelatedMetricsCommandOutput) => void
  ): void;
  public listAnomalyGroupRelatedMetrics(
    args: ListAnomalyGroupRelatedMetricsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAnomalyGroupRelatedMetricsCommandOutput) => void),
    cb?: (err: any, data?: ListAnomalyGroupRelatedMetricsCommandOutput) => void
  ): Promise<ListAnomalyGroupRelatedMetricsCommandOutput> | void {
    const command = new ListAnomalyGroupRelatedMetricsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of anomaly groups.</p>
   */
  public listAnomalyGroupSummaries(
    args: ListAnomalyGroupSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnomalyGroupSummariesCommandOutput>;
  public listAnomalyGroupSummaries(
    args: ListAnomalyGroupSummariesCommandInput,
    cb: (err: any, data?: ListAnomalyGroupSummariesCommandOutput) => void
  ): void;
  public listAnomalyGroupSummaries(
    args: ListAnomalyGroupSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnomalyGroupSummariesCommandOutput) => void
  ): void;
  public listAnomalyGroupSummaries(
    args: ListAnomalyGroupSummariesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAnomalyGroupSummariesCommandOutput) => void),
    cb?: (err: any, data?: ListAnomalyGroupSummariesCommandOutput) => void
  ): Promise<ListAnomalyGroupSummariesCommandOutput> | void {
    const command = new ListAnomalyGroupSummariesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of anomalous metrics for a measure in an anomaly group.</p>
   */
  public listAnomalyGroupTimeSeries(
    args: ListAnomalyGroupTimeSeriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnomalyGroupTimeSeriesCommandOutput>;
  public listAnomalyGroupTimeSeries(
    args: ListAnomalyGroupTimeSeriesCommandInput,
    cb: (err: any, data?: ListAnomalyGroupTimeSeriesCommandOutput) => void
  ): void;
  public listAnomalyGroupTimeSeries(
    args: ListAnomalyGroupTimeSeriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnomalyGroupTimeSeriesCommandOutput) => void
  ): void;
  public listAnomalyGroupTimeSeries(
    args: ListAnomalyGroupTimeSeriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAnomalyGroupTimeSeriesCommandOutput) => void),
    cb?: (err: any, data?: ListAnomalyGroupTimeSeriesCommandOutput) => void
  ): Promise<ListAnomalyGroupTimeSeriesCommandOutput> | void {
    const command = new ListAnomalyGroupTimeSeriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the datasets in the current AWS Region.</p>
   *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
   *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
   */
  public listMetricSets(
    args: ListMetricSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMetricSetsCommandOutput>;
  public listMetricSets(
    args: ListMetricSetsCommandInput,
    cb: (err: any, data?: ListMetricSetsCommandOutput) => void
  ): void;
  public listMetricSets(
    args: ListMetricSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMetricSetsCommandOutput) => void
  ): void;
  public listMetricSets(
    args: ListMetricSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMetricSetsCommandOutput) => void),
    cb?: (err: any, data?: ListMetricSetsCommandOutput) => void
  ): Promise<ListMetricSetsCommandOutput> | void {
    const command = new ListMetricSetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Add feedback for an anomalous metric.</p>
   */
  public putFeedback(args: PutFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<PutFeedbackCommandOutput>;
  public putFeedback(args: PutFeedbackCommandInput, cb: (err: any, data?: PutFeedbackCommandOutput) => void): void;
  public putFeedback(
    args: PutFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFeedbackCommandOutput) => void
  ): void;
  public putFeedback(
    args: PutFeedbackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutFeedbackCommandOutput) => void),
    cb?: (err: any, data?: PutFeedbackCommandOutput) => void
  ): Promise<PutFeedbackCommandOutput> | void {
    const command = new PutFeedbackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Make changes to an existing alert.</p>
   */
  public updateAlert(args: UpdateAlertCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAlertCommandOutput>;
  public updateAlert(args: UpdateAlertCommandInput, cb: (err: any, data?: UpdateAlertCommandOutput) => void): void;
  public updateAlert(
    args: UpdateAlertCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAlertCommandOutput) => void
  ): void;
  public updateAlert(
    args: UpdateAlertCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAlertCommandOutput) => void),
    cb?: (err: any, data?: UpdateAlertCommandOutput) => void
  ): Promise<UpdateAlertCommandOutput> | void {
    const command = new UpdateAlertCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a detector. After activation, you can only change a detector's ingestion delay and description.</p>
   */
  public updateAnomalyDetector(
    args: UpdateAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnomalyDetectorCommandOutput>;
  public updateAnomalyDetector(
    args: UpdateAnomalyDetectorCommandInput,
    cb: (err: any, data?: UpdateAnomalyDetectorCommandOutput) => void
  ): void;
  public updateAnomalyDetector(
    args: UpdateAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnomalyDetectorCommandOutput) => void
  ): void;
  public updateAnomalyDetector(
    args: UpdateAnomalyDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAnomalyDetectorCommandOutput) => void),
    cb?: (err: any, data?: UpdateAnomalyDetectorCommandOutput) => void
  ): Promise<UpdateAnomalyDetectorCommandOutput> | void {
    const command = new UpdateAnomalyDetectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a dataset.</p>
   */
  public updateMetricSet(
    args: UpdateMetricSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMetricSetCommandOutput>;
  public updateMetricSet(
    args: UpdateMetricSetCommandInput,
    cb: (err: any, data?: UpdateMetricSetCommandOutput) => void
  ): void;
  public updateMetricSet(
    args: UpdateMetricSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMetricSetCommandOutput) => void
  ): void;
  public updateMetricSet(
    args: UpdateMetricSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMetricSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateMetricSetCommandOutput) => void
  ): Promise<UpdateMetricSetCommandOutput> | void {
    const command = new UpdateMetricSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
