import { TranslateClient } from "./TranslateClient";
import {
  DeleteTerminologyCommand,
  DeleteTerminologyCommandInput,
  DeleteTerminologyCommandOutput,
} from "./commands/DeleteTerminologyCommand";
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
  TranslateTextCommand,
  TranslateTextCommandInput,
  TranslateTextCommandOutput,
} from "./commands/TranslateTextCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 *
 *          <p>Provides translation between one source language and another of the same set of languages.</p>
 *
 */
export class Translate extends TranslateClient {
  /**
   *
   *          <p>A synchronous action that deletes a custom terminology.</p>
   *
   */
  public deleteTerminology(
    args: DeleteTerminologyCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Retrieves a custom terminology.</p>
   *
   */
  public getTerminology(
    args: GetTerminologyCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Creates or updates a custom terminology, depending on whether or not one already exists for the given
   *       terminology name. Importing a terminology with the same name as an existing one will merge the terminologies
   *       based on the chosen merge strategy.  Currently, the only supported merge strategy is OVERWRITE, and so the
   *       imported terminology will overwrite an existing terminology of the same name.</p>
   *          <p>If you import a terminology that overwrites an existing one, the new terminology take up to 10 minutes to fully propagate
   *     and be available for use in a translation due to cache policies with the DataPlane service that performs the translations.</p>
   *
   *
   */
  public importTerminology(
    args: ImportTerminologyCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Provides a list of custom terminologies associated with your account.</p>
   *
   */
  public listTerminologies(
    args: ListTerminologiesCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Translates input text from the source language to the target language. It is not necessary to use English (en) as either the source or the target language but not all language combinations are supported by Amazon Translate. For more
   *       information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/pairs.html">Supported Language Pairs</a>.</p>
   *          <ul>
   *             <li>
   *                <p>Arabic (ar)</p>
   *             </li>
   *             <li>
   *                <p>Chinese (Simplified) (zh)</p>
   *             </li>
   *             <li>
   *                <p>Chinese (Traditional) (zh-TW)</p>
   *             </li>
   *             <li>
   *                <p>Czech (cs)</p>
   *             </li>
   *             <li>
   *                <p>Danish (da)</p>
   *             </li>
   *             <li>
   *                <p>Dutch (nl)</p>
   *             </li>
   *             <li>
   *                <p>English (en)</p>
   *             </li>
   *             <li>
   *                <p>Finnish (fi)</p>
   *             </li>
   *             <li>
   *                <p>French (fr)</p>
   *             </li>
   *             <li>
   *                <p>German (de)</p>
   *             </li>
   *             <li>
   *                <p>Hebrew (he)</p>
   *             </li>
   *             <li>
   *                <p>Indonesian (id)</p>
   *             </li>
   *             <li>
   *                <p>Italian (it)</p>
   *             </li>
   *             <li>
   *                <p>Japanese (ja)</p>
   *             </li>
   *             <li>
   *                <p>Korean (ko)</p>
   *             </li>
   *             <li>
   *                <p>Polish (pl)</p>
   *             </li>
   *             <li>
   *                <p>Portuguese (pt)</p>
   *             </li>
   *             <li>
   *                <p>Russian (ru)</p>
   *             </li>
   *             <li>
   *                <p>Spanish (es)</p>
   *             </li>
   *             <li>
   *                <p>Swedish (sv)</p>
   *             </li>
   *             <li>
   *                <p>Turkish (tr)</p>
   *             </li>
   *          </ul>
   *          <p>To have Amazon Translate determine the source language of your text, you can specify
   *         <code>auto</code> in the <code>SourceLanguageCode</code> field. If you specify
   *         <code>auto</code>, Amazon Translate will call Amazon Comprehend to determine the source
   *       language.</p>
   *
   */
  public translateText(
    args: TranslateTextCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

}
