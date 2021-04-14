import { IotDeviceAdvisorClient } from "./IotDeviceAdvisorClient";
import {
  CreateSuiteDefinitionCommand,
  CreateSuiteDefinitionCommandInput,
  CreateSuiteDefinitionCommandOutput,
} from "./commands/CreateSuiteDefinitionCommand";
import {
  DeleteSuiteDefinitionCommand,
  DeleteSuiteDefinitionCommandInput,
  DeleteSuiteDefinitionCommandOutput,
} from "./commands/DeleteSuiteDefinitionCommand";
import {
  GetSuiteDefinitionCommand,
  GetSuiteDefinitionCommandInput,
  GetSuiteDefinitionCommandOutput,
} from "./commands/GetSuiteDefinitionCommand";
import { GetSuiteRunCommand, GetSuiteRunCommandInput, GetSuiteRunCommandOutput } from "./commands/GetSuiteRunCommand";
import {
  GetSuiteRunReportCommand,
  GetSuiteRunReportCommandInput,
  GetSuiteRunReportCommandOutput,
} from "./commands/GetSuiteRunReportCommand";
import {
  ListSuiteDefinitionsCommand,
  ListSuiteDefinitionsCommandInput,
  ListSuiteDefinitionsCommandOutput,
} from "./commands/ListSuiteDefinitionsCommand";
import {
  ListSuiteRunsCommand,
  ListSuiteRunsCommandInput,
  ListSuiteRunsCommandOutput,
} from "./commands/ListSuiteRunsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTestCasesCommand,
  ListTestCasesCommandInput,
  ListTestCasesCommandOutput,
} from "./commands/ListTestCasesCommand";
import {
  StartSuiteRunCommand,
  StartSuiteRunCommandInput,
  StartSuiteRunCommandOutput,
} from "./commands/StartSuiteRunCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateSuiteDefinitionCommand,
  UpdateSuiteDefinitionCommandInput,
  UpdateSuiteDefinitionCommandOutput,
} from "./commands/UpdateSuiteDefinitionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>AWS IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT devices during device software development. Device Advisor provides pre-built tests that you can use to validate IoT devices for reliable and secure connectivity with AWS IoT Core before deploying devices to production. By using Device Advisor, you can confirm that your devices can connect to AWS IoT Core, follow security best practices and, if applicable, receive software updates from IoT Device Management. You can also download signed qualification reports to submit to the AWS Partner Network to get your device qualified for the AWS Partner Device Catalog without the need to send your device in and wait for it to be tested.</p>
 */
