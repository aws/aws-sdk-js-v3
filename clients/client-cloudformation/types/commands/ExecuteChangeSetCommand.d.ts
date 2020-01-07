import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ExecuteChangeSetInput, ExecuteChangeSetOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ExecuteChangeSetCommandInput = ExecuteChangeSetInput;
export declare type ExecuteChangeSetCommandOutput = ExecuteChangeSetOutput & __MetadataBearer;
export declare class ExecuteChangeSetCommand extends $Command<ExecuteChangeSetCommandInput, ExecuteChangeSetCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: ExecuteChangeSetCommandInput;
    constructor(input: ExecuteChangeSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExecuteChangeSetCommandInput, ExecuteChangeSetCommandOutput>;
    private serialize;
    private deserialize;
}
