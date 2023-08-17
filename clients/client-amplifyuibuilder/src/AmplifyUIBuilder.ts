// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AmplifyUIBuilderClient, AmplifyUIBuilderClientConfig } from "./AmplifyUIBuilderClient";
import {
  CreateComponentCommand,
  CreateComponentCommandInput,
  CreateComponentCommandOutput,
} from "./commands/CreateComponentCommand";
import { CreateFormCommand, CreateFormCommandInput, CreateFormCommandOutput } from "./commands/CreateFormCommand";
import { CreateThemeCommand, CreateThemeCommandInput, CreateThemeCommandOutput } from "./commands/CreateThemeCommand";
import {
  DeleteComponentCommand,
  DeleteComponentCommandInput,
  DeleteComponentCommandOutput,
} from "./commands/DeleteComponentCommand";
import { DeleteFormCommand, DeleteFormCommandInput, DeleteFormCommandOutput } from "./commands/DeleteFormCommand";
import { DeleteThemeCommand, DeleteThemeCommandInput, DeleteThemeCommandOutput } from "./commands/DeleteThemeCommand";
import {
  ExchangeCodeForTokenCommand,
  ExchangeCodeForTokenCommandInput,
  ExchangeCodeForTokenCommandOutput,
} from "./commands/ExchangeCodeForTokenCommand";
import {
  ExportComponentsCommand,
  ExportComponentsCommandInput,
  ExportComponentsCommandOutput,
} from "./commands/ExportComponentsCommand";
import { ExportFormsCommand, ExportFormsCommandInput, ExportFormsCommandOutput } from "./commands/ExportFormsCommand";
import {
  ExportThemesCommand,
  ExportThemesCommandInput,
  ExportThemesCommandOutput,
} from "./commands/ExportThemesCommand";
import {
  GetCodegenJobCommand,
  GetCodegenJobCommandInput,
  GetCodegenJobCommandOutput,
} from "./commands/GetCodegenJobCommand";
import {
  GetComponentCommand,
  GetComponentCommandInput,
  GetComponentCommandOutput,
} from "./commands/GetComponentCommand";
import { GetFormCommand, GetFormCommandInput, GetFormCommandOutput } from "./commands/GetFormCommand";
import { GetMetadataCommand, GetMetadataCommandInput, GetMetadataCommandOutput } from "./commands/GetMetadataCommand";
import { GetThemeCommand, GetThemeCommandInput, GetThemeCommandOutput } from "./commands/GetThemeCommand";
import {
  ListCodegenJobsCommand,
  ListCodegenJobsCommandInput,
  ListCodegenJobsCommandOutput,
} from "./commands/ListCodegenJobsCommand";
import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "./commands/ListComponentsCommand";
import { ListFormsCommand, ListFormsCommandInput, ListFormsCommandOutput } from "./commands/ListFormsCommand";
import { ListThemesCommand, ListThemesCommandInput, ListThemesCommandOutput } from "./commands/ListThemesCommand";
import {
  PutMetadataFlagCommand,
  PutMetadataFlagCommandInput,
  PutMetadataFlagCommandOutput,
} from "./commands/PutMetadataFlagCommand";
import {
  RefreshTokenCommand,
  RefreshTokenCommandInput,
  RefreshTokenCommandOutput,
} from "./commands/RefreshTokenCommand";
import {
  StartCodegenJobCommand,
  StartCodegenJobCommandInput,
  StartCodegenJobCommandOutput,
} from "./commands/StartCodegenJobCommand";
import {
  UpdateComponentCommand,
  UpdateComponentCommandInput,
  UpdateComponentCommandOutput,
} from "./commands/UpdateComponentCommand";
import { UpdateFormCommand, UpdateFormCommandInput, UpdateFormCommandOutput } from "./commands/UpdateFormCommand";
import { UpdateThemeCommand, UpdateThemeCommandInput, UpdateThemeCommandOutput } from "./commands/UpdateThemeCommand";

const commands = {
  CreateComponentCommand,
  CreateFormCommand,
  CreateThemeCommand,
  DeleteComponentCommand,
  DeleteFormCommand,
  DeleteThemeCommand,
  ExchangeCodeForTokenCommand,
  ExportComponentsCommand,
  ExportFormsCommand,
  ExportThemesCommand,
  GetCodegenJobCommand,
  GetComponentCommand,
  GetFormCommand,
  GetMetadataCommand,
  GetThemeCommand,
  ListCodegenJobsCommand,
  ListComponentsCommand,
  ListFormsCommand,
  ListThemesCommand,
  PutMetadataFlagCommand,
  RefreshTokenCommand,
  StartCodegenJobCommand,
  UpdateComponentCommand,
  UpdateFormCommand,
  UpdateThemeCommand,
};

