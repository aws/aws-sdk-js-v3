import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { CreateChangeSetInput, CreateChangeSetOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateChangeSetCommandInput = CreateChangeSetInput;
export declare type CreateChangeSetCommandOutput = CreateChangeSetOutput & __MetadataBearer;
export declare class CreateChangeSetCommand extends $Command<CreateChangeSetCommandInput, CreateChangeSetCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: CreateChangeSetCommandInput;
    constructor(input: CreateChangeSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateChangeSetCommandInput, CreateChangeSetCommandOutput>;
    private serialize;
    private deserialize;
}
