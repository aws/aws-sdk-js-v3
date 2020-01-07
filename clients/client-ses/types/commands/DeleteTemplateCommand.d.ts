import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DeleteTemplateRequest, DeleteTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTemplateCommandInput = DeleteTemplateRequest;
export declare type DeleteTemplateCommandOutput = DeleteTemplateResponse & __MetadataBearer;
export declare class DeleteTemplateCommand extends $Command<DeleteTemplateCommandInput, DeleteTemplateCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteTemplateCommandInput;
    constructor(input: DeleteTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTemplateCommandInput, DeleteTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
