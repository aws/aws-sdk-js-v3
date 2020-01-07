import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { TranslateTextRequest, TranslateTextResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TranslateTextCommandInput = TranslateTextRequest;
export declare type TranslateTextCommandOutput = TranslateTextResponse & __MetadataBearer;
export declare class TranslateTextCommand extends $Command<TranslateTextCommandInput, TranslateTextCommandOutput, TranslateClientResolvedConfig> {
    readonly input: TranslateTextCommandInput;
    constructor(input: TranslateTextCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TranslateTextCommandInput, TranslateTextCommandOutput>;
    private serialize;
    private deserialize;
}
