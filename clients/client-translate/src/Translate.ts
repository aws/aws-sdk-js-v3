import { TranslateClient } from "./TranslateClient";
import {
  DeleteTerminologyCommand,
  DeleteTerminologyCommandInput,
  DeleteTerminologyCommandOutput,
} from "./commands/DeleteTerminologyCommand";
import {
  DescribeTextTranslationJobCommand,
  DescribeTextTranslationJobCommandInput,
  DescribeTextTranslationJobCommandOutput,
} from "./commands/DescribeTextTranslationJobCommand";
import {
  GetTerminologyCommand,
  GetTerminologyCommandInput,
  GetTerminologyCommandOutput,
} from "./commands/GetTerminologyCommand";
import {
  ImportTerminologyCommand,
  ImportTerminologyCommandInput,
  ImportTerminologyCommandOutput,
} from "./commands/ImportTerminologyCommand";
import {
  ListTerminologiesCommand,
  ListTerminologiesCommandInput,
  ListTerminologiesCommandOutput,
} from "./commands/ListTerminologiesCommand";
import {
  ListTextTranslationJobsCommand,
  ListTextTranslationJobsCommandInput,
  ListTextTranslationJobsCommandOutput,
} from "./commands/ListTextTranslationJobsCommand";
import {
  StartTextTranslationJobCommand,
  StartTextTranslationJobCommandInput,
  StartTextTranslationJobCommandOutput,
} from "./commands/StartTextTranslationJobCommand";
import {
  StopTextTranslationJobCommand,
  StopTextTranslationJobCommandInput,
  StopTextTranslationJobCommandOutput,
} from "./commands/StopTextTranslationJobCommand";
import {
  TranslateTextCommand,
  TranslateTextCommandInput,
  TranslateTextCommandOutput,
} from "./commands/TranslateTextCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Provides translation between one source language and another of the same set of
 *       languages.</p>
 */
