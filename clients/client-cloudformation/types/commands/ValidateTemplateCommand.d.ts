import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ValidateTemplateInput, ValidateTemplateOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ValidateTemplateCommandInput = ValidateTemplateInput;
export declare type ValidateTemplateCommandOutput = ValidateTemplateOutput & __MetadataBearer;
export declare class ValidateTemplateCommand extends $Command<ValidateTemplateCommandInput, ValidateTemplateCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: ValidateTemplateCommandInput;
    constructor(input: ValidateTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ValidateTemplateCommandInput, ValidateTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
