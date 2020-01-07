import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { CreateStackSetInput, CreateStackSetOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateStackSetCommandInput = CreateStackSetInput;
export declare type CreateStackSetCommandOutput = CreateStackSetOutput & __MetadataBearer;
export declare class CreateStackSetCommand extends $Command<CreateStackSetCommandInput, CreateStackSetCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: CreateStackSetCommandInput;
    constructor(input: CreateStackSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStackSetCommandInput, CreateStackSetCommandOutput>;
    private serialize;
    private deserialize;
}
