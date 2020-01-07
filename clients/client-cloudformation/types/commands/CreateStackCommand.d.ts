import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { CreateStackInput, CreateStackOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateStackCommandInput = CreateStackInput;
export declare type CreateStackCommandOutput = CreateStackOutput & __MetadataBearer;
export declare class CreateStackCommand extends $Command<CreateStackCommandInput, CreateStackCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: CreateStackCommandInput;
    constructor(input: CreateStackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStackCommandInput, CreateStackCommandOutput>;
    private serialize;
    private deserialize;
}
