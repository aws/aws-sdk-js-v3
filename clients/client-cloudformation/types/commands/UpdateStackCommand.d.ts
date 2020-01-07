import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { UpdateStackInput, UpdateStackOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateStackCommandInput = UpdateStackInput;
export declare type UpdateStackCommandOutput = UpdateStackOutput & __MetadataBearer;
export declare class UpdateStackCommand extends $Command<UpdateStackCommandInput, UpdateStackCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: UpdateStackCommandInput;
    constructor(input: UpdateStackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateStackCommandInput, UpdateStackCommandOutput>;
    private serialize;
    private deserialize;
}
