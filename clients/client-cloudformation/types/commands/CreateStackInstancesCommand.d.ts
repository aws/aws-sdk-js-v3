import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { CreateStackInstancesInput, CreateStackInstancesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateStackInstancesCommandInput = CreateStackInstancesInput;
export declare type CreateStackInstancesCommandOutput = CreateStackInstancesOutput & __MetadataBearer;
export declare class CreateStackInstancesCommand extends $Command<CreateStackInstancesCommandInput, CreateStackInstancesCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: CreateStackInstancesCommandInput;
    constructor(input: CreateStackInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStackInstancesCommandInput, CreateStackInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
