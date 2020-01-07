import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { GetTemplateRequest, GetTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTemplateCommandInput = GetTemplateRequest;
export declare type GetTemplateCommandOutput = GetTemplateResponse & __MetadataBearer;
export declare class GetTemplateCommand extends $Command<GetTemplateCommandInput, GetTemplateCommandOutput, SESClientResolvedConfig> {
    readonly input: GetTemplateCommandInput;
    constructor(input: GetTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTemplateCommandInput, GetTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
