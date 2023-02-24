// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AmplifyUIBuilderClient } from "./AmplifyUIBuilderClient";
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
  GetComponentCommand,
  GetComponentCommandInput,
  GetComponentCommandOutput,
} from "./commands/GetComponentCommand";
import { GetFormCommand, GetFormCommandInput, GetFormCommandOutput } from "./commands/GetFormCommand";
import { GetMetadataCommand, GetMetadataCommandInput, GetMetadataCommandOutput } from "./commands/GetMetadataCommand";
import { GetThemeCommand, GetThemeCommandInput, GetThemeCommandOutput } from "./commands/GetThemeCommand";
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
  UpdateComponentCommand,
  UpdateComponentCommandInput,
  UpdateComponentCommandOutput,
} from "./commands/UpdateComponentCommand";
import { UpdateFormCommand, UpdateFormCommandInput, UpdateFormCommandOutput } from "./commands/UpdateFormCommand";
import { UpdateThemeCommand, UpdateThemeCommandInput, UpdateThemeCommandOutput } from "./commands/UpdateThemeCommand";

/**
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
export class AmplifyUIBuilder extends AmplifyUIBuilderClient {
  /**
   * <p>Creates a new component for an Amplify app.</p>
   */
  public createComponent(
    args: CreateComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComponentCommandOutput>;
  public createComponent(
    args: CreateComponentCommandInput,
    cb: (err: any, data?: CreateComponentCommandOutput) => void
  ): void;
  public createComponent(
    args: CreateComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComponentCommandOutput) => void
  ): void;
  public createComponent(
    args: CreateComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateComponentCommandOutput) => void),
    cb?: (err: any, data?: CreateComponentCommandOutput) => void
  ): Promise<CreateComponentCommandOutput> | void {
    const command = new CreateComponentCommand(args);
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
   * <p>Creates a new form for an Amplify app.</p>
   */
  public createForm(args: CreateFormCommandInput, options?: __HttpHandlerOptions): Promise<CreateFormCommandOutput>;
  public createForm(args: CreateFormCommandInput, cb: (err: any, data?: CreateFormCommandOutput) => void): void;
  public createForm(
    args: CreateFormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFormCommandOutput) => void
  ): void;
  public createForm(
    args: CreateFormCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFormCommandOutput) => void),
    cb?: (err: any, data?: CreateFormCommandOutput) => void
  ): Promise<CreateFormCommandOutput> | void {
    const command = new CreateFormCommand(args);
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
   * <p>Creates a theme to apply to the components in an Amplify app.</p>
   */
  public createTheme(args: CreateThemeCommandInput, options?: __HttpHandlerOptions): Promise<CreateThemeCommandOutput>;
  public createTheme(args: CreateThemeCommandInput, cb: (err: any, data?: CreateThemeCommandOutput) => void): void;
  public createTheme(
    args: CreateThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThemeCommandOutput) => void
  ): void;
  public createTheme(
    args: CreateThemeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateThemeCommandOutput) => void),
    cb?: (err: any, data?: CreateThemeCommandOutput) => void
  ): Promise<CreateThemeCommandOutput> | void {
    const command = new CreateThemeCommand(args);
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
   * <p>Deletes a component from an Amplify app.</p>
   */
  public deleteComponent(
    args: DeleteComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComponentCommandOutput>;
  public deleteComponent(
    args: DeleteComponentCommandInput,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;
  public deleteComponent(
    args: DeleteComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;
  public deleteComponent(
    args: DeleteComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteComponentCommandOutput) => void),
    cb?: (err: any, data?: DeleteComponentCommandOutput) => void
  ): Promise<DeleteComponentCommandOutput> | void {
    const command = new DeleteComponentCommand(args);
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
   * <p>Deletes a form from an Amplify app.</p>
   */
  public deleteForm(args: DeleteFormCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFormCommandOutput>;
  public deleteForm(args: DeleteFormCommandInput, cb: (err: any, data?: DeleteFormCommandOutput) => void): void;
  public deleteForm(
    args: DeleteFormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFormCommandOutput) => void
  ): void;
  public deleteForm(
    args: DeleteFormCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFormCommandOutput) => void),
    cb?: (err: any, data?: DeleteFormCommandOutput) => void
  ): Promise<DeleteFormCommandOutput> | void {
    const command = new DeleteFormCommand(args);
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
   * <p>Deletes a theme from an Amplify app.</p>
   */
  public deleteTheme(args: DeleteThemeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteThemeCommandOutput>;
  public deleteTheme(args: DeleteThemeCommandInput, cb: (err: any, data?: DeleteThemeCommandOutput) => void): void;
  public deleteTheme(
    args: DeleteThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThemeCommandOutput) => void
  ): void;
  public deleteTheme(
    args: DeleteThemeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteThemeCommandOutput) => void),
    cb?: (err: any, data?: DeleteThemeCommandOutput) => void
  ): Promise<DeleteThemeCommandOutput> | void {
    const command = new DeleteThemeCommand(args);
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
   * <p>Exchanges an access code for a token.</p>
   */
  public exchangeCodeForToken(
    args: ExchangeCodeForTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExchangeCodeForTokenCommandOutput>;
  public exchangeCodeForToken(
    args: ExchangeCodeForTokenCommandInput,
    cb: (err: any, data?: ExchangeCodeForTokenCommandOutput) => void
  ): void;
  public exchangeCodeForToken(
    args: ExchangeCodeForTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExchangeCodeForTokenCommandOutput) => void
  ): void;
  public exchangeCodeForToken(
    args: ExchangeCodeForTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExchangeCodeForTokenCommandOutput) => void),
    cb?: (err: any, data?: ExchangeCodeForTokenCommandOutput) => void
  ): Promise<ExchangeCodeForTokenCommandOutput> | void {
    const command = new ExchangeCodeForTokenCommand(args);
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
   * <p>Exports component configurations to code that is ready to integrate into an Amplify app.</p>
   */
  public exportComponents(
    args: ExportComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportComponentsCommandOutput>;
  public exportComponents(
    args: ExportComponentsCommandInput,
    cb: (err: any, data?: ExportComponentsCommandOutput) => void
  ): void;
  public exportComponents(
    args: ExportComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportComponentsCommandOutput) => void
  ): void;
  public exportComponents(
    args: ExportComponentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportComponentsCommandOutput) => void),
    cb?: (err: any, data?: ExportComponentsCommandOutput) => void
  ): Promise<ExportComponentsCommandOutput> | void {
    const command = new ExportComponentsCommand(args);
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
   * <p>Exports form configurations to code that is ready to integrate into an Amplify app.</p>
   */
  public exportForms(args: ExportFormsCommandInput, options?: __HttpHandlerOptions): Promise<ExportFormsCommandOutput>;
  public exportForms(args: ExportFormsCommandInput, cb: (err: any, data?: ExportFormsCommandOutput) => void): void;
  public exportForms(
    args: ExportFormsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportFormsCommandOutput) => void
  ): void;
  public exportForms(
    args: ExportFormsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportFormsCommandOutput) => void),
    cb?: (err: any, data?: ExportFormsCommandOutput) => void
  ): Promise<ExportFormsCommandOutput> | void {
    const command = new ExportFormsCommand(args);
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
   * <p>Exports theme configurations to code that is ready to integrate into an Amplify app.</p>
   */
  public exportThemes(
    args: ExportThemesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportThemesCommandOutput>;
  public exportThemes(args: ExportThemesCommandInput, cb: (err: any, data?: ExportThemesCommandOutput) => void): void;
  public exportThemes(
    args: ExportThemesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportThemesCommandOutput) => void
  ): void;
  public exportThemes(
    args: ExportThemesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportThemesCommandOutput) => void),
    cb?: (err: any, data?: ExportThemesCommandOutput) => void
  ): Promise<ExportThemesCommandOutput> | void {
    const command = new ExportThemesCommand(args);
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
   * <p>Returns an existing component for an Amplify app.</p>
   */
  public getComponent(
    args: GetComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComponentCommandOutput>;
  public getComponent(args: GetComponentCommandInput, cb: (err: any, data?: GetComponentCommandOutput) => void): void;
  public getComponent(
    args: GetComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComponentCommandOutput) => void
  ): void;
  public getComponent(
    args: GetComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetComponentCommandOutput) => void),
    cb?: (err: any, data?: GetComponentCommandOutput) => void
  ): Promise<GetComponentCommandOutput> | void {
    const command = new GetComponentCommand(args);
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
   * <p>Returns an existing form for an Amplify app.</p>
   */
  public getForm(args: GetFormCommandInput, options?: __HttpHandlerOptions): Promise<GetFormCommandOutput>;
  public getForm(args: GetFormCommandInput, cb: (err: any, data?: GetFormCommandOutput) => void): void;
  public getForm(
    args: GetFormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFormCommandOutput) => void
  ): void;
  public getForm(
    args: GetFormCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFormCommandOutput) => void),
    cb?: (err: any, data?: GetFormCommandOutput) => void
  ): Promise<GetFormCommandOutput> | void {
    const command = new GetFormCommand(args);
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
   * <p>Returns existing metadata for an Amplify app.</p>
   */
  public getMetadata(args: GetMetadataCommandInput, options?: __HttpHandlerOptions): Promise<GetMetadataCommandOutput>;
  public getMetadata(args: GetMetadataCommandInput, cb: (err: any, data?: GetMetadataCommandOutput) => void): void;
  public getMetadata(
    args: GetMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetadataCommandOutput) => void
  ): void;
  public getMetadata(
    args: GetMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMetadataCommandOutput) => void),
    cb?: (err: any, data?: GetMetadataCommandOutput) => void
  ): Promise<GetMetadataCommandOutput> | void {
    const command = new GetMetadataCommand(args);
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
   * <p>Returns an existing theme for an Amplify app.</p>
   */
  public getTheme(args: GetThemeCommandInput, options?: __HttpHandlerOptions): Promise<GetThemeCommandOutput>;
  public getTheme(args: GetThemeCommandInput, cb: (err: any, data?: GetThemeCommandOutput) => void): void;
  public getTheme(
    args: GetThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetThemeCommandOutput) => void
  ): void;
  public getTheme(
    args: GetThemeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetThemeCommandOutput) => void),
    cb?: (err: any, data?: GetThemeCommandOutput) => void
  ): Promise<GetThemeCommandOutput> | void {
    const command = new GetThemeCommand(args);
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
   * <p>Retrieves a list of components for a specified Amplify app and backend
   *       environment.</p>
   */
  public listComponents(
    args: ListComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentsCommandOutput>;
  public listComponents(
    args: ListComponentsCommandInput,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;
  public listComponents(
    args: ListComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;
  public listComponents(
    args: ListComponentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListComponentsCommandOutput) => void),
    cb?: (err: any, data?: ListComponentsCommandOutput) => void
  ): Promise<ListComponentsCommandOutput> | void {
    const command = new ListComponentsCommand(args);
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
   * <p>Retrieves a list of forms for a specified Amplify app and backend environment.</p>
   */
  public listForms(args: ListFormsCommandInput, options?: __HttpHandlerOptions): Promise<ListFormsCommandOutput>;
  public listForms(args: ListFormsCommandInput, cb: (err: any, data?: ListFormsCommandOutput) => void): void;
  public listForms(
    args: ListFormsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFormsCommandOutput) => void
  ): void;
  public listForms(
    args: ListFormsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFormsCommandOutput) => void),
    cb?: (err: any, data?: ListFormsCommandOutput) => void
  ): Promise<ListFormsCommandOutput> | void {
    const command = new ListFormsCommand(args);
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
   * <p>Retrieves a list of themes for a specified Amplify app and backend
   *       environment.</p>
   */
  public listThemes(args: ListThemesCommandInput, options?: __HttpHandlerOptions): Promise<ListThemesCommandOutput>;
  public listThemes(args: ListThemesCommandInput, cb: (err: any, data?: ListThemesCommandOutput) => void): void;
  public listThemes(
    args: ListThemesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThemesCommandOutput) => void
  ): void;
  public listThemes(
    args: ListThemesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListThemesCommandOutput) => void),
    cb?: (err: any, data?: ListThemesCommandOutput) => void
  ): Promise<ListThemesCommandOutput> | void {
    const command = new ListThemesCommand(args);
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
   * <p>Stores the metadata information about a feature on a form or view.</p>
   */
  public putMetadataFlag(
    args: PutMetadataFlagCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMetadataFlagCommandOutput>;
  public putMetadataFlag(
    args: PutMetadataFlagCommandInput,
    cb: (err: any, data?: PutMetadataFlagCommandOutput) => void
  ): void;
  public putMetadataFlag(
    args: PutMetadataFlagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMetadataFlagCommandOutput) => void
  ): void;
  public putMetadataFlag(
    args: PutMetadataFlagCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutMetadataFlagCommandOutput) => void),
    cb?: (err: any, data?: PutMetadataFlagCommandOutput) => void
  ): Promise<PutMetadataFlagCommandOutput> | void {
    const command = new PutMetadataFlagCommand(args);
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
   * <p>Refreshes a previously issued access token that might have expired.</p>
   */
  public refreshToken(
    args: RefreshTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RefreshTokenCommandOutput>;
  public refreshToken(args: RefreshTokenCommandInput, cb: (err: any, data?: RefreshTokenCommandOutput) => void): void;
  public refreshToken(
    args: RefreshTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RefreshTokenCommandOutput) => void
  ): void;
  public refreshToken(
    args: RefreshTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RefreshTokenCommandOutput) => void),
    cb?: (err: any, data?: RefreshTokenCommandOutput) => void
  ): Promise<RefreshTokenCommandOutput> | void {
    const command = new RefreshTokenCommand(args);
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
   * <p>Updates an existing component.</p>
   */
  public updateComponent(
    args: UpdateComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateComponentCommandOutput>;
  public updateComponent(
    args: UpdateComponentCommandInput,
    cb: (err: any, data?: UpdateComponentCommandOutput) => void
  ): void;
  public updateComponent(
    args: UpdateComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateComponentCommandOutput) => void
  ): void;
  public updateComponent(
    args: UpdateComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateComponentCommandOutput) => void),
    cb?: (err: any, data?: UpdateComponentCommandOutput) => void
  ): Promise<UpdateComponentCommandOutput> | void {
    const command = new UpdateComponentCommand(args);
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
   * <p>Updates an existing form.</p>
   */
  public updateForm(args: UpdateFormCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFormCommandOutput>;
  public updateForm(args: UpdateFormCommandInput, cb: (err: any, data?: UpdateFormCommandOutput) => void): void;
  public updateForm(
    args: UpdateFormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFormCommandOutput) => void
  ): void;
  public updateForm(
    args: UpdateFormCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFormCommandOutput) => void),
    cb?: (err: any, data?: UpdateFormCommandOutput) => void
  ): Promise<UpdateFormCommandOutput> | void {
    const command = new UpdateFormCommand(args);
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
   * <p>Updates an existing theme.</p>
   */
  public updateTheme(args: UpdateThemeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateThemeCommandOutput>;
  public updateTheme(args: UpdateThemeCommandInput, cb: (err: any, data?: UpdateThemeCommandOutput) => void): void;
  public updateTheme(
    args: UpdateThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThemeCommandOutput) => void
  ): void;
  public updateTheme(
    args: UpdateThemeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateThemeCommandOutput) => void),
    cb?: (err: any, data?: UpdateThemeCommandOutput) => void
  ): Promise<UpdateThemeCommandOutput> | void {
    const command = new UpdateThemeCommand(args);
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
