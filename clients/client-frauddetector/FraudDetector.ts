import { FraudDetectorClient } from "./FraudDetectorClient";
import {
  BatchCreateVariableCommand,
  BatchCreateVariableCommandInput,
  BatchCreateVariableCommandOutput
} from "./commands/BatchCreateVariableCommand";
import {
  BatchGetVariableCommand,
  BatchGetVariableCommandInput,
  BatchGetVariableCommandOutput
} from "./commands/BatchGetVariableCommand";
import {
  CreateDetectorVersionCommand,
  CreateDetectorVersionCommandInput,
  CreateDetectorVersionCommandOutput
} from "./commands/CreateDetectorVersionCommand";
import {
  CreateModelVersionCommand,
  CreateModelVersionCommandInput,
  CreateModelVersionCommandOutput
} from "./commands/CreateModelVersionCommand";
import {
  CreateRuleCommand,
  CreateRuleCommandInput,
  CreateRuleCommandOutput
} from "./commands/CreateRuleCommand";
import {
  CreateVariableCommand,
  CreateVariableCommandInput,
  CreateVariableCommandOutput
} from "./commands/CreateVariableCommand";
import {
  DeleteDetectorVersionCommand,
  DeleteDetectorVersionCommandInput,
  DeleteDetectorVersionCommandOutput
} from "./commands/DeleteDetectorVersionCommand";
import {
  DeleteEventCommand,
  DeleteEventCommandInput,
  DeleteEventCommandOutput
} from "./commands/DeleteEventCommand";
import {
  DescribeDetectorCommand,
  DescribeDetectorCommandInput,
  DescribeDetectorCommandOutput
} from "./commands/DescribeDetectorCommand";
import {
  DescribeModelVersionsCommand,
  DescribeModelVersionsCommandInput,
  DescribeModelVersionsCommandOutput
} from "./commands/DescribeModelVersionsCommand";
import {
  GetDetectorVersionCommand,
  GetDetectorVersionCommandInput,
  GetDetectorVersionCommandOutput
} from "./commands/GetDetectorVersionCommand";
import {
  GetDetectorsCommand,
  GetDetectorsCommandInput,
  GetDetectorsCommandOutput
} from "./commands/GetDetectorsCommand";
import {
  GetExternalModelsCommand,
  GetExternalModelsCommandInput,
  GetExternalModelsCommandOutput
} from "./commands/GetExternalModelsCommand";
import {
  GetModelVersionCommand,
  GetModelVersionCommandInput,
  GetModelVersionCommandOutput
} from "./commands/GetModelVersionCommand";
import {
  GetModelsCommand,
  GetModelsCommandInput,
  GetModelsCommandOutput
} from "./commands/GetModelsCommand";
import {
  GetOutcomesCommand,
  GetOutcomesCommandInput,
  GetOutcomesCommandOutput
} from "./commands/GetOutcomesCommand";
import {
  GetPredictionCommand,
  GetPredictionCommandInput,
  GetPredictionCommandOutput
} from "./commands/GetPredictionCommand";
import {
  GetRulesCommand,
  GetRulesCommandInput,
  GetRulesCommandOutput
} from "./commands/GetRulesCommand";
import {
  GetVariablesCommand,
  GetVariablesCommandInput,
  GetVariablesCommandOutput
} from "./commands/GetVariablesCommand";
import {
  PutDetectorCommand,
  PutDetectorCommandInput,
  PutDetectorCommandOutput
} from "./commands/PutDetectorCommand";
import {
  PutExternalModelCommand,
  PutExternalModelCommandInput,
  PutExternalModelCommandOutput
} from "./commands/PutExternalModelCommand";
import {
  PutModelCommand,
  PutModelCommandInput,
  PutModelCommandOutput
} from "./commands/PutModelCommand";
import {
  PutOutcomeCommand,
  PutOutcomeCommandInput,
  PutOutcomeCommandOutput
} from "./commands/PutOutcomeCommand";
import {
  UpdateDetectorVersionCommand,
  UpdateDetectorVersionCommandInput,
  UpdateDetectorVersionCommandOutput
} from "./commands/UpdateDetectorVersionCommand";
import {
  UpdateDetectorVersionMetadataCommand,
  UpdateDetectorVersionMetadataCommandInput,
  UpdateDetectorVersionMetadataCommandOutput
} from "./commands/UpdateDetectorVersionMetadataCommand";
import {
  UpdateDetectorVersionStatusCommand,
  UpdateDetectorVersionStatusCommandInput,
  UpdateDetectorVersionStatusCommandOutput
} from "./commands/UpdateDetectorVersionStatusCommand";
import {
  UpdateModelVersionCommand,
  UpdateModelVersionCommandInput,
  UpdateModelVersionCommandOutput
} from "./commands/UpdateModelVersionCommand";
import {
  UpdateRuleMetadataCommand,
  UpdateRuleMetadataCommandInput,
  UpdateRuleMetadataCommandOutput
} from "./commands/UpdateRuleMetadataCommand";
import {
  UpdateRuleVersionCommand,
  UpdateRuleVersionCommandInput,
  UpdateRuleVersionCommandOutput
} from "./commands/UpdateRuleVersionCommand";
import {
  UpdateVariableCommand,
  UpdateVariableCommandInput,
  UpdateVariableCommandOutput
} from "./commands/UpdateVariableCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>This is the Amazon Fraud Detector API Reference. This guide is for developers who need
 *             detailed information about Amazon Fraud Detector API actions, data types, and errors. For
 *             more information about Amazon Fraud Detector features, see the <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/">Amazon Fraud Detector User Guide</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchCreateVariableCommandOutput) => void),
    cb?: (err: any, data?: BatchCreateVariableCommandOutput) => void
  ): Promise<BatchCreateVariableCommandOutput> | void {
    const command = new BatchCreateVariableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchGetVariableCommandOutput) => void),
    cb?: (err: any, data?: BatchGetVariableCommandOutput) => void
  ): Promise<BatchGetVariableCommandOutput> | void {
    const command = new BatchGetVariableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDetectorVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateDetectorVersionCommandOutput) => void
  ): Promise<CreateDetectorVersionCommandOutput> | void {
    const command = new CreateDetectorVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a version of the model using the specified model type.
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateModelVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateModelVersionCommandOutput) => void
  ): Promise<CreateModelVersionCommandOutput> | void {
    const command = new CreateModelVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a rule for use with the specified detector. </p>
   */
  public createRule(
    args: CreateRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRuleCommandOutput>;
  public createRule(
    args: CreateRuleCommandInput,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;
  public createRule(
    args: CreateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;
  public createRule(
    args: CreateRuleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateRuleCommandOutput) => void
  ): Promise<CreateRuleCommandOutput> | void {
    const command = new CreateRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateVariableCommandOutput) => void),
    cb?: (err: any, data?: CreateVariableCommandOutput) => void
  ): Promise<CreateVariableCommandOutput> | void {
    const command = new CreateVariableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the detector version.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteDetectorVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteDetectorVersionCommandOutput) => void
  ): Promise<DeleteDetectorVersionCommandOutput> | void {
    const command = new DeleteDetectorVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified event.</p>
   */
  public deleteEvent(
    args: DeleteEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventCommandOutput>;
  public deleteEvent(
    args: DeleteEventCommandInput,
    cb: (err: any, data?: DeleteEventCommandOutput) => void
  ): void;
  public deleteEvent(
    args: DeleteEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventCommandOutput) => void
  ): void;
  public deleteEvent(
    args: DeleteEventCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteEventCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventCommandOutput) => void
  ): Promise<DeleteEventCommandOutput> | void {
    const command = new DeleteEventCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDetectorCommandOutput) => void),
    cb?: (err: any, data?: DescribeDetectorCommandOutput) => void
  ): Promise<DescribeDetectorCommandOutput> | void {
    const command = new DescribeDetectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeModelVersionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeModelVersionsCommandOutput) => void
  ): Promise<DescribeModelVersionsCommandOutput> | void {
    const command = new DescribeModelVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets all of detectors. This is a paginated API. If you
   *          provide a null <code>maxSizePerPage</code>, this actions retrieves a maximum of 10 records
   *          per page. If you provide a <code>maxSizePerPage</code>, the value must be between 5 and 10.
   *          To get the next page results, provide the pagination token from the
   *             <code>GetEventTypesResponse</code> as part of your request. A null pagination token
   *          fetches the records from the beginning. </p>
   */
  public getDetectors(
    args: GetDetectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDetectorsCommandOutput>;
  public getDetectors(
    args: GetDetectorsCommandInput,
    cb: (err: any, data?: GetDetectorsCommandOutput) => void
  ): void;
  public getDetectors(
    args: GetDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDetectorsCommandOutput) => void
  ): void;
  public getDetectors(
    args: GetDetectorsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetDetectorsCommandOutput) => void),
    cb?: (err: any, data?: GetDetectorsCommandOutput) => void
  ): Promise<GetDetectorsCommandOutput> | void {
    const command = new GetDetectorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetDetectorVersionCommandOutput) => void),
    cb?: (err: any, data?: GetDetectorVersionCommandOutput) => void
  ): Promise<GetDetectorVersionCommandOutput> | void {
    const command = new GetDetectorVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the details for one or more Amazon SageMaker models that have been imported into the
   *          service. This is a paginated API. If you provide a null <code>maxSizePerPage</code>, this
   *          actions retrieves a maximum of 10 records per page. If you provide a
   *             <code>maxSizePerPage</code>, the value must be between 5 and 10. To get the next page
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetExternalModelsCommandOutput) => void),
    cb?: (err: any, data?: GetExternalModelsCommandOutput) => void
  ): Promise<GetExternalModelsCommandOutput> | void {
    const command = new GetExternalModelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets all of the models for the AWS account, or the specified model type, or gets a single model for the specified model type, model ID combination.
   *         </p>
   */
  public getModels(
    args: GetModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelsCommandOutput>;
  public getModels(
    args: GetModelsCommandInput,
    cb: (err: any, data?: GetModelsCommandOutput) => void
  ): void;
  public getModels(
    args: GetModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelsCommandOutput) => void
  ): void;
  public getModels(
    args: GetModelsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetModelsCommandOutput) => void),
    cb?: (err: any, data?: GetModelsCommandOutput) => void
  ): Promise<GetModelsCommandOutput> | void {
    const command = new GetModelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a model version. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetModelVersionCommandOutput) => void),
    cb?: (err: any, data?: GetModelVersionCommandOutput) => void
  ): Promise<GetModelVersionCommandOutput> | void {
    const command = new GetModelVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets one or more outcomes. This is a paginated
   *          API. If you provide a null <code>maxSizePerPage</code>, this actions retrieves a maximum of
   *          10 records per page. If you provide a <code>maxSizePerPage</code>, the value must be
   *          between 50 and 100. To get the next page results, provide the pagination token from the
   *         <code>GetOutcomesResult</code> as part of your request. A null pagination token
   *          fetches the records from the beginning. </p>
   */
  public getOutcomes(
    args: GetOutcomesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOutcomesCommandOutput>;
  public getOutcomes(
    args: GetOutcomesCommandInput,
    cb: (err: any, data?: GetOutcomesCommandOutput) => void
  ): void;
  public getOutcomes(
    args: GetOutcomesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOutcomesCommandOutput) => void
  ): void;
  public getOutcomes(
    args: GetOutcomesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetOutcomesCommandOutput) => void),
    cb?: (err: any, data?: GetOutcomesCommandOutput) => void
  ): Promise<GetOutcomesCommandOutput> | void {
    const command = new GetOutcomesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Evaluates an event against a detector version. If a version ID is not provided, the detector’s (<code>ACTIVE</code>) version is used.  </p>
   */
  public getPrediction(
    args: GetPredictionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPredictionCommandOutput>;
  public getPrediction(
    args: GetPredictionCommandInput,
    cb: (err: any, data?: GetPredictionCommandOutput) => void
  ): void;
  public getPrediction(
    args: GetPredictionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPredictionCommandOutput) => void
  ): void;
  public getPrediction(
    args: GetPredictionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetPredictionCommandOutput) => void),
    cb?: (err: any, data?: GetPredictionCommandOutput) => void
  ): Promise<GetPredictionCommandOutput> | void {
    const command = new GetPredictionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets all rules available for the specified detector.</p>
   */
  public getRules(
    args: GetRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRulesCommandOutput>;
  public getRules(
    args: GetRulesCommandInput,
    cb: (err: any, data?: GetRulesCommandOutput) => void
  ): void;
  public getRules(
    args: GetRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRulesCommandOutput) => void
  ): void;
  public getRules(
    args: GetRulesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetRulesCommandOutput) => void),
    cb?: (err: any, data?: GetRulesCommandOutput) => void
  ): Promise<GetRulesCommandOutput> | void {
    const command = new GetRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
  public getVariables(
    args: GetVariablesCommandInput,
    cb: (err: any, data?: GetVariablesCommandOutput) => void
  ): void;
  public getVariables(
    args: GetVariablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVariablesCommandOutput) => void
  ): void;
  public getVariables(
    args: GetVariablesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetVariablesCommandOutput) => void),
    cb?: (err: any, data?: GetVariablesCommandOutput) => void
  ): Promise<GetVariablesCommandOutput> | void {
    const command = new GetVariablesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or updates a detector. </p>
   */
  public putDetector(
    args: PutDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDetectorCommandOutput>;
  public putDetector(
    args: PutDetectorCommandInput,
    cb: (err: any, data?: PutDetectorCommandOutput) => void
  ): void;
  public putDetector(
    args: PutDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDetectorCommandOutput) => void
  ): void;
  public putDetector(
    args: PutDetectorCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutDetectorCommandOutput) => void),
    cb?: (err: any, data?: PutDetectorCommandOutput) => void
  ): Promise<PutDetectorCommandOutput> | void {
    const command = new PutDetectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutExternalModelCommandOutput) => void),
    cb?: (err: any, data?: PutExternalModelCommandOutput) => void
  ): Promise<PutExternalModelCommandOutput> | void {
    const command = new PutExternalModelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or updates a model. </p>
   */
  public putModel(
    args: PutModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutModelCommandOutput>;
  public putModel(
    args: PutModelCommandInput,
    cb: (err: any, data?: PutModelCommandOutput) => void
  ): void;
  public putModel(
    args: PutModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutModelCommandOutput) => void
  ): void;
  public putModel(
    args: PutModelCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutModelCommandOutput) => void),
    cb?: (err: any, data?: PutModelCommandOutput) => void
  ): Promise<PutModelCommandOutput> | void {
    const command = new PutModelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or updates an outcome. </p>
   */
  public putOutcome(
    args: PutOutcomeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutOutcomeCommandOutput>;
  public putOutcome(
    args: PutOutcomeCommandInput,
    cb: (err: any, data?: PutOutcomeCommandOutput) => void
  ): void;
  public putOutcome(
    args: PutOutcomeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutOutcomeCommandOutput) => void
  ): void;
  public putOutcome(
    args: PutOutcomeCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutOutcomeCommandOutput) => void),
    cb?: (err: any, data?: PutOutcomeCommandOutput) => void
  ): Promise<PutOutcomeCommandOutput> | void {
    const command = new PutOutcomeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, and description. You can only update a <code>DRAFT</code> detector version.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateDetectorVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateDetectorVersionCommandOutput) => void
  ): Promise<UpdateDetectorVersionCommandOutput> | void {
    const command = new UpdateDetectorVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateDetectorVersionMetadataCommandOutput) => void),
    cb?: (err: any, data?: UpdateDetectorVersionMetadataCommandOutput) => void
  ): Promise<UpdateDetectorVersionMetadataCommandOutput> | void {
    const command = new UpdateDetectorVersionMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateDetectorVersionStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdateDetectorVersionStatusCommandOutput) => void
  ): Promise<UpdateDetectorVersionStatusCommandOutput> | void {
    const command = new UpdateDetectorVersionStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a model version. You can update the description and status attributes
   *             using this action. You can perform the following status updates: </p>
   *         <ol>
   *             <li>
   *                 <p>Change the <code>TRAINING_COMPLETE</code> status to <code>ACTIVE</code>
   *                     </p>
   *             </li>
   *             <li>
   *                 <p>Change <code>ACTIVE</code> back to <code>TRAINING_COMPLETE</code>
   *                     </p>
   *             </li>
   *          </ol>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateModelVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateModelVersionCommandOutput) => void
  ): Promise<UpdateModelVersionCommandOutput> | void {
    const command = new UpdateModelVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a rule's metadata. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateRuleMetadataCommandOutput) => void),
    cb?: (err: any, data?: UpdateRuleMetadataCommandOutput) => void
  ): Promise<UpdateRuleMetadataCommandOutput> | void {
    const command = new UpdateRuleMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a rule version resulting in a new rule version. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateRuleVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateRuleVersionCommandOutput) => void
  ): Promise<UpdateRuleVersionCommandOutput> | void {
    const command = new UpdateRuleVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateVariableCommandOutput) => void),
    cb?: (err: any, data?: UpdateVariableCommandOutput) => void
  ): Promise<UpdateVariableCommandOutput> | void {
    const command = new UpdateVariableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
