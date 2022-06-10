// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  BatchCreateVariableCommand,
  BatchCreateVariableCommandInput,
  BatchCreateVariableCommandOutput,
} from "./commands/BatchCreateVariableCommand";
import {
  BatchGetVariableCommand,
  BatchGetVariableCommandInput,
  BatchGetVariableCommandOutput,
} from "./commands/BatchGetVariableCommand";
import {
  CancelBatchImportJobCommand,
  CancelBatchImportJobCommandInput,
  CancelBatchImportJobCommandOutput,
} from "./commands/CancelBatchImportJobCommand";
import {
  CancelBatchPredictionJobCommand,
  CancelBatchPredictionJobCommandInput,
  CancelBatchPredictionJobCommandOutput,
} from "./commands/CancelBatchPredictionJobCommand";
import {
  CreateBatchImportJobCommand,
  CreateBatchImportJobCommandInput,
  CreateBatchImportJobCommandOutput,
} from "./commands/CreateBatchImportJobCommand";
import {
  CreateBatchPredictionJobCommand,
  CreateBatchPredictionJobCommandInput,
  CreateBatchPredictionJobCommandOutput,
} from "./commands/CreateBatchPredictionJobCommand";
import {
  CreateDetectorVersionCommand,
  CreateDetectorVersionCommandInput,
  CreateDetectorVersionCommandOutput,
} from "./commands/CreateDetectorVersionCommand";
import { CreateModelCommand, CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import {
  CreateModelVersionCommand,
  CreateModelVersionCommandInput,
  CreateModelVersionCommandOutput,
} from "./commands/CreateModelVersionCommand";
import { CreateRuleCommand, CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import {
  CreateVariableCommand,
  CreateVariableCommandInput,
  CreateVariableCommandOutput,
} from "./commands/CreateVariableCommand";
import {
  DeleteBatchImportJobCommand,
  DeleteBatchImportJobCommandInput,
  DeleteBatchImportJobCommandOutput,
} from "./commands/DeleteBatchImportJobCommand";
import {
  DeleteBatchPredictionJobCommand,
  DeleteBatchPredictionJobCommandInput,
  DeleteBatchPredictionJobCommandOutput,
} from "./commands/DeleteBatchPredictionJobCommand";
import {
  DeleteDetectorCommand,
  DeleteDetectorCommandInput,
  DeleteDetectorCommandOutput,
} from "./commands/DeleteDetectorCommand";
import {
  DeleteDetectorVersionCommand,
  DeleteDetectorVersionCommandInput,
  DeleteDetectorVersionCommandOutput,
} from "./commands/DeleteDetectorVersionCommand";
import {
  DeleteEntityTypeCommand,
  DeleteEntityTypeCommandInput,
  DeleteEntityTypeCommandOutput,
} from "./commands/DeleteEntityTypeCommand";
import { DeleteEventCommand, DeleteEventCommandInput, DeleteEventCommandOutput } from "./commands/DeleteEventCommand";
import {
  DeleteEventsByEventTypeCommand,
  DeleteEventsByEventTypeCommandInput,
  DeleteEventsByEventTypeCommandOutput,
} from "./commands/DeleteEventsByEventTypeCommand";
import {
  DeleteEventTypeCommand,
  DeleteEventTypeCommandInput,
  DeleteEventTypeCommandOutput,
} from "./commands/DeleteEventTypeCommand";
import {
  DeleteExternalModelCommand,
  DeleteExternalModelCommandInput,
  DeleteExternalModelCommandOutput,
} from "./commands/DeleteExternalModelCommand";
import { DeleteLabelCommand, DeleteLabelCommandInput, DeleteLabelCommandOutput } from "./commands/DeleteLabelCommand";
import { DeleteModelCommand, DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import {
  DeleteModelVersionCommand,
  DeleteModelVersionCommandInput,
  DeleteModelVersionCommandOutput,
} from "./commands/DeleteModelVersionCommand";
import {
  DeleteOutcomeCommand,
  DeleteOutcomeCommandInput,
  DeleteOutcomeCommandOutput,
} from "./commands/DeleteOutcomeCommand";
import { DeleteRuleCommand, DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import {
  DeleteVariableCommand,
  DeleteVariableCommandInput,
  DeleteVariableCommandOutput,
} from "./commands/DeleteVariableCommand";
import {
  DescribeDetectorCommand,
  DescribeDetectorCommandInput,
  DescribeDetectorCommandOutput,
} from "./commands/DescribeDetectorCommand";
import {
  DescribeModelVersionsCommand,
  DescribeModelVersionsCommandInput,
  DescribeModelVersionsCommandOutput,
} from "./commands/DescribeModelVersionsCommand";
import {
  GetBatchImportJobsCommand,
  GetBatchImportJobsCommandInput,
  GetBatchImportJobsCommandOutput,
} from "./commands/GetBatchImportJobsCommand";
import {
  GetBatchPredictionJobsCommand,
  GetBatchPredictionJobsCommandInput,
  GetBatchPredictionJobsCommandOutput,
} from "./commands/GetBatchPredictionJobsCommand";
import {
  GetDeleteEventsByEventTypeStatusCommand,
  GetDeleteEventsByEventTypeStatusCommandInput,
  GetDeleteEventsByEventTypeStatusCommandOutput,
} from "./commands/GetDeleteEventsByEventTypeStatusCommand";
import {
  GetDetectorsCommand,
  GetDetectorsCommandInput,
  GetDetectorsCommandOutput,
} from "./commands/GetDetectorsCommand";
import {
  GetDetectorVersionCommand,
  GetDetectorVersionCommandInput,
  GetDetectorVersionCommandOutput,
} from "./commands/GetDetectorVersionCommand";
import {
  GetEntityTypesCommand,
  GetEntityTypesCommandInput,
  GetEntityTypesCommandOutput,
} from "./commands/GetEntityTypesCommand";
import { GetEventCommand, GetEventCommandInput, GetEventCommandOutput } from "./commands/GetEventCommand";
import {
  GetEventPredictionCommand,
  GetEventPredictionCommandInput,
  GetEventPredictionCommandOutput,
} from "./commands/GetEventPredictionCommand";
import {
  GetEventPredictionMetadataCommand,
  GetEventPredictionMetadataCommandInput,
  GetEventPredictionMetadataCommandOutput,
} from "./commands/GetEventPredictionMetadataCommand";
import {
  GetEventTypesCommand,
  GetEventTypesCommandInput,
  GetEventTypesCommandOutput,
} from "./commands/GetEventTypesCommand";
import {
  GetExternalModelsCommand,
  GetExternalModelsCommandInput,
  GetExternalModelsCommandOutput,
} from "./commands/GetExternalModelsCommand";
import {
  GetKMSEncryptionKeyCommand,
  GetKMSEncryptionKeyCommandInput,
  GetKMSEncryptionKeyCommandOutput,
} from "./commands/GetKMSEncryptionKeyCommand";
import { GetLabelsCommand, GetLabelsCommandInput, GetLabelsCommandOutput } from "./commands/GetLabelsCommand";
import { GetModelsCommand, GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import {
  GetModelVersionCommand,
  GetModelVersionCommandInput,
  GetModelVersionCommandOutput,
} from "./commands/GetModelVersionCommand";
import { GetOutcomesCommand, GetOutcomesCommandInput, GetOutcomesCommandOutput } from "./commands/GetOutcomesCommand";
import { GetRulesCommand, GetRulesCommandInput, GetRulesCommandOutput } from "./commands/GetRulesCommand";
import {
  GetVariablesCommand,
  GetVariablesCommandInput,
  GetVariablesCommandOutput,
} from "./commands/GetVariablesCommand";
import {
  ListEventPredictionsCommand,
  ListEventPredictionsCommandInput,
  ListEventPredictionsCommandOutput,
} from "./commands/ListEventPredictionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutDetectorCommand, PutDetectorCommandInput, PutDetectorCommandOutput } from "./commands/PutDetectorCommand";
import {
  PutEntityTypeCommand,
  PutEntityTypeCommandInput,
  PutEntityTypeCommandOutput,
} from "./commands/PutEntityTypeCommand";
import {
  PutEventTypeCommand,
  PutEventTypeCommandInput,
  PutEventTypeCommandOutput,
} from "./commands/PutEventTypeCommand";
import {
  PutExternalModelCommand,
  PutExternalModelCommandInput,
  PutExternalModelCommandOutput,
} from "./commands/PutExternalModelCommand";
import {
  PutKMSEncryptionKeyCommand,
  PutKMSEncryptionKeyCommandInput,
  PutKMSEncryptionKeyCommandOutput,
} from "./commands/PutKMSEncryptionKeyCommand";
import { PutLabelCommand, PutLabelCommandInput, PutLabelCommandOutput } from "./commands/PutLabelCommand";
import { PutOutcomeCommand, PutOutcomeCommandInput, PutOutcomeCommandOutput } from "./commands/PutOutcomeCommand";
import { SendEventCommand, SendEventCommandInput, SendEventCommandOutput } from "./commands/SendEventCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDetectorVersionCommand,
  UpdateDetectorVersionCommandInput,
  UpdateDetectorVersionCommandOutput,
} from "./commands/UpdateDetectorVersionCommand";
import {
  UpdateDetectorVersionMetadataCommand,
  UpdateDetectorVersionMetadataCommandInput,
  UpdateDetectorVersionMetadataCommandOutput,
} from "./commands/UpdateDetectorVersionMetadataCommand";
import {
  UpdateDetectorVersionStatusCommand,
  UpdateDetectorVersionStatusCommandInput,
  UpdateDetectorVersionStatusCommandOutput,
} from "./commands/UpdateDetectorVersionStatusCommand";
import {
  UpdateEventLabelCommand,
  UpdateEventLabelCommandInput,
  UpdateEventLabelCommandOutput,
} from "./commands/UpdateEventLabelCommand";
import { UpdateModelCommand, UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import {
  UpdateModelVersionCommand,
  UpdateModelVersionCommandInput,
  UpdateModelVersionCommandOutput,
} from "./commands/UpdateModelVersionCommand";
import {
  UpdateModelVersionStatusCommand,
  UpdateModelVersionStatusCommandInput,
  UpdateModelVersionStatusCommandOutput,
} from "./commands/UpdateModelVersionStatusCommand";
import {
  UpdateRuleMetadataCommand,
  UpdateRuleMetadataCommandInput,
  UpdateRuleMetadataCommandOutput,
} from "./commands/UpdateRuleMetadataCommand";
import {
  UpdateRuleVersionCommand,
  UpdateRuleVersionCommandInput,
  UpdateRuleVersionCommandOutput,
} from "./commands/UpdateRuleVersionCommand";
import {
  UpdateVariableCommand,
  UpdateVariableCommandInput,
  UpdateVariableCommandOutput,
} from "./commands/UpdateVariableCommand";
import { FraudDetectorClient } from "./FraudDetectorClient";

/**
 * <p>This is the Amazon Fraud Detector API Reference. This guide is for developers who need
 *             detailed information about Amazon Fraud Detector API actions, data types, and errors. For
 *             more information about Amazon Fraud Detector features, see the <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/">Amazon Fraud Detector User Guide</a>.</p>
 *
 *         <p>We provide the Query API as well as AWS software development kits (SDK) for Amazon Fraud Detector in Java and Python programming languages.</p>
 *         <p>The Amazon Fraud Detector Query API provides HTTPS requests that use the HTTP verb GET or POST and a Query parameter <code>Action</code>. AWS SDK provides libraries,
 *             sample code, tutorials, and other resources for software developers who prefer to build applications using language-specific APIs instead of submitting a request over
 *             HTTP or HTTPS. These libraries provide basic functions that automatically take care of tasks such as cryptographically signing your requests, retrying requests, and
 *             handling error responses, so that it is easier for you to get started. For more information about the AWS SDKs, see <a href="https://docs.aws.amazon.com/https:/aws.amazon.com/tools/">Tools to build on AWS</a>.
 *             </p>
 */
export class FraudDetector extends FraudDetectorClient {
  /**
   * <p>Creates a batch of variables.</p>
   */
  public batchCreateVariable(
    args: BatchCreateVariableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateVariableCommandOutput>;
  public batchCreateVariable(
    args: BatchCreateVariableCommandInput,
    cb: (err: any, data?: BatchCreateVariableCommandOutput) => void
  ): void;
  public batchCreateVariable(
    args: BatchCreateVariableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateVariableCommandOutput) => void
  ): void;
  public batchCreateVariable(
    args: BatchCreateVariableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchCreateVariableCommandOutput) => void),
    cb?: (err: any, data?: BatchCreateVariableCommandOutput) => void
  ): Promise<BatchCreateVariableCommandOutput> | void {
    const command = new BatchCreateVariableCommand(args);
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
   * <p>Gets a batch of variables.</p>
   */
  public batchGetVariable(
    args: BatchGetVariableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetVariableCommandOutput>;
  public batchGetVariable(
    args: BatchGetVariableCommandInput,
    cb: (err: any, data?: BatchGetVariableCommandOutput) => void
  ): void;
  public batchGetVariable(
    args: BatchGetVariableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetVariableCommandOutput) => void
  ): void;
  public batchGetVariable(
    args: BatchGetVariableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetVariableCommandOutput) => void),
    cb?: (err: any, data?: BatchGetVariableCommandOutput) => void
  ): Promise<BatchGetVariableCommandOutput> | void {
    const command = new BatchGetVariableCommand(args);
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
   * <p> Cancels an in-progress batch import job.</p>
   */
  public cancelBatchImportJob(
    args: CancelBatchImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelBatchImportJobCommandOutput>;
  public cancelBatchImportJob(
    args: CancelBatchImportJobCommandInput,
    cb: (err: any, data?: CancelBatchImportJobCommandOutput) => void
  ): void;
  public cancelBatchImportJob(
    args: CancelBatchImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelBatchImportJobCommandOutput) => void
  ): void;
  public cancelBatchImportJob(
    args: CancelBatchImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelBatchImportJobCommandOutput) => void),
    cb?: (err: any, data?: CancelBatchImportJobCommandOutput) => void
  ): Promise<CancelBatchImportJobCommandOutput> | void {
    const command = new CancelBatchImportJobCommand(args);
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
   * <p>Cancels the specified batch prediction job.</p>
   */
  public cancelBatchPredictionJob(
    args: CancelBatchPredictionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelBatchPredictionJobCommandOutput>;
  public cancelBatchPredictionJob(
    args: CancelBatchPredictionJobCommandInput,
    cb: (err: any, data?: CancelBatchPredictionJobCommandOutput) => void
  ): void;
  public cancelBatchPredictionJob(
    args: CancelBatchPredictionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelBatchPredictionJobCommandOutput) => void
  ): void;
  public cancelBatchPredictionJob(
    args: CancelBatchPredictionJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelBatchPredictionJobCommandOutput) => void),
    cb?: (err: any, data?: CancelBatchPredictionJobCommandOutput) => void
  ): Promise<CancelBatchPredictionJobCommandOutput> | void {
    const command = new CancelBatchPredictionJobCommand(args);
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
   * <p>Creates a batch import job. </p>
   */
  public createBatchImportJob(
    args: CreateBatchImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBatchImportJobCommandOutput>;
  public createBatchImportJob(
    args: CreateBatchImportJobCommandInput,
    cb: (err: any, data?: CreateBatchImportJobCommandOutput) => void
  ): void;
  public createBatchImportJob(
    args: CreateBatchImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBatchImportJobCommandOutput) => void
  ): void;
  public createBatchImportJob(
    args: CreateBatchImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBatchImportJobCommandOutput) => void),
    cb?: (err: any, data?: CreateBatchImportJobCommandOutput) => void
  ): Promise<CreateBatchImportJobCommandOutput> | void {
    const command = new CreateBatchImportJobCommand(args);
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
   * <p>Creates a batch prediction job.</p>
   */
  public createBatchPredictionJob(
    args: CreateBatchPredictionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBatchPredictionJobCommandOutput>;
  public createBatchPredictionJob(
    args: CreateBatchPredictionJobCommandInput,
    cb: (err: any, data?: CreateBatchPredictionJobCommandOutput) => void
  ): void;
  public createBatchPredictionJob(
    args: CreateBatchPredictionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBatchPredictionJobCommandOutput) => void
  ): void;
  public createBatchPredictionJob(
    args: CreateBatchPredictionJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBatchPredictionJobCommandOutput) => void),
    cb?: (err: any, data?: CreateBatchPredictionJobCommandOutput) => void
  ): Promise<CreateBatchPredictionJobCommandOutput> | void {
    const command = new CreateBatchPredictionJobCommand(args);
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
   * <p>Creates a detector version. The detector version starts in a <code>DRAFT</code> status.</p>
   */
  public createDetectorVersion(
    args: CreateDetectorVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDetectorVersionCommandOutput>;
  public createDetectorVersion(
    args: CreateDetectorVersionCommandInput,
    cb: (err: any, data?: CreateDetectorVersionCommandOutput) => void
  ): void;
  public createDetectorVersion(
    args: CreateDetectorVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDetectorVersionCommandOutput) => void
  ): void;
  public createDetectorVersion(
    args: CreateDetectorVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDetectorVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateDetectorVersionCommandOutput) => void
  ): Promise<CreateDetectorVersionCommandOutput> | void {
    const command = new CreateDetectorVersionCommand(args);
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
   * <p>Creates a model using the specified model type.</p>
   */
  public createModel(args: CreateModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelCommandOutput>;
  public createModel(args: CreateModelCommandInput, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
  public createModel(
    args: CreateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;
  public createModel(
    args: CreateModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateModelCommandOutput) => void),
    cb?: (err: any, data?: CreateModelCommandOutput) => void
  ): Promise<CreateModelCommandOutput> | void {
    const command = new CreateModelCommand(args);
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
   * <p>Creates a version of the model using the specified model type and model id.
   *         </p>
   */
  public createModelVersion(
    args: CreateModelVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelVersionCommandOutput>;
  public createModelVersion(
    args: CreateModelVersionCommandInput,
    cb: (err: any, data?: CreateModelVersionCommandOutput) => void
  ): void;
  public createModelVersion(
    args: CreateModelVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelVersionCommandOutput) => void
  ): void;
  public createModelVersion(
    args: CreateModelVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateModelVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateModelVersionCommandOutput) => void
  ): Promise<CreateModelVersionCommandOutput> | void {
    const command = new CreateModelVersionCommand(args);
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
   * <p>Creates a rule for use with the specified detector. </p>
   */
  public createRule(args: CreateRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateRuleCommandOutput>;
  public createRule(args: CreateRuleCommandInput, cb: (err: any, data?: CreateRuleCommandOutput) => void): void;
  public createRule(
    args: CreateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;
  public createRule(
    args: CreateRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateRuleCommandOutput) => void
  ): Promise<CreateRuleCommandOutput> | void {
    const command = new CreateRuleCommand(args);
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
   * <p>Creates a variable.</p>
   */
  public createVariable(
    args: CreateVariableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVariableCommandOutput>;
  public createVariable(
    args: CreateVariableCommandInput,
    cb: (err: any, data?: CreateVariableCommandOutput) => void
  ): void;
  public createVariable(
    args: CreateVariableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVariableCommandOutput) => void
  ): void;
  public createVariable(
    args: CreateVariableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVariableCommandOutput) => void),
    cb?: (err: any, data?: CreateVariableCommandOutput) => void
  ): Promise<CreateVariableCommandOutput> | void {
    const command = new CreateVariableCommand(args);
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
   * <p>Deletes the specified batch import job ID record. This action does not delete the data that was batch imported.  </p>
   */
  public deleteBatchImportJob(
    args: DeleteBatchImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBatchImportJobCommandOutput>;
  public deleteBatchImportJob(
    args: DeleteBatchImportJobCommandInput,
    cb: (err: any, data?: DeleteBatchImportJobCommandOutput) => void
  ): void;
  public deleteBatchImportJob(
    args: DeleteBatchImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBatchImportJobCommandOutput) => void
  ): void;
  public deleteBatchImportJob(
    args: DeleteBatchImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBatchImportJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteBatchImportJobCommandOutput) => void
  ): Promise<DeleteBatchImportJobCommandOutput> | void {
    const command = new DeleteBatchImportJobCommand(args);
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
   * <p>Deletes a batch prediction job.</p>
   */
  public deleteBatchPredictionJob(
    args: DeleteBatchPredictionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBatchPredictionJobCommandOutput>;
  public deleteBatchPredictionJob(
    args: DeleteBatchPredictionJobCommandInput,
    cb: (err: any, data?: DeleteBatchPredictionJobCommandOutput) => void
  ): void;
  public deleteBatchPredictionJob(
    args: DeleteBatchPredictionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBatchPredictionJobCommandOutput) => void
  ): void;
  public deleteBatchPredictionJob(
    args: DeleteBatchPredictionJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBatchPredictionJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteBatchPredictionJobCommandOutput) => void
  ): Promise<DeleteBatchPredictionJobCommandOutput> | void {
    const command = new DeleteBatchPredictionJobCommand(args);
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
   * <p>Deletes the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector.</p>
   * 	        <p>When you delete a detector, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.</p>
   */
  public deleteDetector(
    args: DeleteDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDetectorCommandOutput>;
  public deleteDetector(
    args: DeleteDetectorCommandInput,
    cb: (err: any, data?: DeleteDetectorCommandOutput) => void
  ): void;
  public deleteDetector(
    args: DeleteDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDetectorCommandOutput) => void
  ): void;
  public deleteDetector(
    args: DeleteDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDetectorCommandOutput) => void),
    cb?: (err: any, data?: DeleteDetectorCommandOutput) => void
  ): Promise<DeleteDetectorCommandOutput> | void {
    const command = new DeleteDetectorCommand(args);
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
   * <p>Deletes the detector version. You cannot delete detector versions that are in <code>ACTIVE</code> status.</p>
   * 	  	     <p>When you delete a detector version, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.</p>
   */
  public deleteDetectorVersion(
    args: DeleteDetectorVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDetectorVersionCommandOutput>;
  public deleteDetectorVersion(
    args: DeleteDetectorVersionCommandInput,
    cb: (err: any, data?: DeleteDetectorVersionCommandOutput) => void
  ): void;
  public deleteDetectorVersion(
    args: DeleteDetectorVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDetectorVersionCommandOutput) => void
  ): void;
  public deleteDetectorVersion(
    args: DeleteDetectorVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDetectorVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteDetectorVersionCommandOutput) => void
  ): Promise<DeleteDetectorVersionCommandOutput> | void {
    const command = new DeleteDetectorVersionCommand(args);
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
   * <p>Deletes an entity type.</p>
   * 	        <p>You cannot delete an entity type that is included in an event type.</p>
   * 	        <p>When you delete an entity type, Amazon Fraud Detector permanently deletes that entity type and the data is no longer stored in Amazon Fraud Detector.</p>
   */
  public deleteEntityType(
    args: DeleteEntityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEntityTypeCommandOutput>;
  public deleteEntityType(
    args: DeleteEntityTypeCommandInput,
    cb: (err: any, data?: DeleteEntityTypeCommandOutput) => void
  ): void;
  public deleteEntityType(
    args: DeleteEntityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEntityTypeCommandOutput) => void
  ): void;
  public deleteEntityType(
    args: DeleteEntityTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEntityTypeCommandOutput) => void),
    cb?: (err: any, data?: DeleteEntityTypeCommandOutput) => void
  ): Promise<DeleteEntityTypeCommandOutput> | void {
    const command = new DeleteEntityTypeCommand(args);
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
   * <p>Deletes the specified event.</p>
   * 	        <p>When you delete an event, Amazon Fraud Detector permanently deletes that event and the event data is no longer stored in Amazon Fraud Detector.</p>
   */
  public deleteEvent(args: DeleteEventCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEventCommandOutput>;
  public deleteEvent(args: DeleteEventCommandInput, cb: (err: any, data?: DeleteEventCommandOutput) => void): void;
  public deleteEvent(
    args: DeleteEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventCommandOutput) => void
  ): void;
  public deleteEvent(
    args: DeleteEventCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEventCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventCommandOutput) => void
  ): Promise<DeleteEventCommandOutput> | void {
    const command = new DeleteEventCommand(args);
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
   * <p>Deletes all events of a particular event type.</p>
   */
  public deleteEventsByEventType(
    args: DeleteEventsByEventTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventsByEventTypeCommandOutput>;
  public deleteEventsByEventType(
    args: DeleteEventsByEventTypeCommandInput,
    cb: (err: any, data?: DeleteEventsByEventTypeCommandOutput) => void
  ): void;
  public deleteEventsByEventType(
    args: DeleteEventsByEventTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventsByEventTypeCommandOutput) => void
  ): void;
  public deleteEventsByEventType(
    args: DeleteEventsByEventTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEventsByEventTypeCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventsByEventTypeCommandOutput) => void
  ): Promise<DeleteEventsByEventTypeCommandOutput> | void {
    const command = new DeleteEventsByEventTypeCommand(args);
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
   * <p>Deletes an event type.</p>
   * 	        <p>You cannot delete an event type that is used in a detector or a model.</p>
   * 	        <p>When you delete an event type, Amazon Fraud Detector permanently deletes that event type and the data is no longer stored in Amazon Fraud Detector.</p>
   */
  public deleteEventType(
    args: DeleteEventTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventTypeCommandOutput>;
  public deleteEventType(
    args: DeleteEventTypeCommandInput,
    cb: (err: any, data?: DeleteEventTypeCommandOutput) => void
  ): void;
  public deleteEventType(
    args: DeleteEventTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventTypeCommandOutput) => void
  ): void;
  public deleteEventType(
    args: DeleteEventTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEventTypeCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventTypeCommandOutput) => void
  ): Promise<DeleteEventTypeCommandOutput> | void {
    const command = new DeleteEventTypeCommand(args);
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
   * <p>Removes a SageMaker model from Amazon Fraud Detector.</p>
   * 	        <p>You can remove an Amazon SageMaker model if it is not associated with a detector version. Removing a SageMaker model disconnects it from Amazon Fraud Detector, but the model remains available in SageMaker.</p>
   */
  public deleteExternalModel(
    args: DeleteExternalModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExternalModelCommandOutput>;
  public deleteExternalModel(
    args: DeleteExternalModelCommandInput,
    cb: (err: any, data?: DeleteExternalModelCommandOutput) => void
  ): void;
  public deleteExternalModel(
    args: DeleteExternalModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExternalModelCommandOutput) => void
  ): void;
  public deleteExternalModel(
    args: DeleteExternalModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteExternalModelCommandOutput) => void),
    cb?: (err: any, data?: DeleteExternalModelCommandOutput) => void
  ): Promise<DeleteExternalModelCommandOutput> | void {
    const command = new DeleteExternalModelCommand(args);
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
   * <p>Deletes a label.</p>
   * 	        <p>You cannot delete labels that are included in an event type in Amazon Fraud Detector.</p>
   *          <p>You cannot delete a label assigned to an event ID. You must first delete the relevant event ID.</p>
   *
   *          <p>When you delete a label, Amazon Fraud Detector permanently deletes that label and the data is no longer stored in Amazon Fraud Detector.</p>
   */
  public deleteLabel(args: DeleteLabelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLabelCommandOutput>;
  public deleteLabel(args: DeleteLabelCommandInput, cb: (err: any, data?: DeleteLabelCommandOutput) => void): void;
  public deleteLabel(
    args: DeleteLabelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLabelCommandOutput) => void
  ): void;
  public deleteLabel(
    args: DeleteLabelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLabelCommandOutput) => void),
    cb?: (err: any, data?: DeleteLabelCommandOutput) => void
  ): Promise<DeleteLabelCommandOutput> | void {
    const command = new DeleteLabelCommand(args);
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
   * <p>Deletes a model.</p>
   * 	        <p>You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.</p>
   * 	        <p> When you delete a model, Amazon Fraud Detector permanently deletes that model and the data is no longer stored in Amazon Fraud Detector.</p>
   */
  public deleteModel(args: DeleteModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelCommandOutput>;
  public deleteModel(args: DeleteModelCommandInput, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
  public deleteModel(
    args: DeleteModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;
  public deleteModel(
    args: DeleteModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteModelCommandOutput) => void),
    cb?: (err: any, data?: DeleteModelCommandOutput) => void
  ): Promise<DeleteModelCommandOutput> | void {
    const command = new DeleteModelCommand(args);
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
   * <p>Deletes a model version.</p>
   * 	        <p>You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.</p>
   * 	        <p> When you delete a model version, Amazon Fraud Detector permanently deletes that model version and the data is no longer stored in Amazon Fraud Detector.</p>
   */
  public deleteModelVersion(
    args: DeleteModelVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelVersionCommandOutput>;
  public deleteModelVersion(
    args: DeleteModelVersionCommandInput,
    cb: (err: any, data?: DeleteModelVersionCommandOutput) => void
  ): void;
  public deleteModelVersion(
    args: DeleteModelVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelVersionCommandOutput) => void
  ): void;
  public deleteModelVersion(
    args: DeleteModelVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteModelVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteModelVersionCommandOutput) => void
  ): Promise<DeleteModelVersionCommandOutput> | void {
    const command = new DeleteModelVersionCommand(args);
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
   * <p>Deletes an outcome.</p>
   * 	        <p>You cannot delete an outcome that is used in a rule version.</p>
   * 	        <p>When you delete an outcome, Amazon Fraud Detector permanently deletes that outcome and the data is no longer stored in Amazon Fraud Detector.</p>
   */
  public deleteOutcome(
    args: DeleteOutcomeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOutcomeCommandOutput>;
  public deleteOutcome(
    args: DeleteOutcomeCommandInput,
    cb: (err: any, data?: DeleteOutcomeCommandOutput) => void
  ): void;
  public deleteOutcome(
    args: DeleteOutcomeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOutcomeCommandOutput) => void
  ): void;
  public deleteOutcome(
    args: DeleteOutcomeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOutcomeCommandOutput) => void),
    cb?: (err: any, data?: DeleteOutcomeCommandOutput) => void
  ): Promise<DeleteOutcomeCommandOutput> | void {
    const command = new DeleteOutcomeCommand(args);
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
   * <p>Deletes the rule. You cannot delete a rule if it is used by an <code>ACTIVE</code> or <code>INACTIVE</code> detector version.</p>
   * 	  	     <p>When you delete a rule, Amazon Fraud Detector permanently deletes that rule and the data is no longer stored in Amazon Fraud Detector.</p>
   */
  public deleteRule(args: DeleteRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRuleCommandOutput>;
  public deleteRule(args: DeleteRuleCommandInput, cb: (err: any, data?: DeleteRuleCommandOutput) => void): void;
  public deleteRule(
    args: DeleteRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
  public deleteRule(
    args: DeleteRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteRuleCommandOutput) => void
  ): Promise<DeleteRuleCommandOutput> | void {
    const command = new DeleteRuleCommand(args);
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
   * <p>Deletes a variable.</p>
   * 	        <p>You can't delete variables that are included in an event type in Amazon Fraud Detector.</p>
   * 	        <p>Amazon Fraud Detector automatically deletes model output variables and SageMaker model output variables when you delete the model. You can't delete these variables manually.</p>
   * 	        <p>When you delete a variable, Amazon Fraud Detector permanently deletes that variable and the data is no longer stored in Amazon Fraud Detector.</p>
   */
  public deleteVariable(
    args: DeleteVariableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVariableCommandOutput>;
  public deleteVariable(
    args: DeleteVariableCommandInput,
    cb: (err: any, data?: DeleteVariableCommandOutput) => void
  ): void;
  public deleteVariable(
    args: DeleteVariableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVariableCommandOutput) => void
  ): void;
  public deleteVariable(
    args: DeleteVariableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVariableCommandOutput) => void),
    cb?: (err: any, data?: DeleteVariableCommandOutput) => void
  ): Promise<DeleteVariableCommandOutput> | void {
    const command = new DeleteVariableCommand(args);
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
   * <p>Gets all versions for a specified detector.</p>
   */
  public describeDetector(
    args: DescribeDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDetectorCommandOutput>;
  public describeDetector(
    args: DescribeDetectorCommandInput,
    cb: (err: any, data?: DescribeDetectorCommandOutput) => void
  ): void;
  public describeDetector(
    args: DescribeDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDetectorCommandOutput) => void
  ): void;
  public describeDetector(
    args: DescribeDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDetectorCommandOutput) => void),
    cb?: (err: any, data?: DescribeDetectorCommandOutput) => void
  ): Promise<DescribeDetectorCommandOutput> | void {
    const command = new DescribeDetectorCommand(args);
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
   * <p>Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version. </p>
   */
  public describeModelVersions(
    args: DescribeModelVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeModelVersionsCommandOutput>;
  public describeModelVersions(
    args: DescribeModelVersionsCommandInput,
    cb: (err: any, data?: DescribeModelVersionsCommandOutput) => void
  ): void;
  public describeModelVersions(
    args: DescribeModelVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelVersionsCommandOutput) => void
  ): void;
  public describeModelVersions(
    args: DescribeModelVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeModelVersionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeModelVersionsCommandOutput) => void
  ): Promise<DescribeModelVersionsCommandOutput> | void {
    const command = new DescribeModelVersionsCommand(args);
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
   * <p>Gets all batch import jobs or a specific job of the specified ID. This is a paginated API. If you provide a null <code>maxResults</code>,
   *          this action retrieves a maximum of 50 records per page. If you provide a <code>maxResults</code>, the value must be between 1 and 50.
   *          To get the next page results, provide the pagination token from the <code>GetBatchImportJobsResponse</code> as part of your request.
   *          A null pagination token fetches the records from the beginning.</p>
   */
  public getBatchImportJobs(
    args: GetBatchImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBatchImportJobsCommandOutput>;
  public getBatchImportJobs(
    args: GetBatchImportJobsCommandInput,
    cb: (err: any, data?: GetBatchImportJobsCommandOutput) => void
  ): void;
  public getBatchImportJobs(
    args: GetBatchImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBatchImportJobsCommandOutput) => void
  ): void;
  public getBatchImportJobs(
    args: GetBatchImportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBatchImportJobsCommandOutput) => void),
    cb?: (err: any, data?: GetBatchImportJobsCommandOutput) => void
  ): Promise<GetBatchImportJobsCommandOutput> | void {
    const command = new GetBatchImportJobsCommand(args);
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
   * <p>Gets all batch prediction jobs or a specific job if you specify a job ID. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 1 and 50. To get the next page results, provide the pagination token from the GetBatchPredictionJobsResponse as part of your request. A null pagination token fetches the records from the beginning.</p>
   */
  public getBatchPredictionJobs(
    args: GetBatchPredictionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBatchPredictionJobsCommandOutput>;
  public getBatchPredictionJobs(
    args: GetBatchPredictionJobsCommandInput,
    cb: (err: any, data?: GetBatchPredictionJobsCommandOutput) => void
  ): void;
  public getBatchPredictionJobs(
    args: GetBatchPredictionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBatchPredictionJobsCommandOutput) => void
  ): void;
  public getBatchPredictionJobs(
    args: GetBatchPredictionJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBatchPredictionJobsCommandOutput) => void),
    cb?: (err: any, data?: GetBatchPredictionJobsCommandOutput) => void
  ): Promise<GetBatchPredictionJobsCommandOutput> | void {
    const command = new GetBatchPredictionJobsCommand(args);
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
   * <p>Retrieves the status of a <code>DeleteEventsByEventType</code> action.</p>
   */
  public getDeleteEventsByEventTypeStatus(
    args: GetDeleteEventsByEventTypeStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeleteEventsByEventTypeStatusCommandOutput>;
  public getDeleteEventsByEventTypeStatus(
    args: GetDeleteEventsByEventTypeStatusCommandInput,
    cb: (err: any, data?: GetDeleteEventsByEventTypeStatusCommandOutput) => void
  ): void;
  public getDeleteEventsByEventTypeStatus(
    args: GetDeleteEventsByEventTypeStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeleteEventsByEventTypeStatusCommandOutput) => void
  ): void;
  public getDeleteEventsByEventTypeStatus(
    args: GetDeleteEventsByEventTypeStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeleteEventsByEventTypeStatusCommandOutput) => void),
    cb?: (err: any, data?: GetDeleteEventsByEventTypeStatusCommandOutput) => void
  ): Promise<GetDeleteEventsByEventTypeStatusCommandOutput> | void {
    const command = new GetDeleteEventsByEventTypeStatusCommand(args);
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
   * <p>Gets all detectors or a single detector if a <code>detectorId</code> is specified. This is a paginated API. If you
   *          provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records
   *          per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10.
   *          To get the next page results, provide the pagination token from the
   *             <code>GetDetectorsResponse</code> as part of your request. A null pagination token
   *          fetches the records from the beginning. </p>
   */
  public getDetectors(
    args: GetDetectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDetectorsCommandOutput>;
  public getDetectors(args: GetDetectorsCommandInput, cb: (err: any, data?: GetDetectorsCommandOutput) => void): void;
  public getDetectors(
    args: GetDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDetectorsCommandOutput) => void
  ): void;
  public getDetectors(
    args: GetDetectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDetectorsCommandOutput) => void),
    cb?: (err: any, data?: GetDetectorsCommandOutput) => void
  ): Promise<GetDetectorsCommandOutput> | void {
    const command = new GetDetectorsCommand(args);
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
   * <p>Gets a particular detector version. </p>
   */
  public getDetectorVersion(
    args: GetDetectorVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDetectorVersionCommandOutput>;
  public getDetectorVersion(
    args: GetDetectorVersionCommandInput,
    cb: (err: any, data?: GetDetectorVersionCommandOutput) => void
  ): void;
  public getDetectorVersion(
    args: GetDetectorVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDetectorVersionCommandOutput) => void
  ): void;
  public getDetectorVersion(
    args: GetDetectorVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDetectorVersionCommandOutput) => void),
    cb?: (err: any, data?: GetDetectorVersionCommandOutput) => void
  ): Promise<GetDetectorVersionCommandOutput> | void {
    const command = new GetDetectorVersionCommand(args);
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
   * <p>Gets all entity types or a specific entity type if a name is specified. This is a paginated API. If you
   *          provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records
   *          per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10.
   *          To get the next page results, provide the pagination token from the
   *          <code>GetEntityTypesResponse</code> as part of your request. A null pagination token
   *          fetches the records from the beginning. </p>
   */
  public getEntityTypes(
    args: GetEntityTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEntityTypesCommandOutput>;
  public getEntityTypes(
    args: GetEntityTypesCommandInput,
    cb: (err: any, data?: GetEntityTypesCommandOutput) => void
  ): void;
  public getEntityTypes(
    args: GetEntityTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEntityTypesCommandOutput) => void
  ): void;
  public getEntityTypes(
    args: GetEntityTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEntityTypesCommandOutput) => void),
    cb?: (err: any, data?: GetEntityTypesCommandOutput) => void
  ): Promise<GetEntityTypesCommandOutput> | void {
    const command = new GetEntityTypesCommand(args);
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
   * <p>Retrieves details of events stored with Amazon Fraud Detector. This action does not retrieve prediction results.</p>
   */
  public getEvent(args: GetEventCommandInput, options?: __HttpHandlerOptions): Promise<GetEventCommandOutput>;
  public getEvent(args: GetEventCommandInput, cb: (err: any, data?: GetEventCommandOutput) => void): void;
  public getEvent(
    args: GetEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventCommandOutput) => void
  ): void;
  public getEvent(
    args: GetEventCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEventCommandOutput) => void),
    cb?: (err: any, data?: GetEventCommandOutput) => void
  ): Promise<GetEventCommandOutput> | void {
    const command = new GetEventCommand(args);
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
   * <p>Evaluates an event against a detector version. If a version ID is not provided, the detector’s (<code>ACTIVE</code>) version is used.</p>
   */
  public getEventPrediction(
    args: GetEventPredictionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventPredictionCommandOutput>;
  public getEventPrediction(
    args: GetEventPredictionCommandInput,
    cb: (err: any, data?: GetEventPredictionCommandOutput) => void
  ): void;
  public getEventPrediction(
    args: GetEventPredictionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventPredictionCommandOutput) => void
  ): void;
  public getEventPrediction(
    args: GetEventPredictionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEventPredictionCommandOutput) => void),
    cb?: (err: any, data?: GetEventPredictionCommandOutput) => void
  ): Promise<GetEventPredictionCommandOutput> | void {
    const command = new GetEventPredictionCommand(args);
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
   * <p>
   * Gets details of the past fraud predictions for the specified event ID, event type, detector ID, and detector version ID that was generated in the specified time period.
   * </p>
   */
  public getEventPredictionMetadata(
    args: GetEventPredictionMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventPredictionMetadataCommandOutput>;
  public getEventPredictionMetadata(
    args: GetEventPredictionMetadataCommandInput,
    cb: (err: any, data?: GetEventPredictionMetadataCommandOutput) => void
  ): void;
  public getEventPredictionMetadata(
    args: GetEventPredictionMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventPredictionMetadataCommandOutput) => void
  ): void;
  public getEventPredictionMetadata(
    args: GetEventPredictionMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEventPredictionMetadataCommandOutput) => void),
    cb?: (err: any, data?: GetEventPredictionMetadataCommandOutput) => void
  ): Promise<GetEventPredictionMetadataCommandOutput> | void {
    const command = new GetEventPredictionMetadataCommand(args);
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
   * <p>Gets all event types or a specific event type if name is provided. This is a paginated API. If you
   *          provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records
   *          per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10.
   *          To get the next page results, provide the pagination token from the
   *             <code>GetEventTypesResponse</code> as part of your request. A null pagination token
   *          fetches the records from the beginning. </p>
   */
  public getEventTypes(
    args: GetEventTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventTypesCommandOutput>;
  public getEventTypes(
    args: GetEventTypesCommandInput,
    cb: (err: any, data?: GetEventTypesCommandOutput) => void
  ): void;
  public getEventTypes(
    args: GetEventTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventTypesCommandOutput) => void
  ): void;
  public getEventTypes(
    args: GetEventTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEventTypesCommandOutput) => void),
    cb?: (err: any, data?: GetEventTypesCommandOutput) => void
  ): Promise<GetEventTypesCommandOutput> | void {
    const command = new GetEventTypesCommand(args);
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
   * <p>Gets the details for one or more Amazon SageMaker models that have been imported into the
   *          service. This is a paginated API. If you provide a null <code>maxResults</code>, this
   *          actions retrieves a maximum of 10 records per page. If you provide a
   *             <code>maxResults</code>, the value must be between 5 and 10. To get the next page
   *          results, provide the pagination token from the <code>GetExternalModelsResult</code> as part
   *          of your request. A null pagination token fetches the records from the beginning. </p>
   */
  public getExternalModels(
    args: GetExternalModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExternalModelsCommandOutput>;
  public getExternalModels(
    args: GetExternalModelsCommandInput,
    cb: (err: any, data?: GetExternalModelsCommandOutput) => void
  ): void;
  public getExternalModels(
    args: GetExternalModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExternalModelsCommandOutput) => void
  ): void;
  public getExternalModels(
    args: GetExternalModelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetExternalModelsCommandOutput) => void),
    cb?: (err: any, data?: GetExternalModelsCommandOutput) => void
  ): Promise<GetExternalModelsCommandOutput> | void {
    const command = new GetExternalModelsCommand(args);
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
   * <p>Gets the encryption key if a KMS key has been specified to be used to encrypt content in Amazon Fraud Detector.</p>
   */
  public getKMSEncryptionKey(
    args: GetKMSEncryptionKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKMSEncryptionKeyCommandOutput>;
  public getKMSEncryptionKey(
    args: GetKMSEncryptionKeyCommandInput,
    cb: (err: any, data?: GetKMSEncryptionKeyCommandOutput) => void
  ): void;
  public getKMSEncryptionKey(
    args: GetKMSEncryptionKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKMSEncryptionKeyCommandOutput) => void
  ): void;
  public getKMSEncryptionKey(
    args: GetKMSEncryptionKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetKMSEncryptionKeyCommandOutput) => void),
    cb?: (err: any, data?: GetKMSEncryptionKeyCommandOutput) => void
  ): Promise<GetKMSEncryptionKeyCommandOutput> | void {
    const command = new GetKMSEncryptionKeyCommand(args);
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
   * <p>Gets all labels or a specific label if name is provided. This is a paginated API. If you
   *          provide a null <code>maxResults</code>, this action retrieves a maximum of 50 records
   *          per page. If you provide a <code>maxResults</code>, the value must be between 10 and 50.
   *          To get the next page results, provide the pagination token from the
   *          <code>GetGetLabelsResponse</code> as part of your request. A null pagination token
   *          fetches the records from the beginning. </p>
   */
  public getLabels(args: GetLabelsCommandInput, options?: __HttpHandlerOptions): Promise<GetLabelsCommandOutput>;
  public getLabels(args: GetLabelsCommandInput, cb: (err: any, data?: GetLabelsCommandOutput) => void): void;
  public getLabels(
    args: GetLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLabelsCommandOutput) => void
  ): void;
  public getLabels(
    args: GetLabelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLabelsCommandOutput) => void),
    cb?: (err: any, data?: GetLabelsCommandOutput) => void
  ): Promise<GetLabelsCommandOutput> | void {
    const command = new GetLabelsCommand(args);
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
   * <p>Gets one or more models. Gets all models for the Amazon Web Services account if no model type and no model id provided. Gets all models for the Amazon Web Services account and model type, if the model type is specified but model id is not provided. Gets a specific model if (model type, model id) tuple is specified. </p>
   *          <p>This is a paginated API. If you
   *          provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records
   *          per page. If you provide a <code>maxResults</code>, the value must be between 1 and 10.
   *          To get the next page results, provide the pagination token from the
   *             response as part of your request. A null pagination token
   *          fetches the records from the beginning.</p>
   */
  public getModels(args: GetModelsCommandInput, options?: __HttpHandlerOptions): Promise<GetModelsCommandOutput>;
  public getModels(args: GetModelsCommandInput, cb: (err: any, data?: GetModelsCommandOutput) => void): void;
  public getModels(
    args: GetModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelsCommandOutput) => void
  ): void;
  public getModels(
    args: GetModelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetModelsCommandOutput) => void),
    cb?: (err: any, data?: GetModelsCommandOutput) => void
  ): Promise<GetModelsCommandOutput> | void {
    const command = new GetModelsCommand(args);
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
   * <p>Gets the details of the specified model version.</p>
   */
  public getModelVersion(
    args: GetModelVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelVersionCommandOutput>;
  public getModelVersion(
    args: GetModelVersionCommandInput,
    cb: (err: any, data?: GetModelVersionCommandOutput) => void
  ): void;
  public getModelVersion(
    args: GetModelVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelVersionCommandOutput) => void
  ): void;
  public getModelVersion(
    args: GetModelVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetModelVersionCommandOutput) => void),
    cb?: (err: any, data?: GetModelVersionCommandOutput) => void
  ): Promise<GetModelVersionCommandOutput> | void {
    const command = new GetModelVersionCommand(args);
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
   * <p>Gets one or more outcomes. This is a paginated
   *          API. If you provide a null <code>maxResults</code>, this actions retrieves a maximum of
   *          100 records per page. If you provide a <code>maxResults</code>, the value must be
   *          between 50 and 100. To get the next page results, provide the pagination token from the
   *         <code>GetOutcomesResult</code> as part of your request. A null pagination token
   *          fetches the records from the beginning. </p>
   */
  public getOutcomes(args: GetOutcomesCommandInput, options?: __HttpHandlerOptions): Promise<GetOutcomesCommandOutput>;
  public getOutcomes(args: GetOutcomesCommandInput, cb: (err: any, data?: GetOutcomesCommandOutput) => void): void;
  public getOutcomes(
    args: GetOutcomesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOutcomesCommandOutput) => void
  ): void;
  public getOutcomes(
    args: GetOutcomesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOutcomesCommandOutput) => void),
    cb?: (err: any, data?: GetOutcomesCommandOutput) => void
  ): Promise<GetOutcomesCommandOutput> | void {
    const command = new GetOutcomesCommand(args);
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
   * <p>Get all rules for a detector (paginated) if <code>ruleId</code> and <code>ruleVersion</code> are not specified. Gets all rules for the detector and the <code>ruleId</code> if present (paginated). Gets a specific rule if both the <code>ruleId</code> and the <code>ruleVersion</code> are specified.</p>
   *          <p>This is a paginated API. Providing null maxResults results in retrieving maximum of 100 records per page. If you provide maxResults the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetRulesResult as part of your request. Null pagination token fetches the records from the beginning.</p>
   */
  public getRules(args: GetRulesCommandInput, options?: __HttpHandlerOptions): Promise<GetRulesCommandOutput>;
  public getRules(args: GetRulesCommandInput, cb: (err: any, data?: GetRulesCommandOutput) => void): void;
  public getRules(
    args: GetRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRulesCommandOutput) => void
  ): void;
  public getRules(
    args: GetRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRulesCommandOutput) => void),
    cb?: (err: any, data?: GetRulesCommandOutput) => void
  ): Promise<GetRulesCommandOutput> | void {
    const command = new GetRulesCommand(args);
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
   * <p>Gets all of the variables or the specific variable. This is a
   *          paginated API. Providing null <code>maxSizePerPage</code> results in retrieving maximum of
   *          100 records per page. If you provide <code>maxSizePerPage</code> the value must be between
   *          50 and 100. To get the next page result, a provide a pagination token from
   *         <code>GetVariablesResult</code> as part of your request. Null pagination token
   *          fetches the records from the beginning. </p>
   */
  public getVariables(
    args: GetVariablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVariablesCommandOutput>;
  public getVariables(args: GetVariablesCommandInput, cb: (err: any, data?: GetVariablesCommandOutput) => void): void;
  public getVariables(
    args: GetVariablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVariablesCommandOutput) => void
  ): void;
  public getVariables(
    args: GetVariablesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVariablesCommandOutput) => void),
    cb?: (err: any, data?: GetVariablesCommandOutput) => void
  ): Promise<GetVariablesCommandOutput> | void {
    const command = new GetVariablesCommand(args);
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
   * <p>Gets a list of past predictions. The list can be filtered by detector ID, detector version ID, event ID, event type, or by specifying a time period.
   *     If filter is not specified, the most recent prediction is returned.</p>
   *
   *          <p>For example, the following filter lists all past predictions for <code>xyz</code> event type -
   *     <code>{
   *         "eventType":{
   *         "value": "xyz" }”
   *         }  </code>
   *          </p>
   *
   *          <p>This is a paginated API. If you provide a null <code>maxResults</code>, this action will retrieve a maximum of 10 records per page.
   *   If you provide a <code>maxResults</code>, the value must be between 50 and 100. To get the next page results, provide
   *   the <code>nextToken</code> from the response as part of your request. A null <code>nextToken</code> fetches the records from the beginning.
   * </p>
   */
  public listEventPredictions(
    args: ListEventPredictionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventPredictionsCommandOutput>;
  public listEventPredictions(
    args: ListEventPredictionsCommandInput,
    cb: (err: any, data?: ListEventPredictionsCommandOutput) => void
  ): void;
  public listEventPredictions(
    args: ListEventPredictionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventPredictionsCommandOutput) => void
  ): void;
  public listEventPredictions(
    args: ListEventPredictionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEventPredictionsCommandOutput) => void),
    cb?: (err: any, data?: ListEventPredictionsCommandOutput) => void
  ): Promise<ListEventPredictionsCommandOutput> | void {
    const command = new ListEventPredictionsCommand(args);
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
   * <p>Lists all tags associated with the resource. This is a paginated API. To get the next page results, provide the pagination token from the
   *             response as part of your request. A null pagination token
   *          fetches the records from the beginning. </p>
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
   * <p>Creates or updates a detector. </p>
   */
  public putDetector(args: PutDetectorCommandInput, options?: __HttpHandlerOptions): Promise<PutDetectorCommandOutput>;
  public putDetector(args: PutDetectorCommandInput, cb: (err: any, data?: PutDetectorCommandOutput) => void): void;
  public putDetector(
    args: PutDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDetectorCommandOutput) => void
  ): void;
  public putDetector(
    args: PutDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDetectorCommandOutput) => void),
    cb?: (err: any, data?: PutDetectorCommandOutput) => void
  ): Promise<PutDetectorCommandOutput> | void {
    const command = new PutDetectorCommand(args);
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
   * <p>Creates or updates an entity type. An entity represents who is performing the event. As part of a fraud prediction, you pass the entity ID to indicate the specific entity who performed the event. An entity type classifies the entity. Example classifications include customer, merchant, or account.</p>
   */
  public putEntityType(
    args: PutEntityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEntityTypeCommandOutput>;
  public putEntityType(
    args: PutEntityTypeCommandInput,
    cb: (err: any, data?: PutEntityTypeCommandOutput) => void
  ): void;
  public putEntityType(
    args: PutEntityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEntityTypeCommandOutput) => void
  ): void;
  public putEntityType(
    args: PutEntityTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutEntityTypeCommandOutput) => void),
    cb?: (err: any, data?: PutEntityTypeCommandOutput) => void
  ): Promise<PutEntityTypeCommandOutput> | void {
    const command = new PutEntityTypeCommand(args);
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
   * <p>Creates or updates an event type. An event is a business activity that is evaluated for fraud risk. With Amazon Fraud Detector, you generate fraud predictions for events. An event type defines the structure for an event sent to Amazon Fraud Detector. This includes the variables sent as part of the event, the entity performing the event (such as a customer), and the labels that classify the event. Example event types include online payment transactions, account registrations, and authentications.</p>
   */
  public putEventType(
    args: PutEventTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEventTypeCommandOutput>;
  public putEventType(args: PutEventTypeCommandInput, cb: (err: any, data?: PutEventTypeCommandOutput) => void): void;
  public putEventType(
    args: PutEventTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventTypeCommandOutput) => void
  ): void;
  public putEventType(
    args: PutEventTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutEventTypeCommandOutput) => void),
    cb?: (err: any, data?: PutEventTypeCommandOutput) => void
  ): Promise<PutEventTypeCommandOutput> | void {
    const command = new PutEventTypeCommand(args);
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
   * <p>Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables.  </p>
   */
  public putExternalModel(
    args: PutExternalModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutExternalModelCommandOutput>;
  public putExternalModel(
    args: PutExternalModelCommandInput,
    cb: (err: any, data?: PutExternalModelCommandOutput) => void
  ): void;
  public putExternalModel(
    args: PutExternalModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutExternalModelCommandOutput) => void
  ): void;
  public putExternalModel(
    args: PutExternalModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutExternalModelCommandOutput) => void),
    cb?: (err: any, data?: PutExternalModelCommandOutput) => void
  ): Promise<PutExternalModelCommandOutput> | void {
    const command = new PutExternalModelCommand(args);
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
   * <p>Specifies the KMS key to be used to encrypt content in Amazon Fraud Detector.</p>
   */
  public putKMSEncryptionKey(
    args: PutKMSEncryptionKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutKMSEncryptionKeyCommandOutput>;
  public putKMSEncryptionKey(
    args: PutKMSEncryptionKeyCommandInput,
    cb: (err: any, data?: PutKMSEncryptionKeyCommandOutput) => void
  ): void;
  public putKMSEncryptionKey(
    args: PutKMSEncryptionKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutKMSEncryptionKeyCommandOutput) => void
  ): void;
  public putKMSEncryptionKey(
    args: PutKMSEncryptionKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutKMSEncryptionKeyCommandOutput) => void),
    cb?: (err: any, data?: PutKMSEncryptionKeyCommandOutput) => void
  ): Promise<PutKMSEncryptionKeyCommandOutput> | void {
    const command = new PutKMSEncryptionKeyCommand(args);
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
   * <p>Creates or updates label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector. </p>
   */
  public putLabel(args: PutLabelCommandInput, options?: __HttpHandlerOptions): Promise<PutLabelCommandOutput>;
  public putLabel(args: PutLabelCommandInput, cb: (err: any, data?: PutLabelCommandOutput) => void): void;
  public putLabel(
    args: PutLabelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLabelCommandOutput) => void
  ): void;
  public putLabel(
    args: PutLabelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutLabelCommandOutput) => void),
    cb?: (err: any, data?: PutLabelCommandOutput) => void
  ): Promise<PutLabelCommandOutput> | void {
    const command = new PutLabelCommand(args);
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
   * <p>Creates or updates an outcome. </p>
   */
  public putOutcome(args: PutOutcomeCommandInput, options?: __HttpHandlerOptions): Promise<PutOutcomeCommandOutput>;
  public putOutcome(args: PutOutcomeCommandInput, cb: (err: any, data?: PutOutcomeCommandOutput) => void): void;
  public putOutcome(
    args: PutOutcomeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutOutcomeCommandOutput) => void
  ): void;
  public putOutcome(
    args: PutOutcomeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutOutcomeCommandOutput) => void),
    cb?: (err: any, data?: PutOutcomeCommandOutput) => void
  ): Promise<PutOutcomeCommandOutput> | void {
    const command = new PutOutcomeCommand(args);
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
   * <p>Stores events in Amazon Fraud Detector without generating fraud predictions for those events. For example, you can use <code>SendEvent</code> to upload a historical dataset, which you can then later use to train a model.</p>
   */
  public sendEvent(args: SendEventCommandInput, options?: __HttpHandlerOptions): Promise<SendEventCommandOutput>;
  public sendEvent(args: SendEventCommandInput, cb: (err: any, data?: SendEventCommandOutput) => void): void;
  public sendEvent(
    args: SendEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendEventCommandOutput) => void
  ): void;
  public sendEvent(
    args: SendEventCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendEventCommandOutput) => void),
    cb?: (err: any, data?: SendEventCommandOutput) => void
  ): Promise<SendEventCommandOutput> | void {
    const command = new SendEventCommand(args);
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
   * <p>Assigns tags to a resource.</p>
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
   * <p>Removes tags from a resource.</p>
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
   * <p> Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, rule execution mode, and description. You can only update a <code>DRAFT</code> detector version.</p>
   */
  public updateDetectorVersion(
    args: UpdateDetectorVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDetectorVersionCommandOutput>;
  public updateDetectorVersion(
    args: UpdateDetectorVersionCommandInput,
    cb: (err: any, data?: UpdateDetectorVersionCommandOutput) => void
  ): void;
  public updateDetectorVersion(
    args: UpdateDetectorVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDetectorVersionCommandOutput) => void
  ): void;
  public updateDetectorVersion(
    args: UpdateDetectorVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDetectorVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateDetectorVersionCommandOutput) => void
  ): Promise<UpdateDetectorVersionCommandOutput> | void {
    const command = new UpdateDetectorVersionCommand(args);
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
   * <p>Updates the detector version's description. You can update the metadata for any detector version (<code>DRAFT, ACTIVE,</code> or
   *                 <code>INACTIVE</code>). </p>
   */
  public updateDetectorVersionMetadata(
    args: UpdateDetectorVersionMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDetectorVersionMetadataCommandOutput>;
  public updateDetectorVersionMetadata(
    args: UpdateDetectorVersionMetadataCommandInput,
    cb: (err: any, data?: UpdateDetectorVersionMetadataCommandOutput) => void
  ): void;
  public updateDetectorVersionMetadata(
    args: UpdateDetectorVersionMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDetectorVersionMetadataCommandOutput) => void
  ): void;
  public updateDetectorVersionMetadata(
    args: UpdateDetectorVersionMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDetectorVersionMetadataCommandOutput) => void),
    cb?: (err: any, data?: UpdateDetectorVersionMetadataCommandOutput) => void
  ): Promise<UpdateDetectorVersionMetadataCommandOutput> | void {
    const command = new UpdateDetectorVersionMetadataCommand(args);
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
   * <p>Updates the detector version’s status. You can perform the following promotions or
   *             demotions using <code>UpdateDetectorVersionStatus</code>: <code>DRAFT</code> to <code>ACTIVE</code>, <code>ACTIVE</code> to <code>INACTIVE</code>, and <code>INACTIVE</code> to <code>ACTIVE</code>.</p>
   */
  public updateDetectorVersionStatus(
    args: UpdateDetectorVersionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDetectorVersionStatusCommandOutput>;
  public updateDetectorVersionStatus(
    args: UpdateDetectorVersionStatusCommandInput,
    cb: (err: any, data?: UpdateDetectorVersionStatusCommandOutput) => void
  ): void;
  public updateDetectorVersionStatus(
    args: UpdateDetectorVersionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDetectorVersionStatusCommandOutput) => void
  ): void;
  public updateDetectorVersionStatus(
    args: UpdateDetectorVersionStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDetectorVersionStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdateDetectorVersionStatusCommandOutput) => void
  ): Promise<UpdateDetectorVersionStatusCommandOutput> | void {
    const command = new UpdateDetectorVersionStatusCommand(args);
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
   * <p>Updates the specified event with a new label.</p>
   */
  public updateEventLabel(
    args: UpdateEventLabelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventLabelCommandOutput>;
  public updateEventLabel(
    args: UpdateEventLabelCommandInput,
    cb: (err: any, data?: UpdateEventLabelCommandOutput) => void
  ): void;
  public updateEventLabel(
    args: UpdateEventLabelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventLabelCommandOutput) => void
  ): void;
  public updateEventLabel(
    args: UpdateEventLabelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEventLabelCommandOutput) => void),
    cb?: (err: any, data?: UpdateEventLabelCommandOutput) => void
  ): Promise<UpdateEventLabelCommandOutput> | void {
    const command = new UpdateEventLabelCommand(args);
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
   * <p>Updates model description.</p>
   */
  public updateModel(args: UpdateModelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateModelCommandOutput>;
  public updateModel(args: UpdateModelCommandInput, cb: (err: any, data?: UpdateModelCommandOutput) => void): void;
  public updateModel(
    args: UpdateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelCommandOutput) => void
  ): void;
  public updateModel(
    args: UpdateModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateModelCommandOutput) => void),
    cb?: (err: any, data?: UpdateModelCommandOutput) => void
  ): Promise<UpdateModelCommandOutput> | void {
    const command = new UpdateModelCommand(args);
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
   * <p>Updates a model version. Updating a model version retrains an existing model version using updated training data and produces a new minor version of the model. You can update the training data set location and data access role attributes using this action. This action creates and trains a new minor version of the model, for example version 1.01, 1.02, 1.03.</p>
   */
  public updateModelVersion(
    args: UpdateModelVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateModelVersionCommandOutput>;
  public updateModelVersion(
    args: UpdateModelVersionCommandInput,
    cb: (err: any, data?: UpdateModelVersionCommandOutput) => void
  ): void;
  public updateModelVersion(
    args: UpdateModelVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelVersionCommandOutput) => void
  ): void;
  public updateModelVersion(
    args: UpdateModelVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateModelVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateModelVersionCommandOutput) => void
  ): Promise<UpdateModelVersionCommandOutput> | void {
    const command = new UpdateModelVersionCommand(args);
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
   * <p>Updates the status of a model version.</p>
   *          <p>You can perform the following status updates:</p>
   *          <ol>
   *             <li>
   *                <p>Change the <code>TRAINING_IN_PROGRESS</code> status to <code>TRAINING_CANCELLED</code>.</p>
   *             </li>
   *             <li>
   *                <p>Change the <code>TRAINING_COMPLETE</code> status to <code>ACTIVE</code>.</p>
   *             </li>
   *             <li>
   *                <p>Change <code>ACTIVE</code> to <code>INACTIVE</code>.</p>
   *             </li>
   *          </ol>
   */
  public updateModelVersionStatus(
    args: UpdateModelVersionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateModelVersionStatusCommandOutput>;
  public updateModelVersionStatus(
    args: UpdateModelVersionStatusCommandInput,
    cb: (err: any, data?: UpdateModelVersionStatusCommandOutput) => void
  ): void;
  public updateModelVersionStatus(
    args: UpdateModelVersionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelVersionStatusCommandOutput) => void
  ): void;
  public updateModelVersionStatus(
    args: UpdateModelVersionStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateModelVersionStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdateModelVersionStatusCommandOutput) => void
  ): Promise<UpdateModelVersionStatusCommandOutput> | void {
    const command = new UpdateModelVersionStatusCommand(args);
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
   * <p>Updates a rule's metadata. The description attribute can be updated.</p>
   */
  public updateRuleMetadata(
    args: UpdateRuleMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuleMetadataCommandOutput>;
  public updateRuleMetadata(
    args: UpdateRuleMetadataCommandInput,
    cb: (err: any, data?: UpdateRuleMetadataCommandOutput) => void
  ): void;
  public updateRuleMetadata(
    args: UpdateRuleMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleMetadataCommandOutput) => void
  ): void;
  public updateRuleMetadata(
    args: UpdateRuleMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRuleMetadataCommandOutput) => void),
    cb?: (err: any, data?: UpdateRuleMetadataCommandOutput) => void
  ): Promise<UpdateRuleMetadataCommandOutput> | void {
    const command = new UpdateRuleMetadataCommand(args);
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
   * <p>Updates a rule version resulting in a new rule version. Updates a rule version resulting in a new rule version (version 1, 2, 3 ...). </p>
   */
  public updateRuleVersion(
    args: UpdateRuleVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuleVersionCommandOutput>;
  public updateRuleVersion(
    args: UpdateRuleVersionCommandInput,
    cb: (err: any, data?: UpdateRuleVersionCommandOutput) => void
  ): void;
  public updateRuleVersion(
    args: UpdateRuleVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleVersionCommandOutput) => void
  ): void;
  public updateRuleVersion(
    args: UpdateRuleVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRuleVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateRuleVersionCommandOutput) => void
  ): Promise<UpdateRuleVersionCommandOutput> | void {
    const command = new UpdateRuleVersionCommand(args);
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
   * <p>Updates a variable.</p>
   */
  public updateVariable(
    args: UpdateVariableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVariableCommandOutput>;
  public updateVariable(
    args: UpdateVariableCommandInput,
    cb: (err: any, data?: UpdateVariableCommandOutput) => void
  ): void;
  public updateVariable(
    args: UpdateVariableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVariableCommandOutput) => void
  ): void;
  public updateVariable(
    args: UpdateVariableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVariableCommandOutput) => void),
    cb?: (err: any, data?: UpdateVariableCommandOutput) => void
  ): Promise<UpdateVariableCommandOutput> | void {
    const command = new UpdateVariableCommand(args);
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
