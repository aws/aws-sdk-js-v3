import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { UpdateTemplateRequest, UpdateTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTemplateCommandInput = UpdateTemplateRequest;
export declare type UpdateTemplateCommandOutput = UpdateTemplateResponse & __MetadataBearer;
export declare class UpdateTemplateCommand extends $Command<UpdateTemplateCommandInput, UpdateTemplateCommandOutput, SESClientResolvedConfig> {
    readonly input: UpdateTemplateCommandInput;
    constructor(input: UpdateTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTemplateCommandInput, UpdateTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
