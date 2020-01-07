import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { GetTemplateInput, GetTemplateOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTemplateCommandInput = GetTemplateInput;
export declare type GetTemplateCommandOutput = GetTemplateOutput & __MetadataBearer;
export declare class GetTemplateCommand extends $Command<GetTemplateCommandInput, GetTemplateCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: GetTemplateCommandInput;
    constructor(input: GetTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTemplateCommandInput, GetTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
