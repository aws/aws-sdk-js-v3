import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { StopStackSetOperationInput, StopStackSetOperationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopStackSetOperationCommandInput = StopStackSetOperationInput;
export declare type StopStackSetOperationCommandOutput = StopStackSetOperationOutput & __MetadataBearer;
export declare class StopStackSetOperationCommand extends $Command<StopStackSetOperationCommandInput, StopStackSetOperationCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: StopStackSetOperationCommandInput;
    constructor(input: StopStackSetOperationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopStackSetOperationCommandInput, StopStackSetOperationCommandOutput>;
    private serialize;
    private deserialize;
}
