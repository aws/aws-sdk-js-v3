import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { UpdateStackInstancesInput, UpdateStackInstancesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateStackInstancesCommandInput = UpdateStackInstancesInput;
export declare type UpdateStackInstancesCommandOutput = UpdateStackInstancesOutput & __MetadataBearer;
export declare class UpdateStackInstancesCommand extends $Command<UpdateStackInstancesCommandInput, UpdateStackInstancesCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: UpdateStackInstancesCommandInput;
    constructor(input: UpdateStackInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateStackInstancesCommandInput, UpdateStackInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