export interface AmplifyUIBuilder {
  /**
   * @see {@link CreateComponentCommand}
   */
  createComponent(
    args: CreateComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComponentCommandOutput>;
  createComponent(args: CreateComponentCommandInput, cb: (err: any, data?: CreateComponentCommandOutput) => void): void;
  createComponent(
    args: CreateComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFormCommand}
   */
  createForm(args: CreateFormCommandInput, options?: __HttpHandlerOptions): Promise<CreateFormCommandOutput>;
  createForm(args: CreateFormCommandInput, cb: (err: any, data?: CreateFormCommandOutput) => void): void;
  createForm(
    args: CreateFormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFormCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateThemeCommand}
   */
  createTheme(args: CreateThemeCommandInput, options?: __HttpHandlerOptions): Promise<CreateThemeCommandOutput>;
  createTheme(args: CreateThemeCommandInput, cb: (err: any, data?: CreateThemeCommandOutput) => void): void;
  createTheme(
    args: CreateThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThemeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteComponentCommand}
   */
  deleteComponent(
    args: DeleteComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComponentCommandOutput>;
  deleteComponent(args: DeleteComponentCommandInput, cb: (err: any, data?: DeleteComponentCommandOutput) => void): void;
  deleteComponent(
    args: DeleteComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFormCommand}
   */
  deleteForm(args: DeleteFormCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFormCommandOutput>;
  deleteForm(args: DeleteFormCommandInput, cb: (err: any, data?: DeleteFormCommandOutput) => void): void;
  deleteForm(
    args: DeleteFormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFormCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteThemeCommand}
   */
  deleteTheme(args: DeleteThemeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteThemeCommandOutput>;
  deleteTheme(args: DeleteThemeCommandInput, cb: (err: any, data?: DeleteThemeCommandOutput) => void): void;
  deleteTheme(
    args: DeleteThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThemeCommandOutput) => void
  ): void;

  /**
   * @see {@link ExchangeCodeForTokenCommand}
   */
  exchangeCodeForToken(
    args: ExchangeCodeForTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExchangeCodeForTokenCommandOutput>;
  exchangeCodeForToken(
    args: ExchangeCodeForTokenCommandInput,
    cb: (err: any, data?: ExchangeCodeForTokenCommandOutput) => void
  ): void;
  exchangeCodeForToken(
    args: ExchangeCodeForTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExchangeCodeForTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportComponentsCommand}
   */
  exportComponents(
    args: ExportComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportComponentsCommandOutput>;
  exportComponents(
    args: ExportComponentsCommandInput,
    cb: (err: any, data?: ExportComponentsCommandOutput) => void
  ): void;
  exportComponents(
    args: ExportComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportComponentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportFormsCommand}
   */
  exportForms(args: ExportFormsCommandInput, options?: __HttpHandlerOptions): Promise<ExportFormsCommandOutput>;
  exportForms(args: ExportFormsCommandInput, cb: (err: any, data?: ExportFormsCommandOutput) => void): void;
  exportForms(
    args: ExportFormsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportFormsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportThemesCommand}
   */
  exportThemes(args: ExportThemesCommandInput, options?: __HttpHandlerOptions): Promise<ExportThemesCommandOutput>;
  exportThemes(args: ExportThemesCommandInput, cb: (err: any, data?: ExportThemesCommandOutput) => void): void;
  exportThemes(
    args: ExportThemesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportThemesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCodegenJobCommand}
   */
  getCodegenJob(args: GetCodegenJobCommandInput, options?: __HttpHandlerOptions): Promise<GetCodegenJobCommandOutput>;
  getCodegenJob(args: GetCodegenJobCommandInput, cb: (err: any, data?: GetCodegenJobCommandOutput) => void): void;
  getCodegenJob(
    args: GetCodegenJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCodegenJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComponentCommand}
   */
  getComponent(args: GetComponentCommandInput, options?: __HttpHandlerOptions): Promise<GetComponentCommandOutput>;
  getComponent(args: GetComponentCommandInput, cb: (err: any, data?: GetComponentCommandOutput) => void): void;
  getComponent(
    args: GetComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFormCommand}
   */
  getForm(args: GetFormCommandInput, options?: __HttpHandlerOptions): Promise<GetFormCommandOutput>;
  getForm(args: GetFormCommandInput, cb: (err: any, data?: GetFormCommandOutput) => void): void;
  getForm(
    args: GetFormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFormCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMetadataCommand}
   */
  getMetadata(args: GetMetadataCommandInput, options?: __HttpHandlerOptions): Promise<GetMetadataCommandOutput>;
  getMetadata(args: GetMetadataCommandInput, cb: (err: any, data?: GetMetadataCommandOutput) => void): void;
  getMetadata(
    args: GetMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetThemeCommand}
   */
  getTheme(args: GetThemeCommandInput, options?: __HttpHandlerOptions): Promise<GetThemeCommandOutput>;
  getTheme(args: GetThemeCommandInput, cb: (err: any, data?: GetThemeCommandOutput) => void): void;
  getTheme(
    args: GetThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetThemeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCodegenJobsCommand}
   */
  listCodegenJobs(
    args: ListCodegenJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCodegenJobsCommandOutput>;
  listCodegenJobs(args: ListCodegenJobsCommandInput, cb: (err: any, data?: ListCodegenJobsCommandOutput) => void): void;
  listCodegenJobs(
    args: ListCodegenJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCodegenJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComponentsCommand}
   */
  listComponents(
    args: ListComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentsCommandOutput>;
  listComponents(args: ListComponentsCommandInput, cb: (err: any, data?: ListComponentsCommandOutput) => void): void;
  listComponents(
    args: ListComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFormsCommand}
   */
  listForms(args: ListFormsCommandInput, options?: __HttpHandlerOptions): Promise<ListFormsCommandOutput>;
  listForms(args: ListFormsCommandInput, cb: (err: any, data?: ListFormsCommandOutput) => void): void;
  listForms(
    args: ListFormsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFormsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThemesCommand}
   */
  listThemes(args: ListThemesCommandInput, options?: __HttpHandlerOptions): Promise<ListThemesCommandOutput>;
  listThemes(args: ListThemesCommandInput, cb: (err: any, data?: ListThemesCommandOutput) => void): void;
  listThemes(
    args: ListThemesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThemesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMetadataFlagCommand}
   */
  putMetadataFlag(
    args: PutMetadataFlagCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMetadataFlagCommandOutput>;
  putMetadataFlag(args: PutMetadataFlagCommandInput, cb: (err: any, data?: PutMetadataFlagCommandOutput) => void): void;
  putMetadataFlag(
    args: PutMetadataFlagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMetadataFlagCommandOutput) => void
  ): void;

  /**
   * @see {@link RefreshTokenCommand}
   */
  refreshToken(args: RefreshTokenCommandInput, options?: __HttpHandlerOptions): Promise<RefreshTokenCommandOutput>;
  refreshToken(args: RefreshTokenCommandInput, cb: (err: any, data?: RefreshTokenCommandOutput) => void): void;
  refreshToken(
    args: RefreshTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RefreshTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCodegenJobCommand}
   */
  startCodegenJob(
    args: StartCodegenJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCodegenJobCommandOutput>;
  startCodegenJob(args: StartCodegenJobCommandInput, cb: (err: any, data?: StartCodegenJobCommandOutput) => void): void;
  startCodegenJob(
    args: StartCodegenJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCodegenJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateComponentCommand}
   */
  updateComponent(
    args: UpdateComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateComponentCommandOutput>;
  updateComponent(args: UpdateComponentCommandInput, cb: (err: any, data?: UpdateComponentCommandOutput) => void): void;
  updateComponent(
    args: UpdateComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFormCommand}
   */
  updateForm(args: UpdateFormCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFormCommandOutput>;
  updateForm(args: UpdateFormCommandInput, cb: (err: any, data?: UpdateFormCommandOutput) => void): void;
  updateForm(
    args: UpdateFormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFormCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThemeCommand}
   */
  updateTheme(args: UpdateThemeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateThemeCommandOutput>;
  updateTheme(args: UpdateThemeCommandInput, cb: (err: any, data?: UpdateThemeCommandOutput) => void): void;
  updateTheme(
    args: UpdateThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThemeCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The Amplify UI Builder API provides a programmatic interface for creating
 *       and configuring user interface (UI) component libraries and themes for use in your Amplify applications. You can then connect these UI components to an application's
 *       backend Amazon Web Services resources.</p>
 *          <p>You can also use the Amplify Studio visual designer to create UI components
 *       and model data for an app. For more information, see <a href="https://docs.amplify.aws/console/adminui/intro">Introduction</a> in the
 *         <i>Amplify Docs</i>.</p>
 *          <p>The Amplify Framework is a comprehensive set of SDKs, libraries, tools, and
 *       documentation for client app development. For more information, see the <a href="https://docs.amplify.aws/">Amplify Framework</a>. For more information about
 *       deploying an Amplify application to Amazon Web Services, see the <a href="https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html">Amplify User Guide</a>.</p>
 */
export class AmplifyUIBuilder extends AmplifyUIBuilderClient implements AmplifyUIBuilder {}
createAggregatedClient(commands, AmplifyUIBuilder);
