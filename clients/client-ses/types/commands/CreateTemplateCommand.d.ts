import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { CreateTemplateRequest, CreateTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTemplateCommandInput = CreateTemplateRequest;
export declare type CreateTemplateCommandOutput = CreateTemplateResponse & __MetadataBearer;
export declare class CreateTemplateCommand extends $Command<CreateTemplateCommandInput, CreateTemplateCommandOutput, SESClientResolvedConfig> {
    readonly input: CreateTemplateCommandInput;
    constructor(input: CreateTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTemplateCommandInput, CreateTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
