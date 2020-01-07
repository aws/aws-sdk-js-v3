import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DeleteStackInstancesInput, DeleteStackInstancesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteStackInstancesCommandInput = DeleteStackInstancesInput;
export declare type DeleteStackInstancesCommandOutput = DeleteStackInstancesOutput & __MetadataBearer;
export declare class DeleteStackInstancesCommand extends $Command<DeleteStackInstancesCommandInput, DeleteStackInstancesCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DeleteStackInstancesCommandInput;
    constructor(input: DeleteStackInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStackInstancesCommandInput, DeleteStackInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