export class IotDeviceAdvisor extends IotDeviceAdvisorClient {
  /**
   * <p>Creates a Device Advisor test suite.</p>
   */
  public createSuiteDefinition(
    args: CreateSuiteDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSuiteDefinitionCommandOutput>;
  public createSuiteDefinition(
    args: CreateSuiteDefinitionCommandInput,
    cb: (err: any, data?: CreateSuiteDefinitionCommandOutput) => void
  ): void;
  public createSuiteDefinition(
    args: CreateSuiteDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSuiteDefinitionCommandOutput) => void
  ): void;
  public createSuiteDefinition(
    args: CreateSuiteDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSuiteDefinitionCommandOutput) => void),
    cb?: (err: any, data?: CreateSuiteDefinitionCommandOutput) => void
  ): Promise<CreateSuiteDefinitionCommandOutput> | void {
    const command = new CreateSuiteDefinitionCommand(args);
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
   * <p>Deletes a Device Advisor test suite.</p>
   */
  public deleteSuiteDefinition(
    args: DeleteSuiteDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSuiteDefinitionCommandOutput>;
  public deleteSuiteDefinition(
    args: DeleteSuiteDefinitionCommandInput,
    cb: (err: any, data?: DeleteSuiteDefinitionCommandOutput) => void
  ): void;
  public deleteSuiteDefinition(
    args: DeleteSuiteDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSuiteDefinitionCommandOutput) => void
  ): void;
  public deleteSuiteDefinition(
    args: DeleteSuiteDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSuiteDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeleteSuiteDefinitionCommandOutput) => void
  ): Promise<DeleteSuiteDefinitionCommandOutput> | void {
    const command = new DeleteSuiteDefinitionCommand(args);
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
   * <p>Gets information about a Device Advisor test suite.</p>
   */
  public getSuiteDefinition(
    args: GetSuiteDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSuiteDefinitionCommandOutput>;
  public getSuiteDefinition(
    args: GetSuiteDefinitionCommandInput,
    cb: (err: any, data?: GetSuiteDefinitionCommandOutput) => void
  ): void;
  public getSuiteDefinition(
    args: GetSuiteDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSuiteDefinitionCommandOutput) => void
  ): void;
  public getSuiteDefinition(
    args: GetSuiteDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSuiteDefinitionCommandOutput) => void),
    cb?: (err: any, data?: GetSuiteDefinitionCommandOutput) => void
  ): Promise<GetSuiteDefinitionCommandOutput> | void {
    const command = new GetSuiteDefinitionCommand(args);
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
   * <p>Gets information about a Device Advisor test suite run.</p>
   */
  public getSuiteRun(args: GetSuiteRunCommandInput, options?: __HttpHandlerOptions): Promise<GetSuiteRunCommandOutput>;
  public getSuiteRun(args: GetSuiteRunCommandInput, cb: (err: any, data?: GetSuiteRunCommandOutput) => void): void;
  public getSuiteRun(
    args: GetSuiteRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSuiteRunCommandOutput) => void
  ): void;
  public getSuiteRun(
    args: GetSuiteRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSuiteRunCommandOutput) => void),
    cb?: (err: any, data?: GetSuiteRunCommandOutput) => void
  ): Promise<GetSuiteRunCommandOutput> | void {
    const command = new GetSuiteRunCommand(args);
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
   * <p>Gets a report download link for a successful Device Advisor qualifying test suite run.</p>
   */
  public getSuiteRunReport(
    args: GetSuiteRunReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSuiteRunReportCommandOutput>;
  public getSuiteRunReport(
    args: GetSuiteRunReportCommandInput,
    cb: (err: any, data?: GetSuiteRunReportCommandOutput) => void
  ): void;
  public getSuiteRunReport(
    args: GetSuiteRunReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSuiteRunReportCommandOutput) => void
  ): void;
  public getSuiteRunReport(
    args: GetSuiteRunReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSuiteRunReportCommandOutput) => void),
    cb?: (err: any, data?: GetSuiteRunReportCommandOutput) => void
  ): Promise<GetSuiteRunReportCommandOutput> | void {
    const command = new GetSuiteRunReportCommand(args);
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
   * <p>Lists the Device Advisor test suites you have created.</p>
   */
  public listSuiteDefinitions(
    args: ListSuiteDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSuiteDefinitionsCommandOutput>;
  public listSuiteDefinitions(
    args: ListSuiteDefinitionsCommandInput,
    cb: (err: any, data?: ListSuiteDefinitionsCommandOutput) => void
  ): void;
  public listSuiteDefinitions(
    args: ListSuiteDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSuiteDefinitionsCommandOutput) => void
  ): void;
  public listSuiteDefinitions(
    args: ListSuiteDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSuiteDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListSuiteDefinitionsCommandOutput) => void
  ): Promise<ListSuiteDefinitionsCommandOutput> | void {
    const command = new ListSuiteDefinitionsCommand(args);
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
   * <p>Lists the runs of the specified Device Advisor test suite.
   *             You can list all runs of the test suite, or the runs of a specific version of the test suite.</p>
   */
  public listSuiteRuns(
    args: ListSuiteRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSuiteRunsCommandOutput>;
  public listSuiteRuns(
    args: ListSuiteRunsCommandInput,
    cb: (err: any, data?: ListSuiteRunsCommandOutput) => void
  ): void;
  public listSuiteRuns(
    args: ListSuiteRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSuiteRunsCommandOutput) => void
  ): void;
  public listSuiteRuns(
    args: ListSuiteRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSuiteRunsCommandOutput) => void),
    cb?: (err: any, data?: ListSuiteRunsCommandOutput) => void
  ): Promise<ListSuiteRunsCommandOutput> | void {
    const command = new ListSuiteRunsCommand(args);
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
   * <p>Lists the tags attached to an IoT Device Advisor resource.</p>
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
   * <p>Lists all the test cases in the test suite.</p>
   */
  public listTestCases(
    args: ListTestCasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestCasesCommandOutput>;
  public listTestCases(
    args: ListTestCasesCommandInput,
    cb: (err: any, data?: ListTestCasesCommandOutput) => void
  ): void;
  public listTestCases(
    args: ListTestCasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestCasesCommandOutput) => void
  ): void;
  public listTestCases(
    args: ListTestCasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTestCasesCommandOutput) => void),
    cb?: (err: any, data?: ListTestCasesCommandOutput) => void
  ): Promise<ListTestCasesCommandOutput> | void {
    const command = new ListTestCasesCommand(args);
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
   * <p>Starts a Device Advisor test suite run.</p>
   */
  public startSuiteRun(
    args: StartSuiteRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSuiteRunCommandOutput>;
  public startSuiteRun(
    args: StartSuiteRunCommandInput,
    cb: (err: any, data?: StartSuiteRunCommandOutput) => void
  ): void;
  public startSuiteRun(
    args: StartSuiteRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSuiteRunCommandOutput) => void
  ): void;
  public startSuiteRun(
    args: StartSuiteRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartSuiteRunCommandOutput) => void),
    cb?: (err: any, data?: StartSuiteRunCommandOutput) => void
  ): Promise<StartSuiteRunCommandOutput> | void {
    const command = new StartSuiteRunCommand(args);
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
   * <p>Adds to and modifies existing tags of an IoT Device Advisor resource.</p>
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
   * <p>Removes tags from an IoT Device Advisor resource.</p>
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
   * <p>Updates a Device Advisor test suite.</p>
   */
  public updateSuiteDefinition(
    args: UpdateSuiteDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSuiteDefinitionCommandOutput>;
  public updateSuiteDefinition(
    args: UpdateSuiteDefinitionCommandInput,
    cb: (err: any, data?: UpdateSuiteDefinitionCommandOutput) => void
  ): void;
  public updateSuiteDefinition(
    args: UpdateSuiteDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSuiteDefinitionCommandOutput) => void
  ): void;
  public updateSuiteDefinition(
    args: UpdateSuiteDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSuiteDefinitionCommandOutput) => void),
    cb?: (err: any, data?: UpdateSuiteDefinitionCommandOutput) => void
  ): Promise<UpdateSuiteDefinitionCommandOutput> | void {
    const command = new UpdateSuiteDefinitionCommand(args);
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
