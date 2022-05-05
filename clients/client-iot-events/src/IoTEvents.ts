// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateAlarmModelCommand,
  CreateAlarmModelCommandInput,
  CreateAlarmModelCommandOutput,
} from "./commands/CreateAlarmModelCommand";
import {
  CreateDetectorModelCommand,
  CreateDetectorModelCommandInput,
  CreateDetectorModelCommandOutput,
} from "./commands/CreateDetectorModelCommand";
import { CreateInputCommand, CreateInputCommandInput, CreateInputCommandOutput } from "./commands/CreateInputCommand";
import {
  DeleteAlarmModelCommand,
  DeleteAlarmModelCommandInput,
  DeleteAlarmModelCommandOutput,
} from "./commands/DeleteAlarmModelCommand";
import {
  DeleteDetectorModelCommand,
  DeleteDetectorModelCommandInput,
  DeleteDetectorModelCommandOutput,
} from "./commands/DeleteDetectorModelCommand";
import { DeleteInputCommand, DeleteInputCommandInput, DeleteInputCommandOutput } from "./commands/DeleteInputCommand";
import {
  DescribeAlarmModelCommand,
  DescribeAlarmModelCommandInput,
  DescribeAlarmModelCommandOutput,
} from "./commands/DescribeAlarmModelCommand";
import {
  DescribeDetectorModelAnalysisCommand,
  DescribeDetectorModelAnalysisCommandInput,
  DescribeDetectorModelAnalysisCommandOutput,
} from "./commands/DescribeDetectorModelAnalysisCommand";
import {
  DescribeDetectorModelCommand,
  DescribeDetectorModelCommandInput,
  DescribeDetectorModelCommandOutput,
} from "./commands/DescribeDetectorModelCommand";
import {
  DescribeInputCommand,
  DescribeInputCommandInput,
  DescribeInputCommandOutput,
} from "./commands/DescribeInputCommand";
import {
  DescribeLoggingOptionsCommand,
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput,
} from "./commands/DescribeLoggingOptionsCommand";
import {
  GetDetectorModelAnalysisResultsCommand,
  GetDetectorModelAnalysisResultsCommandInput,
  GetDetectorModelAnalysisResultsCommandOutput,
} from "./commands/GetDetectorModelAnalysisResultsCommand";
import {
  ListAlarmModelsCommand,
  ListAlarmModelsCommandInput,
  ListAlarmModelsCommandOutput,
} from "./commands/ListAlarmModelsCommand";
import {
  ListAlarmModelVersionsCommand,
  ListAlarmModelVersionsCommandInput,
  ListAlarmModelVersionsCommandOutput,
} from "./commands/ListAlarmModelVersionsCommand";
import {
  ListDetectorModelsCommand,
  ListDetectorModelsCommandInput,
  ListDetectorModelsCommandOutput,
} from "./commands/ListDetectorModelsCommand";
import {
  ListDetectorModelVersionsCommand,
  ListDetectorModelVersionsCommandInput,
  ListDetectorModelVersionsCommandOutput,
} from "./commands/ListDetectorModelVersionsCommand";
import {
  ListInputRoutingsCommand,
  ListInputRoutingsCommandInput,
  ListInputRoutingsCommandOutput,
} from "./commands/ListInputRoutingsCommand";
import { ListInputsCommand, ListInputsCommandInput, ListInputsCommandOutput } from "./commands/ListInputsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutLoggingOptionsCommand,
  PutLoggingOptionsCommandInput,
  PutLoggingOptionsCommandOutput,
} from "./commands/PutLoggingOptionsCommand";
import {
  StartDetectorModelAnalysisCommand,
  StartDetectorModelAnalysisCommandInput,
  StartDetectorModelAnalysisCommandOutput,
} from "./commands/StartDetectorModelAnalysisCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAlarmModelCommand,
  UpdateAlarmModelCommandInput,
  UpdateAlarmModelCommandOutput,
} from "./commands/UpdateAlarmModelCommand";
import {
  UpdateDetectorModelCommand,
  UpdateDetectorModelCommandInput,
  UpdateDetectorModelCommandOutput,
} from "./commands/UpdateDetectorModelCommand";
import { UpdateInputCommand, UpdateInputCommandInput, UpdateInputCommandOutput } from "./commands/UpdateInputCommand";
import { IoTEventsClient } from "./IoTEventsClient";

/**
 * <p>AWS IoT Events monitors your equipment or device fleets for failures or changes in operation, and
 *       triggers actions when such events occur. You can use AWS IoT Events API operations to create, read,
 *       update, and delete inputs and detector models, and to list their versions.</p>
 */