export class Translate extends TranslateClient {
  /**
   * <p>A synchronous action that deletes a custom terminology.</p>
   */
  public deleteTerminology(
    args: DeleteTerminologyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTerminologyCommandOutput>;
  public deleteTerminology(
    args: DeleteTerminologyCommandInput,
    cb: (err: any, data?: DeleteTerminologyCommandOutput) => void
  ): void;
  public deleteTerminology(
    args: DeleteTerminologyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTerminologyCommandOutput) => void
  ): void;
  public deleteTerminology(
    args: DeleteTerminologyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTerminologyCommandOutput) => void),
    cb?: (err: any, data?: DeleteTerminologyCommandOutput) => void
  ): Promise<DeleteTerminologyCommandOutput> | void {
    const command = new DeleteTerminologyCommand(args);
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
   * <p>Gets the properties associated with an asycnhronous batch translation job including name,
   *       ID, status, source and target languages, input/output S3 buckets, and so on.</p>
   */
  public describeTextTranslationJob(
    args: DescribeTextTranslationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTextTranslationJobCommandOutput>;
  public describeTextTranslationJob(
    args: DescribeTextTranslationJobCommandInput,
    cb: (err: any, data?: DescribeTextTranslationJobCommandOutput) => void
  ): void;
  public describeTextTranslationJob(
    args: DescribeTextTranslationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTextTranslationJobCommandOutput) => void
  ): void;
  public describeTextTranslationJob(
    args: DescribeTextTranslationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTextTranslationJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeTextTranslationJobCommandOutput) => void
  ): Promise<DescribeTextTranslationJobCommandOutput> | void {
    const command = new DescribeTextTranslationJobCommand(args);
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
   * <p>Retrieves a custom terminology.</p>
   */
  public getTerminology(
    args: GetTerminologyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTerminologyCommandOutput>;
  public getTerminology(
    args: GetTerminologyCommandInput,
    cb: (err: any, data?: GetTerminologyCommandOutput) => void
  ): void;
  public getTerminology(
    args: GetTerminologyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTerminologyCommandOutput) => void
  ): void;
  public getTerminology(
    args: GetTerminologyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTerminologyCommandOutput) => void),
    cb?: (err: any, data?: GetTerminologyCommandOutput) => void
  ): Promise<GetTerminologyCommandOutput> | void {
    const command = new GetTerminologyCommand(args);
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
   * <p>Creates or updates a custom terminology, depending on whether or not one already exists
   *       for the given terminology name. Importing a terminology with the same name as an existing one
   *       will merge the terminologies based on the chosen merge strategy. Currently, the only supported
   *       merge strategy is OVERWRITE, and so the imported terminology will overwrite an existing
   *       terminology of the same name.</p>
   *          <p>If you import a terminology that overwrites an existing one, the new terminology take up
   *       to 10 minutes to fully propagate and be available for use in a translation due to cache
   *       policies with the DataPlane service that performs the translations.</p>
   */
  public importTerminology(
    args: ImportTerminologyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportTerminologyCommandOutput>;
  public importTerminology(
    args: ImportTerminologyCommandInput,
    cb: (err: any, data?: ImportTerminologyCommandOutput) => void
  ): void;
  public importTerminology(
    args: ImportTerminologyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportTerminologyCommandOutput) => void
  ): void;
  public importTerminology(
    args: ImportTerminologyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportTerminologyCommandOutput) => void),
    cb?: (err: any, data?: ImportTerminologyCommandOutput) => void
  ): Promise<ImportTerminologyCommandOutput> | void {
    const command = new ImportTerminologyCommand(args);
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
   * <p>Provides a list of custom terminologies associated with your account.</p>
   */
  public listTerminologies(
    args: ListTerminologiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTerminologiesCommandOutput>;
  public listTerminologies(
    args: ListTerminologiesCommandInput,
    cb: (err: any, data?: ListTerminologiesCommandOutput) => void
  ): void;
  public listTerminologies(
    args: ListTerminologiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTerminologiesCommandOutput) => void
  ): void;
  public listTerminologies(
    args: ListTerminologiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTerminologiesCommandOutput) => void),
    cb?: (err: any, data?: ListTerminologiesCommandOutput) => void
  ): Promise<ListTerminologiesCommandOutput> | void {
    const command = new ListTerminologiesCommand(args);
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
   * <p>Gets a list of the batch translation jobs that you have submitted.</p>
   */
  public listTextTranslationJobs(
    args: ListTextTranslationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTextTranslationJobsCommandOutput>;
  public listTextTranslationJobs(
    args: ListTextTranslationJobsCommandInput,
    cb: (err: any, data?: ListTextTranslationJobsCommandOutput) => void
  ): void;
  public listTextTranslationJobs(
    args: ListTextTranslationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTextTranslationJobsCommandOutput) => void
  ): void;
  public listTextTranslationJobs(
    args: ListTextTranslationJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTextTranslationJobsCommandOutput) => void),
    cb?: (err: any, data?: ListTextTranslationJobsCommandOutput) => void
  ): Promise<ListTextTranslationJobsCommandOutput> | void {
    const command = new ListTextTranslationJobsCommand(args);
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
   * <p>Starts an asynchronous batch translation job. Batch translation jobs can be used to
   *       translate large volumes of text across multiple documents at once. For more information, see
   *         <a>async</a>.</p>
   *
   *          <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>
   *          <note>
   *             <p>Amazon Translate does not support batch translation of multiple source languages at once.</p>
   *          </note>
   */
  public startTextTranslationJob(
    args: StartTextTranslationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTextTranslationJobCommandOutput>;
  public startTextTranslationJob(
    args: StartTextTranslationJobCommandInput,
    cb: (err: any, data?: StartTextTranslationJobCommandOutput) => void
  ): void;
  public startTextTranslationJob(
    args: StartTextTranslationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTextTranslationJobCommandOutput) => void
  ): void;
  public startTextTranslationJob(
    args: StartTextTranslationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartTextTranslationJobCommandOutput) => void),
    cb?: (err: any, data?: StartTextTranslationJobCommandOutput) => void
  ): Promise<StartTextTranslationJobCommandOutput> | void {
    const command = new StartTextTranslationJobCommand(args);
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
   * <p>Stops an asynchronous batch translation job that is in progress.</p>
   *          <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and
   *       put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped,
   *       it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the
   *         <code>STOPPED</code> state.</p>
   *          <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a>
   *       operations to get a batch translation job's <code>JobId</code>.</p>
   */
  public stopTextTranslationJob(
    args: StopTextTranslationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopTextTranslationJobCommandOutput>;
  public stopTextTranslationJob(
    args: StopTextTranslationJobCommandInput,
    cb: (err: any, data?: StopTextTranslationJobCommandOutput) => void
  ): void;
  public stopTextTranslationJob(
    args: StopTextTranslationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTextTranslationJobCommandOutput) => void
  ): void;
  public stopTextTranslationJob(
    args: StopTextTranslationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopTextTranslationJobCommandOutput) => void),
    cb?: (err: any, data?: StopTextTranslationJobCommandOutput) => void
  ): Promise<StopTextTranslationJobCommandOutput> | void {
    const command = new StopTextTranslationJobCommand(args);
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
   * <p>Translates input text from the source language to the target language. For a list of
   *       available languages and language codes, see <a>what-is-languages</a>.</p>
   */
  public translateText(
    args: TranslateTextCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TranslateTextCommandOutput>;
  public translateText(
    args: TranslateTextCommandInput,
    cb: (err: any, data?: TranslateTextCommandOutput) => void
  ): void;
  public translateText(
    args: TranslateTextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TranslateTextCommandOutput) => void
  ): void;
  public translateText(
    args: TranslateTextCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TranslateTextCommandOutput) => void),
    cb?: (err: any, data?: TranslateTextCommandOutput) => void
  ): Promise<TranslateTextCommandOutput> | void {
    const command = new TranslateTextCommand(args);
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
