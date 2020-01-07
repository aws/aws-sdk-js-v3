import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GenerateTemplateRequest, GenerateTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GenerateTemplateCommandInput = GenerateTemplateRequest;
export declare type GenerateTemplateCommandOutput = GenerateTemplateResponse & __MetadataBearer;
export declare class GenerateTemplateCommand extends $Command<GenerateTemplateCommandInput, GenerateTemplateCommandOutput, SMSClientResolvedConfig> {
    readonly input: GenerateTemplateCommandInput;
    constructor(input: GenerateTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GenerateTemplateCommandInput, GenerateTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