export class IoTEvents extends IoTEventsClient {
  /**
   * <p>Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get
   *       notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an
   *         alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.</p>
   */
  public createAlarmModel(
    args: CreateAlarmModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAlarmModelCommandOutput>;
  public createAlarmModel(
    args: CreateAlarmModelCommandInput,
    cb: (err: any, data?: CreateAlarmModelCommandOutput) => void
  ): void;
  public createAlarmModel(
    args: CreateAlarmModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAlarmModelCommandOutput) => void
  ): void;
  public createAlarmModel(
    args: CreateAlarmModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAlarmModelCommandOutput) => void),
    cb?: (err: any, data?: CreateAlarmModelCommandOutput) => void
  ): Promise<CreateAlarmModelCommandOutput> | void {
    const command = new CreateAlarmModelCommand(args);
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
   * <p>Creates a detector model.</p>
   */
  public createDetectorModel(
    args: CreateDetectorModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDetectorModelCommandOutput>;
  public createDetectorModel(
    args: CreateDetectorModelCommandInput,
    cb: (err: any, data?: CreateDetectorModelCommandOutput) => void
  ): void;
  public createDetectorModel(
    args: CreateDetectorModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDetectorModelCommandOutput) => void
  ): void;
  public createDetectorModel(
    args: CreateDetectorModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDetectorModelCommandOutput) => void),
    cb?: (err: any, data?: CreateDetectorModelCommandOutput) => void
  ): Promise<CreateDetectorModelCommandOutput> | void {
    const command = new CreateDetectorModelCommand(args);
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
   * <p>Creates an input.</p>
   */
  public createInput(args: CreateInputCommandInput, options?: __HttpHandlerOptions): Promise<CreateInputCommandOutput>;
  public createInput(args: CreateInputCommandInput, cb: (err: any, data?: CreateInputCommandOutput) => void): void;
  public createInput(
    args: CreateInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInputCommandOutput) => void
  ): void;
  public createInput(
    args: CreateInputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateInputCommandOutput) => void),
    cb?: (err: any, data?: CreateInputCommandOutput) => void
  ): Promise<CreateInputCommandOutput> | void {
    const command = new CreateInputCommand(args);
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
   * <p>Deletes an alarm model. Any alarm instances that were created based on this alarm model
   *       are also deleted. This action can't be undone.</p>
   */
  public deleteAlarmModel(
    args: DeleteAlarmModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAlarmModelCommandOutput>;
  public deleteAlarmModel(
    args: DeleteAlarmModelCommandInput,
    cb: (err: any, data?: DeleteAlarmModelCommandOutput) => void
  ): void;
  public deleteAlarmModel(
    args: DeleteAlarmModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAlarmModelCommandOutput) => void
  ): void;
  public deleteAlarmModel(
    args: DeleteAlarmModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAlarmModelCommandOutput) => void),
    cb?: (err: any, data?: DeleteAlarmModelCommandOutput) => void
  ): Promise<DeleteAlarmModelCommandOutput> | void {
    const command = new DeleteAlarmModelCommand(args);
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
   * <p>Deletes a detector model. Any active instances of the detector model are also
   *       deleted.</p>
   */
  public deleteDetectorModel(
    args: DeleteDetectorModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDetectorModelCommandOutput>;
  public deleteDetectorModel(
    args: DeleteDetectorModelCommandInput,
    cb: (err: any, data?: DeleteDetectorModelCommandOutput) => void
  ): void;
  public deleteDetectorModel(
    args: DeleteDetectorModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDetectorModelCommandOutput) => void
  ): void;
  public deleteDetectorModel(
    args: DeleteDetectorModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDetectorModelCommandOutput) => void),
    cb?: (err: any, data?: DeleteDetectorModelCommandOutput) => void
  ): Promise<DeleteDetectorModelCommandOutput> | void {
    const command = new DeleteDetectorModelCommand(args);
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
   * <p>Deletes an input.</p>
   */
  public deleteInput(args: DeleteInputCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInputCommandOutput>;
  public deleteInput(args: DeleteInputCommandInput, cb: (err: any, data?: DeleteInputCommandOutput) => void): void;
  public deleteInput(
    args: DeleteInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInputCommandOutput) => void
  ): void;
  public deleteInput(
    args: DeleteInputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInputCommandOutput) => void),
    cb?: (err: any, data?: DeleteInputCommandOutput) => void
  ): Promise<DeleteInputCommandOutput> | void {
    const command = new DeleteInputCommand(args);
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
   * <p>Retrieves information about an alarm model. If you don't specify a value for the
   *         <code>alarmModelVersion</code> parameter, the latest version is returned.</p>
   */
  public describeAlarmModel(
    args: DescribeAlarmModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAlarmModelCommandOutput>;
  public describeAlarmModel(
    args: DescribeAlarmModelCommandInput,
    cb: (err: any, data?: DescribeAlarmModelCommandOutput) => void
  ): void;
  public describeAlarmModel(
    args: DescribeAlarmModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlarmModelCommandOutput) => void
  ): void;
  public describeAlarmModel(
    args: DescribeAlarmModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAlarmModelCommandOutput) => void),
    cb?: (err: any, data?: DescribeAlarmModelCommandOutput) => void
  ): Promise<DescribeAlarmModelCommandOutput> | void {
    const command = new DescribeAlarmModelCommand(args);
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
   * <p>Describes a detector model. If the <code>version</code> parameter is not specified,
   *       information about the latest version is returned.</p>
   */
  public describeDetectorModel(
    args: DescribeDetectorModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDetectorModelCommandOutput>;
  public describeDetectorModel(
    args: DescribeDetectorModelCommandInput,
    cb: (err: any, data?: DescribeDetectorModelCommandOutput) => void
  ): void;
  public describeDetectorModel(
    args: DescribeDetectorModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDetectorModelCommandOutput) => void
  ): void;
  public describeDetectorModel(
    args: DescribeDetectorModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDetectorModelCommandOutput) => void),
    cb?: (err: any, data?: DescribeDetectorModelCommandOutput) => void
  ): Promise<DescribeDetectorModelCommandOutput> | void {
    const command = new DescribeDetectorModelCommand(args);
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
   * <p>Retrieves runtime information about a detector model analysis.</p>
   *          <note>
   *             <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p>
   *          </note>
   */
  public describeDetectorModelAnalysis(
    args: DescribeDetectorModelAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDetectorModelAnalysisCommandOutput>;
  public describeDetectorModelAnalysis(
    args: DescribeDetectorModelAnalysisCommandInput,
    cb: (err: any, data?: DescribeDetectorModelAnalysisCommandOutput) => void
  ): void;
  public describeDetectorModelAnalysis(
    args: DescribeDetectorModelAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDetectorModelAnalysisCommandOutput) => void
  ): void;
  public describeDetectorModelAnalysis(
    args: DescribeDetectorModelAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDetectorModelAnalysisCommandOutput) => void),
    cb?: (err: any, data?: DescribeDetectorModelAnalysisCommandOutput) => void
  ): Promise<DescribeDetectorModelAnalysisCommandOutput> | void {
    const command = new DescribeDetectorModelAnalysisCommand(args);
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
   * <p>Describes an input.</p>
   */
  public describeInput(
    args: DescribeInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInputCommandOutput>;
  public describeInput(
    args: DescribeInputCommandInput,
    cb: (err: any, data?: DescribeInputCommandOutput) => void
  ): void;
  public describeInput(
    args: DescribeInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInputCommandOutput) => void
  ): void;
  public describeInput(
    args: DescribeInputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInputCommandOutput) => void),
    cb?: (err: any, data?: DescribeInputCommandOutput) => void
  ): Promise<DescribeInputCommandOutput> | void {
    const command = new DescribeInputCommand(args);
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
   * <p>Retrieves the current settings of the AWS IoT Events logging options.</p>
   */
  public describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoggingOptionsCommandOutput>;
  public describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void
  ): void;
  public describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void
  ): void;
  public describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLoggingOptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void
  ): Promise<DescribeLoggingOptionsCommandOutput> | void {
    const command = new DescribeLoggingOptionsCommand(args);
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
   * <p>Retrieves one or more analysis results of the detector model.</p>
   *          <note>
   *             <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p>
   *          </note>
   */
  public getDetectorModelAnalysisResults(
    args: GetDetectorModelAnalysisResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDetectorModelAnalysisResultsCommandOutput>;
  public getDetectorModelAnalysisResults(
    args: GetDetectorModelAnalysisResultsCommandInput,
    cb: (err: any, data?: GetDetectorModelAnalysisResultsCommandOutput) => void
  ): void;
  public getDetectorModelAnalysisResults(
    args: GetDetectorModelAnalysisResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDetectorModelAnalysisResultsCommandOutput) => void
  ): void;
  public getDetectorModelAnalysisResults(
    args: GetDetectorModelAnalysisResultsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDetectorModelAnalysisResultsCommandOutput) => void),
    cb?: (err: any, data?: GetDetectorModelAnalysisResultsCommandOutput) => void
  ): Promise<GetDetectorModelAnalysisResultsCommandOutput> | void {
    const command = new GetDetectorModelAnalysisResultsCommand(args);
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
   * <p>Lists the alarm models that you created. The operation returns only the metadata
   *       associated with each alarm model.</p>
   */
  public listAlarmModels(
    args: ListAlarmModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAlarmModelsCommandOutput>;
  public listAlarmModels(
    args: ListAlarmModelsCommandInput,
    cb: (err: any, data?: ListAlarmModelsCommandOutput) => void
  ): void;
  public listAlarmModels(
    args: ListAlarmModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAlarmModelsCommandOutput) => void
  ): void;
  public listAlarmModels(
    args: ListAlarmModelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAlarmModelsCommandOutput) => void),
    cb?: (err: any, data?: ListAlarmModelsCommandOutput) => void
  ): Promise<ListAlarmModelsCommandOutput> | void {
    const command = new ListAlarmModelsCommand(args);
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
   * <p>Lists all the versions of an alarm model. The operation returns only the metadata
   *       associated with each alarm model version.</p>
   */
  public listAlarmModelVersions(
    args: ListAlarmModelVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAlarmModelVersionsCommandOutput>;
  public listAlarmModelVersions(
    args: ListAlarmModelVersionsCommandInput,
    cb: (err: any, data?: ListAlarmModelVersionsCommandOutput) => void
  ): void;
  public listAlarmModelVersions(
    args: ListAlarmModelVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAlarmModelVersionsCommandOutput) => void
  ): void;
  public listAlarmModelVersions(
    args: ListAlarmModelVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAlarmModelVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListAlarmModelVersionsCommandOutput) => void
  ): Promise<ListAlarmModelVersionsCommandOutput> | void {
    const command = new ListAlarmModelVersionsCommand(args);
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
   * <p>Lists the detector models you have created. Only the metadata associated with each
   *       detector model is returned.</p>
   */
  public listDetectorModels(
    args: ListDetectorModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDetectorModelsCommandOutput>;
  public listDetectorModels(
    args: ListDetectorModelsCommandInput,
    cb: (err: any, data?: ListDetectorModelsCommandOutput) => void
  ): void;
  public listDetectorModels(
    args: ListDetectorModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDetectorModelsCommandOutput) => void
  ): void;
  public listDetectorModels(
    args: ListDetectorModelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDetectorModelsCommandOutput) => void),
    cb?: (err: any, data?: ListDetectorModelsCommandOutput) => void
  ): Promise<ListDetectorModelsCommandOutput> | void {
    const command = new ListDetectorModelsCommand(args);
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
   * <p>Lists all the versions of a detector model. Only the metadata associated with each
   *       detector model version is returned.</p>
   */
  public listDetectorModelVersions(
    args: ListDetectorModelVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDetectorModelVersionsCommandOutput>;
  public listDetectorModelVersions(
    args: ListDetectorModelVersionsCommandInput,
    cb: (err: any, data?: ListDetectorModelVersionsCommandOutput) => void
  ): void;
  public listDetectorModelVersions(
    args: ListDetectorModelVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDetectorModelVersionsCommandOutput) => void
  ): void;
  public listDetectorModelVersions(
    args: ListDetectorModelVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDetectorModelVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListDetectorModelVersionsCommandOutput) => void
  ): Promise<ListDetectorModelVersionsCommandOutput> | void {
    const command = new ListDetectorModelVersionsCommand(args);
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
   *       Lists one or more input routings.
   *     </p>
   */
  public listInputRoutings(
    args: ListInputRoutingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInputRoutingsCommandOutput>;
  public listInputRoutings(
    args: ListInputRoutingsCommandInput,
    cb: (err: any, data?: ListInputRoutingsCommandOutput) => void
  ): void;
  public listInputRoutings(
    args: ListInputRoutingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInputRoutingsCommandOutput) => void
  ): void;
  public listInputRoutings(
    args: ListInputRoutingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInputRoutingsCommandOutput) => void),
    cb?: (err: any, data?: ListInputRoutingsCommandOutput) => void
  ): Promise<ListInputRoutingsCommandOutput> | void {
    const command = new ListInputRoutingsCommand(args);
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
   * <p>Lists the inputs you have created.</p>
   */
  public listInputs(args: ListInputsCommandInput, options?: __HttpHandlerOptions): Promise<ListInputsCommandOutput>;
  public listInputs(args: ListInputsCommandInput, cb: (err: any, data?: ListInputsCommandOutput) => void): void;
  public listInputs(
    args: ListInputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInputsCommandOutput) => void
  ): void;
  public listInputs(
    args: ListInputsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInputsCommandOutput) => void),
    cb?: (err: any, data?: ListInputsCommandOutput) => void
  ): Promise<ListInputsCommandOutput> | void {
    const command = new ListInputsCommand(args);
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
   * <p>Lists the tags (metadata) you have assigned to the resource.</p>
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
   * <p>Sets or updates the AWS IoT Events logging options.</p>
   *          <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one
   *       minute for the change to take effect. If you change the policy attached to the role you
   *       specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it
   *       takes up to five minutes for that change to take effect.</p>
   */
  public putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLoggingOptionsCommandOutput>;
  public putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): void;
  public putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): void;
  public putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutLoggingOptionsCommandOutput) => void),
    cb?: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): Promise<PutLoggingOptionsCommandOutput> | void {
    const command = new PutLoggingOptionsCommand(args);
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
   * <p>Performs an analysis of your detector model. For more information,
   *       see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a>
   *       in the <i>AWS IoT Events Developer Guide</i>.</p>
   */
  public startDetectorModelAnalysis(
    args: StartDetectorModelAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDetectorModelAnalysisCommandOutput>;
  public startDetectorModelAnalysis(
    args: StartDetectorModelAnalysisCommandInput,
    cb: (err: any, data?: StartDetectorModelAnalysisCommandOutput) => void
  ): void;
  public startDetectorModelAnalysis(
    args: StartDetectorModelAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDetectorModelAnalysisCommandOutput) => void
  ): void;
  public startDetectorModelAnalysis(
    args: StartDetectorModelAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDetectorModelAnalysisCommandOutput) => void),
    cb?: (err: any, data?: StartDetectorModelAnalysisCommandOutput) => void
  ): Promise<StartDetectorModelAnalysisCommandOutput> | void {
    const command = new StartDetectorModelAnalysisCommand(args);
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
   * <p>Adds to or modifies the tags of the given resource. Tags are metadata that can be used to
   *       manage a resource.</p>
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
   * <p>Removes the given tags (metadata) from the resource.</p>
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
   * <p>Updates an alarm model. Any alarms that were created based on the previous version are
   *       deleted and then created again as new data arrives.</p>
   */
  public updateAlarmModel(
    args: UpdateAlarmModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAlarmModelCommandOutput>;
  public updateAlarmModel(
    args: UpdateAlarmModelCommandInput,
    cb: (err: any, data?: UpdateAlarmModelCommandOutput) => void
  ): void;
  public updateAlarmModel(
    args: UpdateAlarmModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAlarmModelCommandOutput) => void
  ): void;
  public updateAlarmModel(
    args: UpdateAlarmModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAlarmModelCommandOutput) => void),
    cb?: (err: any, data?: UpdateAlarmModelCommandOutput) => void
  ): Promise<UpdateAlarmModelCommandOutput> | void {
    const command = new UpdateAlarmModelCommand(args);
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
   * <p>Updates a detector model. Detectors (instances) spawned by the previous version are
   *       deleted and then re-created as new inputs arrive.</p>
   */
  public updateDetectorModel(
    args: UpdateDetectorModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDetectorModelCommandOutput>;
  public updateDetectorModel(
    args: UpdateDetectorModelCommandInput,
    cb: (err: any, data?: UpdateDetectorModelCommandOutput) => void
  ): void;
  public updateDetectorModel(
    args: UpdateDetectorModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDetectorModelCommandOutput) => void
  ): void;
  public updateDetectorModel(
    args: UpdateDetectorModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDetectorModelCommandOutput) => void),
    cb?: (err: any, data?: UpdateDetectorModelCommandOutput) => void
  ): Promise<UpdateDetectorModelCommandOutput> | void {
    const command = new UpdateDetectorModelCommand(args);
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
   * <p>Updates an input.</p>
   */
  public updateInput(args: UpdateInputCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInputCommandOutput>;
  public updateInput(args: UpdateInputCommandInput, cb: (err: any, data?: UpdateInputCommandOutput) => void): void;
  public updateInput(
    args: UpdateInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInputCommandOutput) => void
  ): void;
  public updateInput(
    args: UpdateInputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateInputCommandOutput) => void),
    cb?: (err: any, data?: UpdateInputCommandOutput) => void
  ): Promise<UpdateInputCommandOutput> | void {
    const command = new UpdateInputCommand(args);
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
